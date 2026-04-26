"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const images = [
  { src: "https://images.pexels.com/photos/8789614/pexels-photo-8789614.jpeg?auto=compress&cs=tinysrgb&w=600", label: "Ambiance" },
  { src: "https://images.pexels.com/photos/6187839/pexels-photo-6187839.jpeg?auto=compress&cs=tinysrgb&w=600", label: "Treatments" },
  { src: "https://images.pexels.com/photos/35495081/pexels-photo-35495081.jpeg?auto=compress&cs=tinysrgb&w=600", label: "Interiors" },
  { src: "https://images.pexels.com/photos/14929575/pexels-photo-14929575.jpeg?auto=compress&cs=tinysrgb&w=600", label: "Wellness" },
  { src: "https://images.pexels.com/photos/6724512/pexels-photo-6724512.jpeg?auto=compress&cs=tinysrgb&w=600", label: "Rituals" },
];

export default function HomeGalleryStrip() {
  return (
    <section className="py-section bg-[#1a1a1a] grain-overlay overflow-hidden" id="gallery-strip">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="section-label">Visual Journey</span>
            <h2
              className="font-display text-[clamp(2rem,4vw,3rem)] font-light text-[#f5f0e8] mt-3"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              A Glimpse of{" "}
              <span className="italic text-gradient-gold">Maifair</span>
            </h2>
          </div>
          <Link href="/gallery" id="home-gallery-link" className="btn-outline-gold shrink-0">
            Full Gallery
          </Link>
        </AnimatedSection>

        {/* Gallery strip */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {images.map(({ src, label }, i) => (
            <AnimatedSection
              key={label}
              delay={i * 0.08}
              className={`relative overflow-hidden group ${i === 2 ? "md:row-span-1" : ""}`}
            >
              <div className={`relative overflow-hidden ${i === 0 || i === 4 ? "aspect-[3/4]" : "aspect-square"}`}>
                <Image
                  src={src}
                  alt={label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[rgba(10,10,10,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                  <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
                    {label}
                  </span>
                </div>
                {/* Gold border on hover */}
                <div className="absolute inset-0 border border-[#c9a84c] opacity-0 group-hover:opacity-60 transition-opacity duration-400" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
