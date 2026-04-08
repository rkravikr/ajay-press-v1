import { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Ajay Press Arwal for printing, mobile repair, or online services. Visit our shop or message us on WhatsApp.",
};

export default function ContactPage() {
  return <ContactContent />;
}
