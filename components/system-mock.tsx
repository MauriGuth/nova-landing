import { Sparkles } from "lucide-react";

// Mock plano de cómo se arma un sistema a medida: los requerimientos de una
// operación industrial convertidos en módulos, con la IA marcada donde entra.
// Tema claro dentro de un marco oscuro, como el mock del dashboard. Es un
// ejemplo ilustrativo y está etiquetado como tal. Nada se anima.

const REQUERIMIENTOS = [
  { label: "Órdenes de trabajo en campo", modulo: "Operaciones", ia: false },
  { label: "Stock en 12 bases", modulo: "Depósitos y envíos", ia: true },
  { label: "Turnos y fichadas", modulo: "Personal", ia: false },
  { label: "Reportes para la gerencia", modulo: "Reportes", ia: true },
  { label: "Facturación y pagos", modulo: "Integraciones", ia: false },
];

export function SystemMock() {
  return (
    <figure className="w-full max-w-[560px] lg:justify-self-end">
      <div className="rounded-2xl border border-line bg-bg-raise p-2 shadow-2">
        <div className="flex items-center gap-3 px-2 pb-2 pt-1" aria-hidden="true">
          <span className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-line-strong" />
            <span className="h-2 w-2 rounded-full bg-line-strong" />
            <span className="h-2 w-2 rounded-full bg-line-strong" />
          </span>
          <span className="flex h-7 flex-1 items-center rounded-md bg-surface px-3 text-xs text-ink-3">
            Tu sistema · a medida
          </span>
        </div>

        <div className="rounded-xl bg-[#F4F5FA] p-3 text-[#111827] sm:p-4">
          <div className="flex items-center justify-between px-1">
            <p className="text-[11px] font-medium uppercase tracking-[0.04em] text-[#6B7280]">
              Requerimientos de tu operación
            </p>
            <p className="text-[11px] text-[#6B7280]">Módulo</p>
          </div>
          <ul className="mt-2 divide-y divide-[#E5E7EB] rounded-lg border border-[#E5E7EB] bg-white">
            {REQUERIMIENTOS.map((r) => (
              <li key={r.label} className="flex items-center gap-3 px-3 py-2.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#6366F1]" aria-hidden="true" />
                <span className="min-w-0 flex-1 truncate text-[13px] font-medium sm:text-[14px]">{r.label}</span>
                <span className="hidden text-[12px] text-[#6B7280] sm:inline">{r.modulo}</span>
                {r.ia ? (
                  <span className="inline-flex h-6 items-center gap-1 rounded-md bg-[#E0E7FF] px-2 text-[11px] font-semibold text-[#3730A3]">
                    <Sparkles className="h-3 w-3" strokeWidth={2} aria-hidden="true" />
                    IA
                  </span>
                ) : (
                  <span className="inline-flex h-6 items-center rounded-md border border-[#E5E7EB] px-2 text-[11px] font-medium text-[#6B7280]">
                    Listo
                  </span>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2.5">
              <p className="text-[11px] text-[#6B7280]">Alertas y predicciones</p>
              <p className="mt-0.5 text-[13px] font-semibold">Quiebre de stock en 2 días</p>
              <p className="mt-0.5 text-[11px] font-medium text-[#047857]">Base Norte · avisado</p>
            </div>
            <div className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2.5">
              <p className="text-[11px] text-[#6B7280]">Resumen ejecutivo</p>
              <p className="mt-0.5 text-[13px] font-semibold">Generado con IA</p>
              <p className="mt-0.5 text-[11px] text-[#6B7280]">Semana 40 · listo a las 6:00</p>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-2 text-xs text-ink-3">
        Ejemplo de cómo se arma un sistema a medida. Datos ilustrativos.
      </figcaption>
    </figure>
  );
}
