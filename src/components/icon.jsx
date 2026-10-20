import React from "react";
import icons from "@/lib/icons.generated.js";
import { cn } from "@/lib/utils";

/** Material Symbols (rounded, weight 500), inlined at build time so they inherit text colour. */
export function Icon({ name, className }) {
  const d = icons[name];
  if (!d) throw new Error(`Unknown icon: ${name} (run the build to regenerate icons)`);
  return (
    <svg viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true" className={cn("size-12", className)}>
      <path d={d} />
    </svg>
  );
}
