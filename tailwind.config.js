const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",

  theme: {
    extend: {
      fontFamily: {
        display: ['"Cabinet Grotesk"', ...fontFamily.sans],
        body: ['"Satoshi"', ...fontFamily.sans],
        mono: ['"JetBrains Mono"', ...fontFamily.mono],
      },
      colors: {
        brand: {
          cyan: "#00d4ff",
          "cyan-dim": "#00a8cc",
          purple: "#7c3aed",
          "purple-dim": "#5b21b6",
        },
        void: "#050709",
        surface: {
          base: "#0d1117",
          raised: "#161b22",
          overlay: "#1c2128",
        },
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #00d4ff, #7c3aed)",
        "gradient-text": "linear-gradient(90deg, #00d4ff, #7c3aed)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "scroll-forward": "scroll-forward 40s linear infinite",
        "scroll-reverse": "scroll-reverse 40s linear infinite",
        "blob-1": "blob-1 12s ease-in-out infinite",
        "blob-2": "blob-2 10s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease both",
        "fade-in": "fade-in 0.5s ease both",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
      },
      keyframes: {
        "scroll-forward": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "scroll-reverse": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
        "blob-1": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(60px, -40px) scale(1.1)" },
          "66%": { transform: "translate(-30px, 30px) scale(0.9)" },
        },
        "blob-2": {
          "0%, 100%": { transform: "translate(0, 0) scale(1.05)" },
          "33%": { transform: "translate(-50px, 30px) scale(0.95)" },
          "66%": { transform: "translate(40px, -50px) scale(1.1)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 212, 255, 0.6)" },
        },
      },
      boxShadow: {
        "glow-cyan": "0 0 30px rgba(0, 212, 255, 0.25)",
        "glow-purple": "0 0 30px rgba(124, 58, 237, 0.25)",
        glass:
          "0 4px 24px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.06)",
      },
    },
  },

  plugins: [require("@tailwindcss/typography")],
};
