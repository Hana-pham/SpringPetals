import Image from 'next/image';
import SubscriptionBar from '../components/Slider';

export default function Page() {
  return (
    <>
      {/* Hero / Main image container */}
      <section className="relative flex items-center justify-center h-[46vh] md:h-[56vh]">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-serif lowercase text-transparent bg-strawberry bg-clip-text bg-[length:200%_200%] animate-gradient-flow">
            can I make you happy ?
          </h1>
          <p className="max-w-xl mx-auto opacity-80">
            a gentle place to find flowers for moments that matter.
          </p>
        </div>

        {/* optional background image */}
        <Image
          src="/hero.jpg"
          alt=""
          fill
          priority
          className="object-cover -z-10 opacity-10"
        />
      </section>

      {/* Subscription / marquee bar (kept from your old design, but useful) */}
      <SubscriptionBar />

      {/* Subscriptions copy block */}
      <section className="px-6 md:px-12 py-10">
        <p className="max-w-3xl text-lg">
          Brighten someone’s day with fresh flowers, whether it’s a special
          occasion or just because. Choose from our weekly or monthly
          subscriptions and keep the love blooming.
        </p>
      </section>
    </>
  );
}
