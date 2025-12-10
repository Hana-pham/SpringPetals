'use client';

import { useState } from 'react';

const filters = [
  { id: 'all', label: 'All', icon: '🌸' },
  { id: 'under-50', label: 'Under $50', icon: '💰' },
  { id: 'fast', label: 'Fast delivery', icon: '⚡' },
  { id: 'deals', label: 'Deals', icon: '🏷️' },
  { id: 'roses', label: 'Roses', icon: '🌹' },
  { id: 'mixed', label: 'Mixed', icon: '💐' },
  { id: 'top-rated', label: 'Top rated', icon: '⭐' },
  { id: 'new', label: 'New florists', icon: '✨' },
];

export default function FilterChips() {
  const [selected, setSelected] = useState('all');

  return (
    <div className="filter-chips-section">
      <div className="filter-chips-container">
        <div className="filter-chips">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-chip ${selected === filter.id ? 'active' : ''}`}
              onClick={() => setSelected(filter.id)}
            >
              <span className="filter-chip-icon">{filter.icon}</span>
              <span className="filter-chip-label">{filter.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
