"use client";

import Image from "next/image";
import SectionHead from "../ui/SectionHead";
import { useRef } from "react";
import { useScrollImageAnimation } from "@/src/libs/gsapAnimation";

export default function Story() {
  const imgRef = useRef<HTMLElement>(null);
  useScrollImageAnimation({ scopeRef: imgRef });
  return (
    <section ref={imgRef} id="story" className="about-story">
      <Image
        src="/about-story.jpg"
        alt="Folding soft organic baby clothes"
        width={1024}
        height={1280}
        loading="lazy"
        className="about-story__image"
      />

      <div className="about-story__copy">
        <SectionHead
          eyebrow="Our story"
          title1="From a tiny studio to"
          title2="thousands of closets"
          text={
            <>
              It began at a kitchen table, with a new parent searching for
              clothes that were cute, comfortable and kind to the planet — and
              finding very few.
              <br />
              Today, TinyTrends brings together the best little brands and our
              own in-house designs, each one tested by real kids on real
              adventures: muddy parks, birthday parties and everything in
              between.
            </>
          }
        />
      </div>
    </section>
  );
}
