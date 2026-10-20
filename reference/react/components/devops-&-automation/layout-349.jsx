"use client";

import { Button } from "@/components/ui/button";
import clsx from "clsx";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronRight } from "relume-icons";

const useIntersectionAnimation = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);
  const overlayIndices = useMemo(() => new Set([0, 2]), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const idx = Number(visible.target.dataset.index);
          if (!Number.isNaN(idx))
            setActiveSection((prev) => (prev === idx ? prev : idx));
        }
      },
      { threshold: [0.5, 0.75, 1] },
    );
    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const getImageClassName = (index) => {
    return clsx("absolute w-full rounded-image", {
      "opacity-100": activeSection === index,
      "opacity-0": activeSection !== index,
    });
  };

  const getOverlayClassName = () => {
    return clsx(
      "h-full bg-scheme-foreground transition-opacity duration-300 md:sticky md:top-0 md:h-screen",
      overlayIndices.has(activeSection) ? "opacity-100" : "opacity-0",
    );
  };

  const createSectionRef = (index) => {
    return (el) => {
      sectionRefs.current[index] = el;
    };
  };

  const sectionRefCallbacks = [
    createSectionRef(0),
    createSectionRef(1),
    createSectionRef(2),
    createSectionRef(3),
  ];

  return {
    activeSection,
    sectionRefCallbacks,
    getImageClassName,
    getOverlayClassName,
  };
};

export function Layout349() {
  const intersectionAnimation = useIntersectionAnimation();
  return (
    <section className="relative isolate scheme-1">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className={intersectionAnimation.getOverlayClassName()} />
      </div>
      <div className="px-[5%]">
        <div className="container">
          <div className="relative grid gap-x-12 py-16 sm:gap-y-12 md:grid-cols-2 md:py-0 lg:gap-x-20">
            <div className="grid grid-cols-1 gap-12 md:block">
              <div>
                <div
                  ref={intersectionAnimation.sectionRefCallbacks[0]}
                  data-index={0}
                  className="flex flex-col items-start justify-center md:h-screen"
                >
                  <p className="mb-3 font-semibold md:mb-4">Process</p>
                  <h2 className="mb-5 text-h2 font-bold md:mb-6">
                    Automation that starts with your team's reality
                  </h2>
                  <p className="text-medium">
                    We begin by watching how your team works today. Then we
                    design automation that fits your workflows instead of
                    forcing you to change them.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button variant="secondary">Services</Button>
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                    >
                      Contact
                    </Button>
                  </div>
                  <div className="mt-10 block w-full md:hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1.svg"
                      className="w-full rounded-image"
                      alt="Relume placeholder image 1"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div
                  ref={intersectionAnimation.sectionRefCallbacks[1]}
                  data-index={1}
                  className="flex flex-col items-start justify-center md:h-screen"
                >
                  <p className="mb-3 font-semibold md:mb-4">Design</p>
                  <h2 className="mb-5 text-h2 font-bold md:mb-6">
                    A pipeline built for your specific stack
                  </h2>
                  <p className="text-medium">
                    We map out the exact stages your code needs to pass through.
                    You get a clear plan before we write a single line of
                    configuration.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button variant="secondary">Services</Button>
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                    >
                      Contact
                    </Button>
                  </div>
                  <div className="mt-10 block w-full md:hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2.svg"
                      className="w-full rounded-image"
                      alt="Relume placeholder image 2"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div
                  ref={intersectionAnimation.sectionRefCallbacks[2]}
                  data-index={2}
                  className="flex flex-col items-start justify-center md:h-screen"
                >
                  <p className="mb-3 font-semibold md:mb-4">Build</p>
                  <h2 className="mb-5 text-h2 font-bold md:mb-6">
                    We implement and test alongside your engineers
                  </h2>
                  <p className="text-medium">
                    We build the pipelines, write the infrastructure code and
                    run the first deployments together. Your team learns by
                    doing, not by reading documentation.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button variant="secondary">Services</Button>
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                    >
                      Contact
                    </Button>
                  </div>
                  <div className="mt-10 block w-full md:hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3.svg"
                      className="w-full rounded-image"
                      alt="Relume placeholder image 3"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div
                  ref={intersectionAnimation.sectionRefCallbacks[3]}
                  data-index={3}
                  className="flex flex-col items-start justify-center md:h-screen"
                >
                  <p className="mb-3 font-semibold md:mb-4">Run</p>
                  <h2 className="mb-5 text-h2 font-bold md:mb-6">
                    Handover with monitoring and clear documentation
                  </h2>
                  <p className="text-medium">
                    We leave you with dashboards, alerts and runbooks your team
                    can actually use. Support remains available whenever you
                    need it.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button variant="secondary">Services</Button>
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                    >
                      Contact
                    </Button>
                  </div>
                  <div className="mt-10 block w-full md:hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4.svg"
                      className="w-full rounded-image"
                      alt="Relume placeholder image 4"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="sticky top-0 hidden h-screen md:flex md:flex-col md:items-center md:justify-center">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1.svg"
                className={intersectionAnimation.getImageClassName(0)}
                alt="Relume placeholder image 1"
              />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2.svg"
                className={intersectionAnimation.getImageClassName(1)}
                alt="Relume placeholder image 2"
              />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3.svg"
                className={intersectionAnimation.getImageClassName(2)}
                alt="Relume placeholder image 3"
              />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4.svg"
                className={intersectionAnimation.getImageClassName(3)}
                alt="Relume placeholder image 4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
