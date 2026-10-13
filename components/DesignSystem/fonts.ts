import {
  Geist,
  JetBrains_Mono,
  Newsreader,
  Press_Start_2P,
  Silkscreen,
  Space_Grotesk,
  VT323,
} from "next/font/google";

// Fonts shown side by side for comparison. Loaded for /design-system only,
// so the rest of the site does not download them.
const geist = Geist({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const newsreader = Newsreader({ subsets: ["latin"], axes: ["opsz"] });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });
const silkscreen = Silkscreen({ subsets: ["latin"], weight: "400" });
const pressStart = Press_Start_2P({ subsets: ["latin"], weight: "400" });
const vt323 = VT323({ subsets: ["latin"], weight: "400" });

export type FontOption = {
  id: string;
  name: string;
  fontFamily: string;
  /** Set when headings use a different font from the body. */
  headingFamily?: string;
  note: string;
  /** The one in use on the site now. */
  current?: boolean;
};

export const SANS_OPTIONS: FontOption[] = [
  { id: "A", name: "Inter", fontFamily: "var(--font-sans)", note: "Neutral and very readable at small sizes.", current: true },
  { id: "B", name: "Geist", fontFamily: geist.style.fontFamily, note: "Tighter and more technical. Pairs with Geist Mono." },
  { id: "C", name: "Space Grotesk", fontFamily: spaceGrotesk.style.fontFamily, note: "More character in headings. Quirkier in long text." },
  { id: "D", name: "Newsreader headings, Inter body", fontFamily: "var(--font-sans)", headingFamily: newsreader.style.fontFamily, note: "Editorial headings, while body text, buttons, and forms stay plain." },
  { id: "E", name: "Newsreader everywhere", fontFamily: newsreader.style.fontFamily, note: "Fully editorial. Reads like an essay, less like a product." },
];

export const MONO_OPTIONS: FontOption[] = [
  { id: "A", name: "Geist Mono", fontFamily: "var(--font-geist-mono)", note: "Light and quiet next to body text.", current: true },
  { id: "B", name: "JetBrains Mono", fontFamily: jetBrainsMono.style.fontFamily, note: "Wider, reads more like an editor." },
];

export const PIXEL_OPTIONS: FontOption[] = [
  { id: "A", name: "Pixelify Sans", fontFamily: "var(--font-pixelify)", note: "Soft and friendly. Has lowercase.", current: true },
  { id: "B", name: "Silkscreen", fontFamily: silkscreen.style.fontFamily, note: "Crisp and small. Capitals only." },
  { id: "C", name: "Press Start 2P", fontFamily: pressStart.style.fontFamily, note: "Arcade look. Wide, so labels must stay short." },
  { id: "D", name: "VT323", fontFamily: vt323.style.fontFamily, note: "Terminal look. Thin, needs a larger size." },
];
