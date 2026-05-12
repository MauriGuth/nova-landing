"use client";

import { useEffect, useRef } from "react";

type Dot = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  o: number;
};

/**
 * Lightweight canvas particle field. Slow-drifting indigo dots that get
 * repelled when the cursor approaches. Pauses while off-screen and respects
 * reduced motion.
 *
 * Uses ResizeObserver to keep the backing store in sync with the displayed
 * size — important when the canvas lives inside a fixed full-viewport layer
 * where the parent can resize without firing a window resize event.
 */
export function Particles({
  density = 80,
  interactive = true,
  repelRadius = 130,
  repelStrength = 1.4,
  minSize = 0.8,
  maxSize = 4,
  minOpacity = 0.2,
  maxOpacity = 0.85,
  className = "",
}: {
  density?: number;
  interactive?: boolean;
  repelRadius?: number;
  repelStrength?: number;
  minSize?: number;
  maxSize?: number;
  minOpacity?: number;
  maxOpacity?: number;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let dots: Dot[] = [];
    let raf = 0;
    let running = true;
    let width = 0;
    let height = 0;
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const w = Math.round(rect.width);
      const h = Math.round(rect.height);
      if (w === 0 || h === 0) return false;
      // Only re-resize backing store if dimensions actually changed —
      // setting canvas.width clears the canvas, which causes the visible
      // tearing/streaks on every paint if done unnecessarily.
      if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
        canvas.width = Math.floor(w * dpr);
        canvas.height = Math.floor(h * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
      width = w;
      height = h;
      return true;
    };

    const seed = () => {
      if (width === 0 || height === 0) return;
      const sizeRange = maxSize - minSize;
      const opacityRange = maxOpacity - minOpacity;
      dots = Array.from({ length: density }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: minSize + Math.random() * sizeRange,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.1,
        o: minOpacity + Math.random() * opacityRange,
      }));
    };

    const draw = () => {
      if (width === 0 || height === 0) {
        if (running) raf = requestAnimationFrame(draw);
        return;
      }
      ctx.clearRect(0, 0, width, height);
      for (const d of dots) {
        if (interactive) {
          const dx = d.x - mouse.x;
          const dy = d.y - mouse.y;
          const dist2 = dx * dx + dy * dy;
          const r2 = repelRadius * repelRadius;
          if (dist2 < r2 && dist2 > 0.01) {
            const dist = Math.sqrt(dist2);
            const force = ((repelRadius - dist) / repelRadius) * repelStrength;
            d.x += (dx / dist) * force;
            d.y += (dy / dist) * force;
          }
        }

        d.x += d.vx;
        d.y += d.vy;
        if (d.x < -10) d.x = width + 10;
        else if (d.x > width + 10) d.x = -10;
        if (d.y < -10) d.y = height + 10;
        else if (d.y > height + 10) d.y = -10;

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(129, 140, 248, ${d.o})`;
        ctx.fill();
      }
      if (running) raf = requestAnimationFrame(draw);
    };

    if (!resize()) {
      // Element not yet sized — retry on next frame
      requestAnimationFrame(() => {
        resize();
        seed();
      });
    } else {
      seed();
    }

    if (!reduced) {
      raf = requestAnimationFrame(draw);
    } else {
      draw();
      running = false;
    }

    // ResizeObserver catches parent layout changes that window.resize misses
    // (e.g. when the page first paints inside a fixed positioned container).
    const ro = new ResizeObserver(() => {
      if (resize()) seed();
    });
    ro.observe(canvas);

    const onMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    if (interactive) {
      window.addEventListener("mousemove", onMouse, { passive: true });
      document.addEventListener("mouseleave", onMouseLeave);
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting && !reduced;
        if (running) raf = requestAnimationFrame(draw);
        else cancelAnimationFrame(raf);
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("mousemove", onMouse);
      document.removeEventListener("mouseleave", onMouseLeave);
      io.disconnect();
    };
  }, [density, interactive, repelRadius, repelStrength, minSize, maxSize, minOpacity, maxOpacity]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      // Force the canvas onto its own GPU compositor layer so it doesn't tear
      // when other fixed layers (Spotlight, GlobalBackground orbs) paint on top
      style={{ transform: "translateZ(0)", willChange: "transform" }}
      className={`pointer-events-none block h-full w-full ${className}`}
    />
  );
}
