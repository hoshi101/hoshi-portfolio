import React from "react";
import { cn } from "@/lib/utils";
import PixelLabel from "@/components/Pixel/PixelLabel";
import type { ThemeName } from "./tokens";

type SectionBlockProps = {
  id: string;
  label: string;
  title: string;
  description: string;
  children: React.ReactNode;
};

export const SectionBlock = ({ id, label, title, description, children }: SectionBlockProps) => {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-border py-16 md:py-24">
      <PixelLabel>{label}</PixelLabel>
      <h2 id={`${id}-title`} className="mt-2 text-3xl font-semibold">
        {title}
      </h2>
      <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">{description}</p>
      <div className="mt-10 space-y-12">{children}</div>
    </section>
  );
};

type GroupProps = {
  title: string;
  hint?: string;
  children: React.ReactNode;
};

export const Group = ({ title, hint, children }: GroupProps) => {
  return (
    <div>
      <h3 className="text-xl font-semibold">{title}</h3>
      {hint ? <p className="mt-1 max-w-3xl text-sm leading-6 text-muted-foreground">{hint}</p> : null}
      <div className="mt-5">{children}</div>
    </div>
  );
};

type OptionCardProps = {
  /** Short id to quote back, such as "Pixel font B". */
  id: string;
  name: string;
  note?: string;
  current?: boolean;
  children: React.ReactNode;
  className?: string;
};

export const OptionCard = ({ id, name, note, current, children, className }: OptionCardProps) => {
  return (
    <li className={cn("flex flex-col rounded-lg border bg-card p-5", current ? "border-star" : "border-border", className)}>
      <div className="flex flex-wrap items-center gap-2 font-mono text-sm">
        <span className="rounded-sm bg-muted px-1.5 py-0.5">{id}</span>
        <span>{name}</span>
        {current ? <span className="text-muted-foreground">| in use now</span> : null}
      </div>
      <div className="mt-4 flex-1">{children}</div>
      {note ? <p className="mt-4 text-sm leading-6 text-muted-foreground">{note}</p> : null}
    </li>
  );
};

const THEMES: ThemeName[] = ["dark", "light"];

type ThemePairProps = {
  children: React.ReactNode;
  className?: string;
};

/** Renders the same content in both themes, side by side from `md`. */
export const ThemePair = ({ children, className }: ThemePairProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {THEMES.map((theme) => (
        <div key={theme} className={cn(theme, "rounded-lg border border-border bg-background p-5 text-foreground", className)}>
          <p className="mb-4 font-mono text-sm text-muted-foreground">{theme}</p>
          {children}
        </div>
      ))}
    </div>
  );
};
