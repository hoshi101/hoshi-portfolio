import type { Metadata } from "next";
import ColorSection from "@/components/DesignSystem/ColorSection";
import ComponentsSection from "@/components/DesignSystem/ComponentsSection";
import LayoutSection from "@/components/DesignSystem/LayoutSection";
import { BackgroundSection, MotionSection, PixelArtSection } from "@/components/DesignSystem/PixelSections";
import TypographySection from "@/components/DesignSystem/TypographySection";
import ThemeToggler from "@/components/Helper/ThemeToggler";
import PixelLabel from "@/components/Pixel/PixelLabel";

// A review page, not part of the portfolio.
export const metadata: Metadata = {
  title: "Design system",
  robots: { index: false, follow: false },
};

const SECTIONS = [
  { id: "color", name: "Color" },
  { id: "typography", name: "Typography" },
  { id: "layout", name: "Layout" },
  { id: "components", name: "Components" },
  { id: "pixel-art", name: "Pixel art" },
  { id: "background", name: "Background" },
  { id: "motion", name: "Motion" },
];

const DesignSystemPage = () => {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 md:px-8">
      <header className="py-16 md:py-24">
        <div className="flex items-start justify-between gap-4">
          <div>
            <PixelLabel>Design system</PixelLabel>
            <h1 className="mt-2 text-4xl font-bold md:text-5xl">A quiet night sky</h1>
          </div>
          <ThemeToggler />
        </div>
        <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">
          Every design decision for this site, drawn with the real tokens, fonts, and components. Where there is a choice, the
          options carry a short id. A gold border marks what the site uses now.
        </p>
        <nav aria-label="Sections" className="mt-8">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-sm">
            {SECTIONS.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="underline decoration-muted-foreground underline-offset-4 transition-colors duration-200 ease-out hover:decoration-star"
                >
                  {section.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <ColorSection />
      <TypographySection />
      <LayoutSection />
      <ComponentsSection />
      <PixelArtSection />
      <BackgroundSection />
      <MotionSection />
    </main>
  );
};

export default DesignSystemPage;
