// src/app/api/seasonal/route.ts
import { NextResponse } from "next/server";

/**
 * GET /api/seasonal
 * Query params:
 *   city?=Sydney
 *   style?=professional aesthetic bouquet soft lighting
 *   color?=pink|red|blue|...  (mapped to Unsplash tokens)
 *   limit?=6                  (1..12)
 *
 * Env (.env.local):
 *   GOOGLE_API_KEY=...
 *   GOOGLE_CSE_ID=...
 *   UNSPLASH_ACCESS_KEY=...
 *   IMAGE_QUERY_MODIFIERS=professional aesthetic bouquet   (optional)
 */

// ───────────────────────────── Env / Config ────────────────────────────────

const GOOGLE_KEY = process.env.GOOGLE_API_KEY;
const CSE_ID = process.env.GOOGLE_CSE_ID;
const UNSPLASH = (process.env.UNSPLASH_ACCESS_KEY || "").trim();
const DEFAULT_MODIFIERS =
  (process.env.IMAGE_QUERY_MODIFIERS || "professional aesthetic bouquet").trim();

// Unsplash accepted color tokens
const UNSPLASH_COLORS = new Set([
  "black_and_white",
  "black",
  "white",
  "yellow",
  "orange",
  "red",
  "purple",
  "magenta",
  "green",
  "teal",
  "blue",
]);

// friendlier → Unsplash token
const COLOR_ALIAS: Record<string, string> = {
  pink: "magenta",
};

// whitelist of likely flower names (for CSE extraction)
const KNOWN_FLOWERS = [
  "Tulip","Tulips","Ranunculus","Sunflower","Sunflowers","Protea","Banksia","Wattle","Waratah",
  "Peony","Peonies","Camellia","Jonquil","Jonquils","Anemone","Stock","Sweet Pea","Freesia",
  "Delphinium","Hydrangea","Dahlia","Lisianthus","Iris","Zinnia","Cosmos","Garden Rose","Roses",
  "Lily","Lilies"
];

// ───────────────────────────── Route Handler ───────────────────────────────

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const city = (searchParams.get("city") || "Sydney").trim();
  const style = (searchParams.get("style") || "").trim();
  const colorParam = (searchParams.get("color") || "").trim().toLowerCase();
  const limit = clampInt(Number(searchParams.get("limit") || 6), 1, 12);

  const { monthIndex, monthName } = currentMonthSydney();

  // 1) Seasonal terms via Google CSE → fallback to curated map
  let terms: string[] = [];
  if (GOOGLE_KEY && CSE_ID) {
    try {
      const queries = [
        `seasonal flowers ${monthName} ${city}`,
        `what flowers are in season ${monthName} ${city}`,
      ];
      const pages = await Promise.all(queries.map(q => fetchCSE(q)));
      const texts = pages.flatMap(p => (p?.items ?? []).map((i: any) => `${i.title}. ${i.snippet}`));
      terms = extractTerms(texts, 12);
    } catch {
      terms = [];
    }
  }
  if (terms.length === 0) {
    terms = fallbackSeasonalFlowers(monthIndex);
  }

  // Dedup → limit
  const selected = Array.from(new Set(terms.map(normalize))).filter(Boolean).slice(0, limit);

  // normalize color for Unsplash
  const color = normalizeColor(colorParam);

  // 2) Unsplash images (unique per response) with safe fallback data-URL
  const usedPhotoIds = new Set<string>();
  const items = await Promise.all(
    selected.map(async (name) => {
      const pick = await unsplashStyledUnique(name, style, color, usedPhotoIds);
      const imageUrl = pick.url || placeholderDataUrl(name);
      return {
        name,
        imageUrl,
        credit: pick.credit || "Unsplash",
        queryUsed: pick.queryUsed,
      };
    })
  );

  return NextResponse.json(
    {
      city,
      month: monthName,
      updatedAt: new Date().toISOString(),
      items,
    },
    {
      headers: {
        "Cache-Control": "s-maxage=21600, stale-while-revalidate=86400", // 6h edge cache
      },
    }
  );
}

// ───────────────────────────── Google CSE ──────────────────────────────────

async function fetchCSE(q: string) {
  const url = new URL("https://www.googleapis.com/customsearch/v1");
  url.searchParams.set("key", GOOGLE_KEY!);
  url.searchParams.set("cx", CSE_ID!);
  url.searchParams.set("q", q);
  url.searchParams.set("num", "10");
  url.searchParams.set("lr", "lang_en");
  const res = await fetch(url.toString(), { next: { revalidate: 21600 } });
  return res.json();
}

