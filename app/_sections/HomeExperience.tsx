"use client";

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { Sparkles, Heart, Crown } from "lucide-react";

const pillars = [
  {
    icon: <Sparkles size={28} className="text-[#c9a84c]" />,
    title: "Rejuvenation",
    description:
      "Each treatment is meticulously crafted to restore your body's natural vitality. From deep-tissue therapies to restorative rituals, emerge feeling truly renewed.",
    image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: <Heart size={28} className="text-[#c9a84c]" />,
    title: "Wellness",
    description:
      "Holistic wellness is at the heart of everything we do. We blend ancient healing traditions with modern science to nurture your mind, body, and spirit.",
    image: "https://images.pexels.com/photos/8789614/pexels-photo-8789614.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: <Crown size={28} className="text-[#c9a84c]" />,
    title: "Luxury",
    description:
      "Every detail — from our organic products to our hand-selected therapists — is curated to deliver an experience that transcends the ordinary.",
    image: "https://images.pexels.com/photos/19150538/pexels-photo-19150538.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default function HomeExperience() {
  return (
    <section className="py-section bg-[#1a1a1a] grain-overlay relative overflow-hidden" id="experience">
      {/* Background decorative text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <span
          className="font-display text-[12rem] font-light text-[rgba(201,168,76,0.03)] whitespace-nowrap"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          MAIFAIR
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="section-label justify-center">Our Philosophy</span>
          <h2
            className="font-display text-[clamp(2rem,5vw,3.5rem)] font-light text-[#f5f0e8] mt-4"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            The{" "}
            <span className="italic text-gradient-gold">Maifair</span>{" "}
            Experience
          </h2>
          <span className="gold-divider mt-4" />
          <p className="mt-5 text-[#d4c9b8] font-light max-w-xl mx-auto text-sm leading-relaxed">
            At Maifair, a spa visit is not merely an appointment — it is a ritual. A sacred pause
            in a world that never stops moving.
          </p>
        </AnimatedSection>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.15} className="text-center group">
              <div className="relative bg-[#0a0a0a] border border-[rgba(201,168,76,0.15)] p-10 flex flex-col items-center gap-5 hover:border-[rgba(201,168,76,0.4)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_48px_rgba(0,0,0,0.5)] overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image src={p.image} alt={p.title} fill className="object-cover opacity-30 transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/60" />
                </div>

                {/* Gold corner */}
                <span className="absolute top-0 right-0 w-6 h-6 z-10">
                  <span className="absolute top-0 right-0 w-full h-px bg-[#c9a84c] opacity-40" />
                  <span className="absolute top-0 right-0 h-full w-px bg-[#c9a84c] opacity-40" />
                </span>

                <div className="relative z-10 flex flex-col items-center gap-5">
                  {/* Icon circle */}
                  <div className="w-16 h-16 rounded-full border border-[rgba(201,168,76,0.3)] bg-[#0a0a0a] flex items-center justify-center group-hover:border-[#c9a84c] group-hover:shadow-[0_0_20px_rgba(201,168,76,0.15)] transition-all duration-400">
                    {p.icon}
                  </div>

                  <h3
                    className="font-display text-2xl font-light text-[#f5f0e8]"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {p.title}
                  </h3>
                  <span className="gold-divider" />
                  <p className="text-[#d4c9b8] text-sm leading-relaxed font-light">
                    {p.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
