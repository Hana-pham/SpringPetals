import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 md:px-12 py-4 bg-cream">
      <Link href="/" aria-label="Spring Petals — Home">
        <Image src="/logo.png" alt="Spring Petals Logo" width={140} height={40} priority />
      </Link>

      <nav className="flex items-center gap-4 md:gap-6">
        <button aria-label="Search">
          <Image src="/icons/search.png" alt="Search" width={22} height={22} />
        </button>
        <Link href="/contact" className="hover:underline">Contact</Link>
        <button aria-label="Cart" className="md:hidden">
          <Image src="/icons/cart.png" alt="Cart" width={22} height={22} />
        </button>
      </nav>
    </header>
  );
}
