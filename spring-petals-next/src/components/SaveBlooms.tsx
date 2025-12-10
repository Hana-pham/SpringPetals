'use client';

import Link from 'next/link';

const rescueDeals = [
  {
    id: 'end-of-day',
    title: 'End-of-day deals',
    discount: 'Up to 40% off',
    urgency: 'Closing at 6pm',
    bgColor: '#F9FBF7',
    accentColor: '#B5D6A8',
    icon: '♻',
  },
  {
    id: 'flash-deals',
    title: 'Flash rescue',
    discount: '30-50% off',
    urgency: 'Only 3 hours left',
    bgColor: '#FFFBF5',
    accentColor: '#E8C89B',
    icon: '⚡',
  },
  {
    id: 'unsold-beauties',
    title: 'Unsold beauties',
    discount: '40% off',
    urgency: 'Must go today',
    bgColor: '#FFF9FA',
    accentColor: '#E4B5B6',
    icon: '✿',
  },
  {
    id: 'rescue-pickup',
    title: 'Rescue pickup',
    discount: '50% off',
    urgency: 'Available 3-6pm',
    bgColor: '#F9F7FB',
    accentColor: '#C4B5D6',
    icon: '🌸',
  },
  {
    id: 'florist-surplus',
    title: 'Florist surplus',
    discount: '35% off',
    urgency: 'Limited stock',
    bgColor: '#F7F9FB',
    accentColor: '#B5C4D6',
    icon: '💐',
  },
  {
    id: 'same-day-save',
    title: 'Same-day savers',
    discount: '40% off',
    urgency: 'Today only',
    bgColor: '#FFFDF7',
    accentColor: '#E8D8A8',
    icon: '⭐',
  },
];

export default function SaveBlooms() {
  return (
    <section className="carousel-section save-blooms-section">
      <div className="carousel-section-header">
        <div className="mission-badge">
          <span className="mission-icon">♻</span>
          <span className="mission-text">Save 40% • Reduce waste</span>
        </div>
        <h2 className="carousel-section-title">Rescue deals</h2>
      </div>

      <div className="carousel-container">
        <div className="carousel-scroll">
          {rescueDeals.map((deal) => (
            <Link
              key={deal.id}
              href={`/rescue/${deal.id}`}
              className="carousel-card rescue-card"
              style={{
                background: `linear-gradient(135deg, ${deal.bgColor} 0%, ${deal.accentColor}15 100%)`,
              }}
            >
              <div className="rescue-discount" style={{ background: deal.accentColor }}>
                {deal.discount}
              </div>
              <div className="carousel-card-content">
                <div className="rescue-icon">{deal.icon}</div>
                <h3 className="carousel-card-title">{deal.title}</h3>
                <p className="carousel-card-meta rescue-urgency">{deal.urgency}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
