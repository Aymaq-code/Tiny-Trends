"use client";
import * as React from "react";

export type RailProduct = {
  name: string;
  price: string;
  src: string;
  crop?: { top: number; bottom: number; x?: number };
  look: number;
};

type Props = {
  railRef: React.RefObject<HTMLDivElement | null>;
  cardRefs: React.RefObject<(HTMLDivElement | null)[]>;
  cards: RailProduct[];
  index: number;
  number: string;
};

const icon = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const Heart = (p: { className?: string }) => (
  <svg viewBox="0 0 16 16" aria-hidden="true" className={p.className} {...icon}>
    <path d="M8 13.4S2.2 9.9 2.2 6.1A2.9 2.9 0 0 1 8 4.8a2.9 2.9 0 0 1 5.8 1.3C13.8 9.9 8 13.4 8 13.4Z" />
  </svg>
);

export default function RunwayRail({
  railRef,
  cardRefs,
  cards,
  index,
  number,
}: Props) {
  return (
    <div
      ref={railRef}
      className="rwl-rail"
      aria-label={"Pieces in look " + number}>
      {cards.map((c, k) => {
        const crop = c.crop ?? { top: 0, bottom: 1 };
        const span = Math.max(0.05, crop.bottom - crop.top);
        return (
          <div
            key={k}
            ref={(el) => {
              cardRefs.current[k] = el;
            }}
            className="rwl-card"
            data-tint={k % 2 === 0 ? "" : undefined}
            aria-hidden={c.look !== index}>
            <Heart className="rwl-heart" />
            <div className="rwl-pic">
              <img
                src={c.src}
                alt=""
                draggable={false}
                decoding="async"
                style={{
                  width: "auto",
                  height: (100 / span).toFixed(3) + "%",
                  left: "50%",
                  top: ((-crop.top / span) * 100).toFixed(3) + "%",
                  right: "auto",
                  bottom: "auto",
                  transform:
                    "translateX(" + (-(crop.x ?? 0.5) * 100).toFixed(2) + "%)",
                }}
              />
            </div>
            <div className="rwl-meta">
              <span className="rwl-pname rwl-cap">{c.name}</span>
              <span className="rwl-price">{c.price}</span>
              <svg
                className="rwl-plus"
                viewBox="0 0 16 16"
                aria-hidden="true"
                {...icon}>
                <path d="M8 2.5v11M2.5 8h11" />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
}
