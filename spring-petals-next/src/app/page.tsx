import SubscriptionBar from '@/components/SubscriptionBar';

export default function HomePage() {
  return (
    <>
      {/* Navigation / hero container (kept minimal like original) */}
      <section className="navigation">
        <div className="main-image-container">
          
        </div>
      </section>

      {/* Scrolling “subscription” image bar */}
      <SubscriptionBar />

      {/* Subscription copy block */}
      <section className="subscription">
      </section>
    </>
  );
}
