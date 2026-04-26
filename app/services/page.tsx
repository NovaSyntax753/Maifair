import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";
import { Wind, Gem, Flame, Heart, Scissors, Footprints, Sparkles, Users, Droplets, Target, Waves } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore all Maifair spa services — body massage, aromatherapy, hot stone therapy, couple's packages, bridal packages, and foot reflexology.",
};

const premiumMassages = [
  {
    icon: <Gem size={28} />,
    name: "Thai",
    description: "Dry massage has gained popularity for its unique approach to relaxation and rejuvenation without the use of oils or lotions.",
    duration: "60 / 90 / 120 min",
    priceFrom: "₹4,000",
    image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: <Sparkles size={28} />,
    name: "Sports Spa (Soothing Oil)",
    description: "Designed for active individuals, focusing on preventing and treating injury, enhancing athletic performance, and reducing muscle fatigue.",
    duration: "60 / 90 / 120 min",
    priceFrom: "₹4,000",
    image: "https://images.pexels.com/photos/3741314/pexels-photo-3741314.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: <Users size={28} />,
    name: "Four Hand Massage",
    description: "When two therapist and four hands hit your body your mind reacts differently you can selecet any therapy and experience two full body massage at the same time. It fulls stressed skins to more serene state with relaxing & rejuvenating massage modalities.",
    duration: "60 / 90 / 120 min",
    priceFrom: "₹5,000",
    image: "https://images.pexels.com/photos/8789614/pexels-photo-8789614.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  {
    icon: <Scissors size={28} />,
    name: "Hamam Therapy",
    description: "A deeply purifying and detoxifying Turkish bath ritual that includes rigorous exfoliation, soothing foam massage, and a renewed radiance.",
    duration: "90 min",
    priceFrom: "₹5,500",
    image: "https://images.pexels.com/photos/35149433/pexels-photo-35149433.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: <Flame size={28} />,
    name: "Hot Potli",
    description: "A traditional therapy using heated herbal pouches to alleviate pain, improve circulation, and deeply relax tense muscles.",
    duration: "90 min",
    priceFrom: "₹6,000",
    image: "https://images.pexels.com/photos/33852650/pexels-photo-33852650.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: <Flame size={28} />,
    name: "Hot Stone",
    description: "Smooth, heated stones are placed on specific points of your body to promote deep muscle relaxation and ease tension.",
    duration: "90 min",
    priceFrom: "₹7,000",
    image: "https://images.pexels.com/photos/14929575/pexels-photo-14929575.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: <Target size={28} />,
    name: "Signature Indulgence",
    description: "Our exclusive full-body treatment combining exfoliation (Scrub), therapeutic massages (Swedish + Deep Tissue), and a nourishing Wrap.",
    duration: "90 min",
    priceFrom: "₹7,000",
    image: "https://images.pexels.com/photos/35495081/pexels-photo-35495081.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: <Waves size={28} />,
    name: "Jacuzzi",
    description: "Immerse yourself in our private Jacuzzi to soothe tired muscles, improve circulation, and experience complete relaxation.",
    duration: "90 / 120 min",
    priceFrom: "₹9,500",
    image: "https://images.pexels.com/photos/14929575/pexels-photo-14929575.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const basicTherapies = [
  {
    icon: <Wind size={28} />,
    name: "Lomi Lomi Massage",
    description: "Lomi Lomi (or LomiLomi) massage is an integrative massage practice that began in ancient hawaii and is gaining popularity around the world.",
    duration: "60 / 90 / 120 min",
    priceFrom: "₹2,500",
    image: "https://images.pexels.com/photos/6621344/pexels-photo-6621344.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: <Droplets size={28} />,
    name: "Aroma Therapy",
    description: "A holistic healing treatment that uses natural plant extracts to promote health and well-being, enhancing both physical and emotional health.",
    duration: "60 / 90 / 120 min",
    priceFrom: "₹3,000",
    image: "https://images.pexels.com/photos/5240026/pexels-photo-5240026.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: <Heart size={28} />,
    name: "Swedish Massage",
    description: "Swedish massage involves long, kneading strokes combined with rhythmic tapping strokes and movement of the joints.",
    duration: "60 / 90 / 120 min",
    priceFrom: "₹3,500",
    image: "https://images.pexels.com/photos/5240026/pexels-photo-5240026.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: <Sparkles size={28} />,
    name: "Balinese Massage",
    description: "Balinese massage is an approach to massage developed in the Indonesian province of Bali, With influence from the traditional medicine systems of India, China, and Southeast Asia.",
    duration: "60 / 90 / 120 min",
    priceFrom: "₹3,500",
    image: "https://images.pexels.com/photos/258092/pexels-photo-258092.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: <Target size={28} />,
    name: "Deep Tissue Massage",
    description: "Deep tissue massage is a massage technique that's mainly used to treat musculoskeletal issues, such as strains and sports injuries.",
    duration: "60 / 90 / 120 min",
    priceFrom: "₹4,000",
    image: "https://images.pexels.com/photos/3738089/pexels-photo-3738089.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
];

const focusMassages = [
  {
    icon: <Wind size={28} />,
    name: "Head & Shoulder",
    description: "A targeted massage that relieves tension in the head, neck, and shoulders, perfect for alleviating stress and headaches.",
    duration: "30 / 45 min",
    priceFrom: "₹1,000",
    image: "https://images.pexels.com/photos/3951372/pexels-photo-3951372.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: <Footprints size={28} />,
    name: "Foot Reflexology",
    description: "Focused pressure-point therapy applied to reflex zones of the feet to relieve stress, improve circulation, and balance the body's energy systems.",
    duration: "30 / 45 min",
    priceFrom: "₹1,000",
    image: "https://images.pexels.com/photos/6728406/pexels-photo-6728406.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: <Target size={28} />,
    name: "Neck & Back Massage",
    description: "Concentrated care for your neck and back to dissolve knots, ease chronic tension, and restore mobility.",
    duration: "30 / 45 min",
    priceFrom: "₹1,200",
    image: "https://images.pexels.com/photos/35495081/pexels-photo-35495081.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
];

const skinCare = [
  {
    icon: <Sparkles size={28} />,
    name: "Life Style",
    description: "A complete skin care lifestyle treatment including Scrub, Lomi Lomi Massage, and a nourishing Wrap.",
    duration: "90 min",
    priceFrom: "₹4,000",
    image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: <Droplets size={28} />,
    name: "Chocolate",
    description: "Indulge your skin with our chocolate therapy including Deep Tissue Massage and body Polish.",
    duration: "90 min",
    priceFrom: "₹5,000",
    image: "https://images.pexels.com/photos/3741314/pexels-photo-3741314.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: <Wind size={28} />,
    name: "Relax Refresh Rejuvenate",
    description: "The ultimate skin renewal package featuring a full body Scrub, Deep Tissue massage, and Wrap.",
    duration: "90 min",
    priceFrom: "₹5,500",
    image: "https://images.pexels.com/photos/8789614/pexels-photo-8789614.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: <Gem size={28} />,
    name: "Maifair Signature Swedish",
    description: "Our signature Swedish experience combining body polish, traditional Swedish Massage, and a Wrap.",
    duration: "90 min",
    priceFrom: "₹6,000",
    image: "https://images.pexels.com/photos/35149433/pexels-photo-35149433.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: <Waves size={28} />,
    name: "Maifair Signature Lomi Lomi",
    description: "Signature Lomi Lomi massage with soothing body balm and a detoxifying marine mud wrap.",
    duration: "90 min",
    priceFrom: "₹6,500",
    image: "https://images.pexels.com/photos/33852650/pexels-photo-33852650.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: <Target size={28} />,
    name: "Indonesia Retreat",
    description: "An exotic Indonesian retreat for your skin, featuring an exfoliating scrub, Swedish massage, and Wrap.",
    duration: "90 min",
    priceFrom: "₹7,000",
    image: "https://images.pexels.com/photos/14929575/pexels-photo-14929575.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: <Heart size={28} />,
    name: "Jet Lag Refresh",
    description: "Melt away travel fatigue with a revitalizing scrub, Balinese massage, and a restorative Wrap.",
    duration: "90 min",
    priceFrom: "₹7,000",
    image: "https://images.pexels.com/photos/35495081/pexels-photo-35495081.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const memberships = [
  { name: "Silver", price: "₹10,000", value: "₹11,500" },
  { name: "Gold", price: "₹20,000", value: "₹22,500" },
  { name: "Diamond", price: "₹30,000", value: "₹35,000" },
  { name: "Platinum", price: "₹50,000", value: "₹60,000" },
  { name: "VIP", price: "₹1,00,000", value: "₹1,25,000" },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative h-[50vh] min-h-[360px] flex items-end pb-16 grain-overlay overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/14929575/pexels-photo-14929575.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Maifair spa services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[rgba(10,10,10,0.55)] to-[rgba(10,10,10,0.25)]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <span className="section-label mb-3 block">Our Offerings</span>
          <h1
            className="font-display text-[clamp(2.5rem,6vw,5rem)] font-light text-[#f5f0e8]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Our <span className="italic text-gradient-gold">Services</span>
          </h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-section bg-[#0a0a0a] grain-overlay">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          <AnimatedSection className="text-center">
            <span className="section-label justify-center">Bespoke Wellness</span>
            <h2
              className="font-display text-[clamp(1.75rem,4vw,3rem)] font-light text-[#f5f0e8] mt-4"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Treatments Crafted for{" "}
              <span className="italic text-gradient-gold">Your Transformation</span>
            </h2>
            <span className="gold-divider mt-4" />
            <p className="mt-5 text-[#d4c9b8] font-light max-w-xl mx-auto text-sm leading-relaxed">
              Each service is designed not merely as a treatment, but as a ritual — a conscious
              act of self-love that awakens, restores, and elevates.
            </p>
          </AnimatedSection>

          {/* Categories */}
          <div className="space-y-20">
            {/* Premium Massage */}
            <div>
              <AnimatedSection className="mb-10 text-center md:text-left">
                <h3 className="font-display text-3xl font-light text-[#c9a84c] mb-2" style={{ fontFamily: "var(--font-cormorant)" }}>
                  Premium Massage
                </h3>
                <span className="block w-16 h-px bg-[rgba(201,168,76,0.5)] mx-auto md:mx-0" />
              </AnimatedSection>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {premiumMassages.map((s, i) => (
                  <ServiceCard key={s.name} {...s} index={i} />
                ))}
              </div>
            </div>

            {/* Basic Massage Therapy */}
            <div>
              <AnimatedSection className="mb-10 text-center md:text-left">
                <h3 className="font-display text-3xl font-light text-[#c9a84c] mb-2" style={{ fontFamily: "var(--font-cormorant)" }}>
                  Basic Massage Therapy
                </h3>
                <span className="block w-16 h-px bg-[rgba(201,168,76,0.5)] mx-auto md:mx-0" />
              </AnimatedSection>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {basicTherapies.map((s, i) => (
                  <ServiceCard key={s.name} {...s} index={i} />
                ))}
              </div>
            </div>

            {/* Focus Massage */}
            <div>
              <AnimatedSection className="mb-10 text-center md:text-left">
                <h3 className="font-display text-3xl font-light text-[#c9a84c] mb-2" style={{ fontFamily: "var(--font-cormorant)" }}>
                  Focus Massage
                </h3>
                <span className="block w-16 h-px bg-[rgba(201,168,76,0.5)] mx-auto md:mx-0" />
              </AnimatedSection>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {focusMassages.map((s, i) => (
                  <ServiceCard key={s.name} {...s} index={i} />
                ))}
              </div>
            </div>

            {/* Skin Care */}
            <div>
              <AnimatedSection className="mb-10 text-center md:text-left">
                <h3 className="font-display text-3xl font-light text-[#c9a84c] mb-2" style={{ fontFamily: "var(--font-cormorant)" }}>
                  Skin Care
                </h3>
                <span className="block w-16 h-px bg-[rgba(201,168,76,0.5)] mx-auto md:mx-0" />
              </AnimatedSection>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {skinCare.map((s, i) => (
                  <ServiceCard key={s.name} {...s} index={i} />
                ))}
              </div>
            </div>

            {/* Memberships */}
            <div>
              <AnimatedSection className="mb-10 text-center md:text-left">
                <h3 className="font-display text-3xl font-light text-[#c9a84c] mb-2" style={{ fontFamily: "var(--font-cormorant)" }}>
                  Spa Memberships
                </h3>
                <span className="block w-16 h-px bg-[rgba(201,168,76,0.5)] mx-auto md:mx-0" />
                <p className="mt-4 text-[#d4c9b8] font-light max-w-xl mx-auto md:mx-0 text-sm leading-relaxed">
                  Join our exclusive membership program to experience more relaxation and receive unmatched value.
                </p>
              </AnimatedSection>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {memberships.map((m) => (
                  <div key={m.name} className="luxury-card relative overflow-hidden p-6 flex flex-col items-center text-center group">
                    <span className="absolute top-0 left-0 w-4 h-4">
                      <span className="absolute top-0 left-0 w-full h-px bg-[#c9a84c]" />
                      <span className="absolute top-0 left-0 h-full w-px bg-[#c9a84c]" />
                    </span>
                    <span className="absolute bottom-0 right-0 w-4 h-4">
                      <span className="absolute bottom-0 right-0 w-full h-px bg-[#c9a84c] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <span className="absolute bottom-0 right-0 h-full w-px bg-[#c9a84c] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </span>
                    
                    <Gem className="mb-3 text-[#c9a84c]" size={24} />
                    <h4 className="font-display text-xl text-[#f5f0e8] mb-1" style={{ fontFamily: "var(--font-cormorant)" }}>
                      {m.name}
                    </h4>
                    <span className="block w-8 h-px bg-[rgba(201,168,76,0.5)] mb-3" />
                    <div className="flex flex-col gap-1 text-sm font-light">
                      <span className="text-[#d4c9b8]">Pay: <strong className="text-white font-medium">{m.price}</strong></span>
                      <span className="text-[#c9a84c]">Get: <strong className="font-medium">{m.value} Massage</strong></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Note section */}
      <section className="py-16 bg-[#1a1a1a] grain-overlay">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection className="space-y-4">
            <span className="section-label justify-center">A Note on Customisation</span>
            <p className="text-[#d4c9b8] font-light leading-relaxed text-sm">
              Every Maifair treatment can be personalised to your preferences — pressure intensity,
              fragrance selection, ritual additions, and duration extensions. Simply mention your
              preferences at the time of booking or speak with our therapists upon arrival.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs text-[rgba(201,168,76,0.8)] uppercase tracking-widest font-light">
              <span>· Private Suite Available</span>
              <span>· Organic Products Only</span>
              <span>· Hygienic Disposables</span>
              <span>· Trained Therapists</span>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
