'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';

export default function Bloom() {
  const router = useRouter();
  const [q, setQ] = useState('');

  const start = () => {
    const query = q.trim();
    router.push(`/chat${query ? `?query=${encodeURIComponent(query)}` : ''}`);
  };

  return (
    <section className="w-full">
      <div className="mx-auto max-w-5xl px-4 md:px-8">

        {/* Soft panel */}
        <div className="rounded-2xl bg-[#FFF0F4] px-4 md:px-8 py-8 text-center">
          <p className="text-[#E0527A] text-lg md:text-xl mb-5">
            Hi you,<br />Ready to make your day better ?
          </p>

          {/* Bloom input */}
          <div className="mx-auto max-w-2xl flex items-center gap-2 bg-white rounded-full border border-black/10 px-4 py-3 shadow-sm">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && start()}
              className="flex-1 outline-none text-[15px]"
              placeholder={`What flowers say "I'm sorry" but aren't too romantic?`}
              aria-label="Ask Bloom"
            />
            <button onClick={start} aria-label="Search">
              <Image src="/icons/search.png" alt="Search" width={18} height={18} />
            </button>
          </div>

          {/* Start button */}
          <button
            onClick={start}
            className="mt-5 inline-flex items-center justify-center rounded-full px-8 py-2 text-white bg-[#F0A6BD] hover:opacity-95 active:scale-[.99] transition"
          >
            Start
          </button>
        </div>
      </div>
    </section>
  );
}
