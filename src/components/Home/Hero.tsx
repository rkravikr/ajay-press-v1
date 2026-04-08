"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Button from "../Button/Button";
import { MessageCircle, Phone, ArrowRight, Star, Award, Clock } from "lucide-react";

export default function Hero() {
  const whatsappNumber = "9471967853";
  const whatsappMessage = "Hello, I want to know more about your services.";
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const stats = [
    { label: "Years Experience", value: "10+", icon: <Clock className="w-4 h-4 text-primary" /> },
    { label: "Happy Customers", value: "5k+", icon: <Star className="w-4 h-4 text-primary" /> },
    { label: "Customer Rating", value: "4.9/5", icon: <Award className="w-4 h-4 text-primary" /> },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white">
      {/* Dynamic Light Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="mesh-gradient" />
        
        {/* Animated Subtle Orbs */}
        <motion.div 
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-50/40 rounded-full blur-[150px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-24">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Text Content */}
          <div className="max-w-3xl space-y-8 text-center lg:text-left">
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.span 
                className="inline-block px-4 py-1 bg-primary/5 text-primary border border-primary/10 font-bold text-xs uppercase tracking-widest rounded-full"
              >
                Arwal&apos;s Premium Service Studio
              </motion.span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-zinc-900 leading-[1.05] tracking-tight">
                Quality <span className="text-primary">Printing</span> <br />
                & Smart Repairs
              </h1>
              <p className="text-lg md:text-xl text-zinc-600 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
                Experience precision in every print and speed in every repair. Your trusted local partner for high-quality business solutions.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
              <Button
                text="WhatsApp Now"
                href={whatsappLink}
                variant="whatsapp"
                className="px-8 py-4 text-lg shadow-xl shadow-whatsapp/10"
              />
              <Button
                text="Call Ajay"
                href={`tel:${whatsappNumber}`}
                variant="primary"
                className="px-8 py-4 text-lg shadow-xl shadow-primary/20"
              />
              <Button
                text="Explore Services"
                href="/services"
                variant="secondary"
                icon={<ArrowRight className="w-5 h-5" />}
                className="px-8 py-4 text-lg border-zinc-200 text-zinc-900 hover:bg-zinc-50 shadow-sm"
              />
            </motion.div>

            {/* Desktop Only Stats */}
            <motion.div variants={itemVariants} className="hidden lg:flex items-center space-x-12 pt-10 border-t border-zinc-100">
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="flex items-center mb-1">
                    <span className="text-2xl font-black text-zinc-900 group-hover:text-primary transition-colors">{stat.value}</span>
                  </div>
                  <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Visual Element Case */}
          <div className="relative flex justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-lg relative z-10">
              <motion.div 
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white p-8 rounded-3xl soft-shadow border border-zinc-50 sm:mt-12"
              >
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">Instant Repair</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">Most repairs are handled while you wait. Mobile and laptop expertise.</p>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white p-8 rounded-3xl soft-shadow border border-zinc-50"
              >
                <div className="w-14 h-14 bg-amber-500/5 rounded-2xl flex items-center justify-center mb-6">
                  <Star className="w-7 h-7 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">High Quality</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">Premium printing materials and genuine spare parts for longevity.</p>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="lg:hidden bg-white p-6 rounded-3xl soft-shadow col-span-1 sm:col-span-2 border border-zinc-50 flex justify-between items-center"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center px-4">
                    <p className="text-2xl font-black text-zinc-900">{stat.value}</p>
                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-tight">{stat.label.split(' ')[0]}</p>
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Background Accent */}
            <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full scale-110 -z-10" />
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 rounded-full border-2 border-zinc-200 flex justify-center pt-2">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-1 rounded-full bg-zinc-400" 
          />
        </div>
      </motion.div>
    </section>
  );
}
