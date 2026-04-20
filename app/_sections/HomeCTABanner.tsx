"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomeCTABanner() {
  return (
    <section
      className="relative py-28 bg-[#0a0a0a] grain-overlay overflow-hidden"
      id="cta-banner"
    >
      {/* Background decorative */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span
          className="font-display text-[16rem] font-light text-[rgba(201,168,76,0.025)] whitespace-nowrap select-none"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          RESERVE
        </span>
      </div>

      {/* Gold horizontal lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.4)] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.4)] to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-6"
        >
          <span className="section-label justify-center">Begin Your Journey</span>

          <h2
            className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-light text-[#f5f0e8] leading-tight"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Reserve Your{" "}
            <span className="italic text-gradient-gold">Bliss</span>
          </h2>

          <span className="gold-divider" />

          <p className="text-[#d4c9b8] font-light text-sm leading-relaxed max-w-lg mx-auto">
            Your transformation awaits. Allow us the privilege of crafting an experience
            that speaks to your soul — tailored, timeless, and utterly unforgettable.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <Link href="/booking" id="cta-banner-book" className="btn-gold px-12 py-4">
              Reserve Your Bliss
            </Link>
            <Link href="/memberships" id="cta-banner-membership" className="btn-outline-gold px-12 py-4">
              View Memberships
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
