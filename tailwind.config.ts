import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      'base': '0.7rem',
      'lg': '0.85rem',
      'xl': '0.7rem',
      '2xl': '1.5rem',
      '3xl': '1rem',
      '4xl': '1.2rem',
      '5xl': '1.4rem',
    },
    fontFamily: {
      'accent': ['IBM Plex Sans Arabic', 'serif'],
      'garamond': ['EB Garamond', 'serif'],
    },
    extend: {
      textColor: {
        accent: '#F7AE31',
        secondary: '#FFFFFF',
      },
      colors: {
        primary: '#282829',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
