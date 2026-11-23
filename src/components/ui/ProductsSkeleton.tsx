import "@/src/styles/components/ui/skeleton.css";

export default function ProductsSkeleton() {
  return (
    <div className="products-grid">
      {Array.from({ length: 8 }).map((_, index) => (
        <div className="product-skeleton" key={index}>
          <div className="skeleton-image" />

          <div className="skeleton-content">
            <div className="skeleton-title" />
            <div className="skeleton-price" />
            <div className="skeleton-button" />
          </div>
        </div>
      ))}
    </div>
  );
}
