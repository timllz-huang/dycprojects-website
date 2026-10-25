"use client";

import React, { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { Button, motion } from "@/components/ui";
import { currentPath, href } from "@/lib/site";
import { cn } from "@/lib/utils";

const links = [
  ["Services", "services/"],
  ["Cloud migration", "services/cloud-architecture-migration/"],
  ["Custom software", "services/custom-software-development/"],
  ["DevOps", "services/devops-automation/"],
];

const delays = ["delay-100", "delay-150", "delay-200", "delay-300", "delay-500"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const here = currentPath();

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const isCurrent = (p) => here === p;

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4">
      <nav
        aria-label="Main"
        className={cn(
          "pointer-events-auto relative z-20 mx-auto mt-6 flex w-max max-w-full items-center gap-2 rounded-full border border-line/80 bg-white/70 py-2 pr-2 pl-4 shadow-sm backdrop-blur-xl",
          motion
        )}
      >
        <a href={href("/")} aria-label="DYC Projects home" className="mr-2" aria-current={here === "" ? "page" : undefined}>
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map(([label, to]) => (
            <li key={to}>
              <a
                href={href("/" + to)}
                aria-current={isCurrent(to) ? "page" : undefined}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-semibold",
                  motion,
                  isCurrent(to) ? "bg-brand-soft text-brand" : "text-ink-soft hover:bg-mist hover:text-ink"
                )}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <Button to="/contact/" size="sm" className="ml-2 hidden rounded-full sm:inline-flex">
          Book a free consultation
        </Button>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className={cn("relative ml-2 size-10 rounded-full hover:bg-mist active:scale-[0.98] lg:hidden", motion)}
        >
          <span
            className={cn(
              "absolute top-1/2 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-ink",
              motion,
              "-translate-y-1/2", open ? "mt-0 rotate-45" : "-mt-1"
            )}
          />
          <span
            className={cn(
              "absolute top-1/2 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-ink",
              motion,
              "-translate-y-1/2", open ? "mt-0 -rotate-45" : "mt-1"
            )}
          />
        </button>
      </nav>

      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 z-10 flex flex-col bg-white/80 px-6 pt-32 pb-12 backdrop-blur-3xl lg:hidden",
          motion,
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <ul className="flex flex-col gap-2">
          {[["Home", ""], ...links, ["Contact", "contact/"]].map(([label, to], i) => (
            <li key={to} className="overflow-hidden">
              <a
                href={href("/" + to)}
                tabIndex={open ? 0 : -1}
                aria-current={here === to ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={cn(
                  "block py-2 text-3xl font-semibold tracking-tight",
                  motion,
                  delays[Math.min(i, delays.length - 1)],
                  open ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0",
                  here === to ? "text-brand" : "text-ink"
                )}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div
          className={cn(
            "mt-auto",
            motion,
            "delay-500",
            open ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          )}
        >
          <Button to="/contact/" className="w-full" tabIndex={open ? 0 : -1}>
            Book a free consultation
          </Button>
        </div>
      </div>
    </header>
  );
}
