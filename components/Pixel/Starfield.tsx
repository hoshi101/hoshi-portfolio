import { cn } from "@/lib/utils";
import PixelStar from "./PixelStar";

type Star = {
  x: number;
  y: number;
  kind: "dot" | "spark";
  gold: boolean;
  twinkle: boolean;
  delay: number;
};

// Fixed seed, so the sky is the same on the server and in the browser.
function buildStars(count: number): Star[] {
  let seed = 7;
  const next = () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };

  const stars: Star[] = [];
  while (stars.length < count) {
    const x = next() * 100;
    const y = next() * 100;
    const inReadingColumn = x > 25 && x < 75;
    // Fewer stars behind the text.
    if (inReadingColumn && next() < 0.7) continue;
    stars.push({
      x,
      y,
      kind: next() < 0.2 ? "spark" : "dot",
      gold: next() < 0.3,
      twinkle: next() < 0.25,
      delay: Math.floor(next() * 6) * 0.5,
    });
  }
  return stars;
}

const STARS = buildStars(48);

// The parent must be positioned. Decoration only.
const Starfield = ({ className }: { className?: string }) => {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {STARS.map((star, index) => {
        const position = {
          left: `${star.x.toFixed(2)}%`,
          top: `${star.y.toFixed(2)}%`,
          animationDelay: `${star.delay}s`,
        };
        const tone = cn(
          "absolute opacity-60",
          star.gold ? "text-star" : "text-foreground",
          star.twinkle && "motion-safe:animate-twinkle",
        );

        return star.kind === "spark" ? (
          <span key={index} className={tone} style={position}>
            <PixelStar variant="spark" className="text-current" />
          </span>
        ) : (
          <span key={index} className={cn(tone, "size-0.5 bg-current")} style={position} />
        );
      })}
    </div>
  );
};

export default Starfield;
