'use client';

import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export function Navigation() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-black/70 backdrop-blur-xl border-b border-[#FFB5C5]/10 dark:border-[#FF85A6]/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🌸</span>
          <span className="text-xl tracking-tight" style={{ fontFamily: 'Clash Display, sans-serif' }}>
            SpringPetals
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="#" 
            className="relative text-[#2C2C2C] dark:text-[#F5F5F5] hover:text-[#FFB5C5] dark:hover:text-[#FF85A6] transition-colors group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FFB5C5] to-[#FF85A6] group-hover:w-full transition-all duration-300"></span>
          </a>
          <a 
            href="#browse" 
            className="relative text-[#2C2C2C] dark:text-[#F5F5F5] hover:text-[#FFB5C5] dark:hover:text-[#FF85A6] transition-colors group"
          >
            Browse Flowers
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FFB5C5] to-[#FF85A6] group-hover:w-full transition-all duration-300"></span>
          </a>
          <a 
            href="#about" 
            className="relative text-[#2C2C2C] dark:text-[#F5F5F5] hover:text-[#FFB5C5] dark:hover:text-[#FF85A6] transition-colors group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FFB5C5] to-[#FF85A6] group-hover:w-full transition-all duration-300"></span>
          </a>
          <button className="px-5 py-2 rounded-full border-2 border-[#B8D4C8] dark:border-[#8FB5A5] text-[#B8D4C8] dark:text-[#8FB5A5] hover:bg-[#B8D4C8] dark:hover:bg-[#8FB5A5] hover:text-white transition-all duration-300">
            Sign In
          </button>
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-[#FFB5C5]/10 dark:hover:bg-[#FF85A6]/10 transition-all"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-[#FF85A6]" />
            ) : (
              <Moon className="w-5 h-5 text-[#FFB5C5]" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
