"use client";

import { useCart } from "@/src/context/CartContext";
import Link from "next/link";

export default function CartFooter() {
  const { clearCart } = useCart();
  return (
    <footer className="cartFooter">
      <Link href={"/"}>Back</Link>
      <button onClick={() => clearCart()}>Cancel Order</button>
    </footer>
  );
}
