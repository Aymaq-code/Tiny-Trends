"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { CartContextType, CartItem, Product } from "../types/types";

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [bannerDismissed, setBannerDismissed] = useState(false);

  const addToCart = (product: Product) => {
    setItems((prev) => {
      if (prev.some((item) => item.id === product.id)) return prev;

      const discountedPrice =
        product.cost * (1 - (product.discount ?? 0) / 100);

      return [
        ...prev,
        {
          ...product,
          quantity: 1,
          price: discountedPrice,
        },
      ];
    });

    // ✅ Re-show the banner whenever the user adds something new
    setBannerDismissed(false);
  };

  const increaseQty = (id: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQty = (id: number) => {
    setItems(
      (prev) =>
        prev
          .map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
          )
          .filter((item) => item.quantity > 0), // Removes item if quantity hits 0
    );
  };

  const removeFromCart = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setItems([]);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        clearCart,
        bannerDismissed,
        setBannerDismissed,
      }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
