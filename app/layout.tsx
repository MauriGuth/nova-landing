import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

// Fuentes self-hosteadas por Next (antes: @import de Google Fonts en globals.css,
// que encadenaba requests render-blocking y penalizaba el LCP).
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const SITE_URL = "https://novasolutions.ar";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Software de gestión gastronómica y POS para restaurantes | Nova Solutions",
  description:
    "Sistema de gestión para restaurantes, cafeterías y hoteles en Argentina: punto de venta (POS), control de stock, producción y fidelización de clientes. Desarrollado en Neuquén.",
  alternates: { canonical: "/" },
  authors: [{ name: "Nova Solutions" }],
  openGraph: {
    title: "Nova Solutions — Software de gestión gastronómica",
    description:
      "Sistema de gestión para restaurantes, cafeterías y hoteles en Argentina: POS, control de stock, producción y fidelización. Desarrollado en Neuquén.",
    url: SITE_URL,
    siteName: "Nova Solutions",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Nova Solutions — Software de gestión gastronómica",
    description:
      "Sistema de gestión para restaurantes, cafeterías y hoteles en Argentina: POS, control de stock, producción y fidelización.",
  },
};

// Datos estructurados: entidad local (empresa de software en Neuquén) + producto.
// Ayudan a Google a entender quiénes somos, dónde estamos y qué vendemos.
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
        "Empresa de software de Neuquén, Argentina, especializada en sistemas de gestión para gastronomía y hotelería: POS, control de stock, producción y fidelización.",
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
      name: "Nova ERP",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://novaerp.com.ar",
      description:
        "Sistema de gestión gastronómica: punto de venta para restaurantes, cafeterías y hoteles, control de stock multi-depósito, producción con trazabilidad, facturación electrónica ARCA y cierres de caja.",
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
    <html lang="es-AR" className={`dark ${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo-dark.svg" />
      </head>
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
