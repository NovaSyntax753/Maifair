"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Gem, ChevronDown, ChevronUp } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const tiers = [
  {
    id: "silver",
    name: "Silver",
    price: "₹10,000",
    value: "₹11,500",
    popular: false,
  },
  {
    id: "gold",
    name: "Gold",
    price: "₹20,000",
    value: "₹22,500",
    popular: false,
  },
  {
    id: "diamond",
    name: "Diamond",
    price: "₹30,000",
    value: "₹35,000",
    popular: true,
  },
  {
    id: "platinum",
    name: "Platinum",
    price: "₹50,000",
    value: "₹60,000",
    popular: false,
  },
  {
    id: "vip",
    name: "VIP",
    price: "₹1,00,000",
    value: "₹1,25,000",
    popular: false,
  },
];

const faqs = [
  {
    q: "Can I pause or cancel my membership?",
    a: "Yes. Memberships can be paused for up to 30 days per year for travel or personal reasons. Cancellations require 30 days notice.",
  },
  {
    q: "Can I transfer unused sessions?",
    a: "Sessions can be carried forward for up to 15 days into the next billing cycle. After that, they expire.",
  },
  {
    q: "Can I gift a membership?",
    a: "Absolutely. Gift memberships are available for all tiers. Contact us to create a personalised gift package.",
  },
  {
    q: "Are treatments for couples covered?",
    a: "Gold and Platinum members can use their sessions for couple's treatments. Silver members receive a 15% discount on couple's treatments.",
  },
  {
    q: "How do I book as a member?",
    a: "Members receive a priority WhatsApp booking line. Simply message us and your dedicated coordinator will confirm within the hour.",
  },
];

export default function MembershipsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <section className="relative h-[50vh] min-h-[360px] flex items-end pb-16 grain-overlay overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/6621344/pexels-photo-6621344.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Maifair membership"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[rgba(10,10,10,0.55)] to-[rgba(10,10,10,0.2)]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <span className="section-label mb-3 block">Join The Sanctuary</span>
          <h1
            className="font-display text-[clamp(2.5rem,6vw,5rem)] font-light text-[#f5f0e8]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Membership <span className="italic text-gradient-gold">Plans</span>
          </h1>
        </div>
      </section>

      <section className="py-section bg-[#0a0a0a] grain-overlay">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <span className="section-label justify-center">Choose Your Tier</span>
            <h2
              className="font-display text-[clamp(2rem,5vw,3.5rem)] font-light text-[#f5f0e8] mt-4"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Membership <span className="italic text-gradient-gold">Privileges</span>
            </h2>
            <span className="gold-divider mt-4" />
            <p className="mt-5 text-[#d4c9b8] font-light max-w-xl mx-auto text-sm">
              Invest in your wellness with a Maifair membership — and unlock a world of curated
              luxury, priority access, and extraordinary savings.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 items-start">
            {tiers.map((tier, i) => (
              <AnimatedSection key={tier.id} delay={i * 0.12}>
                <div
                  id={`membership-card-${tier.id}`}
                  className={`luxury-card relative p-6 flex flex-col gap-5 ${
                    tier.popular ? "pricing-card-popular" : ""
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#c9a84c] text-[#0a0a0a] text-[0.55rem] font-bold tracking-[0.2em] uppercase px-4 py-1.5 whitespace-nowrap z-10">
                      Most Popular
                    </div>
                  )}

                  <div className="text-center space-y-2 pt-2">
                    <span className="block mb-3">
                      <Gem size={24} className="text-[#c9a84c] mx-auto" />
                    </span>
                    <span
                      className="block font-display text-2xl font-light text-[#f5f0e8]"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      {tier.name}
                    </span>
                    <span className="gold-divider mb-3" />
                  </div>

                  <div className="text-center flex-1">
                    <div className="flex flex-col gap-2 text-sm font-light">
                      <span className="text-[#d4c9b8]">Pay: <strong className="text-white font-medium text-base">{tier.price}</strong></span>
                      <span className="text-[#c9a84c]">Get: <strong className="font-medium">{tier.value} Massage</strong></span>
                    </div>
                  </div>

                  <Link
                    href={`/booking?service=Membership - ${tier.name}`}
                    id={`join-${tier.id}`}
                    className={`text-center ${tier.popular ? "btn-gold" : "btn-outline-gold"} w-full py-3 text-xs mt-2`}
                  >
                    Join {tier.name}
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section bg-[#1a1a1a] grain-overlay">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <span className="section-label justify-center">Questions Answered</span>
            <h2
              className="font-display text-[clamp(2rem,4vw,3rem)] font-light text-[#f5f0e8] mt-4"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Frequently Asked{" "}
              <span className="italic text-gradient-gold">Questions</span>
            </h2>
            <span className="gold-divider mt-4" />
          </AnimatedSection>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="border border-[rgba(201,168,76,0.2)] overflow-hidden">
                  <button
                    id={`faq-${i}`}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-[rgba(201,168,76,0.04)] transition-colors duration-200"
                  >
                    <span className="text-sm text-[#f5f0e8] font-light">{faq.q}</span>
                    {openFaq === i ? (
                      <ChevronUp size={16} className="text-[#c9a84c] shrink-0" />
                    ) : (
                      <ChevronDown size={16} className="text-[#c9a84c] shrink-0" />
                    )}
                  </button>
                  <div
                    style={{ maxHeight: openFaq === i ? "500px" : "0" }}
                    className="accordion-content"
                  >
                    <p className="px-5 pb-5 text-sm text-[#d4c9b8] font-light leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section bg-[#0a0a0a] grain-overlay">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatedSection className="text-center mb-10">
            <span className="section-label justify-center">Enquire Now</span>
            <h2
              className="font-display text-[clamp(2rem,4vw,3rem)] font-light text-[#f5f0e8] mt-4"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Membership <span className="italic text-gradient-gold">Enquiry</span>
            </h2>
            <span className="gold-divider mt-4" />
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <form action="https://api.web3forms.com/submit" method="POST" id="membership-enquiry-form" className="space-y-5">
              <input type="hidden" name="access_key" value="a397a39e-88ac-43dd-8af8-32ef443c32c8" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  id="membership-name"
                  required
                  placeholder="Full Name"
                  className="luxury-input w-full"
                />
                <input
                  type="tel"
                  name="phone"
                  id="membership-phone"
                  required
                  placeholder="Phone Number"
                  className="luxury-input w-full"
                />
              </div>
              <input
                type="email"
                name="email"
                id="membership-email"
                required
                placeholder="Email Address"
                className="luxury-input w-full"
              />
              <select name="tier" id="membership-tier-select" required className="luxury-input w-full">
                <option value="">Preferred Membership Tier…</option>
                <option value="Silver">Silver</option>
                <option value="Gold">Gold</option>
                <option value="Diamond">Diamond</option>
                <option value="Platinum">Platinum</option>
                <option value="VIP">VIP</option>
              </select>
              <textarea
                name="message"
                id="membership-message"
                rows={4}
                placeholder="Any specific questions or requirements…"
                className="luxury-input w-full resize-none"
              />
              <button type="submit" id="membership-submit" className="btn-gold w-full py-4">
                Send Enquiry
              </button>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
