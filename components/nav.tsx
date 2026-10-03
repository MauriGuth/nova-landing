"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NovaLogo } from "./nova-logo";

const LINKS = [
  { label: "Productos", href: "#productos" },
  { label: "Por qué Nova", href: "#por-que-nova" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contacto", href: "#contacto" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="nav-fixed fixed left-4 right-4 z-50">
      <div className="mx-auto max-w-[1120px]">
        <nav
          aria-label="Principal"
          className="glass flex h-14 items-center justify-between rounded-2xl pl-3 pr-2 sm:pl-4"
        >
          <a
            href="/"
            className="flex h-11 items-center gap-2.5 rounded-lg pr-2"
            aria-label="Nova Solutions, inicio"
          >
            <NovaLogo size={28} />
            <span className="font-display text-[17px] font-semibold text-ink">
              Nova Solutions
            </span>
          </a>

          <ul className="hidden items-center md:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="nav-link flex h-11 items-center rounded-lg px-3 text-[15px] font-medium"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contacto"
            className="btn btn-primary hidden h-11 px-4 text-sm md:inline-flex"
          >
            Pedí una demo
          </a>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-xl text-ink md:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? (
              <X className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
            )}
          </button>
        </nav>

        {open && (
          <div
            id="menu-mobile"
            className="animate-fade-up mt-2 rounded-2xl border border-line bg-bg-raise p-2 shadow-2 md:hidden"
          >
            <ul>
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="link-quiet flex h-12 items-center rounded-xl px-4 text-base font-medium"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-2 h-12 w-full"
            >
              Pedí una demo
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