function extractTerms(texts: string[], max: number) {
  const bag = new Map<string, number>();
  const knownLower = KNOWN_FLOWERS.map(k => k.toLowerCase());
  for (const t of texts) {
    const clean = (t || "").replace(/[^\p{L}\s\-']/gu, " ");
    const words = clean.split(/\s+/);
    for (const w of words) {
      const i = knownLower.indexOf(w.toLowerCase());
      if (i >= 0) {
        const norm = normalize(KNOWN_FLOWERS[i]);
        bag.set(norm, (bag.get(norm) ?? 0) + 1);
      }
    }
  }
  return Array.from(bag.entries())
    .sort((a,b) => b[1]-a[1])
    .map(([name]) => name)
    .slice(0, max);
}

// ───────────────────────────── Unsplash (unique) ───────────────────────────

type UnsplashPick = { url: string; credit: string; id: string; queryUsed: string };

// Try a styled query first, then a simple fallback, avoiding duplicate photo IDs.
async function unsplashStyledUnique(
  term: string,
  style: string | undefined,
  color: string | undefined,
  used: Set<string>
): Promise<UnsplashPick> {
  const modifiers = (style && style.trim()) ? style.trim() : DEFAULT_MODIFIERS;
  const qPrimary  = `${term} ${modifiers}`.trim();
  const qFallback = `${term} bouquet`.trim();

  const first = await unsplashSearchUnique(qPrimary, color, used);
  if (first.url) return { ...first, queryUsed: qPrimary };

  const second = await unsplashSearchUnique(qFallback, color, used);
  return { ...second, queryUsed: qFallback };
}

// Fetch multiple results & choose the first photo whose ID isn't already used.
// If page 1 has no unique shot, try page 2.
async function unsplashSearchUnique(
  query: string,
  color: string | undefined,
  used: Set<string>,
  perPage = 8,
  pagesToTry = 2
): Promise<Omit<UnsplashPick, "queryUsed">> {
  if (!UNSPLASH) return { url: "", credit: "", id: "" };

  for (let page = 1; page <= pagesToTry; page++) {
    try {
      const url = new URL("https://api.unsplash.com/search/photos");
      url.searchParams.set("query", query);
      url.searchParams.set("per_page", String(perPage));
      url.searchParams.set("page", String(page));
      url.searchParams.set("orientation", "landscape");
      url.searchParams.set("content_filter", "high");
      url.searchParams.set("order_by", "relevant");
      if (color && UNSPLASH_COLORS.has(color)) url.searchParams.set("color", color);

      const res = await fetch(url, {
        headers: { Authorization: `Client-ID ${UNSPLASH}` },
        next: { revalidate: 21600 },
      });
      const data: any = await res.json();
      const results: any[] = data?.results ?? [];

      for (const photo of results) {
        const id: string | undefined = photo?.id;
        if (!id || used.has(id)) continue;         // skip duplicates
        const photoUrl: string = photo?.urls?.regular || photo?.urls?.small || "";
        if (!photoUrl) continue;                   // ensure a real image URL
        used.add(id);
        return {
          url: photoUrl,
          credit: photo?.user?.name || "Unsplash",
          id,
        };
      }
    } catch {
      // ignore and try next page
    }
  }

  // Nothing usable found
  return { url: "", credit: "", id: "" };
}

// ───────────────────────────── Helpers ─────────────────────────────────────

function currentMonthSydney() {
  const tz = "Australia/Sydney";
  const now = new Date();
  const monthIndex =
    Number(new Intl.DateTimeFormat("en-AU", { timeZone: tz, month: "numeric" }).format(now)) - 1;
  const monthName =
    new Intl.DateTimeFormat("en-AU", { timeZone: tz, month: "long" }).format(now);
  return { monthIndex, monthName };
}

function normalize(s: string) {
  return s.replace(/\s+/g, " ").trim();
}

function clampInt(n: number, min: number, max: number) {
  if (!Number.isFinite(n)) return min;
  return Math.max(min, Math.min(max, Math.trunc(n)));
}

function normalizeColor(c: string) {
  if (!c) return "";
  const mapped = COLOR_ALIAS[c] || c;
  return UNSPLASH_COLORS.has(mapped) ? mapped : "";
}

/** SVG data-URL fallback so we never return null/empty and don’t require a local file */
function placeholderDataUrl(label: string) {
  const text = encodeURIComponent(label);
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='900'>
  <defs>
    <linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>
      <stop stop-color='#fde5ef' offset='0'/>
      <stop stop-color='#f9d2e3' offset='1'/>
    </linearGradient>
  </defs>
  <rect width='100%' height='100%' fill='url(#g)'/>
  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle'
    font-family='sans-serif' font-size='48' fill='#a43b5e'>${text}</text>
</svg>`;
  return `data:image/svg+xml;charset=utf-8,${svg}`;
}

// Local AU/NSW fallback by month (keeps section working w/out Google keys)
function fallbackSeasonalFlowers(month: number) {
  const map: Record<number, string[]> = {
    0: ["Dahlia","Hydrangea","Sunflower","Gladiolus","Lisianthus","Roses"],
    1: ["Dahlia","Hydrangea","Sunflower","Gladiolus","Lisianthus","Roses"],
    2: ["Dahlia","Hydrangea","Cosmos","Sunflower","Zinnia","Roses"],
    3: ["Camellia","Protea","Banksia","Waratah","Anemone","Snapdragon"],
    4: ["Camellia","Protea","Banksia","Anemone","Ranunculus","Stock"],
    5: ["Camellia","Protea","Banksia","Ranunculus","Tulips","Sweet Pea"],
    6: ["Tulips","Ranunculus","Natives (Protea, Banksia)","Stock","Anemone","Sweet Pea"],
    7: ["Tulips","Ranunculus","Wattle","Natives (Protea, Banksia)","Jonquils","Camellia"],
    8: ["Tulips","Ranunculus","Wattle","Natives (Protea, Banksia)","Jonquils","Camellia"],
    9: ["Waratah","Peony (early imports)","Freesia","Snapdragon","Iris","Anemone"],
    10:["Peony","Sweet Pea","Delphinium","Freesia","Garden Rose","Snapdragon"],
    11:["Peony","Delphinium","Garden Rose","Lily","Lisianthus","Hyacinth"],
  };
  return map[month] ?? ["Roses","Tulips","Sunflowers","Ranunculus","Protea","Camellia"];
}
