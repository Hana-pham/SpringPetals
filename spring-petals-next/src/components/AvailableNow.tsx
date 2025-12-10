'use client';

import Link from 'next/link';

const timeSlots = [
  {
    id: 'same-day-newtown',
    area: 'Newtown',
    timeframe: '3-6pm today',
    title: 'Same-day delivery',
    badge: 'Fast',
    bgColor: '#F9FBF7',
    accentColor: '#B5D6A8',
  },
  {
    id: 'express-bondi',
    area: 'Bondi',
    timeframe: 'Within 2 hours',
    title: 'Express delivery',
    badge: 'Express',
    bgColor: '#FFFBF5',
    accentColor: '#E8C89B',
  },
  {
    id: 'tonight-deals',
    area: 'All Sydney',
    timeframe: '6-9pm • Save 40%',
    title: "Tonight's deals",
    badge: 'Deal',
    bgColor: '#FFF9FA',
    accentColor: '#E4B5B6',
  },
  {
    id: 'last-minute',
    area: 'Inner West',
    timeframe: 'Ready in 1 hour',
    title: 'Last-minute gifts',
    badge: 'Urgent',
    bgColor: '#FFFDF7',
    accentColor: '#E8D8A8',
  },
  {
    id: 'afternoon-surry',
    area: 'Surry Hills',
    timeframe: 'Today 2-5pm',
    title: 'Afternoon delivery',
    badge: 'Today',
    bgColor: '#F7F9FB',
    accentColor: '#B5C4D6',
  },
  {
    id: 'evening-paddington',
    area: 'Paddington',
    timeframe: 'Tonight 7-9pm',
    title: 'Evening delivery',
    badge: 'Tonight',
    bgColor: '#F9F7FB',
    accentColor: '#C4B5D6',
  },
];

export default function AvailableNow() {
  return (
    <section className="carousel-section">
      <div className="carousel-section-header">
        <h2 className="carousel-section-title">Available now</h2>
      </div>

      <div className="carousel-container">
        <div className="carousel-scroll">
          {timeSlots.map((slot) => (
            <Link
              key={slot.id}
              href={`/available/${slot.id}`}
              className="carousel-card"
              style={{
                background: `linear-gradient(135deg, ${slot.bgColor} 0%, ${slot.accentColor}20 100%)`,
              }}
            >
              <div className="carousel-card-badge" style={{ background: slot.accentColor }}>
                {slot.badge}
              </div>
              <div className="carousel-card-content">
                <h3 className="carousel-card-title">{slot.title}</h3>
                <p className="carousel-card-subtitle">{slot.area}</p>
                <p className="carousel-card-meta">{slot.timeframe}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
