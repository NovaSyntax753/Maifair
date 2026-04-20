"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Certified master therapists with 10+ years of expertise",
  "100% organic, cruelty-free product formulations",
  "Private treatment suites for maximum discretion",
  "Bespoke rituals tailored to your unique needs",
  "Ultra-premium ambiance with curated sensory details",
  "Guaranteed transformation or complimentary re-treatment",
];

export default function HomeWhyChoose() {
  return (
    <section className="py-section bg-[#1a1a1a] grain-overlay overflow-hidden" id="why-maifair">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <AnimatedSection direction="left">
            <div className="relative">
              {/* Main image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/maifair-spa-interior/800/1000"
                  alt="Maifair spa interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-40" />
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-6 -right-6 bg-[#0a0a0a] border border-[rgba(201,168,76,0.3)] p-6 text-center min-w-[140px]">
                <span
                  className="block font-display text-4xl font-light text-[#c9a84c]"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  5000+
                </span>
                <span className="block text-xs text-[#d4c9b8] tracking-[0.1em] uppercase mt-1 font-light">
                  Happy Guests
                </span>
              </div>

              {/* Gold frame accent */}
              <span className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-[#c9a84c] opacity-60" />
            </div>
          </AnimatedSection>

          {/* Text side */}
          <AnimatedSection direction="right" className="space-y-7">
            <span className="section-label">Why Maifair</span>
            <h2
              className="font-display text-[clamp(2rem,4vw,3rem)] font-light text-[#f5f0e8] leading-tight"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              A Standard of Excellence{" "}
              <span className="italic text-gradient-gold">Unlike Any Other</span>
            </h2>
            <span className="gold-divider gold-divider-left" />
            <p className="text-[#d4c9b8] font-light leading-relaxed text-sm">
              We believe true luxury is not about excess — it is about refinement. Every element of
              your Maifair experience, from the moment you arrive to the moment you leave, is
              orchestrated with exquisite care and intention.
            </p>

            <ul className="space-y-4">
              {reasons.map((r, i) => (
                <AnimatedSection key={r} delay={i * 0.07} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-[#c9a84c] mt-0.5 shrink-0" />
                  <span className="text-[#d4c9b8] text-sm font-light">{r}</span>
                </AnimatedSection>
              ))}
            </ul>

            <Link href="/about" id="why-learn-more" className="btn-gold mt-2 inline-flex">
              Discover Our Story
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
