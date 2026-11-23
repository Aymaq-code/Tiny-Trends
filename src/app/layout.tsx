import { noto_sans_tagalog } from "./fonts";
import type { Metadata } from "next";

import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import Providers from "../context/Providers";

import "../styles/globals.css";
import { MainLayout } from "../types/types";
import ShopCart from "../components/shop/ShopCart";

export const metadata: Metadata = {
  title: "TinyTrends | Little looks, lots of love",
  description:
    "Shop modern, comfortable, and stylish clothing and shoes for kids and babies. Discover quality outfits designed for little ones at TinyTrends.",
};

export default function RootLayout({ children }: MainLayout) {
  return (
    <html lang="en" dir="ltr">
      <body className={`container ${noto_sans_tagalog.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ShopCart />
        </Providers>
      </body>
    </html>
  );
}
