"use client";

import { useRef } from "react";
import { ShopNowBtn } from "../ui/Buttons";
import { useHeroAnimation } from "@/src/libs/gsapAnimation";
import { snigletRegular } from "@/src/app/fonts";
import "../../styles/components/app/leftSide.css";

export default function LeftSide() {
  const leftSideRef = useRef<HTMLElement>(null);

  useHeroAnimation({ scopeRef: leftSideRef });

  return (
    <aside ref={leftSideRef} className="leftSide">
      <div className="leftSide_content">
        <p className={`hero-eyebrow ${snigletRegular.className}`}>
          <span aria-hidden="true">✳</span> Little looks, lots of love
        </p>

        <div className="leftSide_content-text">
          <h1 className={snigletRegular.className}>
            Big days start with little outfits.
          </h1>

          <h2>Easy-to-love clothes and shoes for every little adventure.</h2>

          <p>
            Play-ready pieces, feel-good fabrics, and tiny details made for
            growing up in style.
          </p>
        </div>

        <div className="hero-actions">
          <ShopNowBtn />

          <span className="hero-note">
            <span aria-hidden="true">♡</span> Made for the everyday magic
          </span>
        </div>
      </div>
    </aside>
  );
}
