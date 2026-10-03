import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  future: {
    // `hover:` sólo en dispositivos con hover real: en touch no queda pegado.
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      // Tokens del sistema visual compartido (definidos en app/globals.css).
      colors: {
        bg: { DEFAULT: "var(--bg)", raise: "var(--bg-raise)" },
        surface: { DEFAULT: "var(--surface)", 2: "var(--surface-2)" },
        line: { DEFAULT: "var(--line)", strong: "var(--line-strong)" },
        ink: { DEFAULT: "var(--ink)", 2: "var(--ink-2)", 3: "var(--ink-3)" },
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
          ink: "var(--accent-ink)",
          soft: "var(--accent-soft)",
        },
        ok: { DEFAULT: "var(--ok)", soft: "var(--ok-soft)" },
        warn: "var(--warn)",
        danger: "var(--danger)",
      },
      boxShadow: {
        2: "var(--shadow-2)",
      },
      keyframes: {
        // Entrada del menú mobile y de la tarjeta de éxito del formulario.
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        // Un solo pulso del check de éxito.
        pulseOnce: {
          "0%": { opacity: "0.6", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(1.8)" },
        },
      },
      animation: {
        "fade-up": "fadeUp var(--d-base) var(--ease-out) both",
        "pulse-once": "pulseOnce var(--d-story) var(--ease-out) 1 both",
      },
    },
  },
  plugins: [],
};

export default config;
