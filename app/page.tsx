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
import { Nav } from "@/components/nav";
import { AmbientParticles } from "@/components/ambient-particles";
import { PointerRing } from "@/components/pointer-ring";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { DashboardMock } from "@/components/dashboard-mock";
import { NovaLogo } from "@/components/nova-logo";

const NOVAERP_URL = "https://novaerp.com.ar";
const CONTACT_MAIL = "contacto@novasolutions.ar";
const WHATSAPP_URL =
  "https://wa.me/542995171364?text=" +
  encodeURIComponent("Hola! Quiero una demo de NovaERP");

const ERP_FEATURES: { icon: LucideIcon; label: string }[] = [
  { icon: Utensils, label: "Mesas y comandas" },
  { icon: ChefHat, label: "Pantalla de cocina" },
  { icon: Wallet, label: "Caja, arqueo y cierre" },
  { icon: Package, label: "Stock por local" },
  { icon: ReceiptText, label: "Facturación electrónica ARCA" },
  { icon: ChartColumn, label: "Reportes por día de negocio" },
];

const FAMILY = [
  {
    id: "novastay",
    name: "NovaStay",
    line: "El PMS para hoteles que comparte la caja con el restaurante.",
    points: [
      "Reservas, check-in y check-out",
      "Cargo a la habitación desde el restaurante",
      "Caja única: el cierre del día es uno solo",
    ],
  },
  {
    id: "novapoints",
    name: "NovaPoints",
    line: "Fidelización con app propia para tus clientes.",
    points: [
      "Puntos por cada compra",
      "Niveles y premios que definís vos",
      "Se suma desde el punto de venta, sin pasos extra",
    ],
  },
  {
    id: "jarvis",
    name: "Jarvis",
    line: "El asistente por WhatsApp que contesta con datos reales del sistema.",
    points: [
      "Ventas, caja y stock al momento",
      "Quién faltó, quién fichó y a qué hora",
      "Si no tiene el dato, no lo inventa",
    ],
  },
];

const REASONS = [
  {
    title: "Un dato se carga una vez y aparece en todos lados",
    body: "Cargás un producto, un precio o un cliente una sola vez y lo ven el punto de venta, el stock, la caja, los reportes y Jarvis. Sin planillas paralelas ni doble carga.",
  },
  {
    title: "El sistema te contesta por WhatsApp",
    body: "Le preguntás a Jarvis “¿cuánto vendí hoy?” o “¿quién faltó?”, por texto o por audio, y te responde con los datos del sistema. Si no tiene el dato, te lo dice: nunca inventa un número.",
  },
  {
    title: "Soporte directo con quien lo programó, desde Neuquén",
    body: "Hablás con las mismas personas que escriben el sistema. Un cambio que tu local necesita no entra en una cola de pedidos de otro país: lo hacemos nosotros.",
  },
  {
    title: "Hotel y restaurante con una sola caja",
    body: "En La Posada del Dinosaurio, NovaStay y NovaERP comparten la caja: el consumo del restaurante se carga a la habitación y el cierre del día es uno solo.",
  },
];

const CLIENTS = [
  {
    name: "La Posada del Dinosaurio",
    body: "Hotel y restaurante. NovaStay y NovaERP con caja única: lo que se consume en el restaurante se carga a la habitación.",
  },
  {
    name: "The Coffee Store",
    body: "Cafetería. Punto de venta y fidelización con NovaPoints: sus clientes suman puntos en cada compra.",
  },
  {
    name: "Dorado",
    body: "Restaurante. Mesas, comandas y caja en NovaERP; sus clientes suman puntos y reservan desde la app con su marca, hecha con NovaPoints.",
  },
];

