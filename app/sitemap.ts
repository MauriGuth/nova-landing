import type { MetadataRoute } from "next";

// Se sirve en /sitemap.xml. Cuando se agreguen páginas nuevas
// (productos, precios, ciudades), sumarlas acá.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://novasolutions.ar",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
