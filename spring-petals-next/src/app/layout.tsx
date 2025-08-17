// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // pick what you use
  variable: '--font-cormorant',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Spring Petals',
  description: 'Flower discovery with a soft, elegant aesthetic',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
