"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

import type {
  UseAnimationProps,
  UseCommentAnimationProps,
} from "../types/types";

/* ------------------------------------------------------------------ */
/*  Shared motion tokens — keep all timings in one place             */
/* ------------------------------------------------------------------ */
const MOTION = {
  ease: "power3.out",
  easeHeavy: "expo.out",
  duration: 0.7,
  durationLong: 1.2,
  stagger: 0.12,
  scrollStart: "top 80%",
} as const;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ------------------------------------------------------------------ */
/*  Reusable reveal: fade + slide up, optional scroll trigger        */
/* ------------------------------------------------------------------ */
type RevealOptions = {
  y?: number;
  stagger?: number;
  duration?: number;
  delay?: number;
  scroll?: {
    trigger: Element;
    start?: string;
    once?: boolean;
  };
};

function reveal(
  targets: gsap.TweenTarget,
  {
    y = 40,
    stagger = MOTION.stagger,
    duration = MOTION.duration,
    delay = 0,
    scroll,
  }: RevealOptions = {},
) {
  if (!targets || (Array.isArray(targets) && targets.length === 0)) return;

  gsap.set(targets, { y, autoAlpha: 0 });

  return gsap.to(targets, {
    y: 0,
    autoAlpha: 1,
    duration,
    delay,
    stagger,
    ease: MOTION.ease,
    scrollTrigger: scroll
      ? {
          trigger: scroll.trigger,
          start: scroll.start ?? MOTION.scrollStart,
          toggleActions: "play none none none",
          once: scroll.once ?? true,
        }
      : undefined,
  });
}

export function useHeaderAnimation({ scopeRef }: UseAnimationProps) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Desktop
      mm.add("(min-width: 769px)", () => {
        const elements = ".logo-class, .nav-links li, .header-right";

        gsap.set(elements, {
          y: -30,
          rotate: -5,
          autoAlpha: 0,
        });

        gsap.to(elements, {
          y: 0,
          rotate: 0,
          autoAlpha: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
        });
      });

      // Mobile
      mm.add("(max-width: 768px)", () => {
        const elements = ".logo-class, .header-right";

        gsap.set(elements, {
          y: -30,
          autoAlpha: 0,
        });

        gsap.to(elements, {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
        });
      });

      return () => mm.revert();
    },
    {
      scope: scopeRef,
    },
  );
}

export function useHeroAnimation({ scopeRef }: UseAnimationProps) {
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const scope = scopeRef.current;
      if (!scope) return;

      const left = scope.querySelectorAll(
        ".hero-eyebrow, .leftSide_content-text > *, .hero-actions > *, .about-hero__copy > *",
      );
      const right = scope.querySelectorAll(
        ".hero-image-frame, .hero-floating-note, .about-hero__note",
      );
      const img = scope.querySelectorAll(
        ".hero-image-frame img, .about-hero__image",
      );

      // Guard: if this component doesn't render hero elements, skip entirely
      if (!left.length && !right.length && !img.length) return;

      const tl = gsap.timeline({
        delay: 0.3,
        defaults: { ease: MOTION.easeHeavy },
      });

      if (left.length) {
        tl.fromTo(
          left,
          { x: -40, autoAlpha: 0, filter: "blur(8px)" },
          {
            x: 0,
            autoAlpha: 1,
            filter: "blur(0px)",
            duration: MOTION.durationLong,
            stagger: MOTION.stagger,
          },
        );
      }

      if (img.length) {
        tl.fromTo(
          img,
          { scale: 0.85, rotate: -3, autoAlpha: 0 },
          {
            scale: 1,
            rotate: 0,
            autoAlpha: 1,
            duration: 1.4,
            ease: "expo.out",
          },
          left.length ? "-=0.8" : 0,
        );
      }

      if (right.length) {
        tl.fromTo(
          right,
          { y: 20, autoAlpha: 0, filter: "blur(4px)" },
          {
            y: 0,
            autoAlpha: 1,
            filter: "blur(0px)",
            duration: MOTION.durationLong,
            stagger: 0.1,
          },
          img.length ? "<" : 0,
        );
      }

      // floating loops — only if element exists
      const frame = scope.querySelector(".hero-image-frame");
      if (frame) {
        gsap.to(frame, {
          y: -10,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 2,
        });
      }

      const note = scope.querySelector(".hero-floating-note");
      if (note) {
        gsap.to(note, {
          y: 8,
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 2,
        });
      }
    },
    { scope: scopeRef },
  );
}

