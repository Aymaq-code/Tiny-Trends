"use client";

import { CartProvider } from "@/src/context/CartContext";
import type { MainLayout } from "@/src/types/types";

export default function Providers({ children }: MainLayout) {
  return <CartProvider>{children}</CartProvider>;
}
