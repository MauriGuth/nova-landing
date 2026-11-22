/**
 * Configuración y contenido central del sitio de Nova Solutions.
 *
 * Todo lo editable (números de contacto, métricas, productos, clientes) vive
 * acá para que la página sea declarativa. Las cifras de métricas están como
 * constantes marcadas con TODO: NO son datos reales todavía.
 */

export const SITE_URL = "https://www.novasolutions.ar";
export const NOVAERP_URL = "https://novaerp.com.ar";
export const CONTACT_MAIL = "contacto@novasolutions.ar";

/** Número de WhatsApp en formato internacional, sin signos (para wa.me). */
export const WHATSAPP_NUMBER = "542995171364";
export const WHATSAPP_MESSAGE =
  "Hola! Quiero pedir una demo de un sistema a medida para mi empresa";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

/** Capacidades del núcleo NovaERP (incluye el módulo de salón Nova POS). */
export const ERP_FEATURES = [
  { icon: "utensils", label: "Mesas y comandas (Nova POS)" },
  { icon: "chef-hat", label: "Pantalla de cocina" },
  { icon: "wallet", label: "Caja, arqueo y cierre" },
  { icon: "package", label: "Stock por local" },
  { icon: "receipt-text", label: "Facturación electrónica ARCA" },
  { icon: "chart-column", label: "Reportes por día de negocio" },
] as const;

/**
 * Métricas para las StatCard.
 *
 * TODO: reemplazar por cifras reales confirmadas. No publicar sin validar.
 * `value` es el número final (se anima desde 0), `prefix`/`suffix` lo decoran.
 */
export type Stat = {
  id: string;
  prefix?: string;
  value: number;
  suffix?: string;
  label: string;
  illustration: "comandera" | "tablet" | "ticket";
};

export const STATS: Stat[] = [
  {
    id: "locales",
    prefix: "+",
    value: 4, // TODO: cantidad real de locales en producción
    label: "locales operando en Neuquén",
    illustration: "tablet",
  },
  {
    id: "tickets",
    prefix: "+",
    value: 100, // TODO: tickets/comandas procesados (placeholder)
    suffix: "k",
    label: "comandas procesadas por NovaERP",
    illustration: "comandera",
  },
  {
    id: "soporte",
    value: 24,
    suffix: "/7",
    label: "soporte directo con quien lo programó",
    illustration: "ticket",
  },
];

/** Tarjetas de producto grandes. `image` queda en null hasta tener captura. */
export type Product = {
  id: string;
  name: string;
  value: string;
  body: string;
  href: string;
  cta: string;
  /** TODO: ruta en /public a la captura del producto (ej. "/products/novaerp.jpg"). */
  image: string | null;
  badge?: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "novaerp",
    name: "NovaERP",
    value: "El núcleo de gestión que hoy opera en producción.",
    body: "Salón, cocina, caja y depósito en un solo lugar y con los mismos datos. Incluye Nova POS, el módulo de salón: mesas, comandas y cobro.",
    href: NOVAERP_URL,
    cta: "Conocé NovaERP",
    image: null, // TODO: captura de NovaERP
  },
  {
    id: "novastay",
    name: "NovaStay",
    value: "El PMS para hoteles que comparte la caja con el restaurante.",
    body: "Reservas, check-in y check-out. El consumo del restaurante se carga a la habitación y el cierre del día es uno solo.",
    href: "#contacto",
    cta: "Más info",
    image: null, // TODO: captura de NovaStay
  },
  {
    id: "novapoints",
    name: "NovaPoints",
    value: "Fidelización con app propia para tus clientes.",
    body: "Puntos por cada compra, niveles y premios que definís vos. Se suma desde el punto de venta, sin pasos extra.",
    href: "#contacto",
    cta: "Más info",
    image: null, // TODO: captura de NovaPoints
  },
  {
    id: "jarvis",
    name: "Jarvis",
    value: "El asistente por WhatsApp que contesta con datos reales del sistema.",
    body: "Ventas, caja y stock al momento; quién faltó y a qué hora. Si no tiene el dato, no lo inventa.",
    href: "#contacto",
    cta: "Más info",
    image: null, // TODO: captura/mockup de Jarvis
  },
];

export const REASONS = [
  {
    title: "El sistema se ajusta a tu operación, no al revés",
    body: "Partimos de tus requerimientos: tus bases, tus áreas, tus flujos y los sistemas que ya usás. Diseñamos sobre eso y lo potenciamos con IA donde hace diferencia: alertas, predicciones, reportes y un asistente con tus datos.",
  },
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

export const CLIENTS = [
  {
    name: "La Posada del Dinosaurio",
    body: "Hotel y restaurante. NovaStay y NovaERP con caja única: lo que se consume en el restaurante se carga a la habitación.",
  },
  {
    name: "The Coffee Store",
    body: "Cafetería en Neuquén. Punto de venta y fidelización con NovaPoints: sus clientes suman puntos en cada compra.",
  },
  {
    name: "Dorado",
    body: "Restaurante. Mesas, comandas y caja en NovaERP; sus clientes suman puntos y reservan desde la app con su marca, hecha con NovaPoints.",
  },
  {
    name: "Ideas del Lago",
    // TODO: completar con el detalle real de Ideas del Lago (rubro y qué módulos usa).
    body: "TODO: describir cómo opera Ideas del Lago con Nova (rubro, productos que usa).",
  },
];

export const FOOTER_PRODUCTS = [
  { label: "NovaERP", href: "#novaerp" },
  { label: "NovaStay", href: "#novastay" },
  { label: "NovaPoints", href: "#novapoints" },
  { label: "Jarvis", href: "#jarvis" },
];

export const FOOTER_COMPANY = [
  { label: "Diagnóstico", href: "#diagnostico" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Por qué Nova", href: "#por-que-nova" },
  { label: "Contacto", href: "#contacto" },
];
