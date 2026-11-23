"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "@/src/context/CartContext";
import { useRouter } from "next/navigation";
import "@/src/styles/components/ui/cart.css";

export default function Cart() {
  const { items } = useCart();
  const router = useRouter();

  const cartCount = items.reduce(
    (total, product) => total + product.quantity,
    0,
  );

  const handleCartClick = () => {
    if (items.length) {
      router.push("/cart");
    } else {
      alert("Cart is empty!");
    }
  };

  return (
    <button
      type="button"
      className="cart"
      onClick={handleCartClick}
      aria-label={`Open cart, ${cartCount} items`}>
      <span className="cart-icon">
        <ShoppingCart />
      </span>

      <span className="cart-count" aria-live="polite">
        {cartCount}
      </span>
    </button>
  );
}
