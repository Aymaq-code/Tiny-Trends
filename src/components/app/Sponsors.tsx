"use client";

import { useRef } from "react";
import { partners } from "@/src/libs/content";
import SectionHead from "../ui/SectionHead";
import { useCardRevealAnimation } from "@/src/libs/gsapAnimation";
import "../../styles/components/body/sponsors.css";

export default function Sponsors() {
  const sponsorsRef = useRef<HTMLElement>(null);

  useCardRevealAnimation({
    scopeRef: sponsorsRef,
    enabled: partners.length > 0,
  });

  return (
    <section
      ref={sponsorsRef}
      className="sponsors"
      aria-label="Featured brands">
      <SectionHead
        eyebrow="OUR BRAND FAMILY"
        title1="Little brands"
        title2="big love"
        text="A few of the wonderful names making little moments special."
      />

      <div className="sponsors__container">
        {partners.map((brand, index) => (
          <div key={brand.label} className="sponsor-item card-ani">
            <span className="sponsor-index">0{index + 1}</span>
            <span className="sponsor-wordmark">{brand.label}</span>
            <span className="sponsor-dot" />
          </div>
        ))}
      </div>

      <div className="sponsors__footer">
        <span />
        <p>GOOD THINGS GROW TOGETHER</p>
        <span />
      </div>
    </section>
  );
}
