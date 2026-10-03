"use client";

import { useRef, useState } from "react";
import { ArrowRight, Check, Minus, RotateCcw } from "lucide-react";
import {
  DIAGNOSTICO_EVENT,
  DIAGNOSTICO_KEY,
  PREGUNTAS,
  armarMensaje,
  type Respuesta,
} from "./diagnostico-data";

type Answers = Partial<Record<string, Respuesta>>;

const TOTAL = PREGUNTAS.length;

/**
 * Diagnóstico de sí o no. Una pregunta por vez; cada respuesta despliega qué le
 * cuesta a la empresa seguir así y qué cambia con un sistema a medida con IA.
 * No guarda nada en ningún servidor: el resumen viaja al formulario de contacto
 * por sessionStorage, y sólo si la persona toca "Hablemos de tu operación".
 */
export function Diagnostico() {
  const [answers, setAnswers] = useState<Answers>({});
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const pregunta = PREGUNTAS[index];
  const respuesta = answers[pregunta.id];
  const respondidas = PREGUNTAS.filter((p) => answers[p.id]).length;
  const primeraPendiente = PREGUNTAS.findIndex((p) => !answers[p.id]);
  const areasSi = PREGUNTAS.filter((p) => answers[p.id] === "si").map((p) => p.area);

  function responder(r: Respuesta) {
    setAnswers((prev) => ({ ...prev, [pregunta.id]: r }));
  }

  // El foco va al título del panel nuevo: quien navega con teclado o lector
  // sigue el hilo sin buscar dónde quedó. Como el botón "Siguiente" queda al
  // pie de un panel que puede ser más alto que la pantalla, el título se trae
  // a la vista (scroll-mt-28 lo deja debajo de la nav fija; el scroll es suave
  // salvo con reduced-motion).
  function enfocarTitulo() {
    // Dos frames: el panel nuevo ya está pintado y el documento, si se achicó,
    // ya ajustó su scroll. Recién ahí se mide si el título quedó fuera.
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        const el = headingRef.current;
        if (!el) return;
        el.focus({ preventScroll: true });
        const r = el.getBoundingClientRect();
        // Salto directo (no suave): un scroll suave se cancela si el panel
        // anterior todavía estaba cambiando de altura, y el título quedaba
        // arriba de la pantalla.
        if (r.top < 96 || r.bottom > window.innerHeight) {
          window.scrollTo({ top: r.top + window.scrollY - 112, behavior: "instant" });
        }
      })
    );
  }

  function irA(i: number) {
    setDone(false);
    setIndex(i);
    enfocarTitulo();
  }

  function siguiente() {
    if (index + 1 < TOTAL) {
      irA(index + 1);
    } else {
      setDone(true);
      enfocarTitulo();
    }
  }

  function reiniciar() {
    setAnswers({});
    setDone(false);
    setIndex(0);
    enfocarTitulo();
  }

  function llevarAlContacto() {
    const mensaje = armarMensaje(areasSi);
    try {
      sessionStorage.setItem(DIAGNOSTICO_KEY, mensaje);
    } catch {}
    window.dispatchEvent(new CustomEvent(DIAGNOSTICO_EVENT, { detail: mensaje }));
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12">
      {/* Progreso: segmentos en celular, riel de pasos en desktop */}
      <div>
        <p className="text-sm text-ink-3" aria-live="polite">
          {done ? (
            <>Resumen · {respondidas} de {TOTAL} respondidas</>
          ) : (
            <>
              Pregunta {index + 1} de {TOTAL} ·{" "}
              <span className="text-ink-2">{pregunta.area}</span>
            </>
          )}
        </p>
        <ol className="mt-3 grid grid-cols-7 gap-1.5 lg:hidden" aria-hidden="true">
          {PREGUNTAS.map((p, i) => (
            <li
              key={p.id}
              className="diag-seg"
              data-state={answers[p.id]}
              data-current={!done && i === index ? "true" : undefined}
            />
          ))}
        </ol>
        <ol className="mt-4 hidden border-t border-line lg:block">
          {PREGUNTAS.map((p, i) => {
            const r = answers[p.id];
            const alcanzable = r !== undefined || i === primeraPendiente || primeraPendiente === -1;
            return (
              <li key={p.id} className="border-b border-line">
                <button
                  type="button"
                  className="diag-step"
                  aria-current={!done && i === index ? "step" : undefined}
                  disabled={!alcanzable}
                  onClick={() => irA(i)}
                >
                  <span className="w-5 tabular-nums text-ink-3">{i + 1}</span>
                  <span className="min-w-0 flex-1 truncate">{p.area}</span>
                  <span
                    className={`w-7 shrink-0 text-right ${r === "si" ? "font-medium text-accent-ink" : "text-ink-3"}`}
                    aria-hidden={r ? undefined : "true"}
                    aria-label={r === "si" ? "Respondiste sí" : r === "no" ? "Respondiste no" : undefined}
                  >
                    {r === "si" ? "Sí" : r === "no" ? "No" : "—"}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Panel: la pregunta o el resumen. La key reinicia la entrada en cada cambio. */}
      {done ? (
        <div key="resumen" className="diag-panel diag-enter">
          <h3
            ref={headingRef}
            tabIndex={-1}
            className="font-display text-[26px] font-semibold leading-[1.15] tracking-[-0.01em] text-ink outline-none scroll-mt-28 md:text-[32px]"
          >
            {areasSi.length === 0
              ? "Tu operación está bien cubierta."
              : `${areasSi.length} de ${TOTAL} áreas con margen de mejora.`}
          </h3>
          <p className="mt-3 max-w-[56ch] text-ink-2">
            {areasSi.length === 0
              ? "Respondiste que no en todo. Lo que sigue, entonces, es sumar IA sobre lo que ya tenés: alertas, predicciones y un asistente que responde con tus datos."
              : "En estas áreas un sistema a medida con IA te cambia la operación. Llevá el resumen al formulario y te proponemos cómo."}
          </p>

          {areasSi.length > 0 && (
            <ul className="mt-6 border-t border-line">
              {PREGUNTAS.filter((p) => answers[p.id] === "si").map((p) => (
                <li
                  key={p.id}
                  className="grid gap-1 border-b border-line py-4 md:grid-cols-[200px_minmax(0,1fr)] md:gap-6"
                >
                  <span className="font-medium text-ink">{p.area}</span>
                  <span className="text-ink-2">{p.si.cambio[0]}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <a href="#contacto" onClick={llevarAlContacto} className="btn btn-primary h-14 w-full text-base sm:h-12 sm:w-auto">
              Hablemos de tu operación
              <ArrowRight className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
            </a>
            <button type="button" onClick={reiniciar} className="link-quiet inline-flex min-h-[44px] items-center gap-2 self-start text-[15px] font-medium sm:self-auto">
              <RotateCcw className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              Volver a empezar
            </button>
          </div>
          <p className="mt-6 text-sm text-ink-3">
            El diagnóstico no se guarda en ningún servidor. Al formulario sólo va este resumen, y lo podés editar antes de enviar.
          </p>
        </div>
      ) : (
        <div key={pregunta.id} className="diag-panel diag-enter">
          <h3
            ref={headingRef}
            tabIndex={-1}
            id={`diag-q-${pregunta.id}`}
            className="font-display text-[26px] font-semibold leading-[1.15] tracking-[-0.01em] text-ink outline-none scroll-mt-28 [text-wrap:balance] md:text-[32px]"
          >
            {pregunta.texto}
          </h3>

          <div className="mt-6 grid grid-cols-2 gap-3" role="group" aria-labelledby={`diag-q-${pregunta.id}`}>
            <button
              type="button"
              className="diag-choice"
              aria-pressed={respuesta === "si"}
              onClick={() => responder("si")}
            >
              Sí
            </button>
            <button
              type="button"
              className="diag-choice"
              aria-pressed={respuesta === "no"}
              onClick={() => responder("no")}
            >
              No
            </button>
          </div>

          <div className="diag-reveal" data-open={respuesta ? "true" : "false"}>
            <div>
              <div className="diag-reveal-body pt-8" aria-live="polite">
                {respuesta === "si" && (
                  <div key="si" className="diag-fade grid gap-8 md:grid-cols-2 md:gap-10">
                    <div>
                      <h4 className="text-[15px] font-semibold text-ink-2">Lo que te está costando hoy</h4>
                      <ul className="mt-3 space-y-3">
                        {pregunta.si.costo.map((t) => (
                          <li key={t} className="flex gap-3 text-ink-2">
                            <Minus className="mt-[5px] h-4 w-4 shrink-0 text-ink-3" strokeWidth={2} aria-hidden="true" />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[15px] font-semibold text-accent-ink">Lo que cambia con un sistema a medida con IA</h4>
                      <ul className="mt-3 space-y-3">
                        {pregunta.si.cambio.map((t) => (
                          <li key={t} className="flex gap-3 text-ink">
                            <Check className="mt-[5px] h-4 w-4 shrink-0 text-accent-ink" strokeWidth={2} aria-hidden="true" />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                {respuesta === "no" && (
                  <div key="no" className="diag-fade">
                    <p className="text-ink">{pregunta.no.nota}</p>
                    <h4 className="mt-5 text-[15px] font-semibold text-accent-ink">Lo que suma la IA igual</h4>
                    <ul className="mt-3 space-y-3">
                      {pregunta.no.suma.map((t) => (
                        <li key={t} className="flex gap-3 text-ink-2">
                          <Check className="mt-[5px] h-4 w-4 shrink-0 text-accent-ink" strokeWidth={2} aria-hidden="true" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col-reverse gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={() => irA(index - 1)}
              disabled={index === 0}
              className="link-quiet inline-flex min-h-[44px] items-center text-[15px] font-medium disabled:invisible"
            >
              Anterior
            </button>
            <button
              type="button"
              onClick={siguiente}
              disabled={!respuesta}
              className="btn btn-primary w-full sm:w-auto"
            >
              {index + 1 === TOTAL ? "Ver mi resumen" : "Siguiente pregunta"}
              <ArrowRight className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
