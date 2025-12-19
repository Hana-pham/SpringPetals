import { MapPin, Sparkles, Tag } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    title: "Search your suburb",
    description: "Enter your location to find local florists nearby"
  },
  {
    icon: Sparkles,
    title: "Discover flowers nearby",
    description: "Browse beautiful blooms and their meanings"
  },
  {
    icon: Tag,
    title: "Enjoy end-of-day deals",
    description: "Get fresh flowers at amazing prices"
  }
];

export function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl mb-4 text-[#2C2C2C]" 
            style={{ fontFamily: 'Lora, serif' }}
          >
            How It Works
          </h2>
          <p className="text-lg text-[#6B6B6B]">
            Three simple steps to find your perfect flowers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#E4B5B6] to-[#F7F0F1] mb-6 shadow-lg">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <div className="mb-3 text-[#E4B5B6] text-5xl opacity-20">
                  {index + 1}
                </div>
                <h3 
                  className="text-2xl mb-3 text-[#2C2C2C]" 
                  style={{ fontFamily: 'Lora, serif' }}
                >
                  {step.title}
                </h3>
                <p className="text-[#6B6B6B]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
