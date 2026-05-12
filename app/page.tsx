"use client";

import { useState, useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Terminal,
  Monitor,
  Star,
  Boxes,
  Zap,
  Shield,
  RefreshCw,
  Headphones,
  Code,
  ArrowRight,
  Check,
  Menu as MenuIcon,
  X as XIcon,
  Mail,
  Loader2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PageTransition } from "@/lib/animations/page-transition";
import { RotatingText } from "@/components/ui/rotating-text";
import { TiltedCard } from "@/components/ui/tilted-card";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Confetti } from "@/components/ui/confetti";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { Spotlight } from "@/components/ui/spotlight";
import { Magnetic } from "@/components/ui/magnetic";
import { Marquee } from "@/components/ui/marquee";
import { GlobalBackground } from "@/components/ui/global-background";
import { FlipCard } from "@/components/ui/flip-card";
import { BorderBeam } from "@/components/ui/border-beam";

/* ── Scroll-reveal helpers ── */
function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

/* ── Scroll progress bar ── */
function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      aria-hidden
      className="fixed left-0 top-0 z-[60] h-0.5 w-full bg-transparent"
    >
      <div
        className="h-full origin-left bg-gradient-to-r from-indigo-500 via-violet-500 to-emerald-400 transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

/* ── Nova logo mark ── */
function NovaLogo({ size = 32 }: { size?: number }) {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 512 512"
        className="block dark:hidden"
        aria-hidden="true"
      >
        <rect width="512" height="512" rx="118" fill="oklch(0.62 0.18 265)" />
        <text
          x="256"
          y="345"
          textAnchor="middle"
          fontFamily="Inter, Poppins, sans-serif"
          fontWeight="700"
          fontSize="282"
          letterSpacing="-20"
          fill="#FAF8F4"
        >
          N<tspan dx="-10" opacity="0.55">S</tspan>
        </text>
      </svg>
      <svg
        width={size}
        height={size}
        viewBox="0 0 512 512"
        className="hidden dark:block"
        aria-hidden="true"
      >
        <rect width="512" height="512" rx="118" fill="#0E1116" />
        <text
          x="256"
          y="345"
          textAnchor="middle"
          fontFamily="Inter, Poppins, sans-serif"
          fontWeight="700"
          fontSize="282"
          letterSpacing="-20"
          fill="#FAF8F4"
        >
          N<tspan dx="-10" fill="oklch(0.62 0.18 265)">S</tspan>
        </text>
      </svg>
    </>
  );
}

/* ── Product card backed by TiltedCard (motion spring + cursor-follow glow) ── */
type Product = {
  id: string;
  icon: LucideIcon;
  name: string;
  tagline: string;
  description: string;
  accent: string;
  glow: string;
  features: string[];
};

