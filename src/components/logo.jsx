import React from "react";
import { cn } from "@/lib/utils";

/** DYC Projects mark: a rounded square with three rising bars (design → build → run). */
export function LogoMark({ className }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={cn("size-8 shrink-0", className)}>
      <rect width="32" height="32" rx="7" fill="var(--color-blumine)" />
      <rect x="8" y="17" width="4" height="7" rx="1" fill="#fff" opacity="0.55" />
      <rect x="14" y="12.5" width="4" height="11.5" rx="1" fill="#fff" opacity="0.8" />
      <rect x="20" y="8" width="4" height="16" rx="1" fill="#fff" />
    </svg>
  );
}

export function Logo({ className, inverse = false }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span
        className={cn(
          "font-[Manrope] text-[1.0625rem] leading-none font-bold tracking-[0.06em] uppercase",
          inverse ? "text-white" : "text-neutral-darkest"
        )}
      >
        DYC <span className="font-medium text-blumine">Projects</span>
      </span>
    </span>
  );
}
