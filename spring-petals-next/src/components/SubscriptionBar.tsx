'use client';

import Image from 'next/image';
import { useEffect } from 'react';

/**
 * Matches your original behavior:
 * - A `.logos` wrapper
 * - One `.logos-slide` rendered twice for an infinite scroll feel
 * - Pauses on hover via your CSS
 */
export default function SubscriptionBar() {
  // No DOM cloning needed; we render two slides directly
  useEffect(() => {}, []);

  return (
    <div className="logos">
      <div className="logos-slide">
        <Image src="/images/subs.png" alt="" width={200} height={50} />
        <Image src="/images/subs.png" alt="" width={200} height={50} />
        <Image src="/images/subs.png" alt="" width={200} height={50} />
      </div>
      <div className="logos-slide">
        <Image src="/images/subs.png" alt="" width={200} height={50} />
        <Image src="/images/subs.png" alt="" width={200} height={50} />
        <Image src="/images/subs.png" alt="" width={200} height={50} />
      </div>
    </div>
  );
}
