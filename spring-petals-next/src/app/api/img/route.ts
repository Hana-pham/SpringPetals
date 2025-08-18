import { NextResponse } from "next/server";
export async function GET(req: Request) {
  const url = new URL(req.url).searchParams.get("url");
  if (!url) return new NextResponse("Missing url", { status: 400 });

  const r = await fetch(url, { next: { revalidate: 21600 } }); // 6h
  const headers = new Headers(r.headers);
  headers.set("Cache-Control", "s-maxage=21600, stale-while-revalidate=86400");
  return new NextResponse(r.body, { headers });
}
