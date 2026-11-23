// components/ui/runway-lookbook.tsx
"use client";

import * as React from "react";
import gsap from "gsap";

import RunwayStage from "./RunwayStage";
import RunwayRail from "./RunwayRail";
import { useRunwayScroll } from "../../hooks/use-runway-scroll";
import { looks } from "@/src/libs/content";
import { Pose, RunwayLookbookProps } from "@/src/types/types";

function offsetOf(i: number, pos: number, n: number): number {
  if (n <= 0) return 0;
  const d = (((i - pos + 1) % n) + n) % n;
  return d - 1;
}

function wrapIndex(i: number, n: number): number {
  if (n <= 0) return 0;
  return ((Math.round(i) % n) + n) % n;
}

const SLOTS = [
  { x: 1.28, feet: 0.93, h: 0.83, blur: 0, alpha: 1 },
  { x: 0.74, feet: 0.9, h: 0.79, blur: 0, alpha: 1 },
  { x: 0.47, feet: 0.82, h: 0.58, blur: 0.0022, alpha: 1 },
  { x: 0.33, feet: 0.745, h: 0.42, blur: 0.0065, alpha: 0.95 },
  { x: 0.245, feet: 0.7, h: 0.32, blur: 0.011, alpha: 0.78 },
  { x: 0.17, feet: 0.667, h: 0.26, blur: 0.016, alpha: 0.52 },
  { x: 0.11, feet: 0.65, h: 0.22, blur: 0.021, alpha: 0.26 },
  { x: 0.07, feet: 0.64, h: 0.19, blur: 0.026, alpha: 0 },
];

const NARROW_X = [1.3, 0.64, 0.36, 0.24, 0.16, 0.1, 0.06, 0.03];

function pose(
  d: number,
  w: number,
  h: number,
  n = Infinity,
): Pose & { base: number } {
  const narrow = w < 0.9 * h;
  const k = narrow ? Math.min(1, w / (0.62 * h)) : 1;
  const s = Math.max(-1, Math.min(SLOTS.length - 2, d)) + 1;
  const i = Math.min(SLOTS.length - 2, Math.floor(s));
  const t = s - i;
  const a = SLOTS[i];
  const b = SLOTS[i + 1];
  const mix = (p: number, q: number) => p + (q - p) * t;
  const xs = narrow ? mix(NARROW_X[i], NARROW_X[i + 1]) : mix(a.x, b.x);
  const base = SLOTS[1].h * h * k;
  return {
    base,
    x: xs * w,
    y: mix(a.feet, b.feet) * h,
    scale: (mix(a.h, b.h) * h * k) / base,
    blur: mix(a.blur, b.blur) * h,
    alpha: mix(a.alpha, b.alpha) * Math.max(0, Math.min(1, n - 1 - d)),
  };
}

function railStops(
  counts: number[],
  cardH: number,
  gap: number,
): { tops: number[]; groups: number[]; total: number } {
  const tops: number[] = [];
  const groups: number[] = [];
  let y = 0;
  for (const c of counts) {
    groups.push(y);
    for (let j = 0; j < c; j++) {
      tops.push(y);
      y += cardH + gap;
    }
  }
  return { tops, groups, total: y };
}

function railScroll(pos: number, groups: number[], total: number): number {
  const n = groups.length;
  if (!n) return 0;
  const lap = Math.floor(pos / n);
  const p = pos - lap * n;
  const i = Math.floor(p);
  const t = p - i;
  const from = groups[i];
  const to = i + 1 < n ? groups[i + 1] : total;
  return lap * total + from + (to - from) * t;
}

function wrapOffset(y: number, total: number, span: number): number {
  if (total <= 0) return y;
  return ((((y + span) % total) + total) % total) - span;
}

function spans(count: number, loop: boolean): number {
  return Math.max(0, loop ? count : count - 1);
}

// Short, hosted display font — Lexend Zetta from Google Fonts.
const FONT_URL =
  "https://fonts.googleapis.com/css2?family=Lexend+Zetta:wght@200..600&display=swap";

function Digit({ ch, reduced }: { ch: string; reduced: boolean }) {
  const ref = React.useRef(null as HTMLSpanElement | null);
  const first = React.useRef(true);
  React.useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (reduced || !ref.current) return;
    const tw = gsap.fromTo(
      ref.current,
      { yPercent: 105 },
      { yPercent: 0, duration: 0.55, ease: "power3.out" },
    );
    return () => void tw.kill();
  }, [ch, reduced]);
  return (
    <span className="rwl-dg">
      <span ref={ref}>{ch}</span>
    </span>
  );
}

