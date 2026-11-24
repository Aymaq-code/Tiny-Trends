"use client";

import Image from "next/image";
import IMAGE from "@/public/Firefly.png";
import { useRef } from "react";
import { useHeroAnimation } from "@/src/libs/gsapAnimation";

import "../../styles/components/app/rightSide.css";

export default function RightSide() {
  const rightRef = useRef<HTMLElement>(null);

  useHeroAnimation({ scopeRef: rightRef });

  return (
    <aside ref={rightRef} className="hero-right">
      <div className="hero-image-frame">
        <span className="hero-sticker">
          little joys
          <br />
          inside
        </span>
        <Image
          src={IMAGE}
          alt="A smiling child in a pink outfit carrying colorful shopping bags"
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          priority
          className="hero-image"
        />
      </div>
      <div className="hero-floating-note">
        <span className="hero-floating-icon" aria-hidden="true">
          ✦
        </span>
        <span>
          <strong>Comfy by nature</strong>
          <small>Ready for play, all day</small>
        </span>
      </div>
    </aside>
  );
}
