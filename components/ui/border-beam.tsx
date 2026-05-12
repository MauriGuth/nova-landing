"use client";

/**
 * Animated border-beam — a bright segment that travels around the rounded
 * border of its parent. Drop it inside any `position: relative` container.
 *
 * Implementation: a conic gradient masked to a thin ring, then rotated with
 * a long-running CSS animation. Pure CSS, no JS, no layout thrash.
 */
export function BorderBeam({
  duration = 6,
  thickness = 1.5,
  colorFrom = "#818CF8",
  colorTo = "#10B981",
  className = "",
}: {
  duration?: number;
  thickness?: number;
  colorFrom?: string;
  colorTo?: string;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute inset-0 rounded-[inherit] ${className}`}
      style={{
        padding: thickness,
        background: `conic-gradient(from var(--bb-angle, 0deg), transparent 0deg, ${colorFrom} 60deg, ${colorTo} 100deg, transparent 160deg)`,
        WebkitMask:
          "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        animation: `border-beam-spin ${duration}s linear infinite`,
      }}
    />
  );
}
