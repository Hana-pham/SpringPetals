import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="row">
        <div className="column left">
          <Link href="/" aria-label="Spring Petals — Home">
            {/* was 290x60 */}
            <Image src="/images/Logo.png" alt="Spring Petals Logo" className="logo" width={180} height={36} />
          </Link>
        </div>

        <div className="column middle">
          <h2>Information</h2>
          <Link href="/privacy">Privacy policy</Link>
          <Link href="/support">Customer services</Link>
        </div>

        <div className="column right">
          <h2>About</h2>
          <Link href="/about">About us</Link>
          <Link href="/care">Floral care</Link>
          <Link href="/faq">FAQ&apos;s</Link>
        </div>
      </div>
    </footer>
  );
}
