"use client";

import Link from "next/link";
import { useRef } from "react";
import { useAppHeadAnimation } from "@/src/libs/gsapAnimation";
import "../../styles/components/app/nextSeasonRight.css";

export default function NextSeasonRight() {
  const textRef = useRef<HTMLElement>(null);
  useAppHeadAnimation({ scopeRef: textRef });

  return (
    <aside ref={textRef} className="next-season-right">
      <h3 className="next-season-right__eyebrow">
        <span aria-hidden="true"></span>
        <span>Playful prices, for a little while</span>
      </h3>

      <h2 className="next-season-right__title">
        <span>Season of</span> <span>Little Savings</span>
      </h2>

      <h3 className="next-season-right__discount">
        <span>Up to 25%</span> <span>off</span>
      </h3>

      <p className="next-season-right__text">
        Find the next favorite outfit for less. Sweet styles, comfy fits, and
        happy little price tags.
      </p>

      <Link className="sale-link" href="/#shop">
        Shop the sale <span aria-hidden="true">↗</span>
      </Link>
    </aside>
  );
}
