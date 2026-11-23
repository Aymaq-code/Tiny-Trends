"use client";

import { useMemo, useState } from "react";
import ShopFilterBar from "@/src/components/shop/ShopFilterBar";
import type { FilterCategory } from "@/src/components/shop/Filter";
import ProductsSkeleton from "../ui/ProductsSkeleton";
import { useProducts } from "@/src/hooks/useProducts";
import { Product } from "@/src/types/types";
import ProductGrid from "./ProductGrid";
import NothingFound from "../app/NothingFound";
import Pagination from "../ui/pagination/Pagination";

type SortOrder = "featured" | "lowest" | "highest";

function getPrice(product: Product) {
  return product.cost * (1 - (product.discount ?? 0) / 100);
}

const ITEMS_PER_PAGE = 8;

export default function ShopListing() {
  const { allProducts, isLoading, error } = useProducts();

  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [activeSort, setActiveSort] = useState<SortOrder>("featured");

  const [currentPage, setCurrentPage] = useState(0);

  const [prevFilter, setPrevFilter] = useState(activeFilter);
  const [prevSort, setPrevSort] = useState(activeSort);

  if (activeFilter !== prevFilter || activeSort !== prevSort) {
    setPrevFilter(activeFilter);
    setPrevSort(activeSort);
    setCurrentPage(0);
  }

  const categories = useMemo(
    () =>
      Array.from(
        new Set(
          allProducts
            .map((product) => product.category?.trim())
            .filter((category): category is string => Boolean(category)),
        ),
      ),
    [allProducts],
  );

  const filteredAndSortedProducts = useMemo(() => {
    const filtered = allProducts.filter((product) => {
      switch (activeFilter) {
        case "new":
          return product.new === true;
        case "discounted":
          return (product.discount ?? 0) > 0;
        case "available":
          return product.available === true;
        default:
          if (activeFilter.startsWith("category:")) {
            return (
              product.category?.trim().toLowerCase() ===
              activeFilter.slice("category:".length).toLowerCase()
            );
          }
          return true;
      }
    });

    if (activeSort === "featured") {
      return filtered;
    }

    return [...filtered].sort((a, b) => {
      const priceDifference = getPrice(a) - getPrice(b);
      return activeSort === "lowest" ? priceDifference : -priceDifference;
    });
  }, [allProducts, activeFilter, activeSort]);

  const itemOffset = currentPage * ITEMS_PER_PAGE;
  const currentItems = filteredAndSortedProducts.slice(
    itemOffset,
    itemOffset + ITEMS_PER_PAGE,
  );
  const pageCount = Math.ceil(
    filteredAndSortedProducts.length / ITEMS_PER_PAGE,
  );

  if (isLoading) {
    return <ProductsSkeleton />;
  }

  if (error) {
    return (
      <NothingFound
        title="Something Went Wrong"
        msg="Unable to load shopping list. Please try again later."
      />
    );
  }

  return (
    <>
      <ShopFilterBar
        activeFilter={activeFilter}
        activeSort={activeSort}
        categories={categories}
        onFilterChange={setActiveFilter}
        onSortChange={setActiveSort}
      />

      <ProductGrid products={currentItems} />

      <Pagination
        pageCount={pageCount}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </>
  );
}
