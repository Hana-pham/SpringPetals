import Link from 'next/link';
import LocationBar from '@/components/LocationBar';
import FilterChips from '@/components/FilterChips';
import FilterSidebar from '@/components/FilterSidebar';
import NearYou from '@/components/NearYou';
import HowItWorks from '@/components/HowItWorks';
import BrowseByFeeling from '@/components/BrowseByFeeling';
import AvailableNow from '@/components/AvailableNow';
import SaveBlooms from '@/components/SaveBlooms';
import TopRated from '@/components/TopRated';
import BestValue from '@/components/BestValue';
import PopularInSydney from '@/components/PopularInSydney';
import TrustStrip from '@/components/TrustStrip';


export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <h1 className="hero-title">Flowers that say exactly how you feel</h1>
        <p className="hero-sub">Real Sydney florists • Same-day delivery • Up to 40% off</p>

        <div className="hero-search">
          <input
            className="hero-input"
            placeholder="Search by feeling, suburb, or occasion..."
            readOnly
          />
        </div>

        <Link href="/chat" className="btn-start" aria-label="Start finding flowers">
          Find flowers →
        </Link>
      </section>

      {/* Location Bar with geolocation */}
      <LocationBar />

      {/* Filter Chips - Sticky */}
      <FilterChips />

      {/* Content with Sidebar Layout */}
      <div className="content-with-sidebar">
        {/* Filter Sidebar */}
        <FilterSidebar />

        {/* Main Content */}
        <div className="main-content">
          {/* Near You - Location-based (uses geolocation) */}
          <NearYou />

          {/* How It Works */}
          <HowItWorks />

          {/* Browse by Feeling - Emotional categories */}
          <BrowseByFeeling />

          {/* Available Right Now - Time-sensitive */}
          <AvailableNow />

          {/* Save Blooms Today - 40% waste reduction mission */}
          <SaveBlooms />

          {/* Top Rated - Highest rated florists */}
          <TopRated />

          {/* Best Value - Budget-friendly options */}
          <BestValue />

          {/* Popular in Sydney - Location-based neighborhoods */}
          <PopularInSydney />

          {/* Trust Strip */}
          <TrustStrip />
        </div>
      </div>
    </>
  );
}
