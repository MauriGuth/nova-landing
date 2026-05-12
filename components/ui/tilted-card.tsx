"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import type { CSSProperties, ReactNode } from "react";
import { useRef } from "react";

export function TiltedCard({
  children,
  className = "",
  glow,
  style,
  max = 6,
}: {
  children: ReactNode;
  className?: string;
  glow?: string;
  style?: CSSProperties;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 200, damping: 22, mass: 0.6 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [max, -max]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-max, max]), springConfig);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set(px - 0.5);
    y.set(py - 0.5);
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={
        {
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          perspective: 1000,
          "--glow": glow,
          ...style,
        } as CSSProperties
      }
      className={`card-glow ${className}`}
    >
      {children}
    </motion.div>
  );
}
