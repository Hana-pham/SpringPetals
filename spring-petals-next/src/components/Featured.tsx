import { ArrowRight } from "lucide-react";

interface FloristCard {
  id: number;
  name: string;
  description: string;
  image: string;
}

const florists: FloristCard[] = [
  {
    id: 1,
    name: "Romantic Rose Collection",
    description: "Elegant pink roses perfect for any occasion",
    image: "https://images.unsplash.com/photo-1712258090338-e83050d6664d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwcm9zZSUyMGJvdXF1ZXR8ZW58MXx8fHwxNzY1NzMyNjUzfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 2,
    name: "Peony Paradise",
    description: "Soft, lush peonies in full bloom",
    image: "https://images.unsplash.com/photo-1631041871361-eb12496074c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9uaWVzJTIwZmxvd2Vyc3xlbnwxfHx8fDE3NjU3NzMxODV8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 3,
    name: "Spring Tulips",
    description: "Fresh seasonal tulips in vibrant colors",
    image: "https://images.unsplash.com/photo-1743281181949-51fa68f5d71a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dWxpcHMlMjBhcnJhbmdlbWVudHxlbnwxfHx8fDE3NjU3NzMxODV8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 4,
    name: "Lavender Dreams",
    description: "Calming lavender bouquets with a gentle scent",
    image: "https://images.unsplash.com/photo-1744451619999-1bd41df44f0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXZlbmRlciUyMGJvdXF1ZXR8ZW58MXx8fHwxNzY1NzczMTg1fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
];

export function Featured() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-[#0F0F0F] transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-5xl md:text-6xl mb-4 text-[#2C2C2C] dark:text-[#F5F5F5] tracking-tight" 
            style={{ fontFamily: 'Clash Display, sans-serif' }}
          >
            Trending Bouquets
          </h2>
          <p className="text-lg text-[#2C2C2C]/70 dark:text-[#F5F5F5]/70">
            Sydney's most loved flower collections this season
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {florists.map((florist) => (
            <div
              key={florist.id}
              className="group bg-gradient-to-br from-white to-[#FFF9F5] dark:from-[#1A1A1A] dark:to-[#1F0A14] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#FFB5C5]/20 dark:hover:shadow-[#FF85A6]/20 transition-all duration-500 hover:scale-[1.03] border border-[#FFB5C5]/10 dark:border-[#FF85A6]/10"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  src={florist.image}
                  alt={florist.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 
                  className="text-xl mb-2 text-[#2C2C2C] dark:text-[#F5F5F5]" 
                  style={{ fontFamily: 'Clash Display, sans-serif' }}
                >
                  {florist.name}
                </h3>
                <p className="text-[#6B6B6B] dark:text-[#A1A1A1] text-sm mb-4 leading-relaxed">
                  {florist.description}
                </p>
                <button className="flex items-center gap-2 text-[#FFB5C5] dark:text-[#FF85A6] hover:text-[#FF85A6] transition-colors group/btn">
                  View Details
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}