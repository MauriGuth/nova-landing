import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-poppins)", "Poppins", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      colors: {
        indigo: {
          400: "#818CF8",
          500: "#6366F1",
          600: "#4F46E5",
          900: "#1E1B4B",
        },
      },
      animation: {
        "gradient-shift": "gradientShift 8s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "fade-up": "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        "scale-in": "scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-down": "slideDown 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "shimmer": "shimmer 4s linear infinite",
        "orb-drift": "orbDrift 18s ease-in-out infinite",
        "orb-drift-reverse": "orbDriftReverse 22s ease-in-out infinite",
        "spin-slow": "spin 10s linear infinite",
        "bounce-soft": "bounceSoft 2.4s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "marquee": "marquee 25s linear infinite",
        "tilt": "tilt 10s ease-in-out infinite",
      },
      keyframes: {
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        orbDrift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(40px, -30px) scale(1.08)" },
          "66%": { transform: "translate(-30px, 25px) scale(0.94)" },
        },
        orbDriftReverse: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(-35px, 25px) scale(0.95)" },
          "66%": { transform: "translate(25px, -30px) scale(1.06)" },
        },
        bounceSoft: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 24px rgba(99,102,241,0.25)" },
          "50%": { boxShadow: "0 0 48px rgba(99,102,241,0.55)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        tilt: {
          "0%, 100%": { transform: "rotate(-0.5deg)" },
          "50%": { transform: "rotate(0.5deg)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
