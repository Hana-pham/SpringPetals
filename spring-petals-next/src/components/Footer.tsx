import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <nav className="footer-links">
          <Link href="/about" className="footer-link">About</Link>
          <span className="footer-divider">|</span>
          <Link href="/florists" className="footer-link">For florists</Link>
          <span className="footer-divider">|</span>
          <Link href="/faq" className="footer-link">FAQs</Link>
          <span className="footer-divider">|</span>
          <Link href="/help" className="footer-link">Help</Link>
          <span className="footer-divider">|</span>
          <Link href="/terms" className="footer-link">Terms</Link>
          <span className="footer-divider">|</span>
          <Link href="/privacy" className="footer-link">Privacy</Link>
        </nav>

        <p className="footer-copyright">
          © {new Date().getFullYear()} Spring Petals. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
