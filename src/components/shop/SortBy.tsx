"use client";

type SortOrder = "featured" | "lowest" | "highest";

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "lowest", label: "Price ↑" },
  { id: "highest", label: "Price ↓" },
] as const;

type SortByProps = {
  active: SortOrder;
  onChange: (sort: SortOrder) => void;
};

export default function SortBy({ active, onChange }: SortByProps) {
  return (
    <div className="sortBy">
      <span className="sortBy__label">Sort by</span>
      <div className="sortBy__group" role="radiogroup" aria-label="Sort by">
        {SORTS.map((s) => (
          <button
            key={s.id}
            type="button"
            role="radio"
            aria-checked={active === s.id}
            className="sortBy__opt"
            data-active={active === s.id ? "" : undefined}
            onClick={() => onChange(s.id)}>
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
}
