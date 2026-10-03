'use client';

import { useEffect, useSyncExternalStore } from 'react';

type Dot = { x: number; y: number; r: number; vx: number; vy: number; o: number };

/**
 * Campo de partículas índigo que derivan despacio y se apartan del mouse.
 * Versión liviana: sólo con mouse (pointer: fine + hover: hover) y sin
 * reduced-motion; en celular ni se monta. Se pausa cuando la pestaña no está
 * visible o el canvas no está en pantalla, limita el DPR a 2 y no fuerza
 * capas con will-change.
 */
// Sólo con mouse y sin reduced-motion. useSyncExternalStore evita el setState en
// efecto y mantiene el HTML del servidor (nada montado) igual en la hidratación.
const QUERY_FINE = '(pointer: fine) and (hover: hover)';
const QUERY_REDUCED = '(prefers-reduced-motion: reduce)';
function subscribe(onChange: () => void) {
  const fine = window.matchMedia(QUERY_FINE);
  const reduced = window.matchMedia(QUERY_REDUCED);
  fine.addEventListener('change', onChange);
  reduced.addEventListener('change', onChange);
  return () => {
    fine.removeEventListener('change', onChange);
    reduced.removeEventListener('change', onChange);
  };
}
const getSnapshot = () => window.matchMedia(QUERY_FINE).matches && !window.matchMedia(QUERY_REDUCED).matches;
const getServerSnapshot = () => false;

export function AmbientParticles({ density = 60 }: { density?: number }) {
  const enabled = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    if (!enabled) return;
    const canvas = document.getElementById('ambient-particles') as HTMLCanvasElement | null;
    const ctx = canvas?.getContext('2d', { alpha: true });
    if (!canvas || !ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const REPEL = 130;
    const STRENGTH = 1.2;
    let dots: Dot[] = [];
    let raf = 0;
    let visible = true;
    let onScreen = true;
    let width = 0;
    let height = 0;
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      const w = Math.round(window.innerWidth);
      const h = Math.round(window.innerHeight);
      if (w === 0 || h === 0) return false;
      if (canvas.width !== Math.floor(w * dpr) || canvas.height !== Math.floor(h * dpr)) {
        canvas.width = Math.floor(w * dpr);
        canvas.height = Math.floor(h * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
      width = w;
      height = h;
      return true;
    };
    const seed = () => {
      dots = Array.from({ length: density }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 0.8 + Math.random() * 2.6,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.1,
        o: 0.18 + Math.random() * 0.5,
      }));
    };
    const draw = () => {
      raf = 0;
      if (!visible || !onScreen) return;
      ctx.clearRect(0, 0, width, height);
      for (const d of dots) {
        const dx = d.x - mouse.x;
        const dy = d.y - mouse.y;
        const dist2 = dx * dx + dy * dy;
        if (dist2 < REPEL * REPEL && dist2 > 0.01) {
          const dist = Math.sqrt(dist2);
          const force = ((REPEL - dist) / REPEL) * STRENGTH;
          d.x += (dx / dist) * force;
          d.y += (dy / dist) * force;
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
      raf = requestAnimationFrame(draw);
    };
    const start = () => { if (!raf && visible && onScreen) raf = requestAnimationFrame(draw); };
    const stop = () => { cancelAnimationFrame(raf); raf = 0; };

    if (resize()) seed();
    start();

    const onResize = () => { if (resize()) seed(); };
    const onMouse = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onMouseLeave = () => { mouse.x = -9999; mouse.y = -9999; };
    const onVisibility = () => { visible = !document.hidden; if (visible) start(); else stop(); };
    const io = new IntersectionObserver(([entry]) => { onScreen = entry.isIntersecting; if (onScreen) start(); else stop(); }, { threshold: 0 });
    io.observe(canvas);

    window.addEventListener('resize', onResize, { passive: true });
    window.addEventListener('mousemove', onMouse, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      stop();
      io.disconnect();
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouse);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [enabled, density]);

  if (!enabled) return null;
  return <canvas id="ambient-particles" className="ambient-particles" aria-hidden="true" />;
}
