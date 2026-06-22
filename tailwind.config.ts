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
        // Brand palette override: midnight blue / electric violet / white
        background: "#0D0F1A",
        foreground: "#F8F9FC",
        accent: "#8B5CF6",
        muted: "#6B7280",
        // Supporting colors
        surface: "#161829",
        "surface-light": "#1E2035",
        border: "#2A2D42",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-libre-franklin)", "sans-serif"],
      },
      maxWidth: {
        prose: "65ch",
      },
    },
  },
  plugins: [],
};

export default config;
