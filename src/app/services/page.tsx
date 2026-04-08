import React from "react";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button/Button";
import { Metadata } from "next";
import { 
  Printer, 
  Smartphone, 
  Monitor, 
  Globe, 
  CreditCard, 
  Cpu, 
  Battery, 
  FileText, 
  Languages, 
  Stamp,
  MessageCircle,
  Phone,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Premium Services – Printing, Gadget Repair & Digital Solutions",
  description: "Detailed list of our printing (wedding cards, banners), repair (mobile, laptop), and digital services in Arwal, Bihar.",
};

export default function ServicesPage() {
  const whatsappNumber = "9471967853";
  const whatsappMessage = "Hello, I want to know more about your services.";
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  const printingServices = [
    { title: "Wedding Cards", desc: "Elegant and customizable wedding cards for your special day.", icon: <Printer className="w-5 h-5" /> },
    { title: "Visiting Cards", desc: "Professional business cards to help you stand out.", icon: <CreditCard className="w-5 h-5" /> },
    { title: "Flex Banners", desc: "Large-scale flex and vinyl banner printing for advertisements.", icon: <Monitor className="w-5 h-5" /> },
    { title: "Invitation Cards", desc: "Beautifully designed cards for every occasion.", icon: <FileText className="w-5 h-5" /> },
  ];

  const repairServices = [
    { title: "Mobile Repair", desc: "Expert hardware and motherboard level mobile troubleshooting.", icon: <Smartphone className="w-5 h-5" /> },
    { title: "Screen Replacement", desc: "High-quality display replacements for all major phone brands.", icon: <Monitor className="w-5 h-5" /> },
    { title: "Battery Replacement", desc: "Original and high-capacity battery solutions for gadgets.", icon: <Battery className="w-5 h-5" /> },
    { title: "Software Issues", desc: "OS flashing, rooting, and software lag fixes.", icon: <Cpu className="w-5 h-5" /> },
    { title: "Laptop Repair", desc: "Comprehensive laptop servicing, cleaning, and hardware fix.", icon: <Monitor className="w-5 h-5" /> },
  ];

  const digitalServices = [
    { title: "Online Form Filling", desc: "Assistance with government, bank, and student forms.", icon: <FileText className="w-5 h-5" /> },
    { title: "Internet Work", desc: "Printing, scanning, and rapid browsing services.", icon: <Globe className="w-5 h-5" /> },
    { title: "Stamp Creation", desc: "Custom rubber and self-inking stamps for businesses.", icon: <Stamp className="w-5 h-5" /> },
    { title: "Online Payments", desc: "Help with various online transactions and billing.", icon: <Languages className="w-5 h-5" /> },
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Dynamic Light Header */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-zinc-50">
        <div className="mesh-gradient opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1 bg-primary/5 text-primary border border-primary/10 font-bold text-xs uppercase tracking-widest rounded-full mb-6">
            Explore our expertise
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-zinc-900 leading-[1.1] mb-8">
            Complete <span className="text-primary italic">Solutions</span> <br />
            For Your Needs
          </h1>
          <p className="text-zinc-500 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            From high-precision printing to instant gadget repairs — we provide the fastest and most trusted solutions in Arwal.
          </p>
        </div>
      </section>

      {/* Printing Services */}
      <SectionWrapper id="printing" bgColor="white" className="py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-6">
              <Printer className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-black text-zinc-900 tracking-tight">Printing Services</h2>
            <p className="text-zinc-500 font-medium max-w-md">Premium quality materials and high-definition printing for every occasion.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {printingServices.map((service, idx) => (
            <div key={idx} className="p-8 bg-zinc-50/50 rounded-3xl hover:bg-white hover:soft-shadow border border-zinc-100 transition-all group">
              <div className="mb-6 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">{service.title}</h3>
              <p className="text-zinc-500 text-sm font-medium leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Repair Services */}
      <SectionWrapper id="repair" bgColor="gray" className="py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-6">
              <Smartphone className="w-8 h-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight leading-none">
              Gadget & Laptop <span className="text-primary italic">Repair</span>
            </h2>
            <p className="text-zinc-500 font-medium max-w-xl text-lg leading-relaxed">
              Expert hardware diagnostics and rapid repair turnaround for all your critical technology.
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          {repairServices.map((service, idx) => (
            <div 
              key={idx} 
              className="flex items-start p-8 bg-white rounded-[32px] soft-shadow border border-zinc-50 group hover:-translate-y-2 transition-all duration-500 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] min-h-[160px]"
            >
              <div className="w-14 h-14 bg-zinc-50 border border-zinc-100 rounded-2xl flex items-center justify-center shrink-0 mr-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:scale-110 shadow-inner">
                {service.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-black text-zinc-900 tracking-tight group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-zinc-500 text-sm font-medium leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Digital Services */}
      <SectionWrapper id="digital" bgColor="white" className="py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-6">
              <Globe className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-black text-zinc-900 tracking-tight">Digital & Online</h2>
            <p className="text-zinc-500 font-medium max-w-md">Hassle-free online form filling and high-speed digital assistance.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {digitalServices.map((service, idx) => (
            <div key={idx} className="flex flex-col p-8 bg-zinc-50/50 border border-zinc-100 rounded-3xl hover:border-primary/20 hover:bg-white hover:soft-shadow transition-all group">
              <div className="p-3 bg-white w-fit rounded-xl shadow-sm text-primary mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">{service.title}</h3>
              <p className="text-zinc-500 text-xs font-medium leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Final Premium CTA */}
      <SectionWrapper bgColor="gray" className="py-32">
        <div className="relative bg-white rounded-[40px] p-12 md:p-24 overflow-hidden soft-shadow border border-zinc-100 text-center">
          <div className="mesh-gradient opacity-10" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-10">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-zinc-900 leading-[1.1]">
              Ready to Start Your <span className="text-primary italic">Project?</span>
            </h2>
            <p className="text-zinc-500 text-xl font-medium leading-relaxed">
              Tell us your requirements and we will provide the best solution and pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Button
                text="WhatsApp Inquiry"
                href={whatsappLink}
                variant="whatsapp"
                icon={<MessageCircle className="w-6 h-6" />}
                className="px-12 py-5 text-lg shadow-xl shadow-whatsapp/10"
              />
              <Button
                text="Direct Consultation"
                href={`tel:${whatsappNumber}`}
                variant="primary"
                icon={<Phone className="w-6 h-6" />}
                className="px-12 py-5 text-lg shadow-xl shadow-primary/20"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
