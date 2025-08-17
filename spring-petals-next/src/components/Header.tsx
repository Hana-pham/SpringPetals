'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="header">
      <Link href="/" aria-label="Spring Petals — Home">
        {/* was 290x60 */}
        <Image src="/images/Logo.png" alt="Spring Petals Logo" className="logo" width={180} height={36} priority />
      </Link>
    </header>
  );
}
