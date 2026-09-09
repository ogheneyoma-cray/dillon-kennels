import type { Config } from "tailwindcss";

/**
 * Original palette for Silverpoodles: a cool graphite-blue ink on a
 * silver-grey page, with a single vivid fuchsia accent reserved for
 * primary actions, prices and badges — a literal nod to "Silver" in the
 * name. No navy, no teal, no wine/rose/raspberry, no gold/mustard, no
 * orange/rust, no violet/lavender, no black-plus-neon — this cool
 * silver/graphite/fuchsia system, paired with the bento-grid layout below,
 * is this brand's alone among the storefronts.
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
        steel: "#232733",
        "steel-soft": "#3A4051",
        silver: "#C7CCD6",
        "silver-dark": "#9CA3B0",
        "silver-pale": "#F1F2F5",
        fuchsia: "#E8148C",
        "fuchsia-dark": "#B80F6E",
        "fuchsia-pale": "#FCE7F3",
        paper: "#FFFFFF",
        ink: "#1A1D24",
        "ink-soft": "#61667A",
        line: "#E3E5EB",
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-franklin)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.16em",
      },
      maxWidth: {
        content: "1360px",
      },
      boxShadow: {
        tile: "0 10px 30px rgba(26, 29, 36, 0.08)",
        lift: "0 20px 45px rgba(26, 29, 36, 0.18)",
      },
    },
  },
  plugins: [],
};
export default config;
