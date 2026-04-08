import React from "react";
import Link from "next/link";
import { Phone, MapPin, Mail, ChevronRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-zinc-600 py-24 px-4 md:px-8 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        {/* Business Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-black tracking-tighter text-zinc-900 group">
            AJAY<span className="text-primary group-hover:text-secondary transition-colors">PRESS</span>
          </h2>
          <p className="text-zinc-500 max-w-xs leading-relaxed font-medium">
            Your most trusted local partner for high-quality printing, mobile & laptop repair, and digital services in Arwal, Bihar.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-[0.2em]">Navigation</h3>
          <ul className="space-y-4">
            {["Home", "Services", "Gallery", "About", "Contact"].map((link) => (
              <li key={link}>
                <Link
                  href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  className="text-zinc-600 hover:text-primary font-bold transition-all flex items-center group"
                >
                  <ChevronRight className="w-4 h-4 mr-2 text-primary opacity-0 group-hover:opacity-100 transition-all -ml-6 group-hover:ml-0" />
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-[0.2em]">Contact Us</h3>
          <ul className="space-y-5">
            <li className="flex items-start group">
              <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center mr-4 shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-zinc-600 font-medium">Arwal, Bihar - India</span>
            </li>
            <li className="flex items-center group">
              <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center mr-4 shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                <Phone className="w-5 h-5" />
              </div>
              <Link href="tel:9471967853" className="text-zinc-900 font-bold hover:text-primary transition-colors">
                +91 9471967853
              </Link>
            </li>
            <li className="flex items-center group">
              <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center mr-4 shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-zinc-600 font-medium">ajaypressarwal@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div className="space-y-6">
          <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-[0.2em]">Expertise</h3>
          <div className="flex flex-wrap gap-2">
            {["Printing", "Repair", "Digital", "Accessories", "Stamps"].map((cat) => (
              <span key={cat} className="px-4 py-2 bg-zinc-50 text-zinc-600 text-xs font-bold rounded-xl border border-zinc-100 hover:bg-zinc-100 transition-colors cursor-default">
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center text-zinc-400 text-sm font-medium">
        <p>&copy; {currentYear} Ajay Press. Built for the future of service.</p>
        <p className="mt-4 md:mt-0 uppercase tracking-widest text-[10px]">Serving Bihar Since 2014</p>
      </div>
    </footer>
  );
}
