import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        hurricane: ["Hurricane", "serif"],
        // notoSerif: ["Noto Serif JP", "serif"],
        sawarabi: ["Sawarabi Gothic", "serif"],
      },
      gridTemplateColumns: {
        "auto-fill-280": "repeat(auto-fill, minmax(280px, 1fr))",
      },
    },
  },
  plugins: [],
} satisfies Config;
