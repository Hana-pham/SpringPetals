'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { calculateDistance, estimateDeliveryTime } from '@/utils/distance';

interface Florist {
  id: string;
  name: string;
  suburb: string;
  distance: string;
  rating: string;
  deliveryTime: string;
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

export default function NearYou() {
  const [florists, setFlorists] = useState<Florist[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNearbyFlorists = async () => {
      try {
        // Get user's location from geolocation API
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude } = position.coords;

              // Fetch nearby florists from our API
              const response = await fetch(
                `/api/florists/nearby?lat=${latitude}&lng=${longitude}&radius=10000`
              );

              if (!response.ok) {
                throw new Error('Failed to fetch florists');
              }

              const data = await response.json();

              // Transform API data to our format
              const transformedFlorists = data.florists.slice(0, 6).map((florist: any, index: number) => {
                const distance = calculateDistance(
                  latitude,
                  longitude,
                  florist.location.lat,
                  florist.location.lng
                );

                return {
                  id: florist.id,
                  name: florist.name,
                  suburb: florist.suburb,
                  distance: `${distance} km`,
                  rating: florist.rating.toFixed(1),
                  deliveryTime: estimateDeliveryTime(distance),
                  ...colors[index % colors.length],
                };
              });

              setFlorists(transformedFlorists);
              setLoading(false);
            },
            (error) => {
              console.error('Geolocation error:', error);
              // Fallback to Sydney CBD coordinates
              fetchFloristsByCoords(-33.8688, 151.2093);
            }
          );
        } else {
          // Fallback to Sydney CBD coordinates
          fetchFloristsByCoords(-33.8688, 151.2093);
        }
      } catch (err: any) {
        console.error('Error fetching florists:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    const fetchFloristsByCoords = async (lat: number, lng: number) => {
      try {
        const response = await fetch(
          `/api/florists/nearby?lat=${lat}&lng=${lng}&radius=10000`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch florists');
        }

        const data = await response.json();

        const transformedFlorists = data.florists.slice(0, 6).map((florist: any, index: number) => {
          const distance = calculateDistance(
            lat,
            lng,
            florist.location.lat,
            florist.location.lng
          );

          return {
            id: florist.id,
            name: florist.name,
            suburb: florist.suburb,
            distance: `${distance} km`,
            rating: florist.rating.toFixed(1),
            deliveryTime: estimateDeliveryTime(distance),
            ...colors[index % colors.length],
          };
        });

        setFlorists(transformedFlorists);
        setLoading(false);
      } catch (err: any) {
        console.error('Error fetching florists:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchNearbyFlorists();
  }, []);

  if (loading) {
    return (
      <section className="carousel-section">
        <div className="carousel-section-header">
          <h2 className="carousel-section-title">Near you</h2>
        </div>
        <div className="carousel-container">
          <p style={{ padding: '20px', color: '#6B6B6B' }}>Finding florists near you...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="carousel-section">
        <div className="carousel-section-header">
          <h2 className="carousel-section-title">Near you</h2>
        </div>
        <div className="carousel-container">
          <p style={{ padding: '20px', color: '#6B6B6B' }}>
            Please add your Google API key to .env.local to see nearby florists
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="carousel-section">
      <div className="carousel-section-header">
        <h2 className="carousel-section-title">Near you</h2>
      </div>

      <div className="carousel-container">
        <div className="carousel-scroll">
          {florists.map((florist) => (
            <Link
              key={florist.id}
              href={`/florist/${florist.id}`}
              className="carousel-card"
              style={{
                background: `linear-gradient(135deg, ${florist.bgColor} 0%, ${florist.accentColor}15 100%)`,
              }}
            >
              <div className="carousel-card-content">
                <h3 className="carousel-card-title">{florist.name}</h3>
                <p className="carousel-card-subtitle">{florist.suburb} • {florist.distance}</p>
                <div className="florist-meta">
                  <span className="florist-rating">⭐ {florist.rating}</span>
                  <span className="florist-time">🕐 {florist.deliveryTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
