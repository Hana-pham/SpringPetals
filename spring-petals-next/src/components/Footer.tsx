import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 py-12 border-t border-black/5">
      <div className="footer-grid">
        <div className="footer-col">
          <Link href="/" aria-label="Spring Petals — Home">
            <Image src="/logo.png" alt="Spring Petals Logo" width={140} height={40} />
          </Link>
        </div>

        <div className="footer-col">
          <h2>Information</h2>
          <Link href="/terms">Terms and condition</Link>
          <Link href="/privacy">Privacy policy</Link>
          <Link href="/delivery">Delivery policy</Link>
          <Link href="/support">Customer services</Link>
          <Link href="/refunds">Refund policy</Link>
        </div>

        <div className="footer-col">
          <h2>About</h2>
          <Link href="/about">About us</Link>
          <Link href="/care">Floral care</Link>
          <Link href="/faq">FAQ&apos;s</Link>
        </div>
      </div>
      <p className="mt-8 text-xs opacity-60">© {new Date().getFullYear()} Spring Petals</p>
    </footer>
  );
}
