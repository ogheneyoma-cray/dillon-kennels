import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./context/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        noir: "#0B0B0C",
        graphite: "#18181B",
        steelline: "#2A2A2E",
        bone: "#EDEBE4",
        muted: "#9A9A9E",
        acid: "#C6FF3D",
        "acid-dark": "#9FDB1E",
        ember: "#FF4433",
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        body: ["var(--font-plex)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.2em",
        widest3: "0.32em",
      },
      maxWidth: {
        content: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
