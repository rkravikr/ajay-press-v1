"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingActions() {
  const whatsappNumber = "9471967853";
  const whatsappMessage = "Hello, I want to know more about your services.";
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 left-0 right-0 z-[60] px-6 pointer-events-none flex justify-between items-end">
      {/* Call Button (Mobile Only) */}
      <div className="md:hidden pointer-events-auto">
        <a
          href={`tel:${whatsappNumber}`}
          className="flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-transform"
          aria-label="Call Ajay Press"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>

      {/* WhatsApp Button (Everywhere) */}
      <div className="ml-auto pointer-events-auto">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-whatsapp text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-transform"
          aria-label="Contact on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>
    </div>
  );
}
