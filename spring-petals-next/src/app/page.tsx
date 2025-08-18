import Link from 'next/link';
import TrendsSection from "@/components/SeasonalSection";
import SeasonalSection from '@/components/SeasonalSection';


export default function HomePage() {
  return (
    <>
{/* hero */}
      <section className="hero">
        <h1 className="hero-title">Hi you,</h1>
        <p className="hero-sub">Ready to explore ?</p>

        <div className="hero-search">
          <input
            className="hero-input"
            placeholder="What flowers say 'I'm sorry' but aren't too romantic?"
            readOnly
          />
        </div>

        <Link href="/chat" className="btn-start" aria-label="Start chat with Bloom">
          Start
        </Link>
      </section>

      {/* Scrolling “subscription” image bar */}
      
      {/* Subscription copy block */}
      {/*<section className="subscription">
      <SubscriptionBar />

      </section>*/}
      {/*section for trends*/}
      <SeasonalSection/>
      
    </>
  );
}
