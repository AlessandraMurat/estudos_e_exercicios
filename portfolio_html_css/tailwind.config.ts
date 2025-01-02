import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        krona: ["Krona One", "sans-serif"], 
        montserrat: ["Montserrat", "sans-serif"], 
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#22D4FD",
        white: '#F6F6F6'
      },
    },
  },
  plugins: [],
} satisfies Config;
