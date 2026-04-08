import React from "react";
import SectionWrapper from "@/components/SectionWrapper";
import Image from "next/image";
import { ShieldCheck, Zap, Users, MessageSquare } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story: Quality & Trust Since 2014",
  description: "Learn more about Ajay Press's 10+ years of trust and expertise in printing and gadget repair in Arwal, Bihar.",
};

export default function AboutPage() {
  const stats = [
    { label: "YEARS EXPERTISE", value: "10+" },
    { label: "PRINT JOBS", value: "15k+" },
    { label: "HAPPY CLIENTS", value: "8k+" },
    { label: "LOCAL TRUST", value: "100%" },
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Dynamic Light Header */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-zinc-50">
        <div className="mesh-gradient opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1 bg-primary/5 text-primary border border-primary/10 font-bold text-xs uppercase tracking-widest rounded-full mb-6">
            ESTABLISHED 2014
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-zinc-900 leading-[1.1] mb-8">
            The Story Of <br />
            <span className="text-primary italic">Ajay Press</span>
          </h1>
          <p className="text-zinc-500 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Building a legacy of precision and trust in Arwal for over a decade.
          </p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <SectionWrapper bgColor="white" className="py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12 order-2 lg:order-1">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 leading-[1.1]">
                Founded on <span className="text-primary italic">Excellence</span> & Community
              </h2>
              <p className="text-zinc-500 text-lg font-medium leading-relaxed">
                Ajay Press started with a simple vision: to provide the local community of Arwal with high-quality services that were previously only available in big cities.
              </p>
            </div>
            
            <div className="space-y-6 text-zinc-600 text-base font-medium leading-relaxed">
              <p>
                From our humble beginnings with a single offset machine, we have evolved into a multi-disciplinary studio. Today, we handle everything from complex wedding card designs to advanced micro-soldering on modern electronics.
              </p>
              <div className="p-8 bg-zinc-50 border-l-4 border-primary rounded-r-3xl italic text-zinc-900 font-black text-xl">
                &quot;We don&apos;t just print or repair; we build long-term relationships through honest work.&quot;
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-6 bg-white border border-zinc-100 soft-shadow rounded-2xl text-center">
                  <p className="text-2xl font-black text-primary mb-1">{stat.value}</p>
                  <p className="text-[8px] uppercase font-black text-zinc-400 tracking-widest leading-none">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2 group">
            <div className="aspect-[4/5] relative rounded-[40px] overflow-hidden soft-shadow z-10 border border-zinc-50">
              <Image 
                src="https://images.unsplash.com/photo-1596753426434-de04400cc061?auto=format&fit=crop&q=80&w=1200" 
                alt="Business Story" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/5 rounded-full -z-0 blur-3xl" />
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-amber-50 rounded-full -z-0 blur-3xl opacity-50" />
          </div>
        </div>
      </SectionWrapper>

      {/* Values Section */}
      <SectionWrapper bgColor="gray" className="py-24">
        <div className="text-center space-y-6 mb-20 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900">
            Our <span className="text-primary italic">Core Values</span>
          </h2>
          <p className="text-zinc-500 text-lg font-medium leading-relaxed">
            The unchanging principles that guide our craftsmanship every single day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Local First", icon: <Users className="w-8 h-8" />, desc: "Dedicated to serving the students, families, and businesses of Bihar." },
            { title: "Precision", icon: <ShieldCheck className="w-8 h-8" />, desc: "Every job is double-checked for zero-error delivery." },
            { title: "Fast Action", icon: <Zap className="w-8 h-8" />, desc: "Most repairs and printing jobs are completed within 24 hours." },
            { title: "Integrity", icon: <MessageSquare className="w-8 h-8" />, desc: "Transparent pricing and honest recommendations, always." },
          ].map((val, idx) => (
            <div key={idx} className="p-10 bg-white rounded-[32px] soft-shadow border border-zinc-50 hover:-translate-y-2 transition-all duration-500 group">
              <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-8 transition-all group-hover:bg-primary group-hover:text-white">
                {val.icon}
              </div>
              <h3 className="text-2xl font-black text-zinc-900 mb-4 tracking-tight group-hover:text-primary transition-colors">{val.title}</h3>
              <p className="text-zinc-500 font-medium text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
