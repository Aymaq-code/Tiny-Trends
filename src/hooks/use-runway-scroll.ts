// hooks/use-runway-scroll.ts
"use client";

import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const positionAt = (progress: number, laps: number, steps: number) =>
  (progress + laps) * steps;

type Args = {
  trackRef: React.RefObject<HTMLDivElement | null>;
  render: (position: number) => void;
  count: number;
  steps: number;
  loop: boolean;
  reduced: boolean;
};

export function useRunwayScroll({
  trackRef,
  render,
  count,
  steps,
  loop,
  reduced,
}: Args) {
  const st = React.useRef<ScrollTrigger | null>(null);
  const position = React.useRef(0);

  React.useEffect(() => {
    const track = trackRef.current;
    if (!track || count < 2) return;

    let laps = 0;
    let target = 0;

    const trigger = ScrollTrigger.create({
      trigger: track,
      start: "top top",
      end: "bottom bottom",
      snap: reduced
        ? undefined
        : {
            snapTo: 1 / steps,
            duration: { min: 0.45, max: 1.1 },
            delay: 0.1,
            ease: "power2.inOut",
          },
      onUpdate: (self) => {
        if (loop && self.progress >= 1 && self.direction > 0) {
          laps += 1;
          self.scroll(self.start + 1);
          return;
        }
        target = positionAt(self.progress, laps, steps);
      },
    });

    const onWheel = (e: WheelEvent) => {
      if (!loop || e.deltaY >= 0 || trigger.scroll() > trigger.start + 1)
        return;
      const r = track.getBoundingClientRect();
      if (r.top > 1 || r.bottom < window.innerHeight - 1) return;
      laps -= 1;
      trigger.scroll(trigger.end - 1);
    };

    window.addEventListener("wheel", onWheel, { passive: true });

    target = positionAt(trigger.progress, 0, steps);
    position.current = target;
    render(position.current);

    const tick = (_time: number, delta: number) => {
      const current = position.current;
      const next = reduced
        ? target
        : current + (target - current) * (1 - Math.exp(-delta / 160));
      if (Math.abs(next - current) < 1e-4 && next === target) return;
      position.current = Math.abs(target - next) < 1e-4 ? target : next;
      render(position.current);
    };

    gsap.ticker.add(tick);
    st.current = trigger;

    return () => {
      gsap.ticker.remove(tick);
      window.removeEventListener("wheel", onWheel);
      trigger.kill();
      st.current = null;
    };
  }, [trackRef, render, count, steps, loop, reduced]);

  return st;
}
