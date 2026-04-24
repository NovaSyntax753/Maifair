"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HomeHero() {
  return (
    <section className="hero-video-container grain-overlay" id="hero">
      {/* Video background */}
      <video
        src="/videos/hero.mp4"
        type="video/mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1920&q=80"
      />

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-6 max-w-4xl"
        >
          {/* Label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="section-label justify-center"
          >
            Est. 2024 · Nagpur
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="font-display text-[clamp(3rem,7vw,6rem)] font-light text-[#f5f0e8] leading-tight"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Where Luxury{" "}
            <span className="italic text-gradient-gold">Meets</span>{" "}
            Serenity
          </motion.h1>

          {/* Divider */}
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="gold-divider block"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="font-body text-[#d4c9b8] text-lg font-light max-w-xl mx-auto leading-relaxed"
          >
            A sanctuary of bespoke wellness rituals, world-class therapists, and
            unparalleled indulgence — crafted exclusively for you.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link href="/booking" id="hero-book-cta" className="btn-gold px-10 py-4 text-sm">
              Book Your Experience
            </Link>
            <Link
              href="/services"
              id="hero-services-link"
              className="btn-outline-gold px-10 py-4 text-sm"
            >
              Explore Services
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[rgba(201,168,76,0.6)] text-[0.6rem] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <ChevronDown
          size={20}
          className="text-[#c9a84c] animate-[scroll-bounce_2s_ease-in-out_infinite]"
        />
      </motion.div>
    </section>
  );
}
