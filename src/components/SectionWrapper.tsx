import React from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  bgColor?: "white" | "light" | "primary" | "gray";
}

export default function SectionWrapper({
  children,
  id,
  className = "",
  bgColor = "white",
}: SectionWrapperProps) {
  const bgStyles = {
    white: "bg-white",
    light: "bg-zinc-50 border-y border-zinc-100/50",
    primary: "bg-primary text-white",
    gray: "bg-zinc-50 border-y border-zinc-100",
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-28 px-4 md:px-8 ${bgStyles[bgColor]} ${className}`}
    >
      <div className="max-w-7xl mx-auto overflow-hidden">{children}</div>
    </section>
  );
}
