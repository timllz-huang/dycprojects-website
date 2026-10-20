"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { href } from "@/lib/site";
import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { KeyboardArrowDown } from "relume-icons";

const solutions = [
  ["Cloud architecture & migration", "/services/cloud-architecture-migration/"],
  ["Custom software development", "/services/custom-software-development/"],
  ["DevOps & automation", "/services/devops-automation/"],
];

const linkClass =
  "block py-3 text-base transition-colors hover:text-blumine first:pt-7 lg:px-4 lg:py-2 first:lg:pt-2";

export function Navbar2() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const dropRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 992px)");
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!dropOpen) return;
    const close = (e) => {
      if (e.key === "Escape" || (e.type === "click" && dropRef.current && !dropRef.current.contains(e.target)))
        setDropOpen(false);
    };
    document.addEventListener("click", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("click", close);
      document.removeEventListener("keydown", close);
    };
  }, [dropOpen]);

  const bar = "my-[3px] h-0.5 w-6 bg-scheme-text";

  return (
    <header className="sticky top-0 z-[999] w-full border-b border-scheme-border bg-scheme-background lg:min-h-18 lg:px-[5%] scheme-1">
      <nav
        aria-label="Main"
        className="mx-auto size-full max-w-xxl lg:grid lg:min-h-18 lg:grid-cols-[0.375fr_1fr_0.375fr] lg:items-center lg:justify-between lg:gap-4"
      >
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <a href={href("/")} aria-label="DYC Projects home">
            <Logo />
          </a>
          <div className="flex items-center gap-4 lg:hidden">
            <Button asChild className="px-4 py-1" size="sm">
              <a href={href("/contact/")}>Contact</a>
            </Button>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <motion.span
                className={bar}
                animate={menuOpen ? ["open", "rotatePhase"] : "closed"}
                variants={{
                  open: { translateY: 8, transition: { delay: 0.1 } },
                  rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
                  closed: { translateY: 0, rotate: 0, transition: { duration: 0.2 } },
                }}
              />
              <motion.span
                className={bar}
                animate={menuOpen ? "open" : "closed"}
                variants={{
                  open: { width: 0, transition: { duration: 0.1 } },
                  closed: { width: "1.5rem", transition: { delay: 0.3, duration: 0.2 } },
                }}
              />
              <motion.span
                className={bar}
                animate={menuOpen ? ["open", "rotatePhase"] : "closed"}
                variants={{
                  open: { translateY: -8, transition: { delay: 0.1 } },
                  rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
                  closed: { translateY: 0, rotate: 0, transition: { duration: 0.2 } },
                }}
              />
            </button>
          </div>
        </div>

        <div
          id="site-menu"
          className={
            "overflow-hidden px-[5%] text-center transition-[max-height] duration-400 ease-in-out lg:flex lg:max-h-none lg:items-center lg:justify-center lg:overflow-visible lg:px-0 " +
            (menuOpen ? "max-h-[32rem] pb-6 lg:pb-0" : "max-h-0")
          }
        >
          <a href={href("/")} className={linkClass}>
            Home
          </a>
          <a href={href("/services/")} className={linkClass}>
            Services
          </a>
          <div
            ref={dropRef}
            className="relative"
            onMouseEnter={() => isDesktop && setDropOpen(true)}
            onMouseLeave={() => isDesktop && setDropOpen(false)}
          >
            <button
              type="button"
              aria-expanded={dropOpen}
              aria-haspopup="true"
              className="flex w-full items-center justify-center gap-2 py-3 text-center text-base transition-colors hover:text-blumine lg:w-auto lg:px-4 lg:py-2"
              onClick={() => setDropOpen((v) => !v)}
            >
              <span>Solutions</span>
              <motion.span animate={{ rotate: dropOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <KeyboardArrowDown className="text-scheme-text" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {dropOpen && (
                <motion.div
                  key="drop"
                  initial={{ opacity: 0, y: isDesktop ? 8 : 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: isDesktop ? 8 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="bg-scheme-background lg:absolute lg:top-full lg:left-0 lg:z-50 lg:w-max lg:rounded-card lg:border lg:border-scheme-border lg:bg-scheme-foreground lg:p-2 lg:shadow-[0_8px_24px_rgba(12,8,1,0.08)]"
                >
                  {solutions.map(([label, to]) => (
                    <a
                      key={to}
                      href={href(to)}
                      className="block py-3 text-center text-base transition-colors hover:text-blumine lg:rounded-button lg:px-4 lg:py-2 lg:text-left lg:hover:bg-scheme-background"
                    >
                      {label}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <a href={href("/#process")} className={linkClass}>
            How we work
          </a>
        </div>

        <div className="hidden justify-self-end lg:block">
          <Button asChild className="px-6 py-2" size="sm">
            <a href={href("/contact/")}>Contact</a>
          </Button>
        </div>
      </nav>
    </header>
  );
}
