// WCAG contrast between two opaque `oklch(L C H)` colors.
// Get colors token and return the contrast ratio (1 to 21) or null when either color is not opaque OKLCH.

function oklchToLuminance(color: string): number | null {
  const match = color.match(/^oklch\(\s*([\d.]+)\s+([\d.]+)\s+([\d.]+)\s*\)$/);
  if (!match) return null;

  const lightness = Number(match[1]);
  const chroma = Number(match[2]);
  const hue = (Number(match[3]) * Math.PI) / 180;
  const a = chroma * Math.cos(hue);
  const b = chroma * Math.sin(hue);

  const l = (lightness + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m = (lightness - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s = (lightness - 0.0894841775 * a - 1.291485548 * b) ** 3;

  const clamp = (value: number) => Math.min(1, Math.max(0, value));
  const red = clamp(4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s);
  const green = clamp(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s);
  const blue = clamp(-0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s);

  return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
}

/** Get colors charactors token with Returns the ratio (1 to 21), or null when either color is not opaque OKLCH. */
export function contrastRatio(foreground: string, background: string): number | null {
  const first = oklchToLuminance(foreground);
  const second = oklchToLuminance(background);
  if (first === null || second === null) return null;

  const lighter = Math.max(first, second);
  const darker = Math.min(first, second);
  return (lighter + 0.05) / (darker + 0.05);
}
