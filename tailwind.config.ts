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
        paper: "#FFFFFF",
        linen: "#F7F2EC",
        ink: "#161311",
        "ink-soft": "#5C5650",
        raspberry: "#C21E4B",
        "raspberry-dark": "#8F1636",
        "raspberry-pale": "#FBE4EA",
        line: "#E8E1D8",
      },
      fontFamily: {
        display: ["var(--font-archivo-black)", "sans-serif"],
        body: ["var(--font-public-sans)", "sans-serif"],
      },
      maxWidth: {
        content: "1360px",
      },
      boxShadow: {
        tile: "0 1px 2px rgba(22, 19, 17, 0.06)",
        lift: "0 20px 45px -20px rgba(22, 19, 17, 0.4)",
      },
    },
  },
  plugins: [],
};
export default config;
