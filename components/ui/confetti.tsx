"use client";

import { useEffect, useRef } from "react";

type Piece = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rot: number;
  vrot: number;
  size: number;
  color: string;
  life: number;
};

const COLORS = ["#818CF8", "#6366F1", "#10B981", "#F59E0B", "#EC4899"];

/**
 * Fire-once celebratory burst from the top-center, falling with gravity.
 * Unmount the component to clean up; re-mount to replay.
 */
export function Confetti({ count = 110 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const pieces: Piece[] = Array.from({ length: count }, () => ({
      x: w / 2 + (Math.random() - 0.5) * w * 0.4,
      y: -20 - Math.random() * 80,
      vx: (Math.random() - 0.5) * 6,
      vy: 2 + Math.random() * 4,
      rot: Math.random() * Math.PI * 2,
      vrot: (Math.random() - 0.5) * 0.3,
      size: 4 + Math.random() * 6,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      life: 0,
    }));

    let raf = 0;
    const start = performance.now();

    const draw = (now: number) => {
      ctx.clearRect(0, 0, w, h);
      const elapsed = now - start;

      for (const p of pieces) {
        p.vy += 0.12;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vrot;
        p.life = elapsed;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, 1 - elapsed / 3500);
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.45);
        ctx.restore();
      }

      if (elapsed < 3800) raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => cancelAnimationFrame(raf);
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[70]"
    />
  );
}
