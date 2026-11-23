"use client";

import { values } from "@/src/libs/content";
import SectionHead from "../ui/SectionHead";
import { useCardRevealAnimation } from "@/src/libs/gsapAnimation";
import { useRef } from "react";

export default function Values() {
  const cardRef = useRef<HTMLElement>(null);
  useCardRevealAnimation({
    scopeRef: cardRef,
  });

  return (
    <section ref={cardRef} className="about-values">
      <SectionHead
        eyebrow="What we stand for"
        title1="Our"
        title2="values"
        text="Our values shape everything we do, bringing more joy, care, and meaning to childhood."
      />
      <div className="about-values__grid card-ani">
        {values.map(({ icon: Icon, title, text }) => (
          <div key={title} className="about-values__card card-ani">
            <div className="about-values__icon-wrap">
              <Icon className="about-values__icon" />
            </div>
            <h3 className="about-values__title">{title}</h3>
            <p className="about-values__text">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
