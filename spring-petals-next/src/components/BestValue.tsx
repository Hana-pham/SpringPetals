'use client';

import Link from 'next/link';

const bestValue = [
  { id: '1', name: 'Budget Blooms', price: 'From $35', deal: 'Save 30%', suburb: 'Redfern', bgColor: '#F9FBF7', accentColor: '#B5D6A8' },
  { id: '2', name: 'Value Petals', price: 'From $40', deal: 'Save 25%', suburb: 'Chippendale', bgColor: '#FFFBF5', accentColor: '#E8C89B' },
  { id: '3', name: 'Smart Flowers', price: 'From $38', deal: 'Save 35%', suburb: 'Ultimo', bgColor: '#FFF9FA', accentColor: '#E4B5B6' },
  { id: '4', name: 'Fresh Deal', price: 'From $42', deal: 'Save 20%', suburb: 'Pyrmont', bgColor: '#F7F9FB', accentColor: '#B5C4D6' },
  { id: '5', name: 'Daily Blooms', price: 'From $45', deal: 'Save 28%', suburb: 'Waterloo', bgColor: '#F9F7FB', accentColor: '#C4B5D6' },
  { id: '6', name: 'Quick Petals', price: 'From $39', deal: 'Save 32%', suburb: 'Alexandria', bgColor: '#FFFDF7', accentColor: '#E8D8A8' },
];

export default function BestValue() {
  return (
    <section className="carousel-section">
      <div className="carousel-section-header">
        <h2 className="carousel-section-title">Best value</h2>
      </div>

      <div className="carousel-container">
        <div className="carousel-scroll">
          {bestValue.map((florist) => (
            <Link key={florist.id} href={`/florist/${florist.id}`} className="carousel-card"
              style={{ background: `linear-gradient(135deg, ${florist.bgColor} 0%, ${florist.accentColor}15 100%)` }}>
              <div className="carousel-card-badge" style={{ background: florist.accentColor }}>{florist.deal}</div>
              <div className="carousel-card-content">
                <h3 className="carousel-card-title">{florist.name}</h3>
                <p className="carousel-card-subtitle">{florist.suburb}</p>
                <p className="carousel-card-meta">{florist.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
