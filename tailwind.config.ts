import type { Config } from "tailwindcss";

/**
 * Original palette for Lawin Store: a deep berry-plum ("berry") carrying
 * headings, nav and primary buttons, a warm coral-peach ("peach") reserved
 * for hover states, ratings and small badges, and a near-black aubergine
 * ink — all sitting on plain white with a warm sand tone for alternating
 * bands. No teal, no navy, no graphite/electric-blue, no black/neon-green,
 * no gold — this berry/peach/sand trio, paired with the marketplace-preview
 * layout below, is this brand's alone among the storefronts.
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
        berry: "#7A1F4B",
        "berry-dark": "#5C1638",
        "berry-pale": "#FBEAF1",
        peach: "#FF9466",
        "peach-dark": "#E87642",
        sand: "#FBF4EE",
        paper: "#FFFFFF",
        ink: "#241A1E",
        "ink-soft": "#6B5A60",
        line: "#EFE2E0",
      },
      fontFamily: {
        display: ["var(--font-bricolage)", "sans-serif"],
        body: ["var(--font-figtree)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.16em",
      },
      maxWidth: {
        content: "1360px",
      },
      boxShadow: {
        tile: "0 10px 30px rgba(36, 26, 30, 0.08)",
        lift: "0 20px 45px rgba(36, 26, 30, 0.18)",
      },
    },
  },
  plugins: [],
};
export default config;
