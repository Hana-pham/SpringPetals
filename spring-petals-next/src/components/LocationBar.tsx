'use client';

import { useState } from 'react';

// Simulated suburbs based on rough Sydney coordinates
const getSuburbFromCoordinates = (lat: number, lng: number): string => {
  // Inner West
  if (lat >= -33.9 && lat <= -33.86 && lng >= 151.17 && lng <= 151.19) return 'Newtown';
  if (lat >= -33.91 && lat <= -33.88 && lng >= 151.15 && lng <= 151.17) return 'Glebe';
  if (lat >= -33.89 && lat <= -33.86 && lng >= 151.19 && lng <= 151.21) return 'Redfern';

  // Eastern Suburbs
  if (lat >= -33.9 && lat <= -33.88 && lng >= 151.26 && lng <= 151.28) return 'Bondi';
  if (lat >= -33.89 && lat <= -33.87 && lng >= 151.23 && lng <= 151.25) return 'Paddington';
  if (lat >= -33.9 && lat <= -33.87 && lng >= 151.24 && lng <= 151.27) return 'Surry Hills';

  // CBD
  if (lat >= -33.88 && lat <= -33.86 && lng >= 151.20 && lng <= 151.21) return 'Sydney CBD';

  return 'Sydney'; // Default fallback
};

export default function LocationBar() {
  const [location, setLocation] = useState<string>('Sydney');
  const [detecting, setDetecting] = useState(false);

  const detectLocation = () => {
    setDetecting(true);
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const suburb = getSuburbFromCoordinates(
            position.coords.latitude,
            position.coords.longitude
          );
          setLocation(suburb);
          setDetecting(false);
        },
        (error) => {
          console.error('Location error:', error);
          setLocation('Sydney');
          setDetecting(false);
        }
      );
    } else {
      setLocation('Sydney');
      setDetecting(false);
    }
  };

  return (
    <div className="location-bar">
      <div className="location-bar-container">
        <div className="location-info">
          <span className="location-icon">📍</span>
          <span className="location-value">{location}</span>
        </div>
        <button onClick={detectLocation} className="location-detect" disabled={detecting}>
          {detecting ? '...' : 'Update location'}
        </button>
      </div>
    </div>
  );
}
