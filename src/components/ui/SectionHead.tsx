"use client";

import { useRef } from "react";
import { useAppHeadAnimation } from "@/src/libs/gsapAnimation";
import { cantarellBold, noto_sans_tagalog } from "@/src/app/fonts";
import type { HeadProps } from "@/src/types/types";
import "../../styles/components/ui/sectionHead.css";

export default function SectionHead({
  eyebrow,
  title1,
  title2,
  text,
}: HeadProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useAppHeadAnimation({ scopeRef: sectionRef });

  return (
    <section ref={sectionRef}>
      <div className="section-head">
        <span className={`section-head_eyebrow ${noto_sans_tagalog.className}`}>
          {eyebrow}
        </span>

        <h2 className={cantarellBold.className}>
          {title1} <span>{title2}</span>
        </h2>

        <p>{text}</p>
      </div>
    </section>
  );
}
