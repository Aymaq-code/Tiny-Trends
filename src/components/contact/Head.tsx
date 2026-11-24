"use client";

import Image from "next/image";
import HEAD_IMAGE from "@/public/contact-head-img.webp";

import { useRef } from "react";
import { useAppHeadAnimation } from "@/src/libs/gsapAnimation";
import "../../styles/components/contact/head.css";

export default function Head() {
  const ref = useRef<HTMLElement>(null);

  useAppHeadAnimation({ scopeRef: ref });

  return (
    <section ref={ref} className="contact-us-head">
      <Image src={HEAD_IMAGE} fill alt="" />
      <div className="contact-us-head__label">
        <h2>Contact Us</h2>
        <p>
          Have questions or need assistance? We&apos;re here to help! Reach out
          to us and let&apos;s make something great together.
        </p>
      </div>
    </section>
  );
}
