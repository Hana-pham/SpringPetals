import SubscriptionBar from '@/components/SubscriptionBar';

export default function HomePage() {
  return (
    <>
      {/* Navigation / hero container (kept minimal like original) */}
      <section className="navigation">
        <div className="main-image-container">
          <p>can I make you happy ? </p>
        </div>
      </section>

      {/* Scrolling “subscription” image bar */}
      <SubscriptionBar />

      {/* Subscription copy block */}
      <section className="subscription">
        <p>
          Brighten someone’s day with fresh flowers, whether it’s a special occasion or just because!
          Choose from our weekly, or monthly subscriptions and keep the love blooming.
        </p>
      </section>
    </>
  );
}
