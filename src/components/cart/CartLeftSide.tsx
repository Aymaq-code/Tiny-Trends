"use client";

import { useCart } from "@/src/context/CartContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface SidebarSectionProps {
  title: string;
}

export default function CartLeftSide() {
  const { items } = useCart();
  const router = useRouter();
  const cartCount = items.reduce(
    (total, product) => total + product.quantity,
    0,
  );

  // Original price before discounts
  const originalPrice = items.reduce(
    (total, product) => total + product.cost * product.quantity,
    0,
  );

  // Final price after discounts
  const totalPrice = items.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );

  useEffect(() => {
    if (items.length === 0) {
      router.replace("/shop");
    }
  }, [items.length, router]);

  if (items.length === 0) {
    return null;
  }

  return (
    <aside className="cart-left-side">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="0"
        height="0"
        style={{ position: "absolute" }}
        aria-hidden="true">
        <defs>
          <symbol id="icon-visa" viewBox="0 0 48 32">
            <rect width="48" height="32" rx="4" fill="#1A1F71" />
            <path
              d="M20.5 21h-3l1.9-11.5h3L20.5 21zM31.2 9.8c-.6-.2-1.5-.5-2.7-.5-3 0-5.1 1.6-5.1 3.9 0 1.7 1.5 2.6 2.7 3.2 1.2.6 1.6 1 1.6 1.5 0 .8-1 1.2-1.9 1.2-1.3 0-2-.2-3-.6l-.4-.2-.5 2.8c.8.4 2.2.7 3.6.7 3.2 0 5.3-1.6 5.3-4 0-1.3-.8-2.3-2.6-3.2-1.1-.5-1.8-.9-1.8-1.5 0-.5.6-1 1.8-1 1 0 1.8.2 2.4.5l.3.2.3-2.8zM37.6 9.5h-2.3c-.7 0-1.3.2-1.6 1L29.9 21h3.1l.6-1.8h3.8l.4 1.8h2.8l-3-11.5zm-3.7 7.3l1.2-3.3.7 3.3h-1.9zM17.6 9.5l-3 7.9-.3-1.7c-.6-1.9-2.4-4-4.4-5l2.7 10.3h3.2l4.8-11.5h-3z"
              fill="#fff"
            />
            <path
              d="M11.9 9.5H7.8l0 .2c3.2.8 5.4 2.8 6.3 5.2l-.9-4.4c-.1-.6-.6-1-1.3-1z"
              fill="#F9A51A"
            />
          </symbol>

          <symbol id="icon-mastercard" viewBox="0 0 48 32">
            <rect width="48" height="32" rx="4" fill="#252525" />
            <circle cx="20" cy="16" r="8" fill="#EB001B" />
            <circle cx="28" cy="16" r="8" fill="#F79E1B" />
            <path
              d="M24 9.3a8 8 0 0 1 0 13.4 8 8 0 0 1 0-13.4z"
              fill="#FF5F00"
            />
          </symbol>

          <symbol id="icon-paypal" viewBox="0 0 48 32">
            <rect width="48" height="32" rx="4" fill="#003087" />
            <path
              d="M15.5 8h5c2.8 0 4.3 1.4 4 3.9-.4 2.9-2.3 4.3-5 4.3h-1.8l-.8 4.8h-3L15.5 8z"
              fill="#fff"
            />
            <path
              d="M17 10.5h1.5c1 0 1.5.4 1.3 1.3-.1 1-.8 1.4-1.7 1.4h-1.2l.6-2.7z"
              fill="#003087"
            />
            <path
              d="M22.3 8h5c2.8 0 4.3 1.4 4 3.9-.4 2.9-2.3 4.3-5 4.3h-1.8l-.8 4.8h-3L22.3 8z"
              fill="#009CDE"
            />
            <path
              d="M23.8 10.5h1.5c1 0 1.5.4 1.3 1.3-.1 1-.8 1.4-1.7 1.4h-1.2l.6-2.7z"
              fill="#003087"
            />
          </symbol>

          <symbol id="icon-applepay" viewBox="0 0 48 32">
            <rect width="48" height="32" rx="4" fill="#000" />
            <path
              d="M19.2 11.5c-.5.6-1.3 1.1-2.1 1-.1-.8.4-1.7.9-2.2.5-.6 1.4-1.1 2.1-1.1.1.9-.4 1.7-.9 2.3zm.9 1.2c-1.1-.1-2.1.6-2.6.6-.5 0-1.3-.6-2.2-.6-1.1 0-2.2.7-2.8 1.7-1.2 2.1-.3 5.2.9 6.9.6.8 1.2 1.7 2.1 1.7.9 0 1.2-.5 2.2-.5s1.3.5 2.2.5c.9 0 1.5-.8 2-1.6.7-1 1-1.9 1-2 0 0-2.1-.8-2.1-3.2 0-2 1.6-2.9 1.7-3-.9-1.4-2.3-1.5-2.4-1.5z"
              fill="#fff"
            />
            <text
              x="24"
              y="22"
              fontFamily="Arial,Helvetica,sans-serif"
              fontSize="5"
              fontWeight="bold"
              fill="#fff"
              letterSpacing="0.5">
              Pay
            </text>
          </symbol>
        </defs>
      </svg>

      {/* Coupon code */}
      <div className="sidebar-section">
        <SidebarSection title="Coupon code" />
        <div className="coupon-code">
          <input type="text" placeholder="Enter your coupon code" />
          <button>Apply</button>
        </div>
      </div>

      {/* Order summary */}
      <div className="sidebar-section">
        <SidebarSection title="Order summary" />
        <div className="order-summery">
          <p>
            <span>Quantity:</span>
            <span>{cartCount}</span>
          </p>
          <p>
            <span>Price:</span>
            <span>${originalPrice.toFixed(2)}</span>
          </p>
          <p>
            <span>Total price:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </p>
        </div>
      </div>

      {/* Payment method */}
      <div className="sidebar-section">
        <SidebarSection title="Payment method" />

        <div className="payment-methods">
          <div
            className="payment-methods-icon"
            aria-label="Accepted payment methods">
            <svg width="48" height="32" role="img" aria-label="Visa">
              <use href="#icon-visa" />
            </svg>
            <svg width="48" height="32" role="img" aria-label="Mastercard">
              <use href="#icon-mastercard" />
            </svg>
            <svg width="48" height="32" role="img" aria-label="PayPal">
              <use href="#icon-paypal" />
            </svg>
            <svg width="48" height="32" role="img" aria-label="Apple Pay">
              <use href="#icon-applepay" />
            </svg>
          </div>

          <button>Check out</button>
        </div>
      </div>
    </aside>
  );
}

function SidebarSection({ title }: SidebarSectionProps) {
  return (
    <div className="mini-titile">
      <h3>{title}</h3>
      <div className="mt-2 h-px w-full bg-[#c8c8c8]" />
    </div>
  );
}
