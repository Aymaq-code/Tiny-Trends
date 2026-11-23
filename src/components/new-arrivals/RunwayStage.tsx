// components/ui/runway-stage.tsx
"use client";

export type StageLook = { src: string; alt?: string };

type Props = {
  stageRef: React.RefObject<HTMLDivElement | null>;
  figRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  looks: StageLook[];
  index: number;
  firstNumber: number;
  title: string;
  blurb?: string;
  number: string;
  reduced: boolean;
  ctaLabel: string;
  onShopLook?: (i: number) => void;
  bringForward: (i: number) => void;
  Digit: React.ComponentType<{ ch: string; reduced: boolean }>;
};

export default function RunwayStage({
  stageRef,
  figRefs,
  looks,
  index,
  firstNumber,
  title,
  blurb,
  number,
  reduced,
  ctaLabel,
  onShopLook,
  bringForward,
  Digit,
}: Props) {
  return (
    <div ref={stageRef} className="rwl-stage">
      <div className="rwl-copy">
        <h2 className="rwl-title rwl-cap">{title}</h2>
        {blurb && <p className="rwl-blurb">{blurb}</p>}
      </div>

      {looks.map((lk, i) => (
        <div
          key={i}
          ref={(el) => {
            figRefs.current[i] = el;
          }}
          className="rwl-fig">
          <img
            src={lk.src}
            alt={lk.alt ?? ""}
            draggable={false}
            decoding="async"
          />
          <i />
          <button
            type="button"
            className="rwl-hit"
            tabIndex={i === index ? -1 : 0}
            aria-label={
              "Look " + (firstNumber + i) + (lk.alt ? ": " + lk.alt : "")
            }
            onClick={() => bringForward(i)}
          />
        </div>
      ))}

      <div className="rwl-foot">
        <p className="rwl-look rwl-cap" aria-hidden="true">
          <span>Look</span>
          <span className="rwl-num">
            {number.split("").map((ch, i) => (
              <Digit key={number.length + "-" + i} ch={ch} reduced={reduced} />
            ))}
          </span>
        </p>
        <button
          type="button"
          className="rwl-shop rwl-cap"
          onClick={() => onShopLook?.(index)}>
          {ctaLabel}
        </button>
      </div>
    </div>
  );
}
