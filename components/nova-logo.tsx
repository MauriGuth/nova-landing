// Marca NS de Nova Solutions (misma que branding/logo-dark.svg), inline para
// que tome la fuente display del sitio y no dependa de fuentes instaladas.
export function NovaLogo({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      aria-hidden="true"
      focusable="false"
    >
      <rect
        width="512"
        height="512"
        rx="118"
        fill="#0E1116"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="12"
      />
      <text
        x="256"
        y="345"
        textAnchor="middle"
        fontWeight="700"
        fontSize="282"
        letterSpacing="-20"
        fill="#FAF8F4"
        style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
      >
        N
        <tspan dx="-10" fill="oklch(0.62 0.18 265)">
          S
        </tspan>
      </text>
    </svg>
  );
}
