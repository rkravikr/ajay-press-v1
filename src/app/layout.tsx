import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import FloatingActions from "@/components/FABs/FloatingActions";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ajay Press – Best Printing & Mobile Repair in Arwal",
    template: "%s | Ajay Press Arwal",
  },
  description: "Ajay Press: Your trusted destination for wedding cards, flex banners, mobile & laptop repair, and digital services in Arwal, Bihar. Since 2014.",
  keywords: ["Ajay Press", "Printing Arwal", "Mobile Repair Arwal", "Wedding Cards Arwal", "Flex Banner Arwal", "Computer Repair Bihar"],
  authors: [{ name: "Ajay Press" }],
  creator: "Ajay Press",
  publisher: "Ajay Press",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <body className="font-sans min-h-screen bg-background text-foreground flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
