import { NextResponse } from "next/server";

export async function GET() {
  const key = process.env.UNSPLASH_ACCESS_KEY;
  if (!key) {
    return NextResponse.json({ ok: false, reason: "UNSPLASH_ACCESS_KEY missing" }, { status: 500 });
  }
  try {
    const r = await fetch(
      "https://api.unsplash.com/search/photos?query=flowers&per_page=1",
      { headers: { Authorization: `Client-ID ${key}`, "Accept-Version": "v1" } }
    );
    const data = await r.json();
    return NextResponse.json({
      ok: r.ok,
      status: r.status,
      rateRemaining: r.headers.get("x-ratelimit-remaining"),
      sampleUrl: data?.results?.[0]?.urls?.regular ?? null,
    }, { status: r.ok ? 200 : 500 });
  } catch (e: any) {
    return NextResponse.json({ ok: false, reason: String(e) }, { status: 500 });
  }
}
