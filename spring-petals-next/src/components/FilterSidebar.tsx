'use client';

import { useState } from 'react';

export default function FilterSidebar() {
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [deliveryTime, setDeliveryTime] = useState('any');
  const [rating, setRating] = useState(0);

  return (
    <aside className="filter-sidebar">
      <div className="filter-group">
        <h3 className="filter-title">Price</h3>
        <div className="filter-options">
          <label className="filter-checkbox">
            <input type="checkbox" /> Under $50
          </label>
          <label className="filter-checkbox">
            <input type="checkbox" /> $50 - $100
          </label>
          <label className="filter-checkbox">
            <input type="checkbox" /> $100 - $150
          </label>
          <label className="filter-checkbox">
            <input type="checkbox" /> $150+
          </label>
        </div>
      </div>

      <div className="filter-group">
        <h3 className="filter-title">Delivery</h3>
        <div className="filter-options">
          <label className="filter-checkbox">
            <input type="checkbox" /> Under 30 min
          </label>
          <label className="filter-checkbox">
            <input type="checkbox" /> 30-60 min
          </label>
          <label className="filter-checkbox">
            <input type="checkbox" /> 1-2 hours
          </label>
          <label className="filter-checkbox">
            <input type="checkbox" /> Same day
          </label>
        </div>
      </div>

      <div className="filter-group">
        <h3 className="filter-title">Rating</h3>
        <div className="filter-options">
          <label className="filter-checkbox">
            <input type="checkbox" /> ⭐⭐⭐⭐⭐ 5.0
          </label>
          <label className="filter-checkbox">
            <input type="checkbox" /> ⭐⭐⭐⭐ 4.0+
          </label>
          <label className="filter-checkbox">
            <input type="checkbox" /> ⭐⭐⭐ 3.0+
          </label>
        </div>
      </div>

      <div className="filter-group">
        <h3 className="filter-title">Type</h3>
        <div className="filter-options">
          <label className="filter-checkbox">
            <input type="checkbox" /> Roses
          </label>
          <label className="filter-checkbox">
            <input type="checkbox" /> Mixed
          </label>
          <label className="filter-checkbox">
            <input type="checkbox" /> Wildflowers
          </label>
          <label className="filter-checkbox">
            <input type="checkbox" /> Tropical
          </label>
          <label className="filter-checkbox">
            <input type="checkbox" /> Minimalist
          </label>
        </div>
      </div>

      <div className="filter-group">
        <h3 className="filter-title">Occasion</h3>
        <div className="filter-options">
          <label className="filter-checkbox">
            <input type="checkbox" /> Apology
          </label>
          <label className="filter-checkbox">
            <input type="checkbox" /> Celebration
          </label>
          <label className="filter-checkbox">
            <input type="checkbox" /> Sympathy
          </label>
          <label className="filter-checkbox">
            <input type="checkbox" /> Romance
          </label>
          <label className="filter-checkbox">
            <input type="checkbox" /> Thank you
          </label>
        </div>
      </div>

      <div className="filter-group">
        <h3 className="filter-title">Offers</h3>
        <div className="filter-options">
          <label className="filter-checkbox">
            <input type="checkbox" /> End-of-day deals
          </label>
          <label className="filter-checkbox">
            <input type="checkbox" /> Free delivery
          </label>
          <label className="filter-checkbox">
            <input type="checkbox" /> New florists
          </label>
        </div>
      </div>

      <button className="filter-reset">Reset</button>
    </aside>
  );
}
