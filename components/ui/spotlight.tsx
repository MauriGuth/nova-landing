"use client";

import { useEffect } from "react";

/**
 * Page-wide spotlight that follows the cursor with a soft indigo radial glow.
 * Uses CSS custom properties on `<html>` so the gradient updates without
 * re-rendering React on every mouse move.
 */
export function Spotlight({
  radius = 480,
  intensity = 0.14,
}: {
  radius?: number;
  intensity?: number;
}) {
  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;

    const root = document.documentElement;
    root.style.setProperty("--spotlight-x", "50vw");
    root.style.setProperty("--spotlight-y", "50vh");

    const onMove = (e: MouseEvent) => {
      root.style.setProperty("--spotlight-x", `${e.clientX}px`);
      root.style.setProperty("--spotlight-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1]"
      style={{
        background: `radial-gradient(${radius}px circle at var(--spotlight-x, 50vw) var(--spotlight-y, 50vh), rgba(99, 102, 241, ${intensity}), rgba(129, 140, 248, ${intensity * 0.4}) 35%, transparent 65%)`,
        mixBlendMode: "screen",
      }}
    />
  );
}
