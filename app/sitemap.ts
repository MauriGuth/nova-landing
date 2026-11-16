import type { MetadataRoute } from "next";

// Se sirve en /sitemap.xml. Cuando se agreguen páginas nuevas
// (productos, precios, ciudades), sumarlas acá.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.novasolutions.ar",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.novasolutions.ar/privacidad",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: "https://www.novasolutions.ar/terminos",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
