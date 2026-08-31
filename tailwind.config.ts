import type { Config } from "tailwindcss";

/**
 * Palette and type lifted from the Booklovers publishing-house reference: a
 * warm cream page, near-black ink for headings and nav, a single deep wine
 * red carrying every call to action and price tag, and a muted gold reserved
 * for star ratings and small badges. A quiet moss green marks in-stock /
 * success states — nowhere else.
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
        cream: "#F7EFE1",
        paper: "#FFFFFF",
        ink: "#241A16",
        sand: "#EFE1C8",
        wine: "#7C1F2E",
        "wine-dark": "#59141F",
        "wine-light": "#A83E4C",
        gold: "#B9902F",
        "gold-pale": "#F3E6C4",
        moss: "#4B6B4F",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-karla)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.2em",
      },
      maxWidth: {
        content: "1360px",
      },
      boxShadow: {
        tile: "0 6px 24px rgba(36, 26, 22, 0.1)",
        lift: "0 20px 44px rgba(36, 26, 22, 0.18)",
      },
    },
  },
  plugins: [],
};
export default config;
