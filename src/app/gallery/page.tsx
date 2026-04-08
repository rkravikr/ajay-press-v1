import { Metadata } from "next";
import GalleryContent from "./GalleryContent";

export const metadata: Metadata = {
  title: "Gallery",
  description: "View our portfolio of printing work, specialized machines, and local Arwal shop photos.",
};

export default function GalleryPage() {
  return <GalleryContent />;
}
