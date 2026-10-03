import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist } from "next/font/google";
import "./globals.css";

// Fuentes self-hosteadas por next/font: Bricolage Grotesque (display, variable,
// con eje óptico) y Geist (cuerpo, variable). Sin requests externos en el render.
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz"],
});
const body = Geist({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const SITE_URL = "https://novasolutions.ar";

export const viewport: Viewport = {
  themeColor: "#070714",
  viewportFit: "cover",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Software de gestión para gastronomía y hotelería | Nova Solutions",
  description:
    "NovaERP, el sistema de gestión de Nova Solutions para restaurantes, cafeterías, hoteles y comercios de Argentina: punto de venta, stock, caja, facturación electrónica ARCA y fidelización. Hecho en Neuquén y adaptado a cada negocio.",
  alternates: { canonical: "/" },
  authors: [{ name: "Nova Solutions" }],
  openGraph: {
    title: "Nova Solutions — Software de gestión hecho en Neuquén",
    description:
      "NovaERP para restaurantes, cafeterías, hoteles y comercios: punto de venta, stock, caja, facturación ARCA y fidelización. Lo programamos nosotros y lo adaptamos a tu operación.",
    url: SITE_URL,
    siteName: "Nova Solutions",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Nova Solutions — Software de gestión hecho en Neuquén",
    description:
      "NovaERP para restaurantes, cafeterías, hoteles y comercios: punto de venta, stock, caja, facturación ARCA y fidelización.",
  },
};

// Datos estructurados: entidad local (empresa de software en Neuquén) + producto.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": `${SITE_URL}/#org`,
      name: "Nova Solutions",
      url: SITE_URL,
      email: "contacto@novasolutions.ar",
      description:
        "Empresa de software de Neuquén, Argentina. Hace NovaERP, un sistema de gestión para gastronomía y hotelería (y también comercios y supermercados): punto de venta, stock, caja, facturación electrónica ARCA y fidelización.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Neuquén",
        addressRegion: "Neuquén",
        addressCountry: "AR",
      },
      areaServed: "AR",
    },
    {
      "@type": "SoftwareApplication",
      name: "NovaERP",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://novaerp.com.ar",
      description:
        "Sistema de gestión para restaurantes, cafeterías, hoteles y comercios: punto de venta con mesas y comandas, pantalla de cocina, stock por local, caja y cierres, facturación electrónica ARCA, fidelización y reportes por día de negocio.",
      publisher: { "@id": `${SITE_URL}/#org` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR" className={`${display.variable} ${body.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo-dark.svg" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
