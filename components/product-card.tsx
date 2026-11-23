import { ArrowRight } from "lucide-react";
import { LineIllustration } from "./line-illustration";
import type { Product } from "@/lib/site";

/**
 * Tarjeta de producto grande: ilustración de línea que se dibuja al entrar,
 * número de orden en mono, nombre, una línea de valor y el link "Más info →".
 * Sin fotos a propósito: no hay capturas reales y no las simulamos.
 */
export function ProductCard({ product, index }: { product: Product; index: number }) {
  const external = product.href.startsWith("http");

  return (
    <article id={product.id} className="product-card scroll-mt-28">
      <div className="product-head">
        <LineIllustration name={product.illustration} size={72} />
        <span className="product-index" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="product-body">
        {product.badge ? <span className="product-badge">{product.badge}</span> : null}
        <h3 className="h3">{product.name}</h3>
        <p className="font-medium text-ink">{product.value}</p>
        <p className="text-[15px] leading-relaxed text-ink-2">{product.body}</p>
        <a
          href={product.href}
          className="link-arrow mt-auto pt-3"
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {product.cta}
          <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
