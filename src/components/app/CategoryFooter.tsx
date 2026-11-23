"use client";

import { useRef } from "react";
import "../../styles/components/app/categoryFooter.css";
import { useCategoryAnimation } from "@/src/libs/gsapAnimation";
import { announcements } from "@/src/libs/content";

export default function CategoryFooter() {
  const wheelRef = useRef<HTMLElement>(null);

  useCategoryAnimation({ scopeRef: wheelRef });

  return (
    <footer ref={wheelRef} className="categoryShop_footer">
      <div className="category-marquee">
        <div className="category-marquee_track">
          {[0, 1].map((group) => (
            <div className="category-marquee_group" key={group}>
              {announcements.map((announcement, index) => (
                <div className="category-marquee_item" key={index}>
                  <h3>{announcement}</h3>

                  <div className="category-marquee_icon">
                    <img src="/arrow.svg" alt="arrow icon" />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
