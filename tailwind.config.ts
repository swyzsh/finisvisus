/** @type {import('tailwindcss').Config} */
import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import tailwindcssAnimate from "tailwindcss-animate";

module.exports = {
  darkMode: ["class"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        oldeEnglish: ["var(--font-olde-english)"],
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
