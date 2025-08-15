'use client';
import Image from 'next/image';

type Card = { id: string; title: string; src: string };

const SAMPLE: Card[] = [
  { id: '1', title: 'Soft Pastel Mix', src: '/images/sample1.jpg' },
  { id: '2', title: 'Pink Tulips', src: '/images/sample2.jpg' },
  { id: '3', title: 'Garden Roses', src: '/images/sample3.jpg' },
  { id: '4', title: 'Spring Posy', src: '/images/sample4.jpg' },
  { id: '5', title: 'Peony Blush', src: '/images/sample5.jpg' },
  { id: '6', title: 'Daisy Charm', src: '/images/sample6.jpg' },
];

export default function TrendingGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {SAMPLE.map((c) => (
        <article
          key={c.id}
          className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-[#FFD6E0] via-[#FFC2D9] to-[#FFE6EE] shadow-sm transition-all hover:shadow-md hover:-translate-y-[2px]"
        >
          <div className="rounded-2xl bg-white overflow-hidden">
            <div className="relative w-full aspect-square">
              <Image
                src={c.src}
                alt={c.title}
                fill
                sizes="(max-width:768px) 100vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
            <div className="px-3 py-3">
              <h3 className="text-[15px] font-medium text-[#3F3F46]">{c.title}</h3>
              <div className="mt-2 flex items-center gap-2">
                <button className="text-xs text-[#D82C4B] hover:underline">Details</button>
                <span className="text-black/20">•</span>
                <button className="text-xs text-[#D82C4B] hover:underline">Add to board</button>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
