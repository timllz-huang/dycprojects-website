import React from "react";
import { cn } from "@/lib/utils";
import { href as link } from "@/lib/site";
import { Icon } from "@/components/icon";

export const motion = "transition-all duration-700 ease-fluid";

export function Container({ className, children, ...props }) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-6 md:px-8", className)} {...props}>
      {children}
    </div>
  );
}

/** A page band. tone: paper (white) | mist (soft grey) | brand (flat navy) */
export function Section({ tone = "paper", className, children, ...props }) {
  const tones = { paper: "bg-paper", mist: "bg-mist", brand: "bg-brand text-white" };
  return (
    <section className={cn("py-16 md:py-24", tones[tone], className)} {...props}>
      {children}
    </section>
  );
}

export function Reveal({ as: Tag = "div", kind = "", delay = 0, className, children, ...props }) {
  return (
    <Tag data-reveal={kind} style={delay ? { "--reveal-delay": `${delay}ms` } : undefined} className={className} {...props}>
      {children}
    </Tag>
  );
}

export function Eyebrow({ className, children }) {
  return <p className={cn("mb-4 text-sm font-semibold text-brand", className)}>{children}</p>;
}

/** Section heading block: eyebrow, h2, intro. */
export function Heading({ eyebrow, title, intro, align = "left", className, inverse = false }) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <Eyebrow className={inverse ? "text-white/80" : undefined}>{eyebrow}</Eyebrow>}
      <h2 className="text-3xl md:text-4xl">{title}</h2>
      {intro && <p className={cn("mt-4 text-lg", inverse ? "text-white/80" : "text-ink-soft")}>{intro}</p>}
    </Reveal>
  );
}

const buttonBase =
  "group inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 font-semibold whitespace-nowrap " +
  motion +
  " active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50";
const buttonVariants = {
  primary: "bg-brand text-white hover:bg-brand-dark hover:-translate-y-0.5",
  secondary: "bg-paper text-ink ring-1 ring-line hover:bg-mist hover:-translate-y-0.5",
  inverse: "bg-paper text-brand hover:bg-brand-soft hover:-translate-y-0.5",
  text: "px-0 text-brand hover:text-brand-dark",
};

/** Link styled as a button. size: base (main) | sm (header) */
export function Button({ to, variant = "primary", size = "base", arrow = false, className, children, ...props }) {
  const isExternal = /^(https?:|mailto:|tel:)/.test(to || "");
  return (
    <a
      href={isExternal ? to : link(to)}
      className={cn(buttonBase, buttonVariants[variant], size === "sm" ? "text-sm" : "text-base", className)}
      {...props}
    >
      {children}
      {arrow && <Icon name="arrow-right" className={cn("size-4", motion, "group-hover:translate-x-0.5")} />}
    </a>
  );
}

export function SubmitButton({ className, children, ...props }) {
  return (
    <button type="submit" className={cn(buttonBase, buttonVariants.primary, "text-base", className)} {...props}>
      {children}
    </button>
  );
}
