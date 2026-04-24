"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

// Inline SVG social icons (avoids barrel-optimize issues with lucide-react)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);


const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/memberships", label: "Memberships" },
  { href: "/booking", label: "Book Now" },
];

const services = [
  "Body Massage",
  "Facial Treatments",
  "Aromatherapy",
  "Hot Stone Therapy",
  "Couple's Package",
  "Bridal Package",
  "Hair Spa",
  "Foot Reflexology",
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[rgba(201,168,76,0.15)] grain-overlay">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1 — Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Maifair Spa Logo"
                width={52}
                height={52}
                className="object-contain mix-blend-screen opacity-90"
              />
              <div>
                <span
                  className="block font-display text-3xl font-light tracking-[0.25em] text-[#c9a84c] uppercase"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  MAIFAIR
                </span>
                <span className="gold-divider gold-divider-left mt-1" />
              </div>
            </div>
            <p className="text-[#d4c9b8] text-sm leading-relaxed font-light">
              Where luxury meets serenity. A sanctuary dedicated to your deepest
              relaxation and rejuvenation — crafted for those who deserve only the finest.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.instagram.com/maifairspa?igsh=MXg3ODR2eDZkNXN4dQ=="
                target="_blank"
                rel="noreferrer"
                id="footer-instagram"
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center border border-[rgba(201,168,76,0.3)] text-[rgba(201,168,76,0.7)] hover:bg-[#c9a84c] hover:text-[#0a0a0a] hover:border-[#c9a84c] transition-all duration-300"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61574308903260"
                target="_blank"
                rel="noreferrer"
                id="footer-facebook"
                aria-label="Facebook"
                className="w-9 h-9 flex items-center justify-center border border-[rgba(201,168,76,0.3)] text-[rgba(201,168,76,0.7)] hover:bg-[#c9a84c] hover:text-[#0a0a0a] hover:border-[#c9a84c] transition-all duration-300"
              >
                <FacebookIcon />
              </a>
              <a
                href="mailto:maifairspa2@gmail.com"
                id="footer-email"
                aria-label="Email"
                className="w-9 h-9 flex items-center justify-center border border-[rgba(201,168,76,0.3)] text-[rgba(201,168,76,0.7)] hover:bg-[#c9a84c] hover:text-[#0a0a0a] hover:border-[#c9a84c] transition-all duration-300"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="font-body text-xs font-semibold tracking-[0.2em] text-[#c9a84c] uppercase mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    id={`footer-link-${label.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm text-[#d4c9b8] hover:text-[#c9a84c] transition-colors duration-300 flex items-center gap-2 group font-light"
                  >
                    <span className="w-4 h-px bg-[rgba(201,168,76,0.4)] group-hover:w-6 group-hover:bg-[#c9a84c] transition-all duration-300" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h3 className="font-body text-xs font-semibold tracking-[0.2em] text-[#c9a84c] uppercase mb-5">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href={`/services`}
                    className="text-sm text-[#d4c9b8] hover:text-[#c9a84c] transition-colors duration-300 flex items-center gap-2 group font-light"
                  >
                    <span className="w-4 h-px bg-[rgba(201,168,76,0.4)] group-hover:w-6 group-hover:bg-[#c9a84c] transition-all duration-300" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="font-body text-xs font-semibold tracking-[0.2em] text-[#c9a84c] uppercase mb-5">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-[#d4c9b8] font-light">
                <MapPin size={15} className="text-[#c9a84c] mt-0.5 shrink-0" />
                <span>Shankar Nagar, Ivana Jwellers 1st floor,<br />440010</span>
              </li>
              <li>
                <a
                  href="tel:+919209219328"
                  id="footer-phone"
                  className="flex items-center gap-3 text-sm text-[#d4c9b8] hover:text-[#c9a84c] transition-colors font-light"
                >
                  <Phone size={15} className="text-[#c9a84c] shrink-0" />
                  +91 92092 19328
                </a>
              </li>
              <li>
                <a
                  href="mailto:maifairspa2@gmail.com"
                  id="footer-email"
                  className="flex items-center gap-3 text-sm text-[#d4c9b8] hover:text-[#c9a84c] transition-colors font-light"
                >
                  <Mail size={15} className="text-[#c9a84c] shrink-0" />
                  maifairspa2@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#d4c9b8] font-light">
                <Clock size={15} className="text-[#c9a84c] mt-0.5 shrink-0" />
                <span>Mon–Sun: 10:00 AM – 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 mb-6 h-px bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.3)] to-transparent" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[rgba(212,201,184,0.6)]">
          <p className="order-2 md:order-1">
            © {new Date().getFullYear()}{" "}
            <span className="text-[#c9a84c]">Maifair</span> — The Luxurious Spa.<br className="hidden md:block lg:hidden" /> All rights
            reserved.
          </p>
          <p className="order-1 md:order-2 text-center">
            made with ❤️ by{" "}
            <a
              href="https://quickfusioninnovations.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#c9a84c] transition-colors font-medium"
            >
              QuickFusion Innovations
            </a>
          </p>
          <div className="flex items-center gap-5 order-3">
            <Link href="/privacy" className="hover:text-[#c9a84c] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#c9a84c] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
