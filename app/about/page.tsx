import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { Award, Users, Leaf, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story behind Maifair — our founding vision, expert team, and unwavering commitment to luxury wellness in Mumbai.",
};

const values = [
  {
    icon: <Leaf size={28} className="text-[#c9a84c]" />,
    title: "Pure Ingredients",
    description:
      "We use only ethically sourced, certified organic botanicals and premium ingredient formulations.",
  },
  {
    icon: <Users size={28} className="text-[#c9a84c]" />,
    title: "Expert Therapists",
    description:
      "Every therapist is hand-selected and trained for a minimum of 5 years before joining the Maifair family.",
  },
  {
    icon: <ShieldCheck size={28} className="text-[#c9a84c]" />,
    title: "Total Discretion",
    description:
      "Your privacy is sacred. Private suites, confidential records, and complete personal respect at all times.",
  },
];

const awards = [
  "Best Luxury Spa — Mumbai Times 2024",
  "Excellence in Wellness — India Spa Awards",
  "Top Rated Spa — Google Reviews 4.9★",
  "Certified Organic Spa — GreenSpa Alliance",
  "Best Bridal Package — WedMeGood 2024",
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end pb-16 grain-overlay overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/35495081/pexels-photo-35495081.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Maifair spa ambiance"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[rgba(10,10,10,0.6)] to-[rgba(10,10,10,0.3)]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <span className="section-label mb-3 block">Our Journey</span>
          <h1
            className="font-display text-[clamp(2.5rem,6vw,5rem)] font-light text-[#f5f0e8]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            About{" "}
            <span className="italic text-gradient-gold">Maifair</span>
          </h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-section bg-[#0a0a0a] grain-overlay">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/6187255/pexels-photo-6187255.jpeg?auto=compress&cs=tinysrgb&w=1920"
                  alt="Maifair founding story"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-30" />
                <span className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-[#c9a84c] opacity-60" />
                <span className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-[#c9a84c] opacity-60" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="space-y-6">
              <span className="section-label">Our Story</span>
              <h2
                className="font-display text-[clamp(2rem,4vw,3rem)] font-light text-[#f5f0e8]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Born of a <span className="italic text-gradient-gold">Vision</span>
              </h2>
              <span className="gold-divider gold-divider-left" />
              <p className="text-[#d4c9b8] font-light leading-relaxed text-sm">
                Maifair was born in 2024 from a singular vision: to create Mumbai&apos;s most
                extraordinary wellness sanctuary. Our founder, Priya Raghunathan, spent a decade
                studying under master practitioners in Thailand, Bali, and Switzerland before
                returning to India with a dream of bringing world-class luxury wellness home.
              </p>
              <p className="text-[#d4c9b8] font-light leading-relaxed text-sm">
                Every corner of Maifair is designed with intention — the scent in the air, the
                textures beneath your fingertips, the quality of silence between notes of ambient
                music. We obsess over the details so you can surrender completely and simply
                &ldquo;be.&rdquo;
              </p>
              <p className="text-[#d4c9b8] font-light leading-relaxed text-sm">
                Today, Maifair serves thousand of guests each year — from high-profile celebrities
                to brides seeking transcendence, couples rekindling intimacy, and executives
                escaping the relentless pace of modern life.
              </p>

              <div className="grid grid-cols-3 gap-6 pt-4">
                {[
                  { num: "2+", label: "Years of Excellence" },
                  { num: "5000+", label: "Happy Guests" },
                  { num: "15+", label: "Expert Therapists" },
                ].map(({ num, label }) => (
                  <div key={label} className="text-center">
                    <span
                      className="block font-display text-3xl text-[#c9a84c] font-light"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      {num}
                    </span>
                    <span className="text-xs text-[#d4c9b8] font-light tracking-wide">{label}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-section bg-[#1a1a1a] grain-overlay">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <span className="section-label justify-center">What We Stand For</span>
            <h2
              className="font-display text-[clamp(2rem,5vw,3.5rem)] font-light text-[#f5f0e8] mt-4"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Our <span className="italic text-gradient-gold">Values</span>
            </h2>
            <span className="gold-divider mt-4" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.15} className="luxury-card p-8 text-center flex flex-col items-center gap-5">
                <div className="w-16 h-16 rounded-full border border-[rgba(201,168,76,0.3)] flex items-center justify-center">
                  {v.icon}
                </div>
                <h3
                  className="font-display text-xl font-light text-[#f5f0e8]"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {v.title}
                </h3>
                <span className="gold-divider" />
                <p className="text-[#d4c9b8] text-sm font-light leading-relaxed">{v.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


      {/* Video section */}
      <section className="py-section bg-[#1a1a1a] grain-overlay">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection className="mb-10">
            <span className="section-label justify-center">Watch & Discover</span>
            <h2
              className="font-display text-[clamp(2rem,5vw,3.5rem)] font-light text-[#f5f0e8] mt-4"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              A Window into <span className="italic text-gradient-gold">Maifair</span>
            </h2>
            <span className="gold-divider mt-4" />
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative aspect-video border border-[rgba(201,168,76,0.2)] overflow-hidden">
              <video
                src="https://res.cloudinary.com/dvda87mbm/video/upload/q_auto,w_1280/v1777027398/lv_0_20260417143311_vurz1h.mp4"
                controls
                preload="none"
                className="w-full h-full object-cover"
                poster="https://images.pexels.com/photos/19150538/pexels-photo-19150538.jpeg?auto=compress&cs=tinysrgb&w=1600"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 bg-[#0a0a0a] grain-overlay border-t border-[rgba(201,168,76,0.12)]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-10">
            <span className="section-label justify-center">Recognition</span>
            <h2
              className="font-display text-2xl font-light text-[#f5f0e8] mt-3"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Awards & Certifications
            </h2>
          </AnimatedSection>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {awards.map((award, i) => (
              <AnimatedSection key={award} delay={i * 0.08}>
                <div className="flex items-center gap-3 border border-[rgba(201,168,76,0.2)] px-5 py-3 hover:border-[rgba(201,168,76,0.5)] transition-colors duration-300">
                  <Award size={16} className="text-[#c9a84c] shrink-0" />
                  <span className="text-sm text-[#d4c9b8] font-light whitespace-nowrap">{award}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
