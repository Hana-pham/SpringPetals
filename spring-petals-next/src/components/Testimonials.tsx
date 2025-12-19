import { Quote } from "lucide-react";

const quotes = [
  {
    text: "Flowers always make people better, happier, and more helpful; they are sunshine, food and medicine for the soul.",
    author: "Luther Burbank"
  },
  {
    text: "Where flowers bloom, so does hope.",
    author: "Lady Bird Johnson"
  },
  {
    text: "Every flower is a soul blossoming in nature.",
    author: "Gerard De Nerval"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-[#FFF5F8] via-[#FFF9F5] to-[#FFE8EF] dark:from-[#1A0F14] dark:via-[#0F0F0F] dark:to-[#1F0A14] transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className="bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:shadow-[#FFB5C5]/10 dark:hover:shadow-[#FF85A6]/10 transition-all duration-500 border border-[#FFB5C5]/20 dark:border-[#FF85A6]/20 hover:scale-[1.02] group"
            >
              <Quote className="w-12 h-12 text-[#FFB5C5] dark:text-[#FF85A6] mb-6 opacity-40 group-hover:opacity-60 transition-opacity" />
              <p className="text-[#2C2C2C] dark:text-[#F5F5F5] mb-6 italic leading-relaxed">
                "{quote.text}"
              </p>
              <p 
                className="text-[#FFB5C5] dark:text-[#FF85A6]" 
                style={{ fontFamily: 'Clash Display, sans-serif' }}
              >
                — {quote.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}