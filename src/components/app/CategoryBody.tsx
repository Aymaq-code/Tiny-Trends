"use client";

import { useRef } from "react";
import { useCardRevealAnimation } from "@/src/libs/gsapAnimation";
import { categories } from "@/src/libs/content";
import CategoryCard from "./CategoryCard";
import "../../styles/components/app/categoriesBody.css";

export default function CategoryBody() {
  const bodyRef = useRef<HTMLElement>(null);

  useCardRevealAnimation({ scopeRef: bodyRef });

  return (
    <section ref={bodyRef} className="categoryShop_body">
      <CategoryCard {...categories[0]} />
      <CategoryCard {...categories[1]} />

      <div className="cat-2_stack">
        <CategoryCard {...categories[2]} />
        <CategoryCard {...categories[3]} />
      </div>
    </section>
  );
}
