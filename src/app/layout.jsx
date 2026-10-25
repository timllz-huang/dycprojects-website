"use client";

import React, { useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

/** Scroll reveals and the tagline word reveal, driven by IntersectionObserver (no scroll listeners). */
function useMotion() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll("[data-reveal], .tagline-word").forEach((el) => el.setAttribute("data-in", ""));
      return;
    }
    const reveal = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.setAttribute("data-in", "");
            reveal.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => reveal.observe(el));

    // Words light up one at a time as they cross a line 40% up from the bottom of the viewport
    const words = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const above = e.isIntersecting || e.boundingClientRect.top < (e.rootBounds ? e.rootBounds.top : 0);
          if (above) e.target.setAttribute("data-in", "");
          else e.target.removeAttribute("data-in");
        }
      },
      { rootMargin: "0px 0px -40% 0px", threshold: 0 }
    );
    document.querySelectorAll(".tagline-word").forEach((el) => words.observe(el));

    return () => {
      reveal.disconnect();
      words.disconnect();
    };
  }, []);
}

export function Layout({ children }) {
  useMotion();
  return (
    <>
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
