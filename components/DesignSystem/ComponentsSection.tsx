import { Button } from "@/components/ui/button";
import { Group, SectionBlock, ThemePair } from "./primitives";

type ButtonSize = {
  id: string;
  name: string;
  size: "default" | "lg";
  className?: string;
  current?: boolean;
};

const BUTTON_SIZES: ButtonSize[] = [
  { id: "default", name: "h-10 | 14px text", size: "default", current: true },
  { id: "lg", name: "h-8 | 12px text", size: "lg" },
];

const RADII = ["rounded-sm", "rounded-md", "rounded-lg", "rounded-xl"];

const ComponentsSection = () => {
  return (
    <SectionBlock
      id="components"
      label="04 UI"
      title="Components"
      description="shadcn/ui components styled through the tokens. Borders are 1px and preferred over shadows. Each block shows both themes."
    >
      <Group
        title="Buttons"
        hint="One primary style and one outline style. The default size is 40px tall. The smaller lg size is shown for comparison."
      >
        <ThemePair>
          <ul className="space-y-4">
            {BUTTON_SIZES.map((option) => (
              <li key={option.id} className="flex flex-wrap items-center gap-3">
                <Button size={option.size} className={option.className}>
                  View work
                </Button>
                <Button variant="outline" size={option.size} className={option.className}>
                  Resume
                </Button>
                <span className="font-mono text-xs text-muted-foreground">
                  Button {option.id} | {option.name}
                  {option.current ? " | in use now" : ""}
                </span>
              </li>
            ))}
          </ul>
        </ThemePair>
      </Group>

      <Group title="Card, tags, and form field" hint="Tab into the field to see the focus ring.">
        <ThemePair>
          <article className="rounded-lg border border-border bg-card p-5 text-card-foreground">
            <p className="font-mono text-sm text-muted-foreground">2025</p>
            <h4 className="mt-1 text-xl font-semibold">Project title</h4>
            <p className="mt-2 leading-7 text-muted-foreground">A one-line summary of the project sits here.</p>
            <ul className="mt-4 flex flex-wrap gap-2 font-mono text-xs">
              <li className="rounded-sm bg-muted px-1.5 py-0.5">Next.js</li>
              <li className="rounded-sm bg-muted px-1.5 py-0.5">Python</li>
            </ul>
          </article>
          <label className="mt-5 block text-sm">
            Name
            <input
              type="text"
              placeholder="Sample field"
              className="mt-2 block h-10 w-full rounded-md border border-input bg-transparent px-3 text-base outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30"
            />
          </label>
        </ThemePair>
      </Group>

      <Group title="Corner radius" hint="shadcn default, base 0.625rem. Sprites have none.">
        <ul className="flex flex-wrap gap-4">
          {RADII.map((radius) => (
            <li key={radius} className="text-center">
              <div className={`size-16 border border-border bg-muted ${radius}`} />
              <p className="mt-2 font-mono text-xs text-muted-foreground">{radius}</p>
            </li>
          ))}
        </ul>
      </Group>
    </SectionBlock>
  );
};

export default ComponentsSection;
