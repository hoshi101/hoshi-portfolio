import React from "react";
import { cn } from "@/lib/utils";

type PixelLabelProps = {
  children: React.ReactNode;
  className?: string;
};

// Short labels only. Never a sentence.
const PixelLabel = ({ children, className }: PixelLabelProps) => {
  return (
    <span className={cn("font-pixel text-sm uppercase tracking-widest text-muted-foreground", className)}>
      {children}
    </span>
  );
};

export default PixelLabel;
