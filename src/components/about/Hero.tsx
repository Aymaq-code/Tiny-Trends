"use client";

import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Eyebrow from "./Eyebrow";
import { useRef } from "react";
import { useHeroAnimation } from "@/src/libs/gsapAnimation";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  useHeroAnimation({ scopeRef: heroRef });

  return (
    <section ref={heroRef} className="about-hero">
      <div className="about-hero__inner">
        <div className="about-hero__copy">
          <Eyebrow>About TinyTrends</Eyebrow>
          <h1 className="about-hero__title">
            Little clothes, <em className="about-hero__accent">big stories.</em>
          </h1>
          <p className="about-hero__text">
            We started TinyTrends with one simple belief: kids deserve clothes
            that are as soft, bright and free-spirited as they are.
          </p>
          <a href="#story" className="about-hero__cta">
            Read our story <ArrowRight className="about-hero__cta-icon" />
          </a>
        </div>
        <div className="about-hero__media">
          <Image
            src="/about-hero.jpg"
            alt="Happy kids in pastel outfits at the TinyTrends boutique"
            width={1280}
            height={1024}
            className="about-hero__image"
          />
          <div className="about-hero__note">
            <div className="about-hero__stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="about-hero__star" />
              ))}
            </div>
            <span className="about-hero__note-text">Loved by 50K+ parents</span>
          </div>
        </div>
      </div>
    </section>
  );
}
