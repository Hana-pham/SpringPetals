import { Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#2C2C2C] dark:bg-[#0A0A0A] text-white py-16 px-6 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🌸</span>
              <span className="text-xl tracking-tight" style={{ fontFamily: 'Clash Display, sans-serif' }}>
                SpringPetals
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Sydney's premier flower discovery platform. Find the perfect blooms for every occasion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4" style={{ fontFamily: 'Clash Display, sans-serif' }}>
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#FFB5C5] dark:hover:text-[#FF85A6] transition-colors flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-gradient-to-r from-[#FFB5C5] to-[#FF85A6] group-hover:w-3 transition-all duration-300"></span>
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#FFB5C5] dark:hover:text-[#FF85A6] transition-colors flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-gradient-to-r from-[#FFB5C5] to-[#FF85A6] group-hover:w-3 transition-all duration-300"></span>
                  Contact
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-gray-400 hover:text-[#FFB5C5] dark:hover:text-[#FF85A6] transition-colors flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-gradient-to-r from-[#FFB5C5] to-[#FF85A6] group-hover:w-3 transition-all duration-300"></span>
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4" style={{ fontFamily: 'Clash Display, sans-serif' }}>
              Stay Updated
            </h4>
            <div className="flex gap-2 mb-6">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-[#FFB5C5]/30 dark:border-[#FF85A6]/30 focus:border-[#FFB5C5] dark:focus:border-[#FF85A6] focus:outline-none focus:ring-2 focus:ring-[#FFB5C5]/20 dark:focus:ring-[#FF85A6]/20 text-sm transition-all backdrop-blur-sm"
              />
              <button className="px-5 py-3 bg-gradient-to-r from-[#FFB5C5] to-[#FF85A6] text-white rounded-full hover:scale-105 transition-transform duration-300 shadow-lg">
                <Mail className="w-4 h-4" />
              </button>
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 rounded-full bg-white/10 text-gray-400 hover:bg-gradient-to-r hover:from-[#FFB5C5] hover:to-[#FF85A6] hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2025 SpringPetals. Built in Sydney with 🌸</p>
          <p className="text-xs opacity-60">Crafted with love for the community</p>
        </div>
      </div>
    </footer>
  );
}