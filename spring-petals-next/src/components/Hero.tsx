'use client';

import { Sparkles, ChevronDown, User } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden min-h-screen flex flex-col">
      {/* Advanced Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF9F5] via-[#FFF5F8] to-[#FFE8EF] dark:from-[#0F0F0F] dark:via-[#1A0F14] dark:to-[#1F0A14] -z-10" />

      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.02] dark:opacity-[0.05]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, #FFB5C5 0px, transparent 1px, transparent 40px),
                           repeating-linear-gradient(90deg, #FFB5C5 0px, transparent 1px, transparent 40px)`
        }}
      />

      {/* Floating Flower Petals */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 text-6xl opacity-20 animate-float">🌸</div>
        <div className="absolute top-40 right-20 text-5xl opacity-15 animate-float-delayed">🌺</div>
        <div className="absolute bottom-40 left-1/4 text-7xl opacity-10 animate-float-slow">🌷</div>
        <div className="absolute top-1/3 right-1/3 text-4xl opacity-20 animate-float-delayed">🌼</div>
      </div>

      <div className="max-w-5xl mx-auto text-center flex-1 flex flex-col justify-center">
        {/* Social Proof */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFB5C5] to-[#FF85A6] border-2 border-white dark:border-[#1A1A1A] flex items-center justify-center text-xs">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#B8D4C8] to-[#8FB5A5] border-2 border-white dark:border-[#1A1A1A] flex items-center justify-center text-xs">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFB5C5] to-[#FF85A6] border-2 border-white dark:border-[#1A1A1A] flex items-center justify-center text-xs">
              <User className="w-4 h-4 text-white" />
            </div>
          </div>
          <p className="text-sm text-[#6B6B6B] dark:text-[#A1A1A1]">Join 10,000+ flower enthusiasts</p>
        </div>

        {/* Overline */}
        <div className="mb-4">
          <span className="text-xs uppercase tracking-[0.2em] text-[#FFB5C5] dark:text-[#FF85A6] font-medium">
            Introducing Bloom
          </span>
        </div>

        {/* Headline with Gradient Text */}
        <h1
          className="mb-6 text-[#2C2C2C] dark:text-[#F5F5F5] leading-[1.1] tracking-tight"
          style={{
            fontFamily: 'Clash Display, sans-serif',
            fontSize: 'clamp(48px, 8vw, 80px)',
            letterSpacing: '-0.02em'
          }}
        >
          Build with Community,
          <br />
          <span className="bg-gradient-to-r from-[#FFB5C5] to-[#FF85A6] bg-clip-text text-transparent">
            Bloom
          </span> for Community
        </h1>

        <p className="text-lg md:text-xl text-[#2C2C2C]/70 dark:text-[#F5F5F5]/70 mb-10 max-w-2xl mx-auto">
          Your AI companion to discover flowers, connect with local florists, and explore the meaning behind every petal.
        </p>

        {/* CTA Button to Chat */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/chat"
            className="group px-8 py-4 bg-gradient-to-r from-[#FFB5C5] to-[#FF85A6] text-white rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#FFB5C5]/30 flex items-center gap-2 text-lg font-medium"
          >
            <Sparkles className="w-5 h-5" />
            Chat with Bloom AI
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>

          <Link
            href="#featured"
            className="px-8 py-4 bg-white/80 dark:bg-white/10 backdrop-blur-sm text-[#2C2C2C] dark:text-[#F5F5F5] rounded-full border-2 border-[#FFB5C5]/30 dark:border-[#FF85A6]/30 hover:border-[#FFB5C5] dark:hover:border-[#FF85A6] hover:bg-white dark:hover:bg-white/20 transition-all duration-300 text-lg font-medium"
          >
            Browse Flowers
          </Link>
        </div>

        {/* Feature Badges */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          <div className="px-4 py-2 bg-white/60 dark:bg-white/10 backdrop-blur-sm rounded-full border border-[#FFB5C5]/20 dark:border-[#FF85A6]/20 text-sm text-[#2C2C2C] dark:text-[#F5F5F5]">
            🤖 AI-Powered Search
          </div>
          <div className="px-4 py-2 bg-white/60 dark:bg-white/10 backdrop-blur-sm rounded-full border border-[#FFB5C5]/20 dark:border-[#FF85A6]/20 text-sm text-[#2C2C2C] dark:text-[#F5F5F5]">
            🌸 Local Florists
          </div>
          <div className="px-4 py-2 bg-white/60 dark:bg-white/10 backdrop-blur-sm rounded-full border border-[#FFB5C5]/20 dark:border-[#FF85A6]/20 text-sm text-[#2C2C2C] dark:text-[#F5F5F5]">
            💝 Personalized Recommendations
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center mt-12 animate-bounce">
        <ChevronDown className="w-6 h-6 text-[#FFB5C5] dark:text-[#FF85A6]" />
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(-5deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
