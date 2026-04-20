"use client";

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import "yet-another-react-lightbox/styles.css";
import AnimatedSection from "@/components/AnimatedSection";

const Lightbox = dynamic(() => import("yet-another-react-lightbox"), { ssr: false });

type Category = "All" | "Interiors" | "Treatments" | "Ambiance";

const photos: { src: string; seed: string; alt: string; category: Exclude<Category, "All"> }[] = [
  { src: "https://picsum.photos/seed/spa-int-1/800/1000", seed: "spa-int-1", alt: "Reception foyer", category: "Interiors" },
  { src: "https://picsum.photos/seed/spa-tr-1/800/600", seed: "spa-tr-1", alt: "Swedish massage", category: "Treatments" },
  { src: "https://picsum.photos/seed/spa-amb-1/800/1200", seed: "spa-amb-1", alt: "Candlelit corridor", category: "Ambiance" },
  { src: "https://picsum.photos/seed/spa-int-2/800/600", seed: "spa-int-2", alt: "Couple suite", category: "Interiors" },
  { src: "https://picsum.photos/seed/spa-tr-2/800/1000", seed: "spa-tr-2", alt: "Facial treatment", category: "Treatments" },
  { src: "https://picsum.photos/seed/spa-amb-2/800/800", seed: "spa-amb-2", alt: "Incense and flowers", category: "Ambiance" },
  { src: "https://picsum.photos/seed/spa-int-3/800/1000", seed: "spa-int-3", alt: "Treatment room", category: "Interiors" },
  { src: "https://picsum.photos/seed/spa-tr-3/800/600", seed: "spa-tr-3", alt: "Hot stone therapy", category: "Treatments" },
  { src: "https://picsum.photos/seed/spa-amb-3/800/1100", seed: "spa-amb-3", alt: "Pool area", category: "Ambiance" },
  { src: "https://picsum.photos/seed/spa-int-4/800/700", seed: "spa-int-4", alt: "Relaxation lounge", category: "Interiors" },
  { src: "https://picsum.photos/seed/spa-tr-4/800/900", seed: "spa-tr-4", alt: "Aromatherapy ritual", category: "Treatments" },
  { src: "https://picsum.photos/seed/spa-amb-4/800/600", seed: "spa-amb-4", alt: "Luxury product shelf", category: "Ambiance" },
];

const categories: Category[] = ["All", "Interiors", "Treatments", "Ambiance"];

export default function GalleryPage() {
  const [active, setActive] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filtered = active === "All" ? photos : photos.filter((p) => p.category === active);

  const slides = filtered.map((p) => ({ src: p.src, alt: p.alt }));

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] flex items-end pb-16 grain-overlay overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/seed/gallery-hero/1920/1080"
            alt="Maifair gallery"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[rgba(10,10,10,0.55)] to-[rgba(10,10,10,0.2)]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <span className="section-label mb-3 block">Visual Journey</span>
          <h1
            className="font-display text-[clamp(2.5rem,6vw,5rem)] font-light text-[#f5f0e8]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Our <span className="italic text-gradient-gold">Gallery</span>
          </h1>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-section bg-[#0a0a0a] grain-overlay">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter buttons */}
          <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`gallery-filter-${cat.toLowerCase()}`}
                onClick={() => setActive(cat)}
                className={`px-6 py-2.5 text-xs font-semibold tracking-[0.15em] uppercase border transition-all duration-300 ${
                  active === cat
                    ? "bg-[#c9a84c] text-[#0a0a0a] border-[#c9a84c]"
                    : "border-[rgba(201,168,76,0.3)] text-[#d4c9b8] hover:border-[#c9a84c] hover:text-[#c9a84c]"
                }`}
              >
                {cat}
              </button>
            ))}
          </AnimatedSection>

          {/* Masonry grid */}
          <div className="masonry-grid">
            {filtered.map((photo, i) => (
              <div
                key={photo.seed}
                className="masonry-item group relative overflow-hidden cursor-pointer"
                onClick={() => setLightboxIndex(i)}
                id={`gallery-photo-${i}`}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-108"
                    style={{ display: "block" }}
                  />
                  <div className="absolute inset-0 bg-[rgba(10,10,10,0)] group-hover:bg-[rgba(10,10,10,0.45)] transition-all duration-400 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      <div className="w-10 h-10 border border-[#c9a84c] flex items-center justify-center mx-auto mb-2">
                        <span className="text-[#c9a84c] text-xl">+</span>
                      </div>
                      <span className="text-[#c9a84c] text-xs tracking-widest uppercase">{photo.alt}</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 border border-[rgba(201,168,76,0)] group-hover:border-[rgba(201,168,76,0.3)] transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video tour */}
      <section className="py-section bg-[#1a1a1a] grain-overlay">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection className="mb-10">
            <span className="section-label justify-center">Virtual Tour</span>
            <h2
              className="font-display text-[clamp(2rem,4vw,3rem)] font-light text-[#f5f0e8] mt-4"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Explore <span className="italic text-gradient-gold">Maifair</span>
            </h2>
            <span className="gold-divider mt-4" />
            <p className="mt-4 text-[#d4c9b8] text-sm font-light">
              Take a virtual tour of our serene sanctuary before you visit.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="aspect-video border border-[rgba(201,168,76,0.2)] overflow-hidden">
              <video
                src="/videos/gallery.mp4"
                controls
                preload="none"
                className="w-full h-full object-cover"
                poster="https://picsum.photos/seed/gallery-video/1600/900?grayscale&blur=1"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        slides={slides}
        index={lightboxIndex}
      />
    </>
  );
}
