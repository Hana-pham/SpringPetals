'use client';

import Link from 'next/link';

const feelings = [
  {
    id: 'sorry',
    title: "I'm sorry",
    count: '45+',
    bgColor: '#FFF9FA',
    accentColor: '#E4B5B6',
  },
  {
    id: 'celebrate',
    title: 'Celebrate someone',
    count: '60+',
    bgColor: '#FFFBF5',
    accentColor: '#E8C89B',
  },
  {
    id: 'thanks',
    title: 'Thank you',
    count: '50+',
    bgColor: '#FFF9F5',
    accentColor: '#D9A5A6',
  },
  {
    id: 'thinking',
    title: 'Thinking of you',
    count: '35+',
    bgColor: '#F7F9FB',
    accentColor: '#B5C4D6',
  },
  {
    id: 'romance',
    title: 'Romance',
    count: '70+',
    bgColor: '#FFF7F9',
    accentColor: '#E4B5B6',
  },
  {
    id: 'just-because',
    title: 'Just because',
    count: '40+',
    bgColor: '#F9FBF7',
    accentColor: '#B5D6A8',
  },
];

export default function BrowseByFeeling() {
  return (
    <section className="browse-section">
      <div className="browse-header">
        <h2 className="browse-title">By feeling</h2>
      </div>

      <div className="browse-carousel-container">
        <div className="browse-carousel">
          {feelings.map((feeling) => (
            <Link
              key={feeling.id}
              href={`/browse/${feeling.id}`}
              className="feeling-card"
              style={{
                background: `linear-gradient(135deg, ${feeling.bgColor} 0%, ${feeling.accentColor}20 100%)`,
              }}
            >
              <div className="feeling-card-content">
                <div className="feeling-icon" style={{ background: feeling.accentColor }}>
                  <span className="icon-flower">✿</span>
                </div>
                <h3 className="feeling-title">{feeling.title}</h3>
                <p className="feeling-count">{feeling.count}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
