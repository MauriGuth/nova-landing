import { CircleCheck, Lock, TriangleAlert } from "lucide-react";

// Mock plano del dashboard de NovaERP: HTML/CSS, tema claro dentro de un marco
// oscuro. Datos de ejemplo, etiquetados como tales. Nada se anima.

const BARS = [
  { day: "Vie", h: 58 },
  { day: "Sáb", h: 82 },
  { day: "Dom", h: 64 },
  { day: "Lun", h: 40 },
  { day: "Mar", h: 46 },
  { day: "Mié", h: 70 },
  { day: "Hoy", h: 92 },
];

function Kpi({
  label,
  value,
  note,
  good = false,
}: {
  label: string;
  value: string;
  note: string;
  good?: boolean;
}) {
  return (
    <div className="rounded-lg border border-[#E5E7EB] bg-white px-2.5 py-2.5 sm:px-3">
      <dt className="text-[11px] text-[#6B7280]">{label}</dt>
      <dd className="mt-0.5 text-[15px] font-semibold leading-tight tabular-nums sm:text-[17px]">
        {value}
      </dd>
      <dd
        className={`mt-0.5 text-[11px] ${
          good ? "font-medium text-[#047857]" : "text-[#6B7280]"
        }`}
      >
        {note}
      </dd>
    </div>
  );
}

export function DashboardMock() {
  return (
    <figure className="w-full max-w-[560px] lg:justify-self-end">
      <div className="rounded-2xl border border-line bg-bg-raise p-2 shadow-2">
        <div className="flex items-center gap-3 px-2 pb-2 pt-1" aria-hidden="true">
          <span className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-line-strong" />
            <span className="h-2 w-2 rounded-full bg-line-strong" />
            <span className="h-2 w-2 rounded-full bg-line-strong" />
          </span>
          <span className="flex h-7 flex-1 items-center gap-1.5 rounded-md bg-surface px-3 text-xs text-ink-3">
            <Lock className="h-3 w-3" strokeWidth={1.75} />
            novaerp.com.ar/dashboard
          </span>
        </div>

        <div className="relative rounded-xl bg-[#F4F5FA] p-3 text-[#111827]">
          <div className="flex items-baseline justify-between">
            <span className="text-[13px] font-semibold">Dashboard</span>
            <span className="text-[11px] text-[#6B7280]">Día de negocio · hoy</span>
          </div>

          <dl className="mt-3 grid grid-cols-3 gap-2">
            <Kpi label="Ventas hoy" value="$487.230" note="+12 % vs. ayer" good />
            <Kpi label="Tickets" value="128" note="cerrados" />
            <Kpi label="Promedio" value="$3.806" note="por ticket" />
          </dl>

          <div className="mt-2 rounded-lg border border-[#E5E7EB] bg-white p-3">
            <span className="text-[11px] font-medium text-[#6B7280]">
              Ventas · últimos 7 días
            </span>
            <div className="mt-2 flex h-20 items-end gap-1.5" aria-hidden="true">
              {BARS.map((b, i) => (
                <span
                  key={b.day}
                  className={`flex-1 rounded-t-[3px] ${
                    i === BARS.length - 1 ? "bg-[#6366F1]" : "bg-[#C7D2FE]"
                  }`}
                  style={{ height: `${b.h}%` }}
                />
              ))}
            </div>
            <div className="mt-1 grid grid-cols-7 gap-1.5 text-center text-[11px] text-[#6B7280]">
              {BARS.map((b) => (
                <span key={b.day}>{b.day}</span>
              ))}
            </div>
          </div>

          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            <div className="flex items-center gap-2 rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-[12px] shadow-[0_8px_24px_-12px_rgba(17,24,39,0.35)]">
              <CircleCheck
                className="h-4 w-4 shrink-0 text-[#047857]"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <span>
                <strong>Mesa 7</strong> · Cobrada · $8.800 efectivo
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-[#FDE68A] bg-[#FFFBEB] px-3 py-2 text-[12px] text-[#92400E]">
              <TriangleAlert
                className="h-4 w-4 shrink-0"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <span>
                <strong>Stock bajo</strong> · Café en grano · 2 kg
              </span>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-2 text-xs text-ink-3">Datos de ejemplo.</figcaption>
    </figure>
  );
}
