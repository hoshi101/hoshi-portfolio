import { Group, OptionCard, SectionBlock } from "./primitives";
import { MONO_OPTIONS, PIXEL_OPTIONS, SANS_OPTIONS } from "./fonts";

const BODY_SAMPLE =
  "Body text is 16px with a line height near 1.7. This paragraph is here to judge rhythm and reading width, and it says nothing about anyone.";

const PIXEL_SAMPLES = ["The path so far", "Work", "hoshi", "PMO"];

type ScaleRow = { element: string; spec: string; className: string; sample: string };

const SCALE: ScaleRow[] = [
  { element: "Hero title", spec: "text-4xl, md:text-5xl · 700", className: "text-4xl font-bold md:text-5xl", sample: "Hi, I'm Hoshi" },
  { element: "Section heading", spec: "text-3xl · 600", className: "text-3xl font-semibold", sample: "The path so far" },
  { element: "Card or item title", spec: "text-xl · 600", className: "text-xl font-semibold", sample: "Project title" },
  { element: "Body", spec: "text-base · 400 · leading-7", className: "text-base leading-7", sample: "Reading text sits at this size." },
  { element: "Metadata", spec: "text-sm · mono", className: "font-mono text-sm text-muted-foreground", sample: "2024 — 2025" },
  { element: "Pixel label", spec: "text-sm · pixel · tracked", className: "font-pixel text-sm uppercase tracking-widest text-muted-foreground", sample: "Work" },
];

const TypographySection = () => {
  return (
    <SectionBlock
      id="typography"
      label="02 Type"
      title="Typography"
      description="Three roles: one sans for all reading text and headings, one mono for dates and tags, one pixel font for short labels. Each role has options. Quote the letter to pick, such as “Text D” or “Pixel B”."
    >
      <Group title="Text: body and headings" hint="A to C are sans. D and E bring in Newsreader, a serif.">
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SANS_OPTIONS.map((font) => (
            <OptionCard key={font.id} id={`Text ${font.id}`} name={font.name} note={font.note} current={font.current}>
              <div style={{ fontFamily: font.fontFamily }}>
                <div style={{ fontFamily: font.headingFamily }}>
                  <p className="text-4xl font-bold">Hi, I&apos;m Hoshi</p>
                  <p className="mt-3 text-xl font-semibold">Card or item title</p>
                </div>
                <p className="mt-2 leading-7">{BODY_SAMPLE}</p>
              </div>
            </OptionCard>
          ))}
        </ul>
      </Group>

      <Group title="Mono: dates, tags, metadata">
        <ul className="grid gap-4 md:grid-cols-2">
          {MONO_OPTIONS.map((font) => (
            <OptionCard key={font.id} id={`Mono ${font.id}`} name={font.name} note={font.note} current={font.current}>
              <div style={{ fontFamily: font.fontFamily }} className="space-y-2 text-sm">
                <p className="text-muted-foreground">2024 — 2025</p>
                <p>
                  <span className="rounded-sm bg-muted px-1.5 py-0.5">TypeScript</span>{" "}
                  <span className="rounded-sm bg-muted px-1.5 py-0.5">Python</span>
                </p>
                <p>const star = &quot;hoshi&quot;; 0123456789</p>
              </div>
            </OptionCard>
          ))}
        </ul>
      </Group>

      <Group title="Pixel: section labels, wordmark, assistant name" hint="Shown at the label size and at the wordmark size.">
        <ul className="grid gap-4 md:grid-cols-2">
          {PIXEL_OPTIONS.map((font) => (
            <OptionCard key={font.id} id={`Pixel ${font.id}`} name={font.name} note={font.note} current={font.current}>
              <div style={{ fontFamily: font.fontFamily }}>
                <p className="flex flex-wrap gap-x-5 gap-y-2 text-sm uppercase tracking-widest text-muted-foreground">
                  {PIXEL_SAMPLES.map((sample) => (
                    <span key={sample}>{sample}</span>
                  ))}
                </p>
                <p className="mt-4 text-2xl">hoshi</p>
              </div>
            </OptionCard>
          ))}
        </ul>
      </Group>

      <Group title="Scale" hint="Rendered with the fonts in use now.">
        <ul className="divide-y divide-border rounded-lg border border-border bg-card">
          {SCALE.map((row) => (
            <li key={row.element} className="grid gap-2 p-5 md:grid-cols-3 md:items-baseline">
              <div>
                <p className="text-sm">{row.element}</p>
                <p className="font-mono text-xs text-muted-foreground">{row.spec}</p>
              </div>
              <p className={`md:col-span-2 ${row.className}`}>{row.sample}</p>
            </li>
          ))}
        </ul>
      </Group>

      <Group title="Reading width and links" hint="max-w-prose, which lands at 65 to 75 characters per line.">
        <p className="max-w-prose leading-7">
          {BODY_SAMPLE} A link is the text color with an underline, and{" "}
          <a
            href="#typography"
            className="underline decoration-muted-foreground underline-offset-4 transition-colors duration-200 ease-out hover:decoration-star"
          >
            the underline turns star gold on hover
          </a>
          . {BODY_SAMPLE}
        </p>
      </Group>
    </SectionBlock>
  );
};

export default TypographySection;
