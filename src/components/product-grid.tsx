"use client";

import { useRef, useEffect } from "react";
import type { Product } from "@/data/products";
import { ProductCard } from "@/components/product-card";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<{ kill: () => void }[]>([]);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    let cancelled = false;

    Promise.all([
      import("gsap"),
      import("gsap/ScrollTrigger"),
    ]).then(([gsapModule, scrollTriggerModule]) => {
      if (cancelled) return;

      const gsap = gsapModule.default;
      const { ScrollTrigger } = scrollTriggerModule;
      gsap.registerPlugin(ScrollTrigger);

      const cards = grid.querySelectorAll<HTMLElement>("[data-product-card]");

      gsap.set(cards, { opacity: 0, y: 60 });

      const triggers: InstanceType<typeof ScrollTrigger>[] = [];

      cards.forEach((card, index) => {
        const tween = gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: (index % 3) * 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            once: true,
          },
        });

        if (tween.scrollTrigger) {
          triggers.push(tween.scrollTrigger);
        }
      });

      triggersRef.current = triggers;
    });

    return () => {
      cancelled = true;
      triggersRef.current.forEach((t) => t.kill());
    };
  }, [products]);

  return (
    <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div
        ref={gridRef}
        className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {products.map((product, index) => (
          <div
            key={`${product.name}-${index}`}
            data-product-card
            className={
              /* Every 4th item (0-indexed: 3, 7, 11...) spans 2 cols on desktop for asymmetry */
              index % 4 === 3 && products.length > 3
                ? "opacity-0 lg:col-span-2"
                : "opacity-0"
            }
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
