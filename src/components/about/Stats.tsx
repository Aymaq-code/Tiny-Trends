"use client";

import { useRef } from "react";
import SectionHead from "../ui/SectionHead";
import { useAppHeadAnimation } from "@/src/libs/gsapAnimation";
import { stats } from "@/src/libs/content";

export default function Stats() {
  const statusRef = useRef<HTMLElement>(null);
  useAppHeadAnimation({ scopeRef: statusRef });

  return (
    <section ref={statusRef} className="about-status">
      <div className="about-status__inner">
        {/* Heading */}
        <SectionHead
          eyebrow="Growing with love"
          title1="Little things"
          title2="Big happiness"
          text="Making every little moment special for families."
        />
        {/* Stats */}
        <div className="about-status__grid">
          {stats.map((stat) => (
            <div key={stat.label} className="about-status__card">
              <div className="about-status__card-head">
                <span className="about-status__value">{stat.value}</span>

                <span className="about-status__symbol">{stat.symbol}</span>
              </div>

              <p className="about-status__label">{stat.label}</p>

              <div className="about-status__bar" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
