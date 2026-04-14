import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f9f6",
          100: "#d6f0e8",
          200: "#b0e0d2",
          300: "#7cc9b5",
          400: "#4dae96",
          500: "#35937d",
          600: "#287865",
          700: "#236153",
          800: "#1f4e44",
          900: "#1a4039",
          950: "#0d2521",
        },
        darkgreen: {
          800: "#3d5438",
          900: "#2d3f29",
          950: "#1e2a1b",
        },
        accent: {
          50: "#f3f7f2",
          100: "#e2ede0",
          200: "#c5dbc1",
          300: "#a3c49d",
          400: "#7c9b74",
          500: "#6b8a63",
          600: "#5a7653",
          700: "#4a6244",
          800: "#3d5038",
          900: "#33432f",
          950: "#1a2418",
        },
        neutral: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        heading: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      screens: {
        xs: "320px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};

export default config;
