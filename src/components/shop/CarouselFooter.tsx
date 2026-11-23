import type { CarouselControlsProps } from "@/src/types/types";
import "@/src/styles/components/shop/carouselFooter.css";

export default function CarouselFooter({
  images,
  current,
  setCurrent,
}: CarouselControlsProps) {
  return (
    <div className="carousel-footer-container">
      {/* Carousel Dots */}
      <div
        className="carousel-dots"
        role="tablist"
        aria-label="Carousel Navigation">
        {images.map((image, index) => (
          <button
            type="button"
            key={image.id}
            className={`dot ${current === index ? "active" : ""}`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}: ${image.title}`}
            aria-selected={current === index}
            role="tab"
          />
        ))}
      </div>

      {/* Counter */}
      <div className="carousel-counter" aria-live="polite">
        <span>{String(current + 1).padStart(2, "0")}</span>
        <span className="counter-line" aria-hidden="true" />
        <span>{String(images.length).padStart(2, "0")}</span>
      </div>
    </div>
  );
}