function ProductCard({ product: p }: { product: Product }) {
  return (
    <TiltedCard
      glow={p.glow}
      max={14}
      className="group glass-strong cursor-default rounded-3xl p-7 h-full"
    >
      {/* Icon */}
      <div
        className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${p.accent} text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6`}
      >
        <p.icon className="h-6 w-6" />
      </div>

      {/* Name & tagline */}
      <h3 className="font-heading mb-1 text-xl font-bold text-white">{p.name}</h3>
      <p className="mb-3 text-sm font-medium text-slate-400">{p.tagline}</p>
      <p className="mb-6 text-sm leading-relaxed text-slate-500">{p.description}</p>

      {/* Features */}
      <ul className="space-y-2.5">
        {p.features.map((f, i) => (
          <li
            key={f}
            className="flex items-center gap-2.5 text-sm text-slate-300 transition-transform duration-300 group-hover:translate-x-0.5"
            style={{ transitionDelay: `${i * 25}ms` }}
          >
            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 transition-transform duration-300 group-hover:scale-110">
              <Check className="h-2.5 w-2.5" />
            </span>
            {f}
          </li>
        ))}
      </ul>
    </TiltedCard>
  );
}

/* ── Products data ── */
const products = [
  {
    id: "erp",
    icon: Boxes,
    name: "Nova ERP",
    tagline: "Sistema de gestión empresarial completo",
    description:
      "Centralizá stock, compras, facturación y reportes de tu empresa en un solo lugar. Multi-sucursal, multi-usuario y con dashboard ejecutivo en tiempo real.",
    accent: "from-indigo-500 to-violet-600",
    glow: "rgba(99,102,241,0.3)",
    features: [
      "Gestión de stock multi-depósito",
      "Compras y proveedores",
      "Facturación electrónica AFIP",
      "Dashboard ejecutivo en vivo",
      "Roles y permisos por usuario",
      "Multi-sucursal sincronizada",
    ],
  },
  {
    id: "point",
    icon: Star,
    name: "Nova Point",
    tagline: "Fidelización de clientes inteligente",
    description:
      "Programa de puntos y recompensas para retener clientes, aumentar la frecuencia de visita y construir relaciones a largo plazo con tu negocio.",
    accent: "from-emerald-500 to-teal-600",
    glow: "rgba(16,185,129,0.3)",
    features: [
      "Sistema de puntos y niveles",
      "Recompensas personalizables",
      "Historial de clientes",
      "Integración con Nova POS",
      "Reportes de fidelización",
      "App para clientes finales",
    ],
  },
  {
    id: "pos",
    icon: Monitor,
    name: "Nova POS",
    tagline: "Sistema de punto de venta completo",
    description:
      "Solución integral para restaurantes y cafeterías con gestión de mesas en tiempo real, pantalla de cocina, menú QR digital y cierre de caja automatizado.",
    accent: "from-orange-500 to-amber-600",
    glow: "rgba(249,115,22,0.3)",
    features: [
      "Mapa de mesas interactivo",
      "Display cocina y cafetería",
      "Carta digital QR",
      "Cierre de caja con fórmulas",
      "Sincronización en tiempo real",
      "Modo offline con sync automático",
    ],
  },
];

/* ── Why Nova data ── */
const benefits = [
  {
    icon: Code,
    title: "Soluciones a medida",
    description:
      "Desarrollamos software adaptado exactamente a los procesos de tu empresa, no soluciones genéricas.",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    backTitle: "Cómo trabajamos",
    backItems: [
      "Análisis profundo de tus procesos",
      "Prototipo navegable en 2 semanas",
      "Iteración constante con tu equipo",
      "Lanzamiento + capacitación",
    ],
  },
  {
    icon: Zap,
    title: "Tecnología moderna",
    description:
      "Stack tecnológico de última generación: React, NestJS, PostgreSQL, WebSockets para máxima performance.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    backTitle: "Nuestro stack",
    backItems: [
      "TypeScript · React · Next.js",
      "NestJS · PostgreSQL · Redis",
      "WebSockets · Docker · AWS",
      "CI/CD con deploys sin downtime",
    ],
  },
  {
    icon: RefreshCw,
    title: "Sync en tiempo real",
    description:
      "Todos los dispositivos actualizados al instante. Sin recargas, sin demoras, sin discrepancias de datos.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    backTitle: "Bajo el capó",
    backItems: [
      "WebSockets con reconexión automática",
      "Resolución de conflictos integrada",
      "Modo offline con sync diferido",
      "Latencia < 50 ms en red local",
    ],
  },
  {
    icon: Headphones,
    title: "Soporte dedicado",
    description:
      "Acompañamiento post-lanzamiento. Actualizaciones continuas y soporte directo con el equipo de desarrollo.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    backTitle: "Lo que incluye",
    backItems: [
      "Respuesta < 2 hs en horario laboral",
      "Canal directo con el equipo dev",
      "Updates y patches sin downtime",
      "Monitoring proactivo 24/7",
    ],
  },
];

/* ── Contact form ── */
function ContactForm() {
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setSent(true);
    setLoading(false);
  };

  if (sent) {
    return (
      <>
        <Confetti />
        <div className="flex flex-col items-center justify-center gap-4 rounded-2xl glass p-10 text-center animate-scale-in">
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
            <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping" />
            <Check className="relative h-8 w-8" />
          </div>
          <h3 className="text-xl font-semibold font-heading text-white">¡Mensaje recibido!</h3>
          <p className="text-slate-400 max-w-xs">Te contactamos a la brevedad. Gracias por tu interés en Nova Solutions.</p>
          <button
            onClick={() => { setSent(false); setForm({ name: "", company: "", email: "", message: "" }); }}
            className="mt-2 rounded-lg border border-white/10 px-5 py-2 text-sm text-slate-300 transition-all hover:border-indigo-400 hover:text-indigo-300 hover:-translate-y-0.5 cursor-pointer btn-press"
          >
            Enviar otro mensaje
          </button>
        </div>
      </>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:bg-white/[0.07] transition-all duration-300 hover:border-white/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block mb-1.5 text-xs font-medium text-slate-400">Nombre *</label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Juan García"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="company" className="block mb-1.5 text-xs font-medium text-slate-400">Empresa</label>
          <input
            id="company"
            type="text"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            placeholder="Mi Empresa S.A."
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block mb-1.5 text-xs font-medium text-slate-400">Email *</label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="juan@empresa.com"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="message" className="block mb-1.5 text-xs font-medium text-slate-400">Mensaje *</label>
        <textarea
          id="message"
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Contanos qué necesitás y te ayudamos a encontrar la mejor solución..."
          className={`${inputClass} resize-none`}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="group btn-press ripple flex w-full items-center justify-center gap-2 cursor-pointer rounded-xl bg-indigo-600 py-3.5 text-sm font-semibold text-white transition-all hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Enviando…</span>
          </>
        ) : (
          <>
            <span>Enviar mensaje</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </>
        )}
      </button>
    </form>
  );
}

/* ══════════════════════
   MAIN PAGE
══════════════════════ */
export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Nosotros", href: "#nosotros" },
    { label: "Productos", href: "#productos" },
    { label: "¿Por qué Nova?", href: "#beneficios" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <PageTransition>
    <div className="relative min-h-screen bg-[#070714] text-slate-200">

      <GlobalBackground />
      <CustomCursor />
      <Spotlight />
      <ScrollProgress />

      {/* ── Navbar ── */}
      <header
        className={`fixed left-4 right-4 top-4 z-50 mx-auto max-w-6xl rounded-2xl transition-all duration-500 ease-out ${
          scrolled ? "glass shadow-xl shadow-black/40 translate-y-0" : "bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between px-5 py-3">
          <a
            href="#"
            className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg"
            aria-label="Nova Solutions inicio"
          >
            <span className="inline-block transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
              <NovaLogo size={34} />
            </span>
            <span className="font-heading text-lg font-bold text-white">Nova Solutions</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="nav-link cursor-pointer rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contacto"
              className="cursor-pointer rounded-xl bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              Contactanos
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden cursor-pointer rounded-lg p-2 text-slate-300 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden overflow-hidden border-t border-white/10"
            >
              <ul className="px-5 pb-4 pt-3 space-y-1 stagger-children">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setMobileOpen(false)}
                      className="block cursor-pointer rounded-lg px-4 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href="#contacto"
                    onClick={() => setMobileOpen(false)}
                    className="block cursor-pointer rounded-xl bg-indigo-600 px-5 py-2.5 text-center text-sm font-semibold text-white transition-all hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/30"
                  >
                    Contactanos
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── Hero ── */}
      <section className="relative flex min-h-screen items-center justify-center px-4 pt-24 pb-16">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div
            className="relative mb-6 inline-flex items-center gap-2 overflow-hidden rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium text-indigo-300 opacity-0 animate-fade-up"
            style={{ animationDelay: "60ms" }}
          >
            <BorderBeam duration={5} thickness={1.5} colorFrom="#818CF8" colorTo="#10B981" />
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            <span className="relative">Software a medida para tu empresa</span>
          </div>

          {/* Headline */}
          <h1
            className="font-heading mb-5 text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl opacity-0 animate-fade-up"
            style={{ animationDelay: "180ms" }}
          >
            Soluciones que{" "}
            <RotatingText
              words={["transforman", "impulsan", "aceleran", "digitalizan"]}
              interval={2600}
            />
            <br />
            tu negocio
          </h1>

          <p
            className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl opacity-0 animate-fade-up"
            style={{ animationDelay: "320ms" }}
          >
            Desarrollamos software a medida que resuelve los problemas reales de tu empresa.
            Desde el punto de venta hasta la fidelización de clientes — todo en un ecosistema integrado.
          </p>

          {/* CTA buttons */}
          <div
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center opacity-0 animate-fade-up"
            style={{ animationDelay: "440ms" }}
          >
            <Magnetic strength={0.35}>
              <a
                href="#productos"
                className="group cursor-pointer inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all hover:bg-indigo-500 hover:shadow-indigo-500/40 hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 btn-press"
              >
                Ver productos
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Magnetic>
            <Magnetic strength={0.3}>
              <a
                href="#contacto"
                className="cursor-pointer inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/25 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 btn-press"
              >
                Contactanos
              </a>
            </Magnetic>
          </div>

          {/* Floating stat cards */}
          <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-6 max-w-lg mx-auto">
            {[
              {
                label: "Productos",
                float: "animate-float",
                counter: { to: 3, format: (n: number) => `${Math.round(n)}+` },
              },
              {
                label: "Uptime",
                float: "animate-float-delayed",
                counter: { to: 99.9, format: (n: number) => `${n.toFixed(1)}%` },
              },
              {
                label: "Soporte",
                float: "animate-float",
                counter: { to: 0, static: "24/7" as const },
              },
            ].map((s, i) => (
              <div
                key={s.label}
                className={`glass rounded-2xl px-4 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-white/20 opacity-0 animate-fade-up ${s.float}`}
                style={{ animationDelay: `${600 + i * 120}ms`, animationFillMode: "forwards" }}
              >
                <div className="font-heading text-2xl font-bold text-white">
                  {"static" in s.counter ? (
                    s.counter.static
                  ) : (
                    <AnimatedCounter to={s.counter.to} format={s.counter.format} />
                  )}
                </div>
                <div className="mt-0.5 text-xs font-medium text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ── Sobre nosotros ── */}
      <section id="nosotros" className="py-24 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">Sobre nosotros</p>
              <h2 className="font-heading mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
                Creamos el software que tu empresa{" "}
                <span className="gradient-text-animated">realmente necesita</span>
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-slate-400">
                Nova Solutions nació de la necesidad de resolver problemas reales en negocios reales.
                Somos un equipo de desarrolladores apasionados por la tecnología y comprometidos con
                el éxito de nuestros clientes.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-slate-400">
                No vendemos soluciones genéricas: analizamos tus procesos, entendemos tus desafíos
                y construimos herramientas que se adaptan exactamente a tu operación.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#productos"
                  className="group cursor-pointer inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-indigo-500 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/30"
                >
                  Conocé nuestros productos
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {[
                {
                  icon: Zap,
                  title: "Innovación",
                  desc: "Tecnologías de punta para resultados que marcan la diferencia.",
                  color: "text-indigo-400",
                  bg: "bg-indigo-500/10",
                },
                {
                  icon: Shield,
                  title: "Calidad",
                  desc: "Código robusto, bien probado y mantenible en el tiempo.",
                  color: "text-emerald-400",
                  bg: "bg-emerald-500/10",
                },
                {
                  icon: Headphones,
                  title: "Soporte",
                  desc: "Acompañamos a nuestros clientes mucho más allá del lanzamiento.",
                  color: "text-amber-400",
                  bg: "bg-amber-500/10",
                },
              ].map((p, i) => (
                <Reveal key={p.title} delay={120 + i * 100}>
                  <TiltedCard
                    glow={`rgba(${p.color.includes("indigo") ? "99,102,241" : p.color.includes("emerald") ? "16,185,129" : "245,158,11"}, 0.22)`}
                    max={16}
                    className="group glass rounded-2xl p-6 h-full"
                  >
                    <div
                      className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${p.bg} ${p.color} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
                    >
                      <p.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading mb-1.5 text-base font-semibold text-white">{p.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-400">{p.desc}</p>
                  </TiltedCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Productos ── */}
      <section id="productos" className="py-24 px-4">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">Nuestros productos</p>
            <h2 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Un ecosistema completo para tu negocio
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
              Cada producto fue diseñado para resolver un problema específico, y todos trabajan juntos de forma integrada.
            </p>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-3">
            {products.map((p, idx) => (
              <Reveal key={p.id} delay={idx * 120} className="h-full">
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech stack marquee ── */}
      <section aria-label="Stack tecnológico" className="py-14 px-0 border-y border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl mb-6 px-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
            Construido con tecnología moderna
          </p>
        </div>
        <Marquee speed={32}>
          {[
            "React",
            "Next.js",
            "TypeScript",
            "NestJS",
            "PostgreSQL",
            "Redis",
            "WebSockets",
            "Tailwind CSS",
            "Docker",
            "AWS",
            "Vercel",
            "Prisma",
          ].map((t) => (
            <span
              key={t}
              className="flex items-center gap-2 font-heading text-2xl font-semibold text-slate-500 transition-colors hover:text-white sm:text-3xl"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400/60" />
              {t}
            </span>
          ))}
        </Marquee>
      </section>

      {/* ── Por qué Nova ── */}
      <section id="beneficios" className="py-24 px-4">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">¿Por qué Nova?</p>
            <h2 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              La diferencia está en los detalles
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">
              No somos una agencia más. Somos un equipo comprometido con resultados reales.
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 100} className="h-full">
                <FlipCard
                  className="min-h-[280px]"
                  front={
                    <div className="flex h-full flex-col items-center justify-center rounded-2xl glass p-6 text-center cursor-pointer">
                      <div
                        className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${b.bg} ${b.color}`}
                      >
                        <b.icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-heading mb-2 text-base font-semibold text-white">{b.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-400">{b.description}</p>
                      <p className="mt-4 text-[11px] font-medium uppercase tracking-widest text-slate-500">
                        Pasá el cursor →
                      </p>
                    </div>
                  }
                  back={
                    <div
                      className={`flex h-full flex-col justify-center rounded-2xl border p-6 cursor-pointer ${b.bg.replace("/10", "/20")} ${b.color.replace("text-", "border-").replace("400", "500/30")}`}
                    >
                      <p
                        className={`mb-3 text-xs font-semibold uppercase tracking-widest ${b.color}`}
                      >
                        {b.backTitle}
                      </p>
                      <ul className="space-y-2 text-left">
                        {b.backItems.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm leading-snug text-slate-200"
                          >
                            <Check className={`h-4 w-4 shrink-0 mt-0.5 ${b.color}`} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  }
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" className="py-24 px-4">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-950/60 via-[#0a0a1e]/80 to-[#070714] backdrop-blur-xl">
              <div className="grid lg:grid-cols-2">
                {/* Left: info */}
                <div className="relative p-10 lg:p-14">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-transparent" />
                  <div className="relative">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">Contacto</p>
                    <h2 className="font-heading mb-5 text-3xl font-bold text-white sm:text-4xl">
                      Hablemos sobre tu proyecto
                    </h2>
                    <p className="mb-8 text-base leading-relaxed text-slate-400">
                      Contanos tu idea o problema y te ayudamos a encontrar la mejor solución tecnológica para tu empresa.
                      Sin compromisos, sin costos ocultos.
                    </p>

                    <div className="space-y-5">
                      <a
                        href="mailto:contacto@novasolutions.ar"
                        className="group flex items-center gap-4 -mx-2 px-2 py-1 rounded-lg transition-colors hover:bg-white/5"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                          <Mail className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Email</p>
                          <p className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                            contacto@novasolutions.ar
                          </p>
                        </div>
                      </a>
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400">
                          <Terminal className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Respuesta</p>
                          <p className="text-sm font-medium text-slate-200">En menos de 24 horas hábiles</p>
                        </div>
                      </div>
                    </div>

                    {/* Decorative orb */}
                    <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-indigo-600/10 blur-3xl animate-orb-drift" />
                  </div>
                </div>

                {/* Right: form */}
                <div className="border-t border-white/10 p-10 lg:border-l lg:border-t-0 lg:p-14">
                  <ContactForm />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/10 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-10">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <a href="#" className="mb-4 flex items-center gap-2.5 cursor-pointer">
                <NovaLogo size={32} />
                <span className="font-heading text-base font-bold text-white">Nova Solutions</span>
              </a>
              <p className="text-sm leading-relaxed text-slate-500 max-w-xs">
                Soluciones de software para los problemas reales de tu empresa.
              </p>
            </div>

            {/* Products */}
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">Productos</p>
              <ul className="space-y-2.5 text-sm text-slate-500">
                {["Nova POS", "Nova Loyalty", "Nova Print"].map((p) => (
                  <li key={p}>
                    <a href="#productos" className="cursor-pointer transition-colors hover:text-slate-200">{p}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">Empresa</p>
              <ul className="space-y-2.5 text-sm text-slate-500">
                {[
                  { label: "Sobre nosotros", href: "#nosotros" },
                  { label: "¿Por qué Nova?", href: "#beneficios" },
                  { label: "Contacto", href: "#contacto" },
                ].map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="cursor-pointer transition-colors hover:text-slate-200">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">Contacto</p>
              <ul className="space-y-2.5 text-sm text-slate-500">
                <li>
                  <a
                    href="mailto:contacto@novasolutions.ar"
                    className="cursor-pointer transition-colors hover:text-slate-200"
                  >
                    contacto@novasolutions.ar
                  </a>
                </li>
                <li>Argentina</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 sm:flex-row">
            <p className="text-xs text-slate-600">
              © {new Date().getFullYear()} Nova Solutions. Todos los derechos reservados.
            </p>
            <p className="text-xs text-slate-600">
              Hecho con dedicación en Argentina 🇦🇷
            </p>
          </div>
        </div>
      </footer>
    </div>
    </PageTransition>
  );
}
