type PmoSlotProps = {
  /** Display size in px: 56 on desktop, 48 on phones. */
  size: 48 | 56;
};

// Empty slot until the PMO sprite is drawn.
const PmoSlot = ({ size }: PmoSlotProps) => {
  return (
    <div
      role="img"
      aria-label={`Empty slot for the PMO sprite, ${size} pixels`}
      style={{ width: size, height: size }}
      className="flex shrink-0 items-center justify-center border border-dashed border-muted-foreground font-mono text-xs text-muted-foreground"
    >
      {size}
    </div>
  );
};

export default PmoSlot;
