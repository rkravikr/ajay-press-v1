import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary" | "whatsapp";
  href: string;
  icon?: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export default function Button({
  text,
  variant = "primary",
  href,
  icon,
  className = "",
  fullWidth = false,
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-bold transition-all duration-200 active:scale-95 shadow-md min-h-[44px]";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "border-2 border-primary text-primary bg-transparent hover:bg-primary/5",
    whatsapp: "bg-whatsapp text-white hover:bg-whatsapp/90",
  };

  const widthStyle = fullWidth ? "w-full" : "w-auto";
  const combinedStyles = `${baseStyles} ${variants[variant]} ${widthStyle} ${className}`;

  // Check if href is internal or external (tel, mailto, wa.me)
  const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={combinedStyles}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {text}
      </a>
    );
  }

  return (
    <Link href={href} className={combinedStyles}>
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </Link>
  );
}
