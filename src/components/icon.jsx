import React from "react";
import icons from "@/lib/icons.generated.js";
import { cn } from "@/lib/utils";

/** Phosphor icons (regular weight), inlined at build time so they inherit text colour. */
export function Icon({ name, className, label }) {
  const body = icons[name];
  if (!body) throw new Error(`Unknown icon: ${name}`);
  return (
    <svg
      viewBox="0 0 256 256"
      fill="currentColor"
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={cn("size-6 shrink-0", className)}
      dangerouslySetInnerHTML={{ __html: body }}
    />
  );
}
