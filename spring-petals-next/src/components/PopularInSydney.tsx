'use client';

import Link from 'next/link';

const locations = [
  {
    id: 'newtown',
    suburb: 'Newtown',
    description: 'Eclectic & artistic',
    popular: 'Wildflower mixes',
    florists: '12 florists',
    bgColor: '#FFFBF5',
    accentColor: '#E8C89B',
  },
  {
    id: 'bondi',
    suburb: 'Bondi',
    description: 'Fresh & beachy',
    popular: 'Bright tropicals',
    florists: '8 florists',
    bgColor: '#F7F9FB',
    accentColor: '#B5C4D6',
  },
  {
    id: 'surry-hills',
    suburb: 'Surry Hills',
    description: 'Chic & modern',
    popular: 'Minimalist styles',
    florists: '15 florists',
    bgColor: '#FFF9FA',
    accentColor: '#E4B5B6',
  },
  {
    id: 'paddington',
    suburb: 'Paddington',
    description: 'Classic & elegant',
    popular: 'Premium roses',
    florists: '10 florists',
    bgColor: '#F9F7FB',
    accentColor: '#C4B5D6',
  },
  {
    id: 'cbd',
    suburb: 'Sydney CBD',
    description: 'Quick & convenient',
    popular: 'Express delivery',
    florists: '20 florists',
    bgColor: '#F9FBF7',
    accentColor: '#B5D6A8',
  },
  {
    id: 'inner-west',
    suburb: 'Inner West',
    description: 'Creative & diverse',
    popular: 'Unique arrangements',
    florists: '18 florists',
    bgColor: '#FFFDF7',
    accentColor: '#E8D8A8',
  },
];

export default function PopularInSydney() {
  return (
    <section className="carousel-section">
      <div className="carousel-section-header">
        <h2 className="carousel-section-title">Popular</h2>
      </div>

      <div className="carousel-container">
        <div className="carousel-scroll">
          {locations.map((location) => (
            <Link
              key={location.id}
              href={`/location/${location.id}`}
              className="carousel-card location-card"
              style={{
                background: `linear-gradient(135deg, ${location.bgColor} 0%, ${location.accentColor}20 100%)`,
              }}
            >
              <div className="location-badge" style={{ background: location.accentColor }}>
                {location.florists}
              </div>
              <div className="carousel-card-content">
                <h3 className="carousel-card-title">{location.suburb}</h3>
                <p className="carousel-card-subtitle">{location.description}</p>
                <p className="carousel-card-meta">
                  <span className="popular-item">♥ {location.popular}</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
