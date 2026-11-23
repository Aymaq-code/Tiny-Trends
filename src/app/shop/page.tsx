import { Metadata } from "next";
import SectionHead from "@/src/components/ui/SectionHead";
import ShopListing from "@/src/components/shop/ShopListing";
import Carousel from "@/src/components/shop/Carousel";
import QueryProvider from "@/src/providers/QueryProvider";

import "../../styles/shop.css";
import { images } from "@/src/libs/content";

export const metadata: Metadata = {
  title: "TinyTrends | Shop",
};

export default function Shop() {
  return (
    <main className="shop-page">
      <SectionHead
        eyebrow="Spring Edit"
        title1="Shop the"
        title2="Collection"
        text="Hand-finished pieces, cut in small runs. Filter by category or sort by price."
      />

      <QueryProvider>
        <ShopListing />
      </QueryProvider>

      <Carousel images={images} />
    </main>
  );
}
