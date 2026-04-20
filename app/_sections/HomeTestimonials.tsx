"use client";

import AnimatedSection from "@/components/AnimatedSection";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export default function HomeTestimonials() {
  return (
    <section className="py-section bg-[#0a0a0a] grain-overlay" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="section-label justify-center">Client Stories</span>
          <h2
            className="font-display text-[clamp(2rem,5vw,3.5rem)] font-light text-[#f5f0e8] mt-4"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Voices of{" "}
            <span className="italic text-gradient-gold">Serenity</span>
          </h2>
          <span className="gold-divider mt-4" />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <TestimonialCarousel />
        </AnimatedSection>
      </div>
    </section>
  );
}
