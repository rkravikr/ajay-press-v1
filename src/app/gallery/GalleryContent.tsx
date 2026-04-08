"use client";

import React, { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import Image from "next/image";
import { X, Search } from "lucide-react";

type Category = "All" | "Printing" | "Machines" | "Shop";

interface GalleryImage {
  id: number;
  src: string;
  category: Category;
  title: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&q=80&w=800", category: "Printing", title: "Wedding Card Design" },
  { id: 2, src: "https://images.unsplash.com/photo-1597740985671-2a8a3b80aa00?auto=format&fit=crop&q=80&w=800", category: "Machines", title: "Automatic Offset Printing" },
  { id: 3, src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800", category: "Shop", title: "Front View of Repair Lab" },
  { id: 4, src: "https://images.unsplash.com/photo-1541170419998-42144acd544e?auto=format&fit=crop&q=80&w=800", category: "Printing", title: "Flex Banner Print" },
  { id: 5, src: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=800", category: "Machines", title: "Digital Cutting Unit" },
  { id: 6, src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800", category: "Shop", title: "Customer Interaction Area" },
  { id: 7, src: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800", category: "Printing", title: "Visiting Card Layout" },
  { id: 8, src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800", category: "Machines", title: "Heavy Duty Stamp Machine" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const categories: Category[] = ["All", "Printing", "Machines", "Shop"];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Dynamic Light Header */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-zinc-50">
        <div className="mesh-gradient opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1 bg-primary/5 text-primary border border-primary/10 font-bold text-xs uppercase tracking-widest rounded-full mb-6">
            Portfolio
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-zinc-900 mb-8 leading-tight">
            Our <span className="text-primary italic">Gallery</span>
          </h1>
          <p className="text-zinc-500 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            A visual journey of our printing precision, advanced technology, and high-quality gadget infrastructure.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <SectionWrapper bgColor="white">
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-2xl font-black text-sm transition-all duration-300 border-2 ${
                activeCategory === cat 
                  ? "bg-primary border-primary text-white shadow-xl scale-105" 
                  : "bg-zinc-50/50 border-zinc-100 text-zinc-400 hover:border-primary/20 hover:text-primary hover:bg-white"
              }`}
            >
              {cat === "All" ? "ALL WORK" : cat === "Printing" ? "PRINTING" : cat === "Machines" ? "MACHINES" : "SHOP"}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              onClick={() => setSelectedImage(image)}
              className="group relative aspect-square overflow-hidden rounded-[32px] cursor-zoom-in soft-shadow border border-zinc-50 transition-all duration-700 hover:shadow-2xl hover:-translate-y-1"
            >
              <Image 
                src={image.src} 
                alt={image.title} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-2xl transform scale-50 group-hover:scale-100 transition-transform duration-500">
                  <Search className="w-8 h-8" />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl translate-y-24 group-hover:translate-y-0 transition-transform duration-500 shadow-2xl border border-white/50">
                <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">{image.category}</p>
                <p className="text-sm font-black text-zinc-900 truncate">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Lightbox / Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-zinc-950/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-500"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white hover:text-primary transition-colors p-3 bg-white/5 rounded-full border border-white/10"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
          >
            <X className="w-8 h-8" />
          </button>
          
          <div 
            className="relative w-full max-w-6xl h-full max-h-[85vh] rounded-[40px] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image 
              src={selectedImage.src} 
              alt={selectedImage.title} 
              fill 
              className="object-contain" 
              priority
            />
          </div>
          
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center text-white space-y-3 px-6 w-full">
            <h3 className="text-3xl font-black tracking-tight leading-none">{selectedImage.title}</h3>
            <p className="text-zinc-500 font-black uppercase tracking-[0.3em] text-xs leading-none">{selectedImage.category} PORTFOLIO</p>
          </div>
        </div>
      )}
    </div>
  );
}
