"use client";

import { useCart } from "@/src/context/CartContext";
import { Trash2 } from "lucide-react";

export default function CartCard() {
  const { items, removeFromCart, increaseQty, decreaseQty } = useCart();

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="cart-card">
            {/* Product Information */}
            <div className="item-information">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>

            {/* Product Price */}
            <div className="item-price">
              {/* Show final discounted price */}
              <span>${item.price.toFixed(2)}</span>

              {/* Only show original price if there is a discount */}
              {item.discount ? (
                <span className="line-through text-gray-400">
                  ${item.cost.toFixed(2)}
                </span>
              ) : null}
            </div>

            {/* Quantity */}
            <div className="quantity">
              <div className="quantity-btns">
                <button
                  type="button"
                  onClick={() => decreaseQty(item.id)}
                  aria-label="Decrease quantity">
                  -
                </button>

                <span className="quantity-count">{item.quantity}</span>

                <button
                  type="button"
                  onClick={() => increaseQty(item.id)}
                  aria-label="Increase quantity">
                  +
                </button>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                type="button"
                aria-label="Remove product"
                className="itemDeleteBtn">
                <Trash2 size={17} strokeWidth={1.8} />
              </button>
            </div>

            {/* Dynamic Item Total */}
            <p className="total-quantity">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
