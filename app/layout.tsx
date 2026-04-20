import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CustomCursor from "@/components/CustomCursor";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Maifair — The Luxurious Spa",
    template: "%s | Maifair Spa",
  },
  description:
    "Maifair is Nagpur's most exclusive luxury spa — where world-class treatments, serene ambiance, and bespoke wellness rituals converge for a transcendent experience.",
  keywords: [
    "luxury spa",
    "Maifair spa",
    "body massage",
    "aromatherapy",
    "couple's spa",
    "bridal spa",
    "wellness",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Maifair — The Luxurious Spa",
    title: "Maifair — The Luxurious Spa",
    description:
      "Indulge in the art of luxury wellness. Book your bespoke spa experience at Maifair.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Maifair Spa" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maifair — The Luxurious Spa",
    description: "Where luxury meets serenity. Experience the finest spa treatments in Nagpur.",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="bg-[#0a0a0a] text-[#f5f0e8] font-body antialiased">
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
