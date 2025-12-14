import Link from 'next/link';
import HowItWorks from '@/components/HowItWorks';
import BrowseByFeeling from '@/components/BrowseByFeeling';
import SaveBlooms from '@/components/SaveBlooms';
import NearYou from '@/components/NearYou';
import TrustStrip from '@/components/TrustStrip';


export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <h1 className="hero-title">Built with communities, for communities</h1>
        <p className="hero-sub">Supporting local Sydney florists • Reducing waste • Creating connections</p>

        <Link href="/chat" className="btn-start" aria-label="Start finding flowers">
          Find flowers →
        </Link>
      </section>

      {/* Main Content - Simplified Layout */}
      <div className="main-content">
        {/* How It Works */}
        <HowItWorks />

        {/* Browse by Feeling - Emotional categories */}
        <BrowseByFeeling />

        {/* Save Blooms Today - 40% waste reduction mission */}
        <SaveBlooms />

        {/* Near You - Location-based */}
        <NearYou />

        {/* Trust Strip */}
        <TrustStrip />
      </div>
    </>
  );
}
