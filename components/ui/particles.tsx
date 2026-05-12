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
 * Lightweight canvas particle field. Renders ~80 slow-drifting dots in the
 * indigo/violet palette. Particles get repelled when the cursor approaches.
 * Pauses while off-screen and respects reduced motion.
 */
export function Particles({
  density = 80,
  interactive = true,
  repelRadius = 130,
  repelStrength = 1.4,
  className = "",
}: {
  density?: number;
  interactive?: boolean;
  repelRadius?: number;
  repelStrength?: number;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let dots: Dot[] = [];
    let raf = 0;
    let running = true;
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = canvas;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const seed = () => {
      const { clientWidth: w, clientHeight: h } = canvas;
      dots = Array.from({ length: density }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 0.6 + Math.random() * 1.6,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        o: 0.15 + Math.random() * 0.5,
      }));
    };

    const draw = () => {
      const { clientWidth: w, clientHeight: h } = canvas;
      ctx.clearRect(0, 0, w, h);
      for (const d of dots) {
        // Cursor repulsion
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
        if (d.x < -10) d.x = w + 10;
        else if (d.x > w + 10) d.x = -10;
        if (d.y < -10) d.y = h + 10;
        else if (d.y > h + 10) d.y = -10;

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(129, 140, 248, ${d.o})`;
        ctx.fill();
      }
      if (running) raf = requestAnimationFrame(draw);
    };

    resize();
    seed();
    if (!reduced) {
      raf = requestAnimationFrame(draw);
    } else {
      draw();
      running = false;
    }

    const onResize = () => {
      resize();
      seed();
    };
    const onMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    window.addEventListener("resize", onResize);
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
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouse);
      document.removeEventListener("mouseleave", onMouseLeave);
      io.disconnect();
    };
  }, [density, interactive, repelRadius, repelStrength]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`pointer-events-none ${className}`}
    />
  );
}
