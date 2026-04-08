import React from "react";
import Button from "../Button/Button";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function Card({
  title,
  description,
  icon,
  image,
  ctaText,
  ctaHref,
  className = "",
}: CardProps) {
  return (
    <div className={`group bg-white rounded-3xl p-8 soft-shadow hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-zinc-50 flex flex-col h-full ${className}`}>
      {icon && (
        <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8 transition-all group-hover:bg-primary group-hover:text-white group-hover:scale-110">
          {icon}
        </div>
      )}
      
      {image && (
        <div className="relative w-full h-52 mb-8 overflow-hidden rounded-2xl shadow-inner">
          <Image 
            src={image} 
            alt={title} 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-110" 
          />
        </div>
      )}

      <h3 className="text-2xl font-black text-zinc-900 mb-4 tracking-tight group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-zinc-500 font-medium leading-relaxed mb-8 flex-grow">{description}</p>

      {ctaText && ctaHref && (
        <div className="mt-auto">
          <Button text={ctaText} href={ctaHref} variant="primary" className="py-4 shadow-lg shadow-primary/10 rounded-2xl" fullWidth />
        </div>
      )}
    </div>
  );
}
