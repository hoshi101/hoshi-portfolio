import { cn } from "@/lib/utils";

type PixelStarVariant = "star" | "spark";

type PixelStarProps = {
  /** "star" is the 16×16 logo star. "spark" is the 7×7 marker. */
  variant?: PixelStarVariant;
  /** Whole-number multiple of the sprite grid. */
  scale?: 1 | 2 | 3 | 4;
  className?: string;
  /** Leave empty when the star is decoration. */
  label?: string;
};

// Each row is the [first, last] filled column.
const SPRITES: Record<PixelStarVariant, { grid: number; rows: [number, number][] }> = {
  star: {
    grid: 16,
    rows: [
      [7, 8], [7, 8], [7, 8], [6, 9], [6, 9], [5, 10], [3, 12], [0, 15],
      [0, 15], [3, 12], [5, 10], [6, 9], [6, 9], [7, 8], [7, 8], [7, 8],
    ],
  },
  spark: {
    grid: 7,
    rows: [[3, 3], [3, 3], [2, 4], [0, 6], [2, 4], [3, 3], [3, 3]],
  },
};

const PixelStar = ({ variant = "star", scale = 1, className, label }: PixelStarProps) => {
  const { grid, rows } = SPRITES[variant];
  const size = grid * scale;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${grid} ${grid}`}
      shapeRendering="crispEdges"
      fill="currentColor"
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={cn("shrink-0 text-star", className)}
    >
      {rows.map(([first, last], row) => (
        <rect key={row} x={first} y={row} width={last - first + 1} height={1} />
      ))}
    </svg>
  );
};

export default PixelStar;
