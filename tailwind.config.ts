import type { Config } from "tailwindcss";

/**
 * Palette lifted from the csmthemes "Book" ebook landing page reference: a
 * bright white/pale-mist page, a friendly sky-blue primary accent, a warm
 * gold used the way the reference uses its mustard book-cover color, and a
 * teal ribbon accent for small highlights. No dark ink bands — every
 * section sits on white or a very light gray.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./context/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#293241",
        "ink-soft": "#5B6472",
        sky: "#4FA3D1",
        "sky-dark": "#2E7EA8",
        "sky-pale": "#EAF4FA",
        gold: "#E0A23B",
        "gold-dark": "#B87F26",
        teal: "#3FB6A8",
        rose: "#E07A6B",
        mist: "#F4F8FB",
        cloud: "#EAEFF3",
        paper: "#FFFFFF",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-work-sans)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.14em",
      },
      maxWidth: {
        content: "1320px",
      },
      boxShadow: {
        tile: "0 6px 24px rgba(41, 50, 65, 0.07)",
        lift: "0 18px 40px rgba(41, 50, 65, 0.14)",
      },
    },
  },
  plugins: [],
};
export default config;
