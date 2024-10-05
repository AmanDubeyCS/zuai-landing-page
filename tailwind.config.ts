import type { Config } from "tailwindcss"
const { fontFamily } = require("tailwindcss/defaultTheme")
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xxs: "360px",
        xs: "480px",
        "sm-2": "600px",
        "3xl": "1920px",
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "brand-primary": "var(--brand-primary)",
        "brand-primary-100": "var(--brand-primary-100)",
        "neutrals-100": "var(--neutrals-100)",
        "neutrals-200": "var(--neutrals-200)",
        "neutrals-300": "var(--neutrals-300)",
        "neutrals-400": "var(--neutrals-400)",
        "neutrals-500": "var(--neutrals-500)",
        "neutrals-600": "var(--neutrals-600)",
        "neutrals-700": "var(--neutrals-700)",
        "neutrals-800": "var(--neutrals-800)",
        "neutrals-900": "var(--neutrals-900)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        bricolage: ["var(--font-bricolage)", ...fontFamily.sans],
        mont: ["var(--font-mont)", ...fontFamily.sans],
        kalam: ["var(--font-kalam)", ...fontFamily.sans],
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
    },
  },
  plugins: [],
}
export default config
