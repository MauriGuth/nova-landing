import type { Metadata, Viewport } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAds } from "@/components/google-ads";
import { GoogleTag } from "@/components/google-tag";
import { SITE_URL } from "@/lib/site";

// Fuentes self-hosteadas por next/font (sin requests externos en el render):
// Geist para títulos y texto (una sola carga; --font-body se deriva de
// --font-display en globals.css) y JetBrains Mono para datos, etiquetas y
// detalles técnicos.
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#070714",
  viewportFit: "cover",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Sistemas a medida con IA para empresas | Nova Solutions",
  description:
    "Nova Solutions diseña el sistema que tu empresa necesita, sobre tus requerimientos, y lo potencia con IA: alertas y predicciones, reportes con resumen ejecutivo y un asistente que responde con tus datos. Hecho en Neuquén para operaciones complejas y para negocios de todos los rubros.",
  alternates: { canonical: "/" },
  authors: [{ name: "Nova Solutions" }],
  openGraph: {
    title: "Nova Solutions — Aplicamos IA en tu empresa, con un sistema hecho a medida",
    description:
      "Sistemas a medida con IA para operaciones complejas: varias bases, muchas áreas y muchos datos. Hecho en Neuquén; en producción en gastronomía, hotelería y comercio.",
    url: SITE_URL,
    siteName: "Nova Solutions",
    locale: "es_AR",
    type: "website",
    // metadataBase (SITE_URL) resuelve esta ruta al dominio de producción, nunca a localhost.
    // Logo cuadrado como imagen de previsualización; cuando haya una portada
    // 1200×630, reemplazarla acá y pasar twitter.card a "summary_large_image".
    images: [{ url: "/og-logo.png", width: 1024, height: 1024, alt: "Nova Solutions" }],
  },
  twitter: {
    card: "summary",
    title: "Nova Solutions — Aplicamos IA en tu empresa, con un sistema hecho a medida",
    description:
      "Sistemas a medida con IA para operaciones complejas. Hecho en Neuquén.",
    images: ["/og-logo.png"],
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
        "Empresa de software de Neuquén, Argentina. Diseña sistemas a medida potenciados con IA para empresas de rubros complejos y hace NovaERP, un sistema de gestión en producción en gastronomía, hotelería y comercio.",
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
    <html lang="es-AR" className={`${geist.variable} ${mono.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo-dark.svg" />
        <GoogleTag />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <GoogleAds />
      </body>
    </html>
  );
}
