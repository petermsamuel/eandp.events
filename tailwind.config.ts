import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  safelist: [
    "glow-button-wrapper",
    "glow-button-inner",
    "glow-ring",
    "lion-watermark",
    "bg-glow",
    "blur-xl",
    "group-hover:scale-105",
    "group-hover:shadow-lg",
    "animate-border-orbit",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
       extend: {
      colors: {
        background: "#ffffff",
        foreground: "#1a1a1a",
        border: "#e5e7eb",
        input: "#f3f4f6",
        ring: "#d1d5db",

        gold: "#c9a75d",
        navy: "#1c1f2b",
        charcoal: "#2a2a2a",
        emerald: "#50C878",
        ruby: "#E0115F",
        clay: '#7b6535',
        beige: '#f5f1ea',
       blush: '#fdf6e3',
      slategray: '#e6e6ea',


        primary: {
          DEFAULT: "#1a1a26",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#c9a75d",
          foreground: "#1a1a1a",
        },
        destructive: {
          DEFAULT: "#dc2626",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#f5f5f5",
          foreground: "#6b7280",
        },
        accent: {
          DEFAULT: "#e0e7ff",
          foreground: "#1e40af",
        },
        popover: {
          DEFAULT: "#f9fafb",
          foreground: "#111827",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#111827",
        },
        sidebar: {
          DEFAULT: "#1a1a1a",
          foreground: "#ffffff",
          primary: "#c9a75d",
          "primary-foreground": "#1a1a1a",
          accent: "#e0e7ff",
          "accent-foreground": "#1e40af",
          border: "#2d2d2d",
          ring: "#3b3b3b",
        },
      },
      fontFamily: {
        heading: ["Cinzel", "serif"],
        body: ['"Sorts Mill Goudy"', "serif"],
        montserrat: ["Montserrat", "sans-serif"], // optional if still used
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": {
            opacity: "0.6",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "1",
            transform: "scale(1.05)",
          },
        },
        spinGlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        borderOrbit: {
          "0%": {
            background:
              "conic-gradient(from 0deg, transparent, #c9a75d, transparent, #c9a75d, transparent)",
          },
          "100%": {
            background:
              "conic-gradient(from 360deg, transparent, #c9a75d, transparent, #c9a75d, transparent)",
          },
        },
      },
      animation: {
        "pulse-glow": "pulseGlow 2.5s ease-in-out infinite",
        "spin-glow": "spinGlow 2s linear infinite",
        "border-orbit": "borderOrbit 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
