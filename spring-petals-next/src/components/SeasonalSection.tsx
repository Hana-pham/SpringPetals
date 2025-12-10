'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

type SeasonalItem = {
  name: string;
  imageUrl: string;     // from /api/seasonal
  credit?: string;
  queryUsed?: string;
};
type SeasonalResponse = {
  city: string;
  month: string;
  updatedAt: string;
  items: SeasonalItem[];
};

export default function SeasonalSection() {
  const [data, setData] = useState<SeasonalResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [imgLoaded, setImgLoaded] = useState<Record<string, boolean>>({}); // per-card

  async function load() {
    setLoading(true);
    setImgLoaded({}); // reset per refresh
    const r = await fetch(`/api/seasonal?city=Sydney`, { cache: 'no-store' });
    const json: SeasonalResponse = await r.json();
    setData(json);
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  // helper to mark one card as loaded/failed
  function markLoaded(key: string, ok: boolean) {
    setImgLoaded(prev => ({ ...prev, [key]: ok }));
  }

  return (
    <section className="seasonal-section" aria-labelledby="seasonal-title">
      <div className="seasonal-header">
        <div>
          <h2 id="seasonal-title">Find the perfect match for your moment</h2>
          <p className="seasonal-sub">
            Beautiful seasonal blooms in Sydney • Updated{' '}
            {data ? new Date(data.updatedAt).toLocaleDateString() : ''}
          </p>
        </div>
        <div className="seasonal-controls">
          <button onClick={load} className="seasonal-refresh" aria-label="Refresh seasonal data">
            Refresh
          </button>
        </div>
      </div>

      {/* SKELETON while the API call is loading */}
      {loading && (
        <div className="seasonal-grid">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="seasonal-card">
              <div className="img-skeleton" aria-hidden />
            </div>
          ))}
        </div>
      )}

      {/* GRID once API returns — each card has its own shimmer until the image loads */}
      {!loading && data && (
        <div className="seasonal-grid">
          {data.items.map((it, i) => {
            const key = `${it.name}-${i}`;
            const isLoaded = imgLoaded[key];

            return (
              <article key={key} className="seasonal-card">
                <div className="seasonal-media">
                  {/* shimmer shown until onLoadingComplete fires */}
                  {!isLoaded && <div className="img-skeleton" aria-hidden />}

                  <Image
                    src={it.imageUrl}
                    alt={it.name}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                    className={`media-img ${isLoaded ? 'is-loaded' : ''}`}
                    onLoadingComplete={(img) => {
                      // Treat as loaded only if the browser marked it complete and has natural size
                      const ok = !!img?.naturalWidth;
                      markLoaded(key, ok);
                    }}
                    onError={() => markLoaded(key, false)} // keep skeleton on error
                    // Optional: avoid layout shift for slow networks
                    priority={i < 2}
                  />
                </div>

                <div className="seasonal-overlay">
                  <h3 className="seasonal-title">{it.name}</h3>
                  
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
