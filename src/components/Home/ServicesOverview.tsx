import React from "react";
import SectionWrapper from "../SectionWrapper";
import Card from "../Card/Card";
import { Printer, Smartphone, Globe } from "lucide-react";

export default function ServicesOverview() {
  const services = [
    {
      title: "Printing Services",
      description: "Premium quality Wedding Cards, Visiting Cards, Flex Banners, and Personal Invitation Cards with custom designs.",
      icon: <Printer className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&q=80&w=800",
      link: "/services"
    },
    {
      title: "Gadget Repair",
      description: "Expert Mobile & Laptop repair. Screen replacements, battery fixes, and specialized software troubleshooting.",
      icon: <Smartphone className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1597740985671-2a8a3b80aa00?auto=format&fit=crop&q=80&w=800",
      link: "/services"
    },
    {
      title: "Digital & Online",
      description: "Fast Online Form filling, high-speed Internet services, and custom Rubber Stamp creation.",
      icon: <Globe className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800",
      link: "/services"
    },
  ];

  return (
    <SectionWrapper id="services" bgColor="gray">
      <div className="text-center space-y-6 mb-20 max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900">
          Our Expert <span className="text-primary group-hover:text-secondary transition-colors">Services</span>
        </h2>
        <p className="text-zinc-500 text-lg font-medium leading-relaxed">
          From high-precision printing to instant gadget repairs, we provide the highest quality solutions in Arwal.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            image={service.image}
            ctaText="Learn More"
            ctaHref={service.link}
            className="animate-in fade-in zoom-in-95 duration-500 fill-mode-both"
            style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
