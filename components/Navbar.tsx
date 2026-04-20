"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/memberships", label: "Memberships" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[rgba(10,10,10,0.90)] backdrop-blur-md border-b border-[rgba(201,168,76,0.15)] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start group" id="nav-logo">
            <span
              className="font-display text-2xl font-light tracking-[0.25em] text-[#c9a84c] uppercase leading-none"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              MAIFAIR
            </span>
            <span className="gold-divider gold-divider-left w-full mt-1 opacity-80" />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                id={`nav-link-${label.toLowerCase()}`}
                className={`nav-link ${pathname === href ? "active" : ""}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Book Now CTA */}
          <div className="hidden lg:block">
            <Link href="/booking" id="nav-book-now" className="btn-gold text-xs">
              Book Now
            </Link>
          </div>

          {/* Hamburger */}
          <button
            id="nav-hamburger"
            onClick={() => setMenuOpen(true)}
            className="lg:hidden text-[#c9a84c] p-2"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-[#0a0a0a] flex flex-col transition-all duration-500 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-between items-center px-6 py-5">
          <span
            className="font-display text-2xl font-light tracking-[0.25em] text-[#c9a84c] uppercase"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            MAIFAIR
          </span>
          <button
            id="nav-close"
            onClick={() => setMenuOpen(false)}
            className="text-[#c9a84c] p-2"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center gap-8 px-6">
          {navLinks.map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              id={`mobile-nav-${label.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className={`font-display text-4xl font-light tracking-wide transition-all duration-300 ${
                pathname === href ? "text-[#c9a84c]" : "text-[#f5f0e8] hover:text-[#c9a84c]"
              }`}
              style={{
                fontFamily: "var(--font-cormorant)",
                transitionDelay: `${i * 50}ms`,
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                opacity: menuOpen ? 1 : 0,
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/booking"
            onClick={() => setMenuOpen(false)}
            id="mobile-nav-book"
            className="btn-gold mt-4"
          >
            Book Now
          </Link>
        </div>

        <div className="text-center pb-8 text-[rgba(201,168,76,0.5)] text-xs tracking-widest uppercase">
          Where Luxury Meets Serenity
        </div>
      </div>
    </>
  );
}
