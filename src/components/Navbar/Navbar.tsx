"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body scroll lock effect
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-zinc-200"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <span className="text-2xl font-black tracking-tighter transition-colors text-zinc-900">
                AJAY<span className="text-primary group-hover:text-secondary transition-colors">PRESS</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-bold transition-all hover:text-primary ${
                    pathname === link.href ? "text-primary" : "text-zinc-600"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="tel:9471967853"
                className="px-6 py-2.5 bg-primary text-white text-sm font-bold rounded-full hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-zinc-900 hover:bg-zinc-100 rounded-lg transition-colors"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Moved outside <nav> to prevent fixed nesting glitches */}
      <div
        className={`fixed inset-0 w-full h-[100dvh] bg-white z-[120] transform transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full bg-white relative">
          <div className="flex justify-between items-center p-6 border-b border-zinc-100 bg-white">
            <span className="text-2xl font-black tracking-tighter text-zinc-900">
              AJAY<span className="text-primary">PRESS</span>
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-zinc-900 hover:bg-zinc-100 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-grow flex flex-col items-center justify-center space-y-10 py-10 overflow-y-auto bg-white">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-4xl font-black transition-all ${
                  pathname === link.href ? "text-primary scale-110" : "text-zinc-300 hover:text-zinc-900"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-10 space-y-6 w-full px-12">
              <Link
                href="tel:9471967853"
                className="w-full flex items-center justify-center px-8 py-5 bg-primary text-white text-xl font-bold rounded-2xl shadow-2xl shadow-primary/30"
              >
                <Phone className="w-5 h-5 mr-3" />
                Call Now
              </Link>
              <div className="text-center space-y-1">
                <p className="text-zinc-400 text-xs font-bold uppercase tracking-[0.2em]">
                  Premium Printing & Repair
                </p>
                <p className="text-zinc-300 text-[10px] font-medium uppercase tracking-widest">
                  Arwal, Bihar • Since 2014
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
