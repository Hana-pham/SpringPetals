'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface Florist {
  id: string;
  name: string;
  rating: string;
  reviews: string;
  suburb: string;
  bgColor: string;
  accentColor: string;
}

const colors = [
  { bgColor: '#FFF9FA', accentColor: '#E4B5B6' },
  { bgColor: '#F9FBF7', accentColor: '#B5D6A8' },
  { bgColor: '#F7F9FB', accentColor: '#B5C4D6' },
  { bgColor: '#FFFBF5', accentColor: '#E8C89B' },
  { bgColor: '#F9F7FB', accentColor: '#C4B5D6' },
  { bgColor: '#FFF9F5', accentColor: '#D9A5A6' },
];

export default function TopRated() {
  const [florists, setFlorists] = useState<Florist[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopRatedFlorists = async () => {
      try {
        // Use Sydney CBD coordinates for top rated search
        const response = await fetch(
          `/api/florists/nearby?lat=-33.8688&lng=151.2093&radius=15000`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch florists');
        }

        const data = await response.json();

        // Sort by rating and get top 6
        const sortedFlorists = data.florists
          .filter((f: any) => f.rating >= 4.5 && f.totalRatings >= 10)
          .sort((a: any, b: any) => {
            if (b.rating !== a.rating) return b.rating - a.rating;
            return b.totalRatings - a.totalRatings;
          })
          .slice(0, 6);

        const transformedFlorists = sortedFlorists.map((florist: any, index: number) => ({
          id: florist.id,
          name: florist.name,
          rating: florist.rating.toFixed(1),
          reviews: `${florist.totalRatings}+`,
          suburb: florist.suburb,
          ...colors[index % colors.length],
        }));

        setFlorists(transformedFlorists);
        setLoading(false);
      } catch (err: any) {
        console.error('Error fetching top rated florists:', err);
        setLoading(false);
      }
    };

    fetchTopRatedFlorists();
  }, []);

  if (loading) {
    return (
      <section className="carousel-section">
        <div className="carousel-section-header">
          <h2 className="carousel-section-title">Top rated</h2>
        </div>
        <div className="carousel-container">
          <p style={{ padding: '20px', color: '#6B6B6B' }}>Loading top rated florists...</p>
        </div>
      </section>
    );
  }

  if (florists.length === 0) {
    return null;
  }

  return (
    <section className="carousel-section">
      <div className="carousel-section-header">
        <h2 className="carousel-section-title">Top rated</h2>
      </div>

      <div className="carousel-container">
        <div className="carousel-scroll">
          {florists.map((florist) => (
            <Link key={florist.id} href={`/florist/${florist.id}`} className="carousel-card"
              style={{ background: `linear-gradient(135deg, ${florist.bgColor} 0%, ${florist.accentColor}15 100%)` }}>
              <div className="carousel-card-badge" style={{ background: florist.accentColor }}>⭐ {florist.rating}</div>
              <div className="carousel-card-content">
                <h3 className="carousel-card-title">{florist.name}</h3>
                <p className="carousel-card-subtitle">{florist.suburb}</p>
                <p className="carousel-card-meta">{florist.reviews} reviews</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
