import "../../styles/components/app/liveFlowers.css";

// [petal colour, centre colour]. One data row replaces 15 copy-pasted SVGs.
const FLOWERS: ReadonlyArray<readonly [string, string]> = [
  ["#FF6B6B", "#FFD93D"],
  ["#FF9F43", "#FFF3CD"],
  ["#FECA57", "#FF6B6B"],
  ["#48DBFB", "#FFFFFF"],
  ["#A29BFE", "#FECA57"],
  ["#FD79A8", "#FFFFFF"],
  ["#6C5CE7", "#FECA57"],
  ["#00B894", "#DFE6E9"],
  ["#E17055", "#FFEAA7"],
  ["#0984E3", "#FFFFFF"],
  ["#B2BEC3", "#FF6B6B"],
  ["#FFEAA7", "#E17055"],
  ["#55EFC4", "#FDCB6E"],
  ["#74B9FF", "#FAB1A0"],
  ["#FAB1A0", "#6C5CE7"],
];

const PETALS: ReadonlyArray<readonly [number, number]> = [
  [30, 18],
  [40, 28],
  [36, 40],
  [24, 40],
  [20, 28],
];

export default function LiveFlowers() {
  return (
    <div className="flowers" aria-hidden="true">
      {FLOWERS.map(([petal, centre], i) => (
        <svg key={i} viewBox="0 0 60 60" focusable="false">
          <g fill={petal}>
            {PETALS.map(([cx, cy]) => (
              <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="8" />
            ))}
          </g>
          <circle cx="30" cy="30" r="6" fill={centre} />
        </svg>
      ))}
    </div>
  );
}
