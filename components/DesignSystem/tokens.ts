// Mirrors app/globals.css. Swatches render from the CSS variable; these strings
// are what the page prints and what the contrast check reads.

export type ThemeName = "dark" | "light";

export type ColorToken = {
  name: string;
  dark: string;
  light: string;
  use: string;
  /** Token this color sits on as text. Set only for text colors. */
  on?: string;
  /** True when the value is worked out from the other tokens. */
  derived?: boolean;
};

export const COLOR_TOKENS: ColorToken[] = [
  { name: "--background", dark: "oklch(0.16 0.03 265)", light: "oklch(0.985 0.005 85)", use: "Page background" },
  { name: "--foreground", dark: "oklch(0.96 0.01 265)", light: "oklch(0.2 0.03 265)", use: "Body text", on: "--background" },
  { name: "--card", dark: "oklch(0.2 0.035 265)", light: "oklch(1 0 0)", use: "Cards, chat panel" },
  { name: "--card-foreground", dark: "oklch(0.96 0.01 265)", light: "oklch(0.2 0.03 265)", use: "Text on cards", on: "--card", derived: true },
  { name: "--muted", dark: "oklch(0.25 0.035 265)", light: "oklch(0.95 0.008 85)", use: "Subtle fills, tags" },
  { name: "--muted-foreground", dark: "oklch(0.72 0.03 265)", light: "oklch(0.48 0.03 265)", use: "Secondary text, dates", on: "--background" },
  { name: "--primary", dark: "oklch(0.92 0.01 265)", light: "oklch(0.25 0.05 265)", use: "Primary buttons" },
  { name: "--primary-foreground", dark: "oklch(0.2 0.035 265)", light: "oklch(0.985 0.005 85)", use: "Text on primary buttons", on: "--primary", derived: true },
  { name: "--border", dark: "oklch(1 0 0 / 10%)", light: "oklch(0.2 0.03 265 / 12%)", use: "Lines, timeline rail" },
  { name: "--input", dark: "oklch(1 0 0 / 15%)", light: "oklch(0.2 0.03 265 / 18%)", use: "Form field borders", derived: true },
  { name: "--ring", dark: "oklch(0.65 0.06 265)", light: "oklch(0.55 0.08 265)", use: "Focus ring", derived: true },
  { name: "--destructive", dark: "oklch(0.704 0.191 22.216)", light: "oklch(0.577 0.245 27.325)", use: "Form errors", on: "--background", derived: true },
  { name: "--star", dark: "oklch(0.86 0.15 90)", light: "oklch(0.8 0.16 85)", use: "Stars, assistant, highlights" },
];

export type StarColor = {
  id: string;
  /** Spectral class of the real star this color comes from. */
  spectral: string;
  name: string;
  dark: string;
  light: string;
  where: string;
};

// The colors of real stars. Only star gold is a CSS variable so far.
export const STAR_PALETTE: StarColor[] = [
  { id: "1", spectral: "O", name: "Blue", dark: "oklch(0.72 0.12 250)", light: "oklch(0.6 0.14 250)", where: "Background stars" },
  { id: "2", spectral: "B", name: "Blue-white", dark: "oklch(0.85 0.06 240)", light: "oklch(0.72 0.08 240)", where: "Background stars" },
  { id: "3", spectral: "A", name: "White", dark: "oklch(0.96 0.01 240)", light: "oklch(0.86 0.02 240)", where: "Background stars, sprite highlight" },
  { id: "4", spectral: "F", name: "Yellow-white", dark: "oklch(0.94 0.06 95)", light: "oklch(0.88 0.08 95)", where: "Sprite highlight" },
  { id: "5", spectral: "G", name: "Yellow (star gold)", dark: "oklch(0.86 0.15 90)", light: "oklch(0.8 0.16 85)", where: "Logo, PMO, timeline markers" },
  { id: "6", spectral: "K", name: "Orange", dark: "oklch(0.76 0.15 60)", light: "oklch(0.68 0.16 55)", where: "Sprite shade" },
  { id: "7", spectral: "M", name: "Red", dark: "oklch(0.66 0.18 28)", light: "oklch(0.58 0.2 28)", where: "Rare background star" },
];

export type SpriteColor = { role: string; value: string };

// Five colors is the limit for one sprite.
export const SPRITE_PALETTE: SpriteColor[] = [
  { role: "Star gold", value: "oklch(0.86 0.15 90)" },
  { role: "Shade", value: "oklch(0.72 0.15 70)" },
  { role: "Highlight", value: "oklch(0.96 0.06 95)" },
  { role: "Outline", value: "oklch(0.3 0.06 60)" },
  { role: "Face", value: "oklch(0.22 0.04 265)" },
];

export function tokenValue(name: string, theme: ThemeName): string | undefined {
  return COLOR_TOKENS.find((token) => token.name === name)?.[theme];
}
