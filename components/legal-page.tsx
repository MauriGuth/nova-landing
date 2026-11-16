import type { ReactNode } from "react";
import { NovaLogo } from "@/components/nova-logo";

/** Datos del responsable. Los completa Mauri antes del merge: hasta que
 *  exista la SAS no está definido a nombre de quién va el sitio. */
export const LEGAL = {
  responsable: "[PENDIENTE: razón social o nombre del titular]",
  cuit: "[PENDIENTE: CUIT]",
  domicilio: "[PENDIENTE: domicilio legal], Neuquén, Argentina",
  mail: "contacto@novasolutions.ar",
  actualizado: "[PENDIENTE: fecha de publicación]",
};

export function LegalPage({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <header className="border-b border-line">
        <div className="container-site flex h-16 items-center">
          <a
            href="/"
            className="inline-flex h-11 items-center gap-2.5 rounded-lg"
            aria-label="Nova Solutions, volver al inicio"
          >
            <NovaLogo size={28} />
            <span className="font-display text-[17px] font-semibold text-ink">
              Nova Solutions
            </span>
          </a>
        </div>
      </header>
      <main id="contenido" className="container-site py-12 md:py-16">
        <article className="legal mx-auto max-w-[68ch] text-ink-2">
          <h1 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-ink-3">
            Última actualización: {LEGAL.actualizado}
          </p>
          {children}
        </article>
      </main>
    </div>
  );
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-xl font-semibold text-ink">{title}</h2>
      <div className="mt-3 space-y-3 leading-relaxed">{children}</div>
    </section>
  );
}
