"use client";

import { useEffect } from "react";
import { GOOGLE_ADS_ID } from "./google-tag";

/** Etiquetas de las acciones de conversión de Google Ads (lo que va después
 *  de la barra en el `send_to` del fragmento de evento: Objetivos →
 *  Conversiones → la acción → Configurar etiqueta). Mientras estén vacías se
 *  mandan solo los eventos genéricos, que no cuentan como conversión. */
const CONVERSION_LABELS = {
  /** "Envío de formulario para clientes potenciales" */
  lead: "811TCKbBspQdEOvMrvVE",
  whatsapp: "",
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function send(kind: keyof typeof CONVERSION_LABELS, event: string) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", event);
  const label = CONVERSION_LABELS[kind];
  if (label) {
    // value y currency: los del fragmento de evento que da Google Ads.
    window.gtag("event", "conversion", {
      send_to: `${GOOGLE_ADS_ID}/${label}`,
      value: 1.0,
      currency: "ARS",
    });
  }
}

/** El formulario de contacto se mandó bien. */
export function trackLead() {
  send("lead", "generate_lead");
}

/** Tocaron un botón o link de WhatsApp. */
export function trackWhatsApp() {
  send("whatsapp", "contact");
}

/** Escucha los clics a WhatsApp de toda la página (un solo listener: los
 *  links están en componentes de servidor). La etiqueta la carga GoogleTag,
 *  en el <head>. */
export function GoogleAds() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target instanceof Element ? e.target : null;
      if (target?.closest('a[href^="https://wa.me/"]')) trackWhatsApp();
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
