import { contrastRatio } from "@/lib/contrast";
import { cn } from "@/lib/utils";
import { Group, SectionBlock } from "./primitives";
import { COLOR_TOKENS, STAR_PALETTE, tokenValue, type ColorToken, type ThemeName } from "./tokens";

const THEMES: ThemeName[] = ["dark", "light"];
const AA = 4.5;

const Contrast = ({ token, theme }: { token: ColorToken; theme: ThemeName }) => {
  const background = token.on ? tokenValue(token.on, theme) : undefined;
  const ratio = background ? contrastRatio(token[theme], background) : null;
  if (ratio === null) return null;

  const passes = ratio >= AA;
  return (
    <p className="mt-1 font-mono text-xs">
      {ratio.toFixed(1)}:1 on {token.on} · {passes ? "AA pass" : "AA fail"}
    </p>
  );
};

const TokenSwatch = ({ token }: { token: ColorToken }) => {
  return (
    <li className="overflow-hidden rounded-lg border border-border bg-card">
      <div className="p-4">
        <p className="font-mono text-sm">
          {token.name}
          {token.derived ? <span className="text-muted-foreground"> · derived</span> : null}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">{token.use}</p>
      </div>
      <div className="grid grid-cols-2">
        {THEMES.map((theme) => (
          // The theme class re-scopes the tokens, so the chip is the real color.
          <div key={theme} className={cn(theme, "bg-background p-4 text-foreground")}>
            <div className="h-12 rounded-md border border-border" style={{ background: `var(${token.name})` }} />
            <p className="mt-3 font-mono text-xs text-muted-foreground">{theme}</p>
            <p className="mt-1 font-mono text-xs break-words">{token[theme]}</p>
            <Contrast token={token} theme={theme} />
          </div>
        ))}
      </div>
    </li>
  );
};

const ColorSection = () => {
  return (
    <SectionBlock
      id="color"
      label="01 Color"
      title="Color"
      description="Dark is the night sky and light is the same site on paper. Every chip below is drawn from the live CSS variable, in both themes at once. Tokens marked derived take their value from the other tokens."
    >
      <Group title="Tokens" hint="Text colors show their contrast ratio. AA needs 4.5:1 for body text.">
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {COLOR_TOKENS.map((token) => (
            <TokenSwatch key={token.name} token={token} />
          ))}
        </ul>
      </Group>

      <Group
        title="Star palette (candidates)"
        hint="The colors of real stars, hottest to coolest, by spectral class. Only star gold is a token today. Tell me which to keep, drop, or shift."
      >
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {STAR_PALETTE.map((color) => (
            <li key={color.id} className="overflow-hidden rounded-lg border border-border bg-card">
              <div className="grid grid-cols-2">
                {THEMES.map((theme) => (
                  <div key={theme} className={cn(theme, "bg-background p-4")}>
                    <div className="mx-auto size-8" style={{ background: color[theme] }} />
                    <p className="mt-3 text-center font-mono text-xs text-muted-foreground">{theme}</p>
                  </div>
                ))}
              </div>
              <div className="p-4">
                <p className="font-mono text-sm">
                  {color.id} · class {color.spectral}
                </p>
                <p className="mt-1 text-sm">{color.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{color.where}</p>
                <p className="mt-2 font-mono text-xs break-words text-muted-foreground">{color.dark}</p>
                <p className="font-mono text-xs break-words text-muted-foreground">{color.light}</p>
              </div>
            </li>
          ))}
        </ul>
      </Group>
    </SectionBlock>
  );
};

export default ColorSection;
