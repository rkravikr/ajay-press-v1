import React from "react";
import SectionWrapper from "../SectionWrapper";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Image as ImageIcon } from "lucide-react";

const previewImages = [
  {
    src: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&q=80&w=800",
    alt: "Printing Work Preview",
    title: "Premium Wedding Cards",
  },
  {
    src: "https://images.unsplash.com/photo-1597740985671-2a8a3b80aa00?auto=format&fit=crop&q=80&w=800",
    alt: "Repair Lab Preview",
    title: "Mobile Repair Lab",
  },
  {
    src: "https://images.unsplash.com/photo-1541170419998-42144acd544e?auto=format&fit=crop&q=80&w=800",
    alt: "Digital Services Preview",
    title: "Form Filling & Online Work",
  },
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    alt: "Machine Infrastructure",
    title: "Modern Printing Machines",
  },
  {
    src: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=800",
    alt: "Shop Front Preview",
    title: "Our Arwal Shop",
  },
  {
    src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800",
    alt: "Customer Service",
    title: "Satisfied Customers",
  },
];

export default function GalleryPreview() {
  return (
    <SectionWrapper id="gallery-preview" bgColor="white">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 space-y-6 md:space-y-0">
        <div className="space-y-4 max-w-xl">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Our Work <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-zinc-500 text-lg">
            A glimpse into the high-quality printing and repair services we deliver to our customers in Arwal.
          </p>
        </div>
        <Link 
          href="/gallery" 
          className="group flex items-center text-primary font-bold text-lg hover:text-primary/80 transition-colors"
        >
          View Full Gallery
          <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {previewImages.map((image, index) => (
          <div 
            key={index} 
            className="group relative aspect-square md:aspect-[4/3] overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <Image 
              src={image.src} 
              alt={image.alt} 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div className="space-y-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-bold text-lg">{image.title}</p>
                <div className="flex items-center text-white/70 text-xs uppercase tracking-widest">
                  <ImageIcon className="w-3 h-3 mr-2" />
                  View Photo
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
