import type { Config } from "tailwindcss";

/**
 * Palette and rhythm lifted from the Marketo marketplace-theme reference: a
 * bright white page, a near-black wordmark/nav, a marketplace-yellow primary
 * accent reserved for CTAs and the category bar, and a burnt-orange /
 * steel-blue pair used the way the reference uses its two promo-banner
 * colors. No dark ink bands anywhere — every section sits on white or a
 * very light warm gray.
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
        ink: "#181818",
        "ink-soft": "#5C5C5C",
        gold: "#F5B400",
        "gold-dark": "#C98F00",
        "gold-pale": "#FEF6E0",
        orange: "#F2762E",
        "orange-dark": "#D65E1A",
        blue: "#3E7CB1",
        "blue-dark": "#2C5C86",
        teal: "#1E8E7E",
        rose: "#E14336",
        mist: "#F7F7F5",
        cloud: "#EFEFEA",
        paper: "#FFFFFF",
      },
      fontFamily: {
        display: ["var(--font-archivo)", "Arial Black", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.14em",
      },
      maxWidth: {
        content: "1320px",
      },
      boxShadow: {
        tile: "0 6px 24px rgba(24, 24, 24, 0.07)",
        lift: "0 18px 40px rgba(24, 24, 24, 0.14)",
      },
    },
  },
  plugins: [],
};
export default config;
