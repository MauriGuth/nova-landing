import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/site";

/**
 * Tarjeta de producto grande: captura (o placeholder mientras no hay imagen),
 * nombre, una línea de valor y el link "Más info →". Server component.
 */
export function ProductCard({ product }: { product: Product }) {
  const external = product.href.startsWith("http");

  return (
    <article id={product.id} className="product-card scroll-mt-28">
      <div className="product-media">
        {product.image ? (
          <Image
            src={product.image}
            alt={`Captura de ${product.name}`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <span className="product-media__ph">{product.name}</span>
        )}
      </div>
      <div className="product-body">
        {product.badge ? <span className="product-badge">{product.badge}</span> : null}
        <h3 className="h3">{product.name}</h3>
        <p className="font-medium text-ink">{product.value}</p>
        <p className="text-[15px] leading-relaxed text-ink-2">{product.body}</p>
        <a
          href={product.href}
          className="link-arrow mt-3"
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {product.cta}
          <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
