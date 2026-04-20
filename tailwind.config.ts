import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#2563eb",
        "accent-light": "#eff6ff",
      },
      fontFamily: {
        sans: ["Inter", "Noto Sans KR", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
