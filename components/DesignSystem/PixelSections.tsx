import PixelLabel from "@/components/Pixel/PixelLabel";
import PixelStar from "@/components/Pixel/PixelStar";
import PmoSlot from "@/components/Pixel/PmoSlot";
import Starfield from "@/components/Pixel/Starfield";
import { Group, SectionBlock, ThemePair } from "./primitives";
import { SPRITE_PALETTE } from "./tokens";

const SCALES = [1, 2, 3, 4] as const;

export const PixelArtSection = () => {
  return (
    <SectionBlock
      id="pixel-art"
      label="05 Pixel"
      title="Pixel art"
      description="Pixel art is the accent: the logo, the assistant, timeline markers, background stars, and short labels. Sprites sit on a fixed grid and scale by whole numbers only."
    >
      <Group title="Logo star" hint="16×16 grid, shown at 1× to 4×. The navbar uses it next to the wordmark.">
        <ThemePair>
          <ul className="flex flex-wrap items-end gap-6">
            {SCALES.map((scale) => (
              <li key={scale} className="text-center">
                <PixelStar scale={scale} className="mx-auto" />
                <p className="mt-2 font-mono text-xs text-muted-foreground">{scale}×</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 flex items-center gap-2">
            <PixelStar />
            <span className="font-pixel text-xl">hoshi</span>
          </p>
        </ThemePair>
      </Group>

      <Group title="Timeline marker" hint="7×7 spark at 2×, one at each event on the rail.">
        <ThemePair>
          <ol className="border-l border-border">
            {["2025", "2023"].map((year) => (
              <li key={year} className="relative pb-6 pl-6 last:pb-0">
                <PixelStar variant="spark" scale={2} className="absolute top-1 left-0 -translate-x-1/2 bg-background" />
                <p className="font-mono text-sm text-muted-foreground">{year}</p>
                <p className="font-semibold">Event title</p>
              </li>
            ))}
          </ol>
        </ThemePair>
      </Group>

      <Group
        title="PMO, the assistant"
        hint="Left empty for Hoshi's sprite. The slots show the two display sizes: 56px on desktop and 48px on phones, bottom right of the screen."
      >
        <ThemePair>
          <div className="flex items-end gap-6">
            <PmoSlot size={56} />
            <PmoSlot size={48} />
            <span className="font-pixel text-sm tracking-widest">PMO</span>
          </div>
        </ThemePair>
      </Group>

      <Group title="Section label" hint="Pixel font, small, letter-spaced, above each section heading.">
        <ThemePair>
          <PixelLabel>The path so far</PixelLabel>
          <p className="mt-2 text-3xl font-semibold">Section heading</p>
        </ThemePair>
      </Group>

      <Group title="Sprite palette (candidate)" hint="At most five colors per sprite. For PMO, once drawn.">
        <ul className="flex flex-wrap gap-4">
          {SPRITE_PALETTE.map((color) => (
            <li key={color.role}>
              <div className="size-12 border border-border" style={{ background: color.value }} />
              <p className="mt-2 text-sm">{color.role}</p>
              <p className="font-mono text-xs text-muted-foreground">{color.value}</p>
            </li>
          ))}
        </ul>
      </Group>
    </SectionBlock>
  );
};

export const BackgroundSection = () => {
  return (
    <SectionBlock
      id="background"
      label="06 Sky"
      title="Background"
      description="Dark theme only: a sparse field of pixel stars, fixed behind the content, thinner in the reading column. A few twinkle slowly. The light theme stays clean paper."
    >
      <Group title="Dark starfield preview" hint="A framed sample of the dark background.">
        <div className="dark relative h-80 overflow-hidden rounded-lg border border-border bg-background text-foreground">
          <Starfield />
          <div className="relative mx-auto flex h-full max-w-sm flex-col justify-center px-6">
            <PixelLabel>Sample</PixelLabel>
            <p className="mt-2 text-3xl font-semibold">Section heading</p>
            <p className="mt-3 leading-7 text-muted-foreground">
              Text stays readable because few stars sit behind the column.
            </p>
          </div>
        </div>
      </Group>
    </SectionBlock>
  );
};

export const MotionSection = () => {
  return (
    <SectionBlock
      id="motion"
      label="07 Motion"
      title="Motion"
      description="UI transitions run 150 to 250ms with ease-out. Sprites move in steps, never smoothly. With reduced motion turned on, everything on this page holds still."
    >
      <Group title="Samples">
        <ul className="grid gap-4 md:grid-cols-3">
          <li className="rounded-lg border border-border bg-card p-5">
            <div className="flex h-16 items-center">
              <PixelStar scale={2} className="motion-safe:animate-twinkle" />
            </div>
            <p className="text-sm">Twinkle</p>
            <p className="font-mono text-xs text-muted-foreground">3s | steps | background stars</p>
          </li>
          <li className="rounded-lg border border-border bg-card p-5">
            <div className="flex h-16 items-center">
              <PixelStar scale={2} className="motion-safe:animate-bob" />
            </div>
            <p className="text-sm">Bob</p>
            <p className="font-mono text-xs text-muted-foreground">1.2s | steps | PMO idle</p>
          </li>
          <li className="rounded-lg border border-border bg-card p-5">
            <div className="flex h-16 items-center">
              <a
                href="#motion"
                className="rounded-md border border-border px-3 py-2 text-sm transition-colors duration-200 ease-out hover:border-star hover:bg-muted"
              >
                Hover me
              </a>
            </div>
            <p className="text-sm">UI transition</p>
            <p className="font-mono text-xs text-muted-foreground">200ms | ease-out</p>
          </li>
        </ul>
      </Group>
    </SectionBlock>
  );
};
