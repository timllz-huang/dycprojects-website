"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout397() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Process</p>
          <h1 className="mb-5 text-h2 font-bold md:mb-6">How we build</h1>
          <p className="text-medium">
            A clear process from first conversation to working software.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8">
            <Card className="flex flex-col">
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <img
                    className="size-12 text-scheme-text"
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/work.svg"
                  />
                </div>
                <h2 className="mb-3 text-h4 font-bold md:mb-4">
                  Discovery and requirements
                </h2>
                <p>
                  We learn your workflows, pain points and goals before writing
                  code.
                </p>
                <div className="mt-5 md:mt-6">
                  <Button
                    title="Contact"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    Contact
                  </Button>
                </div>
              </div>
            </Card>
            <Card className="flex flex-col">
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <p className="mb-2 font-semibold">Step 1</p>
                <h2 className="mb-3 text-h4 font-bold md:mb-4">
                  Design and architecture
                </h2>
                <p>
                  We map the solution and choose the right technology stack.
                </p>
                <div className="mt-5 md:mt-6">
                  <Button
                    title="Contact"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    Contact
                  </Button>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-center self-start">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                />
              </div>
            </Card>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8">
            <Card className="flex flex-col">
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <p className="mb-2 font-semibold">Step 2</p>
                <h2 className="mb-3 text-h4 font-bold md:mb-4">
                  Build and test
                </h2>
                <p>
                  We develop in short iterations with regular demos and
                  feedback.
                </p>
                <div className="mt-5 md:mt-6">
                  <Button
                    title="Contact"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    Contact
                  </Button>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-center self-start">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 2"
                />
              </div>
            </Card>
            <Card className="flex flex-col">
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <img
                    className="size-12 text-scheme-text"
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/monitoring.svg"
                  />
                </div>
                <h2 className="mb-3 text-h4 font-bold md:mb-4">
                  Deploy and launch
                </h2>
                <p>
                  We release to production with automated pipelines and
                  monitoring.
                </p>
                <div className="mt-5 md:mt-6">
                  <Button
                    title="Contact"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    Contact
                  </Button>
                </div>
              </div>
            </Card>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8">
            <Card className="flex flex-col">
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <img
                    className="size-12 text-scheme-text"
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/interactive_space.svg"
                  />
                </div>
                <h2 className="mb-3 text-h4 font-bold md:mb-4">
                  Iterate and improve
                </h2>
                <p>We keep refining based on real usage and changing needs.</p>
                <div className="mt-5 md:mt-6">
                  <Button
                    title="Contact"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    Contact
                  </Button>
                </div>
              </div>
            </Card>
            <Card className="flex flex-col">
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <p className="mb-2 font-semibold">Step 3</p>
                <h2 className="mb-3 text-h4 font-bold md:mb-4">
                  Support and maintain
                </h2>
                <p>
                  We monitor, optimise and fix issues before they affect you.
                </p>
                <div className="mt-5 md:mt-6">
                  <Button
                    title="Contact"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    Contact
                  </Button>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-center self-start">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 3"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
