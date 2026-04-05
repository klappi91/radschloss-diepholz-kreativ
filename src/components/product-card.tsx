"use client";

import Image from "next/image";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg bg-card border border-transparent transition-all duration-500 hover:border-lime hover:shadow-[0_0_30px_rgba(200,255,0,0.08)] hover:scale-[1.02]">
      {/* Image area with geometric clip */}
      <div className="relative aspect-square w-full overflow-hidden bg-[#141916]">
        <div
          className="relative h-full w-full"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 88%, 0 100%)" }}
        >
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="h-full w-full object-contain p-6 transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Brand badge */}
        <span className="absolute top-3 left-3 z-10 rounded-sm bg-lime px-2.5 py-1 font-heading text-xs font-semibold uppercase tracking-wider text-[#0f1210]">
          {product.brand}
        </span>
      </div>

      {/* Content area */}
      <div className="flex flex-1 flex-col gap-2 p-5 pt-4">
        {/* Product name */}
        <h3 className="font-heading text-lg font-bold leading-tight text-foreground">
          {product.name}
        </h3>

        {/* Specs - truncated to 3 lines */}
        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {product.specs}
        </p>

        {/* Price area */}
        <div className="mt-auto flex items-baseline gap-3 pt-3">
          <span className="font-heading text-xl font-bold text-lime">
            {product.price}
          </span>
          {product.oldPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {product.oldPrice}
            </span>
          )}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="h-[2px] w-full bg-olive transition-colors duration-500 group-hover:bg-lime" />
    </div>
  );
}
