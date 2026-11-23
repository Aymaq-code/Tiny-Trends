"use client";

import { useCart } from "@/src/context/CartContext";
import "@/src/styles/components/shop/shopCart.css";
import Cart from "../ui/Cart";

export default function ShopCart() {
  const { items, bannerDismissed, setBannerDismissed } = useCart();

  if (!items.length || bannerDismissed) return null;

  return (
    <div className="shoppingCart">
      <div className="cart-info">
        <p className="cart-countt">
          {items.length} item{items.length > 1 ? "s" : ""} added
        </p>
        <p className="cart-hint">Click the cart to view your selections</p>
      </div>
      <div className="cart-action">
        <Cart />
      </div>

      <button
        className="close-btn"
        onClick={() => setBannerDismissed(true)}
        aria-label="Close banner">
        ✕
      </button>
    </div>
  );
}
