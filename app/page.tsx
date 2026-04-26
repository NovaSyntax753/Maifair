import type { Metadata } from "next";
import HomeHero from "./_sections/HomeHero";
import HomeExperience from "./_sections/HomeExperience";
import HomeFeaturedServices from "./_sections/HomeFeaturedServices";
import HomeWhyChoose from "./_sections/HomeWhyChoose";
import HomeTestimonials from "./_sections/HomeTestimonials";
import HomeGalleryStrip from "./_sections/HomeGalleryStrip";
import HomeCTABanner from "./_sections/HomeCTABanner";

export const metadata: Metadata = {
  title: "Maifair — The Luxurious Spa | Where Luxury Meets Serenity",
  description:
    "Experience Nagpur's most exclusive luxury spa. World-class body massages, aromatherapy, and bespoke wellness rituals await you at Maifair.",
  openGraph: {
    title: "Maifair — The Luxurious Spa",
    description: "Where luxury meets serenity. Book your transcendent spa experience today.",
  },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeExperience />
      <HomeFeaturedServices />
      <HomeWhyChoose />
      <HomeTestimonials />
      <HomeGalleryStrip />
      <HomeCTABanner />
    </>
  );
}
