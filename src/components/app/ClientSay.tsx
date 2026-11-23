"use client";

import { useRef } from "react";
import ClientSayComment from "./ClientSayComment";
import SectionHead from "../ui/SectionHead";
import { useCommentAnimation } from "@/src/libs/gsapAnimation";
import "../../styles/components/app/clientSay.css";

export default function ClientSay() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLUListElement | null>(null);

  useCommentAnimation({
    sectionRef,
    viewportRef,
    trackRef,
  });

  return (
    <section ref={sectionRef} className="client-say">
      <div className="client-say__content">
        <SectionHead
          eyebrow="Testimonial"
          title1="What Client"
          title2="Say"
          text="Little styles, big personalities. Find something they'll love."
        />

        <ClientSayComment viewportRef={viewportRef} trackRef={trackRef} />
      </div>
    </section>
  );
}
