"use client";

import { useState } from "react";
import CarouselOverlay from "./CarouselOverlay";
import CarouselFooter from "./CarouselFooter";

import Image from "next/image";
import type { CarouselProps } from "@/src/types/types";
import CarouselArrowBtns from "./CarousorArrowBtns";

export default function Carousel({ images }: CarouselProps) {
  const [current, setCurrent] = useState<number>(0);

  return (
    <section className="carousel" aria-label="Product Carousel">
      <CarouselOverlay images={images} current={current} />

      <div className="carousel-scene">
        {images.map((image, index) => {
          // Calculate the distance from the current active slide
          let position = "hidden";

          if (index === current) {
            position = "active";
          } else if (index === (current - 1 + images.length) % images.length) {
            position = "prev"; // The image to the left
          } else if (index === (current + 1) % images.length) {
            position = "next"; // The image to the right
          }

          return (
            <div key={image.id} className={`carousel-card ${position}`}>
              <Image
                fill
                src={image.src}
                alt={image.title}
                className="carousel-image"
                sizes="(max-width: 768px) 100vw, 400px"
                priority={position === "active"}
              />
            </div>
          );
        })}
      </div>

      <CarouselArrowBtns imagesLength={images.length} setCurrent={setCurrent} />

      <CarouselFooter
        images={images}
        current={current}
        setCurrent={setCurrent}
      />
    </section>
  );
}
