'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" aria-label="Spring Petals — Home" className="logo-link">
          <Image src="/images/Logo.png" alt="Spring Petals Logo" className="logo" width={180} height={36} priority />
        </Link>

        <nav className="header-nav">
          <Link href="#how-it-works" className="nav-link">How it works</Link>
          <Link href="/florists" className="nav-link">For florists</Link>
          <Link href="/signin" className="nav-link">Sign in</Link>
        </nav>
      </div>
    </header>
  );
}
