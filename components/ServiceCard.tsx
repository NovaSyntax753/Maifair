"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, DollarSign, ArrowRight } from "lucide-react";

export interface ServiceCardProps {
  name: string;
  description: string;
  duration: string;
  priceFrom: string;
  icon?: React.ReactNode;
  index?: number;
}

export default function ServiceCard({
  name,
  description,
  duration,
  priceFrom,
  icon,
  index = 0,
}: ServiceCardProps) {
  const encodedService = encodeURIComponent(name);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
      className="luxury-card group relative overflow-hidden p-8 flex flex-col"
    >
      {/* Gold corner accent */}
      <span className="absolute top-0 left-0 w-8 h-8">
        <span className="absolute top-0 left-0 w-full h-px bg-[#c9a84c]" />
        <span className="absolute top-0 left-0 h-full w-px bg-[#c9a84c]" />
      </span>
      <span className="absolute bottom-0 right-0 w-8 h-8">
        <span className="absolute bottom-0 right-0 w-full h-px bg-[#c9a84c] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="absolute bottom-0 right-0 h-full w-px bg-[#c9a84c] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </span>

      {/* Icon */}
      {icon && (
        <div className="w-12 h-12 flex items-center justify-center text-[#c9a84c] mb-5 text-3xl">
          {icon}
        </div>
      )}

      {/* Name */}
      <h3
        className="font-display text-2xl font-light text-[#f5f0e8] mb-3 leading-tight"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        {name}
      </h3>

      {/* Divider */}
      <span className="block w-10 h-px bg-[rgba(201,168,76,0.5)] mb-4 group-hover:w-16 transition-all duration-500" />

      {/* Description */}
      <p className="text-[#d4c9b8] text-sm leading-relaxed font-light flex-1 mb-6">
        {description}
      </p>

      {/* Meta */}
      <div className="flex items-center gap-5 mb-6 text-xs text-[rgba(201,168,76,0.8)]">
        <span className="flex items-center gap-1.5">
          <Clock size={12} />
          {duration}
        </span>
        <span className="flex items-center gap-1.5">
          <DollarSign size={12} />
          From {priceFrom}
        </span>
      </div>

      {/* Book CTA — reveals on hover */}
      <Link
        href={`/booking?service=${encodedService}`}
        id={`service-book-${name.toLowerCase().replace(/\s+/g, "-")}`}
        className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-[#c9a84c] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400"
      >
        Book Now <ArrowRight size={13} />
      </Link>
    </motion.div>
  );
}
