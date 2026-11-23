"use client";

export type FilterCategory =
  | "all"
  | "new"
  | "discounted"
  | "available"
  | `category:${string}`;

const BASE_FILTERS = [
  { id: "all", label: "All" },
  { id: "new", label: "New" },
  { id: "discounted", label: "Discounted" },
  { id: "available", label: "Available" },
] as const;

type FilterProps = {
  active: FilterCategory;
  categories: string[];
  onChange: (category: FilterCategory) => void;
};

export default function Filter({
  active,
  categories,
  onChange,
}: FilterProps) {
  const filters: { id: FilterCategory; label: string }[] = [
    ...BASE_FILTERS,
    ...categories.map((category) => ({
      id: `category:${category}` as const,
      label: category.replace(/\b\w/g, (letter) => letter.toUpperCase()),
    })),
  ];

  return (
    <div className="filter">
      <span className="filter__label">Categories</span>
      <div className="filter__chips" role="tablist" aria-label="Categories">
        {filters.map((c) => (
          <button
            key={c.id}
            type="button"
            role="tab"
            aria-selected={active === c.id}
            className="filter__chip"
            data-active={active === c.id ? "" : undefined}
            onClick={() => onChange(c.id)}>
            {c.label}
          </button>
        ))}
      </div>
    </div>
  );
}
