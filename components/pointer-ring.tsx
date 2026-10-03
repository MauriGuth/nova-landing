'use client';

import { useEffect, useSyncExternalStore } from 'react';

/**
 * Cursor de anillo: un punto que sigue al mouse y un anillo que lo persigue
 * con un pequeño retraso. Sólo con mouse (pointer: fine + hover: hover) y sin
 * reduced-motion; en celular ni se monta. Sin blur: el anillo es un borde.
 *
 * Mientras está montado, <html> lleva la clase `cursor-ring`, y el CSS
 * esconde el cursor nativo salvo en campos de texto, que conservan su I-beam.
 * Sobre un campo de texto el anillo y el punto se ocultan.
 *
 * No usa estado de React por evento: toggles de clase y transform directos,
 * y el loop de rAF corre sólo mientras el anillo no alcanzó al mouse.
 */
const INTERACTIVE = "a, button, [role='button'], label, summary, [data-cursor='link']";
const TEXT_FIELDS = 'input, textarea, select, [contenteditable]';

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

export function PointerRing() {
  const enabled = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    if (!enabled) return;
    const root = document.documentElement;
    const dot = document.getElementById('pointer-ring-dot');
    const ring = document.getElementById('pointer-ring-ring');
    if (!dot || !ring) return;
    root.classList.add('cursor-ring');

    let mx = -100;
    let my = -100;
    let rx = -100;
    let ry = -100;
    let raf = 0;
    let shown = false;

    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      if (Math.abs(mx - rx) > 0.2 || Math.abs(my - ry) > 0.2) raf = requestAnimationFrame(tick);
      else raf = 0;
    };
    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
      if (!shown) {
        shown = true;
        rx = mx;
        ry = my;
        ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
        root.classList.add('cursor-ring--shown');
      }
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as Element | null;
      const text = !!t?.closest(TEXT_FIELDS);
      const interactive = !text && !!t?.closest(INTERACTIVE);
      root.classList.toggle('cursor-ring--text', text);
      root.classList.toggle('cursor-ring--hover', interactive);
    };
    const onDown = () => root.classList.add('cursor-ring--press');
    const onUp = () => root.classList.remove('cursor-ring--press');
    const onLeave = () => root.classList.remove('cursor-ring--shown');
    const onEnter = () => { if (shown) root.classList.add('cursor-ring--shown'); };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    window.addEventListener('mousedown', onDown, { passive: true });
    window.addEventListener('mouseup', onUp, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      root.classList.remove('cursor-ring', 'cursor-ring--shown', 'cursor-ring--hover', 'cursor-ring--press', 'cursor-ring--text');
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <>
      <div id="pointer-ring-ring" className="pointer-ring__ring" aria-hidden="true" />
      <div id="pointer-ring-dot" className="pointer-ring__dot" aria-hidden="true" />
    </>
  );
}
