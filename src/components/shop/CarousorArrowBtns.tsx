import type { CarouselArrowProps } from "@/src/types/types";

export default function CarouselArrowBtns({
  imagesLength,
  setCurrent,
}: CarouselArrowProps) {
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % imagesLength);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + imagesLength) % imagesLength);
  };

  return (
    <div className="carousel-arrows-container">
      <button
        type="button"
        className="carousel-btn prev"
        onClick={prevSlide}
        aria-label="Previous image">
        &#10094;
      </button>

      <button
        type="button"
        className="carousel-btn next"
        onClick={nextSlide}
        aria-label="Next image">
        &#10095;
      </button>
    </div>
  );
}
