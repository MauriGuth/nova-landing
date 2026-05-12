"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

/**
 * Custom cursor that replaces the native pointer on fine-pointer devices.
 * - Inner dot follows the mouse exactly.
 * - Outer ring lags with a spring for organic feel.
 * - Both scale up when hovering over interactive elements (anchor, button,
 *   form controls, or anything tagged `data-cursor="link"`).
 *
 * No-ops on touch devices and respects prefers-reduced-motion.
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [visible, setVisible] = useState(false);

  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);

  const ringX = useSpring(mx, { damping: 28, stiffness: 220, mass: 0.6 });
  const ringY = useSpring(my, { damping: 28, stiffness: 220, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const interactive = t.closest(
        "a, button, [role='button'], input, textarea, select, label, [data-cursor='link']"
      );
      setHovering(!!interactive);
    };

    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    const onLeaveWindow = () => setVisible(false);
    const onEnterWindow = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeaveWindow);
    document.addEventListener("mouseenter", onEnterWindow);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeaveWindow);
      document.removeEventListener("mouseenter", onEnterWindow);
    };
  }, [mx, my, visible]);

  // The `.custom-cursor-active` class is added to <html> so CSS in globals.css
  // can hide the native cursor only when this component is mounted on a
  // fine-pointer device. Must be declared BEFORE any conditional return so
  // hook order is stable across renders.
  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("custom-cursor-active");
    return () => document.documentElement.classList.remove("custom-cursor-active");
  }, [enabled]);

  if (!enabled) return null;

  const ringScale = pressed ? 0.7 : hovering ? 1.8 : 1;
  const dotScale = pressed ? 1.4 : hovering ? 0 : 1;

  return (
    <>
      {/* Outer ring — lags with spring */}
      <motion.div
        aria-hidden
        style={{ x: ringX, y: ringY }}
        className="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2"
      >
        <div
          className="rounded-full border border-white/60 backdrop-blur-[2px] transition-all duration-200 ease-out"
          style={{
            width: 36,
            height: 36,
            transform: `translate(-50%, -50%) scale(${ringScale})`,
            background: hovering ? "rgba(99,102,241,0.18)" : "transparent",
            borderColor: hovering ? "rgba(129,140,248,0.9)" : "rgba(255,255,255,0.55)",
            opacity: visible ? 1 : 0,
          }}
        />
      </motion.div>

      {/* Inner dot — exact mouse position */}
      <motion.div
        aria-hidden
        style={{ x: mx, y: my }}
        className="pointer-events-none fixed left-0 top-0 z-[100]"
      >
        <div
          className="rounded-full bg-white transition-transform duration-150 ease-out"
          style={{
            width: 6,
            height: 6,
            transform: `translate(-50%, -50%) scale(${dotScale})`,
            opacity: visible ? 1 : 0,
          }}
        />
      </motion.div>
    </>
  );
}