export function useAppHeadAnimation({ scopeRef }: UseAnimationProps) {
  useGSAP(
    () => {
      const head = scopeRef.current;
      if (!head || prefersReducedMotion()) return;

      const els = head.querySelectorAll(
        ".section-head > *, .about-status__grid > *, .contact-us-head__label > *, .next-season-right > *",
      );

      reveal(els, {
        y: 30,
        delay: 0.2,
        duration: 0.5,
        scroll: { trigger: head, start: "top 75%" },
      });
    },
    { scope: scopeRef },
  );
}

export function useCardRevealAnimation({
  scopeRef,
  enabled = true,
  selector = ".card-ani",
  start = MOTION.scrollStart,
  dependencies = [],
}: UseAnimationProps & {
  enabled?: boolean;
  selector?: string;
  start?: string;
  dependencies?: any[];
}) {
  useGSAP(
    () => {
      const section = scopeRef.current;
      if (!section || !enabled || prefersReducedMotion()) return;

      const els = section.querySelectorAll(selector);
      if (!els.length) return;

      reveal(els, {
        y: 60,
        duration: 0.9,
        stagger: 0.15,
        scroll: { trigger: section, start },
      });
    },
    {
      scope: scopeRef,

      dependencies: [enabled, ...dependencies],
      revertOnUpdate: true,
    },
  );
}

// CATEGORY FOOTER ANIMATION
export function useCategoryAnimation({ scopeRef }: UseAnimationProps) {
  useGSAP(
    () => {
      const footer = scopeRef.current;
      if (!footer || prefersReducedMotion()) return;

      const track = footer.querySelector<HTMLElement>(
        ".category-marquee_track",
      );
      const group = footer.querySelector<HTMLElement>(
        ".category-marquee_group",
      );
      const arrows = footer.querySelectorAll(".category-marquee_icon img");
      if (!track || !group) return;

      let position = 0;
      let direction = -1;
      let currentSpeed = 0.6;
      let targetSpeed = 0.6;
      let groupWidth = group.offsetWidth;

      const measure = () => (groupWidth = group.offsetWidth);
      const onResize = () => measure();

      const onWheel = (e: WheelEvent) => {
        if (!e.deltaY) return;
        direction = e.deltaY > 0 ? -1 : 1;
        targetSpeed = Math.min(Math.max(Math.abs(e.deltaY) * 0.025, 0.6), 3);
        gsap.to(arrows, {
          rotate: direction === -1 ? 180 : 0,
          duration: 0.7,
          ease: MOTION.ease,
          overwrite: true,
        });
      };

      const tick = () => {
        currentSpeed += (targetSpeed - currentSpeed) * 0.06;
        position += currentSpeed * direction;
        if (position <= -groupWidth) position += groupWidth;
        if (position >= 0) position -= groupWidth;
        gsap.set(track, { x: position });
      };

      gsap.ticker.add(tick);
      window.addEventListener("wheel", onWheel, { passive: true });
      window.addEventListener("resize", onResize);

      return () => {
        gsap.ticker.remove(tick);
        window.removeEventListener("wheel", onWheel);
        window.removeEventListener("resize", onResize);
      };
    },
    { scope: scopeRef },
  );
}

// COMMENTS GSAP
export function useCommentAnimation({
  sectionRef,
  viewportRef,
  trackRef,
}: UseCommentAnimationProps) {
  useGSAP(
    () => {
      const section = sectionRef.current;
      const viewport = viewportRef.current;
      const track = trackRef.current;
      if (!section || !viewport || !track || prefersReducedMotion()) return;

      const getDistance = () =>
        Math.max(0, track.scrollWidth - viewport.clientWidth);

      gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getDistance() + window.innerHeight * 0.35}`,
          pin: true,
          pinSpacing: true,
          scrub: true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    },
    { scope: sectionRef },
  );
}

// WEBSITE IMAGE SCROLL GSAP
export function useScrollImageAnimation({ scopeRef }: UseAnimationProps) {
  useGSAP(
    () => {
      const section = scopeRef.current;
      if (!section || prefersReducedMotion()) return;

      const imgs = section.querySelectorAll(".about-story__image");
      if (!imgs.length) return;

      gsap.fromTo(
        imgs,
        { autoAlpha: 0, scale: 0.6 },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 1.5,
          delay: 0.2,
          ease: MOTION.easeHeavy,
          scrollTrigger: {
            trigger: imgs[0],
            start: "top 70%",
            once: true,
          },
        },
      );
    },
    { scope: scopeRef }, // ← fixes missing scope
  );
}