const FOOTER_PRODUCTS = [
  { label: "NovaERP", href: "#novaerp" },
  { label: "NovaStay", href: "#novastay" },
  { label: "NovaPoints", href: "#novapoints" },
  { label: "Jarvis", href: "#jarvis" },
];
const FOOTER_COMPANY = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Por qué Nova", href: "#por-que-nova" },
  { label: "Contacto", href: "#contacto" },
];

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

      {/* Ambiente estático */}
      <div className="ambient-grid -z-10" aria-hidden="true" />
      <div className="ambient-glow -z-10" aria-hidden="true" />
      <AmbientParticles />
      <PointerRing />

      <Nav />

      <main id="contenido">
        {/* ── Hero ── */}
        <section className="hero px-4 pb-16 sm:px-6 md:pb-24">
          <div className="mx-auto grid max-w-[1120px] items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
            <div>
              <h1 className="h1">
                Software de gestión{" "}
                <span className="h1-underline">hecho en Neuquén</span> para
                tu negocio.
              </h1>
              <p className="lead mt-6 max-w-[34rem]">
                NovaERP para restaurantes, cafeterías, hoteles y comercios:
                punto de venta, stock, caja, facturación ARCA y fidelización.
                Lo programamos nosotros y lo adaptamos a tu operación.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <a
                  href="#contacto"
                  className="btn btn-primary h-14 w-full text-base sm:h-12 sm:w-auto"
                >
                  Pedí una demo
                </a>
                <a
                  href={NOVAERP_URL}
                  className="link-arrow h-11 self-start text-base sm:self-auto"
                >
                  Ver NovaERP
                  <ArrowRight className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </a>
              </div>
              <p className="mt-8 text-sm leading-relaxed text-ink-3">
                Lo usan hoy en Neuquén:{" "}
                <span className="text-ink-2">
                  La Posada del Dinosaurio · The Coffee Store · Dorado
                </span>
              </p>
            </div>

            <DashboardMock />
          </div>
        </section>

        {/* ── Productos ── */}
        <section id="productos" className="section band scroll-mt-24">
          <div className="container-site">
            <Reveal>
              <h2 className="h2">Todo el negocio en un solo sistema</h2>
              <p className="lead mt-4 max-w-[62ch]">
                NovaERP es el centro. NovaStay, NovaPoints y Jarvis trabajan
                sobre los mismos datos: lo que se carga una vez, se ve en todos
                lados.
              </p>
            </Reveal>

            <Reveal className="mt-12">
              <article
                id="novaerp"
                className="grid gap-8 rounded-2xl border border-line bg-surface p-6 scroll-mt-28 md:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-12"
              >
                <div>
                  <h3 className="font-display text-[28px] font-semibold leading-[1.1] tracking-[-0.01em] text-ink md:text-[32px]">
                    NovaERP
                  </h3>
                  <p className="mt-3 max-w-[46ch] text-ink-2">
                    El sistema de gestión completo para tu local: lo que pasa
                    en el salón, la cocina, la caja y el depósito, en un solo
                    lugar y con los mismos datos.
                  </p>
                  <a href={NOVAERP_URL} className="btn btn-primary mt-6">
                    Conocé NovaERP
                    <ArrowRight className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  </a>
                </div>
                <ul className="grid gap-x-8 gap-y-4 self-center sm:grid-cols-2">
                  {ERP_FEATURES.map(({ icon: Icon, label }) => (
                    <li key={label} className="flex items-start gap-3">
                      <Icon
                        className="mt-0.5 h-5 w-5 shrink-0 text-accent-ink"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                      <span className="text-ink">{label}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            {/* La única "historia" animada de la página: las tres filas entran con stagger */}
            <Reveal as="ul" stagger className="mt-6 border-t border-line">
              {FAMILY.map((p) => (
                <li
                  key={p.id}
                  id={p.id}
                  className="grid gap-3 border-b border-line py-7 scroll-mt-28 md:grid-cols-[180px_minmax(0,1fr)_minmax(0,1fr)] md:gap-8"
                >
                  <h3 className="h3">{p.name}</h3>
                  <p className="text-ink-2">{p.line}</p>
                  <ul className="space-y-1.5 text-[15px] text-ink-2">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex gap-2.5">
                        <span
                          className="mt-[10px] h-1 w-1 shrink-0 rounded-full bg-accent-ink"
                          aria-hidden="true"
                        />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ── Por qué Nova ── */}
        <section id="por-que-nova" className="section scroll-mt-24">
          <div className="container-site">
            <Reveal>
              <h2 className="h2">Por qué Nova</h2>
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

        {/* ── Clientes ── */}
        <section id="clientes" className="section band scroll-mt-24">
          <div className="container-site">
            <Reveal>
              <h2 className="h2">Lo usan hoy en Neuquén</h2>
              <p className="lead mt-4 max-w-[62ch]">
                Negocios reales, con nombre, operando todos los días.
              </p>
            </Reveal>
            <Reveal
              as="ul"
              className="mt-10 grid gap-8 md:grid-cols-3 md:gap-0 md:divide-x md:divide-line"
            >
              {CLIENTS.map((c) => (
                <li key={c.name} className="md:px-8 md:first:pl-0 md:last:pr-0">
                  <h3 className="h3">{c.name}</h3>
                  <p className="mt-3 text-ink-2">{c.body}</p>
                </li>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ── Nosotros ── */}
        <section id="nosotros" className="section scroll-mt-24">
          <div className="container-site grid gap-6 md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] md:gap-10">
            <Reveal>
              <h2 className="h2">Nosotros</h2>
            </Reveal>
            <Reveal className="max-w-[62ch] space-y-5 text-[17px] leading-relaxed text-ink-2">
              <p>
                Nova Solutions es una empresa de software de Neuquén, en la
                Patagonia argentina. Hacemos NovaERP y lo adaptamos a cada
                cliente: el sistema se ajusta a tu operación, no al revés.
              </p>
              <p>
                Hoy trabajamos sobre todo con gastronomía y hotelería. El mismo
                núcleo sirve para un supermercado, un comercio o una
                concesionaria, con las funciones que cada negocio necesita.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── Contacto ── */}
        <section id="contacto" className="section band scroll-mt-24">
          <div className="container-site grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
            <Reveal>
              <h2 className="h2">Hablemos de tu negocio</h2>
              <p className="lead mt-4 max-w-[40ch]">
                Contanos qué tenés y qué querés resolver. Te mostramos NovaERP
                funcionando con un caso como el tuyo.
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
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-line">
        <div className="container-site py-12 md:py-16">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))]">
            <div>
              <a
                href="/"
                className="inline-flex h-11 items-center gap-2.5 rounded-lg"
                aria-label="Nova Solutions, inicio"
              >
                <NovaLogo size={28} />
                <span className="font-display text-[17px] font-semibold text-ink">
                  Nova Solutions
                </span>
              </a>
              <p className="mt-3 max-w-[32ch] text-sm leading-relaxed text-ink-2">
                Software de gestión para gastronomía y hotelería, hecho en
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
    </div>
  );
}
