import Image from "next/image";
import SectionWrapper from "../SectionWrapper";
import { CheckCircle2, Award, Clock, Smartphone, PenTool } from "lucide-react";

const features = [
  {
    title: "10+ Years Experience",
    description: "A decade of serving Arwal with premium printing and repair solutions.",
    icon: <Award className="w-6 h-6" />,
  },
  {
    title: "Trusted in Arwal",
    description: "The most reliable local business for all your printing and digital needs.",
    icon: <CheckCircle2 className="w-6 h-6" />,
  },
  {
    title: "Fast Delivery",
    description: "Quick turnaround times for all printing and repair jobs.",
    icon: <Clock className="w-6 h-6" />,
  },
  {
    title: "Affordable Pricing",
    description: "Competitive local rates without compromising on quality.",
    icon: <Smartphone className="w-6 h-6" />,
  },
  {
    title: "Custom Design",
    description: "Personalized designs for wedding cards, banners, and more.",
    icon: <PenTool className="w-6 h-6" />,
  },
];

export default function WhyChooseUs() {
  return (
    <SectionWrapper id="why-us" bgColor="white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Visual Content with Modern Frame */}
        <div className="relative group overflow-hidden rounded-3xl soft-shadow aspect-[4/3] border border-zinc-100">
          <Image 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" 
            alt="Quality assurance" 
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-primary/5 group-hover:opacity-0 transition-opacity duration-500" />
          <div className="absolute bottom-10 left-10 p-8 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-white/50 max-w-[280px] animate-float">
            <p className="text-4xl font-black text-primary mb-2 tracking-tighter">100%</p>
            <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest leading-none">Global Quality Standards Guaranteed</p>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 leading-[1.1]">
              Why Trust <span className="text-primary italic">Ajay Press?</span>
            </h2>
            <p className="text-zinc-500 text-lg font-medium leading-relaxed max-w-xl">
              We combine a decade of local heritage with state-of-the-art technology to deliver unmatched results for the Arwal community.
            </p>
          </div>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-start p-6 rounded-2xl hover:bg-zinc-50 transition-all group border border-transparent hover:border-zinc-100"
              >
                <div className="w-14 h-14 bg-primary/5 text-primary rounded-xl flex items-center justify-center shrink-0 mt-1 transition-all group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                  {feature.icon}
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-black text-zinc-900 mb-2 tracking-tight group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-zinc-500 font-medium leading-relaxed text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
