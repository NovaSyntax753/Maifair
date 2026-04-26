import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Maifair spa. Find our address, phone, email, hours, and reach us instantly on WhatsApp.",
};

const contactDetails = [
  {
    icon: <MapPin size={18} className="text-[#c9a84c]" />,
    label: "Address",
    value: "Shankar Nagar, Ivana Jwellers 1st floor,\n440010",
  },
  {
    icon: <Phone size={18} className="text-[#c9a84c]" />,
    label: "Phone",
    value: "+91 92092 19328",
    href: "tel:+919209219328",
  },
  {
    icon: <Mail size={18} className="text-[#c9a84c]" />,
    label: "Email",
    value: "maifairspa2@gmail.com",
    href: "mailto:maifairspa2@gmail.com",
  },
  {
    icon: <Clock size={18} className="text-[#c9a84c]" />,
    label: "Hours",
    value: "Monday – Sunday\n10:00 AM – 8:00 PM",
  },
];

export default function ContactPage() {
  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919209219328";
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent("Hi Maifair! I'd like to get in touch.")}`;

  return (
    <>
      <section className="relative h-[50vh] min-h-[360px] flex items-end pb-16 grain-overlay overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/5240026/pexels-photo-5240026.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Contact Maifair"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[rgba(10,10,10,0.6)] to-[rgba(10,10,10,0.2)]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <span className="section-label mb-3 block">Reach Out</span>
          <h1
            className="font-display text-[clamp(2.5rem,6vw,5rem)] font-light text-[#f5f0e8]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Contact <span className="italic text-gradient-gold">Us</span>
          </h1>
        </div>
      </section>

      <section className="py-section bg-[#0a0a0a] grain-overlay">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection direction="left" className="space-y-10">
              <div>
                <span className="section-label">Find Us</span>
                <h2
                  className="font-display text-[clamp(2rem,4vw,3rem)] font-light text-[#f5f0e8] mt-3"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Visit the{" "}
                  <span className="italic text-gradient-gold">Sanctuary</span>
                </h2>
                <span className="gold-divider gold-divider-left mt-4" />
              </div>

              <div className="space-y-6">
                {contactDetails.map(({ icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-[rgba(201,168,76,0.3)] flex items-center justify-center shrink-0 mt-0.5">
                      {icon}
                    </div>
                    <div>
                      <span className="block text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[#c9a84c] mb-1">
                        {label}
                      </span>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm text-[#d4c9b8] font-light leading-relaxed hover:text-[#c9a84c] transition-colors whitespace-pre-line"
                        >
                          {value}
                        </a>
                      ) : (
                        <span className="text-sm text-[#d4c9b8] font-light leading-relaxed whitespace-pre-line">
                          {value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={waUrl}
                target="_blank"
                rel="noreferrer"
                id="contact-whatsapp-link"
                className="inline-flex items-center gap-3 px-6 py-3 bg-[#25D366] text-white font-body text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#1db954] transition-colors duration-300"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>

              <div className="relative aspect-video border border-[rgba(201,168,76,0.2)] overflow-hidden">
                <iframe
                  title="Maifair location map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.6!2d79.0882!3d21.1458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0f7a29baaf9%3A0xa9e7a9f7b4d25d18!2sShankar%20Nagar%2C%20Nagpur%2C%20Maharashtra%20440010!5e0!3m2!1sen!2sin!4v1700000000000"
                  className="w-full h-full grayscale"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute inset-0 pointer-events-none border border-[rgba(201,168,76,0.15)]" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="border border-[rgba(201,168,76,0.15)] p-8 md:p-10 bg-[#1a1a1a] space-y-6">
                <div>
                  <span className="section-label">Drop Us a Line</span>
                  <h2
                    className="font-display text-2xl font-light text-[#f5f0e8] mt-2"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    Send a Message
                  </h2>
                  <span className="gold-divider gold-divider-left mt-3" />
                </div>

                <form action="https://api.web3forms.com/submit" method="POST" id="contact-form" className="space-y-5">
                  <input type="hidden" name="access_key" value="1019192d-296d-4e2b-8596-51f018eb6770" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-[#c9a84c] mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="contact-name"
                        required
                        placeholder="Your name"
                        className="luxury-input w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-[#c9a84c] mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="contact-phone"
                        required
                        placeholder="Phone number"
                        className="luxury-input w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-[#c9a84c] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="contact-email"
                      required
                      placeholder="your@email.com"
                      className="luxury-input w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-[#c9a84c] mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="contact-message"
                      rows={5}
                      required
                      placeholder="How can we help you?"
                      className="luxury-input w-full resize-none"
                    />
                  </div>

                  <button type="submit" id="contact-submit" className="btn-gold w-full py-4">
                    Send Message
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
