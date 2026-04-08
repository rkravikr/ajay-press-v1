import React from "react";
import SectionWrapper from "../SectionWrapper";
import Button from "../Button/Button";
import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";

export default function ContactSection() {
  const whatsappNumber = "9471967853";
  const whatsappMessage = "Hello, I want to know more about your services.";
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <SectionWrapper id="contact" bgColor="white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Contact info grid */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Visit <span className="text-primary">Our Shop</span>
            </h2>
            <p className="text-zinc-500 text-lg leading-relaxed max-w-xl">
              We are located in the heart of Arwal, Bihar. Feel free to visit us or contact us online for all your services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-foreground">Address</p>
                <p className="text-zinc-500">Ajay Press, Arwal, Bihar - 804401</p>
              </div>
            </div>

            <div className="space-y-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-foreground">Call Us</p>
                <Link href={`tel:${whatsappNumber}`} className="text-zinc-500 hover:text-primary transition-colors">
                  +91 {whatsappNumber}
                </Link>
              </div>
            </div>

            <div className="space-y-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-foreground">WhatsApp</p>
                <Link href={whatsappLink} className="text-zinc-500 hover:text-primary transition-colors">
                  Chat Now
                </Link>
              </div>
            </div>

            <div className="space-y-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-foreground">Business Hours</p>
                <p className="text-zinc-500 italic">Mon-Sat: 9 AM - 8 PM</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              text="Book on WhatsApp"
              href={whatsappLink}
              variant="whatsapp"
              icon={<MessageCircle className="w-5 h-5" />}
              fullWidth
            />
            <Button
              text="Call for Inquiry"
              href={`tel:${whatsappNumber}`}
              variant="primary"
              icon={<Phone className="w-5 h-5" />}
              fullWidth
            />
          </div>
        </div>

        {/* Map Placeholder Container */}
        <div className="w-full h-[400px] lg:h-full min-h-[400px] bg-zinc-200 rounded-3xl overflow-hidden shadow-2xl relative border-8 border-white group">
          {/* Replace with actual iframe in production */}
          <div className="absolute inset-0 bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700" style={{ backgroundImage: "url('https://maps.googleapis.com/maps/api/staticmap?center=Arwal,Bihar,India&zoom=14&size=800x800&key=YOUR_API_KEY')" }}>
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-[2px]">
            <div className="p-8 bg-white/90 backdrop-blur shadow-2xl rounded-2xl text-center max-w-sm border border-white">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="font-bold text-primary mb-2 text-xl tracking-tighter">AJAY PRESS LOCATION</p>
              <p className="text-zinc-600 mb-6 text-sm">Our shop is conveniently located near the main Arwal Chowk.</p>
              <Button text="Get Directions" href="https://maps.google.com/?q=Arwal,Bihar,Ajay+Press" variant="secondary" />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

// Helper Link wrapper if not using Next Link internally for these simple items
import Link from "next/link";
