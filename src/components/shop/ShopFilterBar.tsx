"use client";
import "@/src/styles/components/shop/shop-filter-bar.css";

import Filter, { type FilterCategory } from "./Filter";
import SortBy from "./SortBy";

type SortOrder = "featured" | "lowest" | "highest";

type ShopFilterBarProps = {
  activeFilter: FilterCategory;
  activeSort: SortOrder;
  categories: string[];
  onFilterChange: (category: FilterCategory) => void;
  onSortChange: (sort: SortOrder) => void;
};

export default function ShopFilterBar({
  activeFilter,
  activeSort,
  categories,
  onFilterChange,
  onSortChange,
}: ShopFilterBarProps) {
  return (
    <div className="shop-filter-bar">
      <Filter
        active={activeFilter}
        categories={categories}
        onChange={onFilterChange}
      />
      <SortBy active={activeSort} onChange={onSortChange} />
    </div>
  );
}
