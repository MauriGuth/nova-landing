import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

/** Botón flotante fijo (abajo a la derecha): abre WhatsApp para pedir una demo. */
export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-fab"
      aria-label="Pedí una demo por WhatsApp"
    >
      <MessageCircle className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
      <span>Pedí una demo</span>
    </a>
  );
}
