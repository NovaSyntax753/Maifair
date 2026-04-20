import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#0a0a0a",
          deep: "#0a0a0a",
          charcoal: "#1a1a1a",
        },
        gold: {
          DEFAULT: "#c9a84c",
          champagne: "#c9a84c",
          muted: "#8a6e2f",
          light: "#e8d5a3",
          dark: "#6b5420",
        },
        ivory: {
          DEFAULT: "#f5f0e8",
          cream: "#faf7f2",
          muted: "#d4c9b8",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-jost)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-xl": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "display-md": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "display-sm": ["1.875rem", { lineHeight: "1.25" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
        "section": "6rem",
      },
      animation: {
        "shimmer": "shimmer 2s linear infinite",
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite",
        "float": "float 6s ease-in-out infinite",
        "scroll-bounce": "scroll-bounce 2s ease-in-out infinite",
        "grain": "grain 8s steps(10) infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: "1" },
          "100%": { transform: "scale(2)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "scroll-bounce": {
          "0%, 100%": { transform: "translateY(0)", opacity: "1" },
          "50%": { transform: "translateY(8px)", opacity: "0.5" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -10%)" },
          "20%": { transform: "translate(-15%, 5%)" },
          "30%": { transform: "translate(7%, -25%)" },
          "40%": { transform: "translate(-5%, 25%)" },
          "50%": { transform: "translate(-15%, 10%)" },
          "60%": { transform: "translate(15%, 0%)" },
          "70%": { transform: "translate(0%, 15%)" },
          "80%": { transform: "translate(3%, 35%)" },
          "90%": { transform: "translate(-10%, 10%)" },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #c9a84c 0%, #e8d5a3 50%, #c9a84c 100%)",
        "gold-shimmer": "linear-gradient(90deg, transparent 0%, #c9a84c40 50%, transparent 100%)",
        "dark-gradient": "linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)",
        "hero-overlay": "linear-gradient(to bottom, rgba(10,10,10,0.5) 0%, rgba(10,10,10,0.7) 100%)",
      },
      backdropBlur: {
        xs: "2px",
      },
      transitionTimingFunction: {
        "luxury": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      boxShadow: {
        "gold-glow": "0 0 30px rgba(201, 168, 76, 0.3), 0 0 60px rgba(201, 168, 76, 0.1)",
        "gold-glow-sm": "0 0 15px rgba(201, 168, 76, 0.25)",
        "card": "0 4px 24px rgba(0,0,0,0.4)",
        "card-hover": "0 12px 48px rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
