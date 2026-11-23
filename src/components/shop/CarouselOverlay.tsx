import type { CarouselOverlayProps } from "@/src/types/types";
import "@/src/styles/components/shop/carouselOverlay.css";

export default function CarouselOverlay({
  images,
  current,
}: CarouselOverlayProps) {
  const activeImage = images[current];

  if (!activeImage) return null;

  return (
    <div className="carousel-overlay">
      <span>DISCOVER SOMETHING NEW</span>

      <div key={current} className="overlay-text-content">
        <h2>{activeImage.title}</h2>
        <p>{activeImage.description}</p>
      </div>
    </div>
  );
}
