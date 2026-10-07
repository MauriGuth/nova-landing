"use client";

import Script from "next/script";
import { useEffect } from "react";

/** Etiqueta de Google de la cuenta de Google Ads de Nova Solutions. Es
 *  pública: viaja en el HTML de cualquier sitio que la use. */
export const GOOGLE_ADS_ID = "AW-18499741291";

/** Etiquetas de las acciones de conversión de Google Ads (lo que va después
 *  de la barra en el `send_to` del fragmento de evento: Objetivos →
 *  Conversiones → la acción → Configurar etiqueta). Mientras estén vacías se
 *  mandan solo los eventos genéricos, que no cuentan como conversión. */
const CONVERSION_LABELS = {
  lead: "",
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
    window.gtag("event", "conversion", { send_to: `${GOOGLE_ADS_ID}/${label}` });
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

/** Carga la etiqueta de Google y escucha los clics a WhatsApp de toda la
 *  página (un solo listener: los links están en componentes de servidor). */
export function GoogleAds() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target instanceof Element ? e.target : null;
      if (target?.closest('a[href^="https://wa.me/"]')) trackWhatsApp();
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-gtag" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GOOGLE_ADS_ID}');`}
      </Script>
    </>
  );
}
