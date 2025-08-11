import Image from 'next/image';

const items = [
  { id: 1, label: 'weekly • free delivery' },
  { id: 2, label: 'monthly • hand-picked' },
  { id: 3, label: 'gift-ready • eco wrap' },
  { id: 4, label: 'care tips • included' },
  { id: 5, label: 'seasonal picks' },
];

export default function SubscriptionBar() {
  return (
    <div className="marquee-outer">
      <div className="marquee-track">
        {/* first copy */}
        <div className="flex gap-6 w-1/2">
          {items.map((it) => (
            <div key={it.id} className="marquee-item">
              {it.label}
            </div>
          ))}
        </div>
        {/* duplicate for seamless loop */}
        <div className="flex gap-6 w-1/2">
          {items.map((it) => (
            <div key={`dup-${it.id}`} className="marquee-item">
              {it.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