export default function RunwayLookbook({
  height = "100svh",
  title = "Spring Summer 2026",
  blurb = "Cut close and finished by hand. Every piece in the collection is made in our own workshop, in runs small enough to keep each one exact.",
  firstNumber = 1,
  ctaLabel = "Shop the look",
  onShopLook,
  rail = true,
  scrollPerLook = 0.55,
  loop = true,
  fontSrc = FONT_URL,
  onIndexChange,
  ariaLabel = "Runway lookbook",
  className = "",
}: RunwayLookbookProps) {
  const count = looks.length;
  const trackRef = React.useRef<HTMLDivElement>(null);
  const stageRef = React.useRef<HTMLDivElement>(null);
  const railRef = React.useRef<HTMLDivElement>(null);
  const figRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const lastPosition = React.useRef(0);
  const size = React.useRef({ w: 1, h: 1, railH: 1 });
  const [index, setIndex] = React.useState(0);
  const [narrow, setNarrow] = React.useState(false);
  const [reduced, setReduced] = React.useState(false);
  const onIndexRef = React.useRef(onIndexChange);

  React.useEffect(() => {
    onIndexRef.current = onIndexChange;
  }, [onIndexChange]);

  const cards = React.useMemo(() => {
    const out: {
      look: number;
      name: string;
      price: string;
      src: string;
      crop?: { top: number; bottom: number; x?: number };
    }[] = [];
    looks.forEach((lk, look) =>
      (lk.products ?? []).forEach((p) =>
        out.push({
          look,
          name: p.name,
          price: p.price,
          src: p.src ?? lk.src,
          crop: p.crop,
        }),
      ),
    );
    return out;
  }, [looks]);

  const counts = React.useMemo(
    () => looks.map((lk) => (lk.products ?? []).length),
    [looks],
  );

  const render = React.useCallback(
    (position = lastPosition.current) => {
      lastPosition.current = position;
      const { w, h, railH } = size.current;
      const p = position;
      for (let i = 0; i < count; i++) {
        const el = figRefs.current[i];
        if (!el) continue;
        const d = offsetOf(i, p, count);
        const q = pose(d, w, h, count);
        el.style.transform =
          "translate3d(" +
          q.x.toFixed(2) +
          "px," +
          q.y.toFixed(2) +
          "px,0) scale(" +
          q.scale.toFixed(4) +
          ")";
        el.style.filter =
          q.blur > 0.15
            ? "blur(" + (q.blur / q.scale).toFixed(2) + "px)"
            : "none";
        el.style.opacity = q.alpha.toFixed(3);
        el.style.visibility =
          q.alpha < 0.01 || q.x > w * 1.6 ? "hidden" : "visible";
        el.style.zIndex = String(Math.round(400 - d * 40));
      }
      const cardH = Math.max(150, railH * 0.47);
      const gap = 4;
      const stops = railStops(counts, cardH, gap);
      const scroll = railScroll(p, stops.groups, stops.total);
      for (let c = 0; c < cards.length; c++) {
        const el = cardRefs.current[c];
        if (!el) continue;
        const y = wrapOffset(stops.tops[c] - scroll, stops.total, cardH + gap);
        el.style.height = cardH + "px";
        el.style.transform = "translate3d(0," + y.toFixed(2) + "px,0)";
      }
      const now = wrapIndex(p, count);
      setIndex((prev) => (prev === now ? prev : now));
    },
    [count, counts, cards.length],
  );

  React.useEffect(() => {
    onIndexRef.current?.(index);
  }, [index]);

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const on = () => setReduced(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  React.useEffect(() => {
    const el = stageRef.current;
    const track = trackRef.current;
    if (!el || !track) return;
    const ro = new ResizeObserver(() => {
      const isNarrow = track.clientWidth < 720;
      setNarrow(isNarrow);
      size.current = {
        w: el.clientWidth,
        h: el.clientHeight,
        railH: railRef.current?.clientHeight ?? el.clientHeight,
      };
      const base = pose(0, el.clientWidth, el.clientHeight).base;
      for (const f of figRefs.current) {
        if (!f) continue;
        const img = f.firstElementChild as HTMLImageElement | null;
        if (img) img.style.height = base + "px";
        const shadow = f.children[1] as HTMLElement | undefined;
        if (shadow) {
          shadow.style.width = base * 0.36 + "px";
          shadow.style.height = base * 0.035 + "px";
        }
        const hit = f.children[2] as HTMLElement | undefined;
        if (hit) {
          hit.style.height = base + "px";
          hit.style.width = base * 0.3 + "px";
        }
      }
      render();
    });
    ro.observe(el);
    ro.observe(track);
    return () => ro.disconnect();
  }, [render]);

  const steps = spans(count, loop);
  const st = useRunwayScroll({
    trackRef,
    render,
    count,
    steps,
    loop,
    reduced,
  });

  const bringForward = (i: number) => {
    const s = st.current;
    if (!s || !steps) return;
    let k = i;
    if (loop && i < index) k = i + count;
    const top = s.start + (Math.min(k, steps) / steps) * (s.end - s.start);
    window.scrollTo({ top, behavior: reduced ? "auto" : "smooth" });
  };

  const number = String(firstNumber + index);
  const look = looks[index];
  return (
    <div
      ref={trackRef}
      className={"rwl-track " + className}
      data-narrow={narrow ? "" : undefined}
      style={{
        height: "calc(" + height + " * " + (1 + steps * scrollPerLook) + ")",
      }}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}>
      {fontSrc && <style>{`@import url('${fontSrc}');`}</style>}
      <div className="rwl-pin" style={{ height }}>
        <div className="rwl-body">
          <RunwayStage
            stageRef={stageRef}
            figRefs={figRefs}
            looks={looks}
            index={index}
            firstNumber={firstNumber}
            title={title}
            blurb={blurb}
            number={number}
            reduced={reduced}
            ctaLabel={ctaLabel}
            onShopLook={onShopLook}
            bringForward={bringForward}
            Digit={Digit}
          />

          {rail && cards.length > 0 && (
            <RunwayRail
              railRef={railRef}
              cardRefs={cardRefs}
              cards={cards}
              index={index}
              number={number}
            />
          )}
        </div>
        <p className="rwl-sr" aria-live="polite">
          {count
            ? "Look " +
              number +
              " of " +
              count +
              (look?.alt ? ": " + look.alt : "")
            : ""}
        </p>
      </div>
    </div>
  );
}
