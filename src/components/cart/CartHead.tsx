"use client";

import { useCart } from "@/src/context/CartContext";

export default function CartHead() {
  const { items } = useCart();

  return (
    <div className="cartHead">
      <div className="cartHead_titles">
        <h1>Your Cart</h1>
        <p>
          <span>{items.length}</span> in your bag
        </p>
      </div>

      {/* Table Heading */}
      <div className="table-heading">
        <h4>Product</h4>

        <h4>Price</h4>

        <h4>Quantity</h4>

        <h4>Total</h4>
      </div>
    </div>
  );
}
