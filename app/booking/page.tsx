import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book Your Experience",
  description:
    "Reserve your luxury spa treatment at Maifair. Choose your service, date, and time — we confirm within 2 hours.",
};

export default function BookingPage() {
  return (
    <>
      <section className="relative h-[45vh] min-h-[320px] flex items-end pb-14 grain-overlay overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/seed/booking-hero/1920/1080"
            alt="Book your Maifair experience"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[rgba(10,10,10,0.6)] to-[rgba(10,10,10,0.3)]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <span className="section-label mb-3 block">Reserved for You</span>
          <h1
            className="font-display text-[clamp(2.5rem,6vw,5rem)] font-light text-[#f5f0e8]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Book Your <span className="italic text-gradient-gold">Experience</span>
          </h1>
        </div>
      </section>

      <section className="py-section bg-[#0a0a0a] grain-overlay">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            <AnimatedSection direction="left" className="lg:col-span-2 space-y-8">
              <div>
                <span className="section-label">Reserve Today</span>
                <h2
                  className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-light text-[#f5f0e8] mt-3"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Your Bliss{" "}
                  <span className="italic text-gradient-gold">Awaits</span>
                </h2>
                <span className="gold-divider gold-divider-left mt-4" />
                <p className="mt-5 text-[#d4c9b8] font-light text-sm leading-relaxed">
                  Complete the form and we&apos;ll confirm your appointment within 2 hours via
                  WhatsApp and email. For same-day bookings, call us directly.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  {
                    label: "Confirmation",
                    value: "Within 2 hours by WhatsApp & Email",
                  },
                  {
                    label: "Cancellation Policy",
                    value: "Free cancellation up to 24 hours before",
                  },
                  {
                    label: "Arrival",
                    value: "Please arrive 10 minutes early to prepare",
                  },
                  {
                    label: "What to Bring",
                    value: "Just yourself — we provide all essentials",
                  },
                ].map(({ label, value }) => (
                  <div key={label} className="border-l-2 border-[rgba(201,168,76,0.3)] pl-4">
                    <span className="block text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[#c9a84c] mb-1">
                      {label}
                    </span>
                    <span className="text-sm text-[#d4c9b8] font-light">{value}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2} className="lg:col-span-3">
              <div className="border border-[rgba(201,168,76,0.15)] p-8 md:p-10 bg-[#1a1a1a]">
                <Suspense fallback={<div className="text-[#d4c9b8] text-sm">Loading form…</div>}>
                  <BookingForm />
                </Suspense>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
