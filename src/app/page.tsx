import Hero from "@/components/Home/Hero";
import ServicesOverview from "@/components/Home/ServicesOverview";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import GalleryPreview from "@/components/Home/GalleryPreview";
import Testimonials from "@/components/Home/Testimonials";
import ContactSection from "@/components/Home/ContactSection";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button/Button";
import { MessageCircle, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Printing & Repair Services – Arwal, Bihar",
  description: "Experience the best printing, mobile repair, and laptop servicing at Ajay Press. 10+ years of trust in Arwal market.",
};

export default function Home() {
  const whatsappNumber = "9471967853";
  const whatsappMessage = "Hello, I want to know more about your services.";
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <div className="flex flex-col w-full">
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      
      {/* Premium CTA Banner Section */}
      <SectionWrapper bgColor="gray" className="py-32">
        <div className="relative bg-white rounded-[40px] p-12 md:p-24 overflow-hidden soft-shadow border border-zinc-50 text-center">
          {/* Internal Mesh Background for Texture */}
          <div className="mesh-gradient opacity-10" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-10">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-zinc-900 leading-[1.1]">
              Need Professional <br />
              <span className="text-primary italic">Service Today?</span>
            </h2>
            <p className="text-zinc-500 text-xl font-medium leading-relaxed max-w-2xl mx-auto">
              Click below to chat or call us directly. We are ready to help you with precision printing and expert repairs in Arwal.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Button
                text="WhatsApp Inquiry"
                href={whatsappLink}
                variant="whatsapp"
                icon={<MessageCircle className="w-6 h-6" />}
                className="px-12 py-5 text-lg shadow-xl shadow-whatsapp/10"
              />
              <Button
                text="Fast Consultation"
                href={`tel:${whatsappNumber}`}
                variant="primary"
                icon={<Phone className="w-6 h-6" />}
                className="px-12 py-5 text-lg shadow-xl shadow-primary/20"
              />
            </div>
            
            <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest pt-4">
              Your Most Trusted Local Partner Since 2014
            </p>
          </div>
        </div>
      </SectionWrapper>

      <GalleryPreview />
      <Testimonials />
      <ContactSection />
    </div>
  );
}
