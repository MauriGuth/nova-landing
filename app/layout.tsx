import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nova Solutions — Software para tu empresa",
  description:
    "Desarrollamos soluciones de software a medida para los problemas reales de tu empresa. POS, Loyalty, impresión cloud y más.",
  keywords: ["software", "desarrollo", "POS", "punto de venta", "restaurantes", "Nova Solutions"],
  authors: [{ name: "Nova Solutions" }],
  openGraph: {
    title: "Nova Solutions",
    description: "Soluciones de software para los problemas reales de tu empresa",
    url: "https://novasolutions.ar",
    siteName: "Nova Solutions",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Solutions",
    description: "Soluciones de software para los problemas reales de tu empresa",
  },
  metadataBase: new URL("https://novasolutions.ar"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌟</text></svg>" />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
