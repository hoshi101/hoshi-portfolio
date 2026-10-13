import { Group, SectionBlock } from "./primitives";

type Row = { name: string; value: string; note: string };

const SPACING: Row[] = [
  { name: "Side padding", value: "px-6, md:px-8", note: "24px on phones, 32px from md" },
  { name: "Between sections", value: "py-16, md:py-24", note: "64px on phones, 96px from md" },
  { name: "Reading column", value: "max-w-3xl", note: "768px. Hero, About, Timeline, Contact" },
  { name: "Wide column", value: "max-w-5xl", note: "1024px. Work grid and project pages" },
];

const BREAKPOINTS: Row[] = [
  { name: "below md", value: "< 768px", note: "Phones. Single column, stacked sections, menu sheet" },
  { name: "md to lg", value: "768px to 1023px", note: "Tablets. Two-column About and Work" },
  { name: "lg and up", value: "≥ 1024px", note: "Laptops and desktops. Full layout" },
];

const SECTION_ORDER = ["Hero", "About", "Timeline", "Work", "Skills", "Contact"];

const RowList = ({ rows }: { rows: Row[] }) => {
  return (
    <dl className="divide-y divide-border rounded-lg border border-border bg-card">
      {rows.map((row) => (
        <div key={row.name} className="grid gap-1 p-4 md:grid-cols-3">
          <dt className="text-sm">{row.name}</dt>
          <dd className="font-mono text-sm">{row.value}</dd>
          <dd className="text-sm text-muted-foreground">{row.note}</dd>
        </div>
      ))}
    </dl>
  );
};

const LayoutSection = () => {
  return (
    <SectionBlock
      id="layout"
      label="03 Layout"
      title="Layout"
      description="One centered column. This page uses the wide column, so the bars below show the two widths at their true size on a desktop screen."
    >
      <Group title="Column widths">
        <div className="space-y-3">
          <div className="rounded-md bg-muted p-3 font-mono text-sm">max-w-5xl · wide</div>
          <div className="mx-auto max-w-3xl rounded-md border border-star bg-muted p-3 font-mono text-sm">
            max-w-3xl · reading
          </div>
        </div>
      </Group>

      <Group title="Spacing">
        <RowList rows={SPACING} />
      </Group>

      <Group title="Breakpoints">
        <RowList rows={BREAKPOINTS} />
      </Group>

      <Group title="Home page order" hint="One scrolling page with anchored sections.">
        <ol className="flex flex-wrap gap-2 font-mono text-sm">
          {SECTION_ORDER.map((name, index) => (
            <li key={name} className="rounded-sm bg-muted px-2 py-1">
              {index + 1}. {name}
            </li>
          ))}
        </ol>
      </Group>
    </SectionBlock>
  );
};

export default LayoutSection;
