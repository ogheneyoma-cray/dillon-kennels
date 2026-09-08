import type { Config } from "tailwindcss";

/**
 * Layout lifted from the Ejon reference: a dark utility bar, a search-led
 * header, a secondary category/nav bar, split promo banners, a trust-badge
 * strip and a discount-card "Special Offer" grid. The palette is its own —
 * a Caribbean coastal mix (deep teal ink, turquoise, coral) rather than
 * the reference's navy-and-red, and distinct from every other client
 * branch on this repo.
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
        ink: "#14302C",
        "ink-soft": "#1D3F39",
        paper: "#FFFFFF",
        cream: "#FFF8EF",
        sand: "#F2E9D8",
        teal: "#0EA5A0",
        "teal-dark": "#0B7F7B",
        coral: "#FF6B4A",
        "coral-dark": "#E5522F",
        gold: "#E8AC3D",
      },
      fontFamily: {
        display: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.16em",
      },
      maxWidth: {
        content: "1360px",
      },
      boxShadow: {
        tile: "0 6px 22px rgba(20, 48, 44, 0.1)",
        lift: "0 20px 40px rgba(20, 48, 44, 0.18)",
      },
    },
  },
  plugins: [],
};
export default config;
