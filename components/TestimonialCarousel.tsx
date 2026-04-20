"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "The most transcendent 90 minutes of my life. Maifair truly redefines luxury wellness in Nagpur. The attention to detail is unparalleled.",
    author: "Ananya S.",
    label: "Signature Ritual Guest",
  },
  {
    text: "Every detail is immaculate. From the ambient lighting to the expertise of the therapists. I left feeling completely grounded and restored.",
    author: "Vikram R.",
    label: "Platinum Member",
  },
  {
    text: "I felt completely reborn. The aromatherapy massage is an absolute must. Maifair is my new sanctuary in the city.",
    author: "Elena M.",
    label: "Couples Retreat",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto px-4 sm:px-12 py-10">
      <div
        className="font-display text-[8rem] leading-none text-[rgba(201,168,76,0.15)] select-none absolute -top-8 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        &ldquo;
      </div>

      <div className="relative min-h-[220px] flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="text-center absolute inset-0 flex flex-col items-center justify-center"
          >
            <p className="testimonial-quote max-w-2xl mx-auto mb-8">
              {testimonials[currentIndex].text}
            </p>
            <div>
              <span className="block text-[#f5f0e8] font-body text-sm tracking-[0.1em] uppercase mb-1">
                {testimonials[currentIndex].author}
              </span>
              <span className="text-[#c9a84c] text-xs font-light tracking-wide uppercase">
                {testimonials[currentIndex].label}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-3 mt-10">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-500 ease-in-out h-1 ${
              i === currentIndex
                ? "w-8 bg-[#c9a84c]"
                : "w-2 bg-[rgba(201,168,76,0.3)] hover:bg-[rgba(201,168,76,0.6)]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
