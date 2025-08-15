import Bloom from '@/components/Bloom';
import TrendingGrid from '@/components/TrendinfGrid';
import SubscriptionBar from '@/components/SubscriptionBar';

export default function HomePage() {
  return (
    <>
      {/* Logo + “Bloom” (AI entry) + Start */}
      <Bloom />

      {/* “This month trending” band */}
      <section className="w-full mt-6">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-none bg-[#E76C94] text-white text-center py-3 text-xl tracking-wide">
            This month trending
          </div>
        </div>
      </section>

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
      </section>
    </>
  );
}
