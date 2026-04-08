"use client";

import React, { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button/Button";
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2 
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const whatsappNumber = "9471967853";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.message) {
      setSubmitted(true);
      const text = `Contact Inquiry:\nName: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
      const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
      setTimeout(() => window.open(waLink, "_blank"), 1000);
    }
  };

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Light Mesh Header */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-zinc-50">
        <div className="mesh-gradient opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1 bg-primary/5 text-primary border border-primary/10 font-bold text-xs uppercase tracking-widest rounded-full mb-6">
            Get In Touch
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-zinc-900 leading-[1.1] mb-8">
            How Can We <br />
            <span className="text-primary italic">Help You?</span>
          </h1>
          <p className="text-zinc-500 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Have an urgent repair or a custom printing project? Visit our shop in Arwal or reach out through the form below.
          </p>
        </div>
      </section>

      <SectionWrapper bgColor="white" className="py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          {/* Inquiry Form */}
          <div className="lg:col-span-2 bg-white rounded-[40px] p-8 md:p-16 soft-shadow border border-zinc-50">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-primary/5 text-primary rounded-3xl flex items-center justify-center mb-8 shadow-inner">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h2 className="text-4xl font-black text-zinc-900 mb-4 tracking-tight">Message Sent!</h2>
                <p className="text-zinc-500 font-medium max-w-xs mb-10 leading-relaxed">
                  We&apos;ll review your inquiry and get back to you shortly. Opening WhatsApp for quicker response...
                </p>
                <Button 
                  text="Send Another Inquiry" 
                  href="/contact" 
                  variant="primary" 
                  className="px-12 py-5"
                />
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="space-y-4">
                  <h2 className="text-3xl font-black text-zinc-900 tracking-tight">Send An Inquiry</h2>
                  <div className="w-16 h-2 bg-primary/10 rounded-full" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                  <div className="space-y-3">
                    <label htmlFor="name" className="text-xs font-black text-zinc-400 uppercase tracking-widest pl-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      placeholder="e.g. Rahul Kumar" 
                      className="w-full h-16 px-8 rounded-2xl bg-zinc-50 border border-zinc-100 focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/5 text-zinc-900 font-bold outline-none transition-all placeholder:text-zinc-300"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="phone" className="text-xs font-black text-zinc-400 uppercase tracking-widest pl-1">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone"
                      required
                      placeholder="e.g. 94719XXXXX" 
                      className="w-full h-16 px-8 rounded-2xl bg-zinc-50 border border-zinc-100 focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/5 text-zinc-900 font-bold outline-none transition-all placeholder:text-zinc-300"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label htmlFor="message" className="text-xs font-black text-zinc-400 uppercase tracking-widest pl-1">Service Details</label>
                  <textarea 
                    id="message"
                    required
                    placeholder="Describe your printing or repair requirement in detail..." 
                    className="w-full h-48 px-8 py-6 rounded-3xl bg-zinc-50 border border-zinc-100 focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/5 text-zinc-900 font-bold outline-none transition-all resize-none placeholder:text-zinc-300"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full md:w-auto px-12 h-18 bg-primary text-white rounded-[24px] font-black text-lg shadow-2xl shadow-primary/20 hover:bg-primary/95 hover:-translate-y-1 transition-all flex items-center justify-center group active:scale-95"
                >
                  <Send className="w-6 h-6 mr-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Initiate Inquiry
                </button>
              </form>
            )}
          </div>

          {/* Contact Details Grid */}
          <div className="space-y-8">
            <div className="p-10 bg-white rounded-[40px] border border-zinc-50 soft-shadow flex flex-col space-y-6 group">
              <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center transition-all group-hover:bg-primary group-hover:text-white shadow-inner">
                <MapPin className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-zinc-900 mb-3 tracking-tight">Location</h3>
                <p className="text-zinc-500 font-medium leading-relaxed mb-6">
                  Ajay Press, Near Arwal Chowk, Main Road, Arwal, Bihar - 804401
                </p>
                <Button text="Google Maps" href="https://maps.google.com/?q=Arwal,Bihar,Ajay+Press" variant="primary" fullWidth className="py-4 shadow-lg shadow-primary/10 rounded-2xl" />
              </div>
            </div>

            <div className="p-10 bg-zinc-50 rounded-[40px] border border-zinc-100 flex flex-col space-y-6 group hover:bg-white transition-all hover:soft-shadow">
              <div className="w-16 h-16 bg-whatsapp/5 text-whatsapp rounded-2xl flex items-center justify-center transition-all group-hover:bg-whatsapp group-hover:text-white shadow-inner">
                <MessageCircle className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-zinc-900 mb-3 tracking-tight">WhatsApp Chat</h3>
                <p className="text-zinc-500 font-medium leading-relaxed mb-6">
                  Get instant quotes and digital status on WhatsApp.
                </p>
                <Button text="Start Chat" href={`https://wa.me/${whatsappNumber}`} variant="whatsapp" fullWidth className="py-4 shadow-xl shadow-whatsapp/10 rounded-2xl" />
              </div>
            </div>

            <div className="p-10 bg-white rounded-[40px] border border-zinc-50 soft-shadow flex flex-col space-y-6 group">
              <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center transition-all group-hover:bg-primary group-hover:text-white shadow-inner">
                <Phone className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-zinc-900 mb-3 tracking-tight">Direct Support</h3>
                <p className="text-zinc-500 font-medium leading-relaxed mb-6">
                  Urgent printing or repair needs? Call Ajay directly.
                </p>
                <Link href={`tel:${whatsappNumber}`} className="text-3xl font-black text-primary hover:text-secondary transition-colors tracking-tighter block mb-2">
                  +91 {whatsappNumber}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Modern Map Section */}
      <SectionWrapper bgColor="gray" className="py-32">
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-6 text-center md:text-left">
              <div className="w-16 h-16 bg-primary/5 text-primary rounded-3xl flex items-center justify-center shadow-inner">
                <Clock className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-3xl font-black text-zinc-900 tracking-tight">Visit Our Shop</h3>
                <p className="text-zinc-500 font-medium">Open 9:30 AM — 8:00 PM, All Week</p>
              </div>
            </div>
            <div className="flex -space-x-3">
               {[1,2,3].map(i => (
                 <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-zinc-200 overflow-hidden shadow-xl">
                   <Image src={`https://i.pravatar.cc/150?u=${i}`} alt="user" width={48} height={48} className="grayscale" />
                 </div>
               ))}
               <div className="w-12 h-12 rounded-full border-4 border-white bg-primary text-white flex items-center justify-center text-[10px] font-black shadow-xl">
                 +5k
               </div>
            </div>
          </div>
          
          <div className="relative w-full h-[600px] rounded-[52px] overflow-hidden soft-shadow border border-white p-2 bg-white">
            <div className="absolute inset-2 rounded-[40px] overflow-hidden bg-zinc-100 grayscale hover:grayscale-0 transition-all duration-1000">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200')" }} />
              <div className="absolute inset-0 bg-primary/5 backdrop-blur-[2px] flex items-center justify-center">
                 <div className="bg-white/95 backdrop-blur-md p-10 py-12 rounded-[32px] shadow-2xl text-center border border-white/50 max-w-sm animate-float">
                   <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-primary/30">
                     <MapPin className="w-8 h-8" />
                   </div>
                   <p className="text-2xl font-black text-zinc-900 mb-2 tracking-tight">Ajay Press Arwal</p>
                   <p className="text-zinc-500 font-medium text-sm mb-8 leading-relaxed">Main Market, Near State Bank, Arwal-Jehanabad Road</p>
                   <Button text="Open Maps" href="https://maps.google.com/?q=Arwal,Bihar,Ajay+Press" variant="primary" className="px-8 shadow-lg shadow-primary/20" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
