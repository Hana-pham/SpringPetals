'use client';

import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Featured } from "@/components/Featured";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Featured />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
