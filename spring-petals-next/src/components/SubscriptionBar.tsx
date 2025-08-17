'use client';

import Image from 'next/image';

const COUNT = 6; // number of items in one group

export default function SubscriptionBar() {
  return (
    <div className="logos" aria-label="Subscriptions">
      <div className="logos-track">
        {/* Group A */}
        {Array.from({ length: COUNT }).map((_, i) => (
          <div className="logos-item" key={`a-${i}`}>
            <Image src="/images/subs.png" alt="" width={200} height={50} priority />
          </div>
        ))}
        {/* Group B (exact duplicate of A) */}
        {Array.from({ length: COUNT }).map((_, i) => (
          <div className="logos-item" key={`b-${i}`} aria-hidden="true">
            <Image src="/images/subs.png" alt="" width={200} height={50} />
          </div>
        ))}
      </div>
    </div>
  );
}
