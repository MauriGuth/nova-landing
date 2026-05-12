"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

/**
 * Wraps decorative children and shifts them by a small offset based on the
 * cursor position within the element. Use for hero glow orbs, background
 * shapes — anything that should subtly track the mouse.
 */
export function MouseParallax({
  children,
  intensity = 14,
  className = "",
}: {
  children: ReactNode;
  intensity?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const sx = useSpring(mx, { damping: 18, stiffness: 140, mass: 0.8 });
  const sy = useSpring(my, { damping: 18, stiffness: 140, mass: 0.8 });

  const x = useTransform(sx, (v) => v * intensity);
  const y = useTransform(sy, (v) => v * intensity);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Listen on window so this works even when the parallax layer has
    // pointer-events: none (decorative overlays usually do).
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      mx.set(Math.max(-0.5, Math.min(0.5, px - 0.5)));
      my.set(Math.max(-0.5, Math.min(0.5, py - 0.5)));
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ x, y }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}
