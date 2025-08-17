<<<<<<< Updated upstream
import Bloom from '@/components/Bloom';
import TrendingGrid from '@/components/TrendinfGrid';
import SubscriptionBar from '@/components/SubscriptionBar';
=======
import Image from 'next/image';
import SubscriptionBar from '../components/Slider';
>>>>>>> Stashed changes

export default function Page() {
  return (
    <>
<<<<<<< Updated upstream
      {/* Logo + “Bloom” (AI entry) + Start */}
      <Bloom />

      {/* “This month trending” band */}
      <section className="w-full mt-6">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-none bg-[#E76C94] text-white text-center py-3 text-xl tracking-wide">
            This month trending
          </div>
=======
      {/* Hero / Main image container */}
      <section className="relative flex items-center justify-center h-[46vh] md:h-[56vh]">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-serif lowercase text-transparent bg-strawberry bg-clip-text bg-[length:200%_200%] animate-gradient-flow">
            can I make you happy ?
          </h1>
          <p className="max-w-xl mx-auto opacity-80">
            a gentle place to find flowers for moments that matter.
          </p>
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
      {/* 3×2 modern cards */}
      <section className="px-4 md:px-8 py-6">
        <div className="mx-auto max-w-5xl">
          <TrendingGrid />
          <div className="text-center mt-6">
            <a href="/explore" className="inline-block bg-[#F4DBE7] text-[#D82C4B] px-5 py-2 rounded-md">
              Browse All
            </a>
          </div>
        </div>
      </section>

      {/* Marquee + caption */}
      <SubscriptionBar />
      <section className="subscription">
        <p>Weekly summary, offers and discounts</p>
=======
      {/* Subscription / marquee bar (kept from your old design, but useful) */}
      <SubscriptionBar />

      {/* Subscriptions copy block */}
      <section className="px-6 md:px-12 py-10">
        <p className="max-w-3xl text-lg">
          Brighten someone’s day with fresh flowers, whether it’s a special
          occasion or just because. Choose from our weekly or monthly
          subscriptions and keep the love blooming.
        </p>
>>>>>>> Stashed changes
      </section>
    </>
  );
}
