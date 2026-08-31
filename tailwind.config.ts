import type { Config } from "tailwindcss";

/**
 * Palette and structure lifted from the Marketo marketplace-theme reference:
 * a bright white page, a true-black nav/footer, and a single strong
 * marketplace-orange reserved for CTAs, the top utility bar, and price tags
 * — no gold, no violet, no second "hero" accent competing with it. A muted
 * plum and a sage green appear only as small supporting notes (badges,
 * stock status).
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
        ink: "#161311",
        "ink-soft": "#5A5450",
        orange: "#E1560F",
        "orange-dark": "#B8420D",
        "orange-pale": "#FCEAE0",
        plum: "#6E2A44",
        sage: "#3F7A55",
        mist: "#F7F4F0",
        cloud: "#EFE9E1",
        paper: "#FFFFFF",
      },
      fontFamily: {
        display: ["var(--font-poppins)", "Arial Black", "sans-serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.14em",
      },
      maxWidth: {
        content: "1320px",
      },
      boxShadow: {
        tile: "0 6px 24px rgba(22, 19, 17, 0.08)",
        lift: "0 18px 40px rgba(22, 19, 17, 0.16)",
      },
    },
  },
  plugins: [],
};
export default config;
