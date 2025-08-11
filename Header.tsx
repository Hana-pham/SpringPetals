// components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-cream">
      <Link href="/">
        <img src="/logo.png" alt="Spring Petals Logo" className="h-12" />
      </Link>
      <div className="flex items-center gap-4">
        <img src="/icons/search.png" alt="Search" className="h-6 cursor-pointer" />
        <Link href="/contact" className="text-dark-grey">Contact</Link>
        <img src="/icons/cart.png" alt="Cart" className="h-6 md:hidden" />
      </div>
    </header>
  );
}
