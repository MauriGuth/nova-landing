import {
  ArrowRight,
  ChartColumn,
  ChefHat,
  Mail,
  MapPin,
  MessageCircle,
  Package,
  ReceiptText,
  Utensils,
  Wallet,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { AmbientParticles } from "@/components/ambient-particles";
import { PointerRing } from "@/components/pointer-ring";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { SystemMock } from "@/components/system-mock";
import { Diagnostico } from "@/components/diagnostico";
import { NovaLogo } from "@/components/nova-logo";
import { BigScrollTitle } from "@/components/big-scroll-title";
import { StatCard } from "@/components/stat-card";
import { ProductCard } from "@/components/product-card";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import {
  CLIENTS,
  CONTACT_MAIL,
  ERP_FEATURES,
  FOOTER_COMPANY,
  FOOTER_PRODUCTS,
  PRODUCTS,
  REASONS,
  STATS,
  WHATSAPP_URL,
} from "@/lib/site";

// Íconos de las capacidades de NovaERP (las claves salen de lib/site).
const ERP_ICONS: Record<string, LucideIcon> = {
  utensils: Utensils,
  "chef-hat": ChefHat,
  wallet: Wallet,
  package: Package,
  "receipt-text": ReceiptText,
  "chart-column": ChartColumn,
};

export default function HomePage() {
  const year = new Date().getFullYear();

  return (
    <div className="relative isolate">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-accent focus:px-4 focus:py-3 focus:text-white"
      >
        Ir al contenido
      </a>

      {/* Ambiente estático (visible en las secciones oscuras; las claras lo tapan) */}
      <div className="ambient-grid -z-10" aria-hidden="true" />
      <div className="ambient-glow -z-10" aria-hidden="true" />
      <AmbientParticles />
      <PointerRing />

      <Nav />

      <main id="contenido">
        {/* ── Hero (oscuro) ── */}
        <section className="hero px-4 pb-16 sm:px-6 md:pb-24">
          <div className="mx-auto grid max-w-[1120px] items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
            <div>
              <p className="eyebrow mb-5">Software a medida · Neuquén</p>
              <h1 className="h1">
                Aplicamos IA en tu empresa, con un sistema{" "}
                <span className="h1-underline">hecho a medida</span>.
              </h1>
              <p className="lead mt-6 max-w-[34rem]">
                Para operaciones complejas: varias bases, muchas áreas y muchos
                datos. Diseñamos el sistema sobre tus requerimientos, lo
                integramos con lo que ya usás y lo potenciamos con IA. Desde
                Neuquén, para petróleo y gas, minería, energía, logística y
                agroindustria.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-4">
                <a
                  href="#contacto"
                  className="btn btn-primary h-14 w-full text-base sm:h-12 sm:w-auto"
                >
                  Pedí una demo
                </a>
                <a
                  href="#productos"
                  className="btn btn-secondary h-14 w-full text-base sm:h-12 sm:w-auto"
                >
                  Ver productos
                </a>
              </div>
              <p className="mt-6">
                <a href="#diagnostico" className="link-arrow text-[15px]">
                  ¿Cómo opera tu empresa? Hacé el diagnóstico
                  <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                </a>
              </p>
              <p className="mt-8 text-sm leading-relaxed text-ink-3">
                Lo usan hoy en Neuquén:{" "}
                <span className="text-ink-2">
                  La Posada del Dinosaurio · The Coffee Store · Dorado
                </span>
              </p>
            </div>

            <SystemMock />
          </div>
        </section>

        {/* ── Productos (oscuro) ── */}
        <section id="productos" className="section scroll-mt-24">
          <div className="container-site">
            <Reveal>
              <p className="eyebrow">Lo que ya construimos</p>
            </Reveal>
            <BigScrollTitle direction="left">Productos</BigScrollTitle>
            <Reveal>
              <p className="lead mt-4 max-w-[62ch]">
                NovaERP es el núcleo que hoy opera en producción. NovaStay,
                NovaPoints y Jarvis trabajan sobre los mismos datos: lo que se
                carga una vez, se ve en todos lados. Sobre ese mismo núcleo
                armamos tu sistema.
              </p>
            </Reveal>

            <Reveal
              as="ul"
              stagger
              className="mt-12 grid gap-6 sm:grid-cols-2"
            >
              {PRODUCTS.map((p) => (
                <li key={p.id} className="h-full">
                  <ProductCard product={p} />
                </li>
              ))}
            </Reveal>

            {/* NovaERP en detalle: el núcleo que incluye el módulo de salón Nova POS */}
            <Reveal className="mt-10 rounded-2xl border border-line bg-surface p-6 md:p-8">
              <p className="eyebrow">NovaERP incluye</p>
              <ul className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
                {ERP_FEATURES.map(({ icon, label }) => {
                  const Icon = ERP_ICONS[icon];
                  return (
                    <li key={label} className="flex items-start gap-3">
                      {Icon ? (
                        <Icon
                          className="mt-0.5 h-5 w-5 shrink-0 text-accent-ink"
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                      ) : null}
                      <span className="text-ink">{label}</span>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ── Métricas (claro) ── */}
        <section className="section theme-light scroll-mt-24">
          <div className="container-site">
            <Reveal>
              <p className="eyebrow">En números</p>
              <h2 className="h2 mt-2">Lo que ya está operando</h2>
            </Reveal>
            <Reveal as="ul" stagger className="mt-10 grid gap-6 sm:grid-cols-3">
              {STATS.map((s) => (
                <li key={s.id}>
                  <StatCard stat={s} />
                </li>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ── Diagnóstico (oscuro) ── */}
        <section id="diagnostico" className="section band scroll-mt-24">
          <div className="container-site">
            <Reveal>
              <h2 className="h2">¿Cómo opera tu empresa hoy?</h2>
              <p className="lead mt-4 max-w-[62ch]">
                Siete preguntas de sí o no. En cada una te mostramos qué te está
                costando seguir así y qué cambia con un sistema a medida con IA.
                Al final, un resumen que podés llevar al formulario.
              </p>
            </Reveal>
            <Reveal className="mt-10">
              <Diagnostico />
            </Reveal>
          </div>
        </section>

        {/* ── Por qué Nova (claro) ── */}
        <section id="por-que-nova" className="section theme-light scroll-mt-24">
          <div className="container-site">
            <Reveal>
              <p className="eyebrow">Por qué Nova</p>
              <h2 className="h2 mt-2">La diferencia es cómo trabajamos</h2>
            </Reveal>
            <Reveal as="ul" className="mt-10 border-t border-line">
              {REASONS.map((r) => (
                <li
                  key={r.title}
                  className="grid gap-2 border-b border-line py-7 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-10"
                >
                  <h3 className="h3">{r.title}</h3>
                  <p className="max-w-[62ch] text-ink-2">{r.body}</p>
                </li>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ── Clientes / Casos (oscuro) ── */}
        <section id="clientes" className="section scroll-mt-24">
          <div className="container-site">
            <Reveal>
              <p className="eyebrow">Lo usan hoy en Neuquén</p>
            </Reveal>
            <BigScrollTitle direction="right">Casos</BigScrollTitle>
            <Reveal>
              <p className="lead mt-4 max-w-[62ch]">
                Negocios reales, con nombre, operando todos los días.
              </p>
            </Reveal>
            <Reveal
              as="ul"
              stagger
              className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
            >
              {CLIENTS.map((c) => (
                <li
                  key={c.name}
                  className="rounded-2xl border border-line bg-surface p-6"
                >
                  <h3 className="h3">{c.name}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-2">
                    {c.body}
                  </p>
                </li>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ── Nosotros (claro) ── */}
        <section id="nosotros" className="section theme-light scroll-mt-24">
          <div className="container-site grid gap-6 md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] md:gap-10">
            <Reveal>
              <p className="eyebrow">Nosotros</p>
              <h2 className="h2 mt-2">Hecho en Neuquén</h2>
            </Reveal>
            <Reveal className="max-w-[62ch] space-y-5 text-[17px] leading-relaxed text-ink-2">
              <p>
                Nova Solutions es una empresa de software de Neuquén, en la
                Patagonia argentina. Hacemos NovaERP y lo adaptamos a cada
                cliente: el sistema se ajusta a tu operación, no al revés.
              </p>
              <p>
                Hoy el sistema opera en gastronomía, hotelería y comercio, y el
                mismo núcleo sirve para un supermercado o una concesionaria.
                Para operaciones más grandes (petróleo y gas, minería, energía,
                logística, agroindustria) diseñamos el sistema sobre los
                requerimientos de la empresa y lo potenciamos con IA.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── Contacto (oscuro) ── */}
        <section id="contacto" className="section scroll-mt-24">
          <div className="container-site">
            <Reveal>
              <p className="eyebrow">Hablemos de tu operación</p>
            </Reveal>
            <BigScrollTitle direction="left">Contacto</BigScrollTitle>
            <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
              <Reveal>
                <p className="lead max-w-[40ch]">
                  Contanos qué operación tenés y qué querés resolver. Te
                  proponemos el sistema a medida, con IA, para tu caso, y te
                  mostramos lo que ya construimos.
                </p>
                <ul className="mt-8 space-y-4">
                  <li>
                    <a
                      href={`mailto:${CONTACT_MAIL}`}
                      className="link-quiet inline-flex min-h-[44px] items-center gap-2.5 text-base font-medium"
                    >
                      <Mail className="h-5 w-5 text-accent-ink" strokeWidth={1.75} aria-hidden="true" />
                      {CONTACT_MAIL}
                    </a>
                  </li>
                  <li>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      <MessageCircle className="h-5 w-5 text-accent-ink" strokeWidth={1.75} aria-hidden="true" />
                      Escribinos por WhatsApp
                    </a>
                  </li>
                </ul>
                <p className="mt-6 max-w-[30ch] text-sm text-ink-3 [text-wrap:pretty]">
                  Respondemos en horario laboral, por WhatsApp o por mail.
                </p>
              </Reveal>
              <Reveal>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-line">
        <div className="container-site py-12 md:py-16">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))]">
            <div>
              <Link
                href="/"
                className="inline-flex h-11 items-center gap-2.5 rounded-lg"
                aria-label="Nova Solutions, inicio"
              >
                <NovaLogo size={28} />
                <span className="font-display text-[17px] font-semibold text-ink">
                  Nova Solutions
                </span>
              </Link>
              <p className="mt-3 max-w-[32ch] text-sm leading-relaxed text-ink-2">
                Sistemas a medida con IA para empresas y negocios, hechos en
                Neuquén, Argentina.
              </p>
            </div>

            <nav aria-labelledby="footer-productos">
              <p id="footer-productos" className="text-sm font-semibold text-ink">
                Productos
              </p>
              <ul className="mt-2">
                {FOOTER_PRODUCTS.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="link-quiet inline-flex min-h-[44px] min-w-[44px] items-center text-sm">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-labelledby="footer-empresa">
              <p id="footer-empresa" className="text-sm font-semibold text-ink">
                Empresa
              </p>
              <ul className="mt-2">
                {FOOTER_COMPANY.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="link-quiet inline-flex min-h-[44px] min-w-[44px] items-center text-sm">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="text-sm font-semibold text-ink">Contacto</p>
              <ul className="mt-2">
                <li>
                  <a
                    href={`mailto:${CONTACT_MAIL}`}
                    className="link-quiet inline-flex min-h-[44px] min-w-[44px] items-center text-sm"
                  >
                    {CONTACT_MAIL}
                  </a>
                </li>
                <li className="flex min-h-[44px] items-center gap-2 text-sm text-ink-2">
                  <MapPin className="h-4 w-4 text-ink-3" strokeWidth={1.75} aria-hidden="true" />
                  Neuquén, Argentina
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-10 border-t border-line pt-6 text-sm text-ink-3">
            © {year} Nova Solutions. NovaERP, NovaStay, NovaPoints y Jarvis son
            productos de Nova Solutions.
          </p>
        </div>
      </footer>

      <WhatsAppFab />
    </div>
  );
}
