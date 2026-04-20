"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";
import { Sparkles, Flame, Users, Scissors } from "lucide-react";

const featured = [
  {
    icon: <Sparkles size={28} />,
    name: "Balinese Massage",
    description: "Balinese massage is an approach to massage developed in the Indonesian province of Bali, With influence from the traditional medicine systems of India, China, and Southeast Asia.",
    duration: "60 / 90 / 120 min",
    priceFrom: "₹3,500",
  },
  {
    icon: <Flame size={28} />,
    name: "Swedish Massage",
    description: "Swedish massage involves long, kneading strokes combined with rhythmic tapping strokes and movement of the joints.",
    duration: "60 / 90 / 120 min",
    priceFrom: "₹3,500",
  },
  {
    icon: <Users size={28} />,
    name: "Four Hand Massage",
    description: "Experience the ultimate indulgence with two therapists working in harmony. A synchronised journey designed to provide double the relaxation.",
    duration: "60 / 90 / 120 min",
    priceFrom: "₹5,000",
  },
  {
    icon: <Scissors size={28} />,
    name: "Hamam Therapy",
    description: "A deeply purifying and detoxifying Turkish bath ritual that includes rigorous exfoliation, soothing foam massage, and a renewed radiance.",
    duration: "90 min",
    priceFrom: "₹5,500",
  },
];

export default function HomeFeaturedServices() {
  return (
    <section className="py-section bg-[#0a0a0a] grain-overlay" id="featured-services">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="section-label">Our Offerings</span>
            <h2
              className="font-display text-[clamp(2rem,5vw,3.5rem)] font-light text-[#f5f0e8] mt-3"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Featured{" "}
              <span className="italic text-gradient-gold">Services</span>
            </h2>
          </div>
          <Link href="/services" id="home-view-all-services" className="btn-outline-gold shrink-0">
            View All Services
          </Link>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {featured.map((s, i) => (
            <ServiceCard key={s.name} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
