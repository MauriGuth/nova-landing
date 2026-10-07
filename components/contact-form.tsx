"use client";

import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { Check, LoaderCircle } from "lucide-react";
import { DIAGNOSTICO_EVENT, DIAGNOSTICO_KEY } from "./diagnostico-data";
import { trackLead } from "./google-ads";

type Field = "name" | "company" | "email" | "message";
type Status = "idle" | "sending" | "sent" | "error";
type FieldEl = HTMLInputElement | HTMLTextAreaElement;

const CONTACT_MAIL = "contacto@novasolutions.ar";

const MESSAGES: Partial<Record<Field, { missing: string; invalid: string }>> = {
  name: { missing: "Decinos tu nombre.", invalid: "Decinos tu nombre." },
  email: {
    missing: "Necesitamos un email para responderte.",
    invalid: "Ese email no parece válido. Revisalo.",
  },
  message: {
    missing: "Contanos qué querés resolver.",
    invalid: "Contanos qué querés resolver.",
  },
};

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [sentTo, setSentTo] = useState("");
  // Enfocamos sólo el primer campo inválido de cada intento de envío.
  const focusedInvalid = useRef(false);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const lastApplied = useRef("");

  // El diagnóstico deja su resumen en sessionStorage (y avisa por evento si el
  // formulario ya está montado). Completa el mensaje sólo si está vacío o si
  // todavía tiene el resumen anterior: nunca pisa lo que la persona escribió.
  useEffect(() => {
    const aplicar = (texto: string | null) => {
      const el = messageRef.current;
      if (!el || !texto) return;
      const actual = el.value.trim();
      if (actual !== "" && actual !== lastApplied.current.trim()) return;
      el.value = texto;
      lastApplied.current = texto;
    };
    try {
      aplicar(sessionStorage.getItem(DIAGNOSTICO_KEY));
    } catch {}
    const onDiagnostico = (e: Event) => aplicar((e as CustomEvent<string>).detail);
    window.addEventListener(DIAGNOSTICO_EVENT, onDiagnostico);
    return () => window.removeEventListener(DIAGNOSTICO_EVENT, onDiagnostico);
  }, []);

  function onInvalid(e: FormEvent<FieldEl>) {
    e.preventDefault(); // sin el globo nativo; el mensaje va debajo del campo
    const el = e.currentTarget;
    const field = el.name as Field;
    const copy = MESSAGES[field];
    if (!copy) return;
    setErrors((prev) => ({
      ...prev,
      [field]: el.validity.valueMissing ? copy.missing : copy.invalid,
    }));
    if (!focusedInvalid.current) {
      focusedInvalid.current = true;
      el.focus();
    }
  }

  function onChange(e: ChangeEvent<FieldEl>) {
    const field = e.currentTarget.name as Field;
    if (!errors[field]) return;
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      company: String(data.get("company") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
      _website: String(data.get("_website") ?? ""),
    };
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("send-failed");
      setSentTo(payload.email);
      setStatus("sent");
      trackLead();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className="animate-fade-up rounded-2xl border border-line bg-surface p-8 text-center sm:p-10"
      >
        <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-ok-soft text-ok">
          <span
            aria-hidden="true"
            className="animate-pulse-once absolute inset-0 rounded-full border-2 border-ok"
          />
          <Check className="h-7 w-7" strokeWidth={2} aria-hidden="true" />
        </span>
        <h3 className="h3 mt-5">Mensaje recibido</h3>
        <p className="mx-auto mt-2 max-w-[36ch] text-ink-2">
          Te respondemos a <strong className="text-ink">{sentTo}</strong> en
          horario laboral. Si es urgente, mandanos un WhatsApp.
        </p>
        <button
          type="button"
          className="btn btn-secondary mt-6"
          onClick={() => {
            setErrors({});
            setStatus("idle");
          }}
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-line bg-surface p-5 sm:p-8"
      aria-busy={sending}
    >
      {/* Honeypot: oculto para personas, los bots lo completan */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="_website">Sitio web</label>
        <input
          id="_website"
          name="_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink-2">
            Nombre
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={120}
            autoComplete="name"
            enterKeyHint="next"
            placeholder="Tu nombre"
            className="field"
            aria-invalid={errors.name ? "true" : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
            onInvalid={onInvalid}
            onChange={onChange}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="mt-1.5 text-sm text-danger">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-ink-2">
            Empresa o local
          </label>
          <input
            id="company"
            name="company"
            type="text"
            maxLength={120}
            autoComplete="organization"
            enterKeyHint="next"
            placeholder="Nombre de la empresa o del local"
            className="field"
            onChange={onChange}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={200}
          autoComplete="email"
          inputMode="email"
          enterKeyHint="next"
          placeholder="nombre@tuempresa.com"
          className="field"
          aria-invalid={errors.email ? "true" : undefined}
          aria-describedby={errors.email ? "email-error" : undefined}
          onInvalid={onInvalid}
          onChange={onChange}
        />
        {errors.email && (
          <p id="email-error" role="alert" className="mt-1.5 text-sm text-danger">
            {errors.email}
          </p>
        )}
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-2">
          Mensaje
        </label>
        <textarea
          ref={messageRef}
          id="message"
          name="message"
          required
          rows={4}
          maxLength={5000}
          enterKeyHint="send"
          placeholder="Contanos tu operación: cuántas bases o locales, qué áreas y qué querés resolver"
          className="field resize-y"
          aria-invalid={errors.message ? "true" : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          onInvalid={onInvalid}
          onChange={onChange}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1.5 text-sm text-danger">
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="mt-5 rounded-xl border border-[rgba(248,113,113,0.4)] bg-[rgba(248,113,113,0.1)] px-4 py-3 text-sm text-ink"
        >
          No pudimos enviar el mensaje. Probá de nuevo o escribinos a{" "}
          <a href={`mailto:${CONTACT_MAIL}`} className="font-medium text-accent-ink underline underline-offset-4">
            {CONTACT_MAIL}
          </a>
          .
        </div>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={sending}
          onClick={() => {
            focusedInvalid.current = false;
          }}
          className="btn btn-primary w-full sm:w-44"
        >
          {sending ? (
            <>
              <LoaderCircle
                className="h-5 w-5 animate-spin"
                strokeWidth={2}
                aria-hidden="true"
              />
              Enviando…
            </>
          ) : (
            "Enviar"
          )}
        </button>
        <p className="text-sm text-ink-3">Sin spam. Te responde una persona.</p>
      </div>
    </form>
  );
}
