"use client";

import { useState, useEffect } from "react";

/* ── Icons (inline SVG, no dependency) ── */
function IconTerminal({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  );
}
function IconMonitor({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}
function IconStar({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
function IconPrinter({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect x="6" y="14" width="12" height="8" />
    </svg>
  );
}
function IconZap({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
function IconShield({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function IconRefresh({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  );
}
function IconHeadphones({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  );
}
function IconCode({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
function IconArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
function IconCheck({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
function IconMenu({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}
function IconX({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
function IconMail({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
    </svg>
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

/* ── Products data ── */
const products = [
  {
    id: "pos",
    icon: IconMonitor,
    name: "Nova POS",
    tagline: "Sistema de punto de venta completo",
    description:
      "Solución integral para restaurantes y cafeterías con gestión de mesas en tiempo real, pantalla de cocina, menú QR digital y cierre de caja automatizado.",
    accent: "from-indigo-500 to-violet-600",
    glow: "rgba(99,102,241,0.3)",
    features: [
      "Mapa de mesas interactivo",
      "Display cocina y cafetería",
      "Carta digital QR",
      "Cierre de caja con fórmulas",
      "Sincronización en tiempo real",
      "Modo offline con sync automático",
    ],
  },
  {
    id: "loyalty",
    icon: IconStar,
    name: "Nova Loyalty",
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
    id: "print",
    icon: IconPrinter,
    name: "Nova Print",
    tagline: "Impresión cloud para tu negocio",
    description:
      "Integración de impresión térmica en la nube que conecta tu sistema POS con impresoras de cocina, barra y caja sin configuración compleja.",
    accent: "from-orange-500 to-amber-600",
    glow: "rgba(249,115,22,0.3)",
    features: [
      "Impresoras térmicas cloud",
      "Múltiples destinos de impresión",
      "Tickets y comandas automáticas",
      "Configuración sin servidores",
      "Compatible con ESC/POS",
      "Monitoreo de estado en vivo",
    ],
  },
];

/* ── Why Nova data ── */
const benefits = [
  {
    icon: IconCode,
    title: "Soluciones a medida",
    description:
      "Desarrollamos software adaptado exactamente a los procesos de tu empresa, no soluciones genéricas.",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  {
    icon: IconZap,
    title: "Tecnología moderna",
    description:
      "Stack tecnológico de última generación: React, NestJS, PostgreSQL, WebSockets para máxima performance.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    icon: IconRefresh,
    title: "Sync en tiempo real",
    description:
      "Todos los dispositivos actualizados al instante. Sin recargas, sin demoras, sin discrepancias de datos.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: IconHeadphones,
    title: "Soporte dedicado",
    description:
      "Acompañamiento post-lanzamiento. Actualizaciones continuas y soporte directo con el equipo de desarrollo.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
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
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl glass p-10 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
          <IconCheck className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-semibold font-heading text-white">¡Mensaje recibido!</h3>
        <p className="text-slate-400 max-w-xs">Te contactamos a la brevedad. Gracias por tu interés en Nova Solutions.</p>
        <button
          onClick={() => { setSent(false); setForm({ name: "", company: "", email: "", message: "" }); }}
          className="mt-2 rounded-lg border border-white/10 px-5 py-2 text-sm text-slate-300 transition-colors hover:border-indigo-400 hover:text-indigo-300 cursor-pointer"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

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
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-colors"
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
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-colors"
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
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-colors"
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
          className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-colors"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full cursor-pointer rounded-xl bg-indigo-600 py-3.5 text-sm font-semibold text-white transition-all hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/25 disabled:opacity-70 disabled:cursor-not-allowed active:scale-[0.98]"
      >
        {loading ? "Enviando..." : "Enviar mensaje"}
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
    <div className="min-h-screen bg-[#070714] text-slate-200">

      {/* ── Navbar ── */}
      <header
        className={`fixed left-4 right-4 top-4 z-50 mx-auto max-w-6xl rounded-2xl transition-all duration-300 ${
          scrolled ? "glass shadow-xl shadow-black/40" : "bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between px-5 py-3">
          <a href="#" className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg" aria-label="Nova Solutions inicio">
            <NovaLogo size={34} />
            <span className="font-heading text-lg font-bold text-white">Nova Solutions</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="cursor-pointer rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
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
            {mobileOpen ? <IconX className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/10 px-5 pb-4 pt-3">
            <ul className="space-y-1">
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
                  className="block cursor-pointer rounded-xl bg-indigo-600 px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
                >
                  Contactanos
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* ── Hero ── */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24 pb-16">
        {/* Animated gradient BG */}
        <div
          className="absolute inset-0 animate-gradient-shift"
          style={{
            backgroundSize: "400% 400%",
            background:
              "radial-gradient(ellipse at 20% 50%, rgba(99,102,241,0.25) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(139,92,246,0.2) 0%, transparent 50%), radial-gradient(ellipse at 60% 80%, rgba(16,185,129,0.1) 0%, transparent 50%)",
          }}
        />
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium text-indigo-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Software a medida para tu empresa
          </div>

          {/* Headline */}
          <h1 className="font-heading mb-5 text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Soluciones que{" "}
            <span className="gradient-text">transforman</span>
            <br />
            tu negocio
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
            Desarrollamos software a medida que resuelve los problemas reales de tu empresa.
            Desde el punto de venta hasta la fidelización de clientes — todo en un ecosistema integrado.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#productos"
              className="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all hover:bg-indigo-500 hover:shadow-indigo-500/40 hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              Ver productos
              <IconArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contacto"
              className="cursor-pointer inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/25 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              Contactanos
            </a>
          </div>

          {/* Floating stat cards */}
          <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-6 max-w-lg mx-auto">
            {[
              { value: "3+", label: "Productos" },
              { value: "99.9%", label: "Uptime" },
              { value: "24/7", label: "Soporte" },
            ].map((s) => (
              <div key={s.label} className="glass rounded-2xl px-4 py-5 text-center animate-float">
                <div className="font-heading text-2xl font-bold text-white">{s.value}</div>
                <div className="mt-0.5 text-xs font-medium text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Glow orbs */}
        <div className="pointer-events-none absolute -left-64 top-1/4 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-64 bottom-1/4 h-96 w-96 rounded-full bg-violet-600/15 blur-3xl" />
      </section>

      {/* ── Sobre nosotros ── */}
      <section id="nosotros" className="py-24 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">Sobre nosotros</p>
              <h2 className="font-heading mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
                Creamos el software que tu empresa{" "}
                <span className="gradient-text">realmente necesita</span>
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
                  className="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-indigo-500 hover:-translate-y-0.5"
                >
                  Conocé nuestros productos
                  <IconArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {[
                {
                  icon: IconZap,
                  title: "Innovación",
                  desc: "Tecnologías de punta para resultados que marcan la diferencia.",
                  color: "text-indigo-400",
                  bg: "bg-indigo-500/10",
                },
                {
                  icon: IconShield,
                  title: "Calidad",
                  desc: "Código robusto, bien probado y mantenible en el tiempo.",
                  color: "text-emerald-400",
                  bg: "bg-emerald-500/10",
                },
                {
                  icon: IconHeadphones,
                  title: "Soporte",
                  desc: "Acompañamos a nuestros clientes mucho más allá del lanzamiento.",
                  color: "text-amber-400",
                  bg: "bg-amber-500/10",
                },
              ].map((p) => (
                <div key={p.title} className="glass rounded-2xl p-6">
                  <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${p.bg} ${p.color}`}>
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading mb-1.5 text-base font-semibold text-white">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Productos ── */}
      <section id="productos" className="py-24 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">Nuestros productos</p>
            <h2 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Un ecosistema completo para tu negocio
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
              Cada producto fue diseñado para resolver un problema específico, y todos trabajan juntos de forma integrada.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {products.map((p) => (
              <div
                key={p.id}
                className="group glass-strong cursor-default rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: `0 0 0 0 ${p.glow}`, transition: "box-shadow 0.3s, transform 0.3s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px ${p.glow}` }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 ${p.glow}` }}
              >
                {/* Icon */}
                <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${p.accent} text-white shadow-lg`}>
                  <p.icon className="h-6 w-6" />
                </div>

                {/* Name & tagline */}
                <h3 className="font-heading mb-1 text-xl font-bold text-white">{p.name}</h3>
                <p className="mb-3 text-sm font-medium text-slate-400">{p.tagline}</p>
                <p className="mb-6 text-sm leading-relaxed text-slate-500">{p.description}</p>

                {/* Features */}
                <ul className="space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                        <IconCheck className="h-2.5 w-2.5" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Por qué Nova ── */}
      <section id="beneficios" className="py-24 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">¿Por qué Nova?</p>
            <h2 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              La diferencia está en los detalles
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">
              No somos una agencia más. Somos un equipo comprometido con resultados reales.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="group glass rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-white/20 cursor-default"
              >
                <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${b.bg} ${b.color} transition-transform duration-300 group-hover:scale-110`}>
                  <b.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading mb-2 text-base font-semibold text-white">{b.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" className="py-24 px-4">
        <div className="mx-auto max-w-6xl">
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
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400">
                        <IconMail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Email</p>
                        <p className="text-sm font-medium text-slate-200">hola@novasolutions.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400">
                        <IconTerminal className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Respuesta</p>
                        <p className="text-sm font-medium text-slate-200">En menos de 24 horas hábiles</p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative orb */}
                  <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-indigo-600/10 blur-3xl" />
                </div>
              </div>

              {/* Right: form */}
              <div className="border-t border-white/10 p-10 lg:border-l lg:border-t-0 lg:p-14">
                <ContactForm />
              </div>
            </div>
          </div>
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
                <li>hola@novasolutions.com</li>
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
  );
}
