"use client";

import Image from "next/image";
import { useRef } from "react";
import type { ProductsProps } from "@/src/types/types";
import { useCart } from "@/src/context/CartContext";
import { useCardRevealAnimation } from "@/src/libs/gsapAnimation";
import "@/src/styles/components/app/newArrivals.css";

export default function ProductGrid({ products }: ProductsProps) {
  const { addToCart } = useCart();

  const gridRef = useRef<HTMLDivElement>(null);

  useCardRevealAnimation({
    scopeRef: gridRef,
  });

  if (products.length === 0) {
    return (
      <div className="shop-empty" role="status">
        <h3 className="shop-empty__title">Coming Soon</h3>
        <p className="shop-empty__text">
          Our shop is currently under maintenance. Please check back soon.
        </p>
      </div>
    );
  }

  return (
    <div ref={gridRef} className="new-arrivals" id="new-arrivals">
      {products.map((product) => {
        const hasDiscount = (product.discount ?? 0) > 0;

        const discountedCost =
          product.cost * (1 - (product.discount ?? 0) / 100);

        return (
          <article className="product-card card-ani " key={product.id}>
            <div className="product-image">
              <Image
                fill
                sizes="(max-width: 560px) 50vw, (max-width: 900px) 33vw, 25vw"
                src={product.image || "/no-image.png"}
                alt={product.name}
              />

              {product.new && <span className="product-badge">New in</span>}

              {!product.available && (
                <span className="product-stock">Coming soon</span>
              )}

              {hasDiscount && (
                <span className="product-discount">-{product.discount}%</span>
              )}
            </div>

            <div className="product-info">
              <div className="product-copy">
                <h3>{product.name}</h3>
                <p>{product.shortDescription}</p>
              </div>

              <div className="product-purchase">
                <p className="product-price">
                  ${discountedCost.toFixed(2)}
                  {hasDiscount && (
                    <span className="product-original-price">
                      ${product.cost.toFixed(2)}
                    </span>
                  )}
                </p>

                <button
                  type="button"
                  className="new-arrivals__btn"
                  disabled={!product.available}
                  onClick={() => addToCart(product)}>
                  {product.available ? "Add +" : "Soon"}
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
