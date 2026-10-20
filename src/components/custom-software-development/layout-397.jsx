"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { Icon } from "@/components/icon";
import { href, site } from "@/lib/site";
import { Visual } from "@/components/visual";
import { ChevronRight } from "relume-icons";

export function Layout397() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Process</p>
          <h2 className="mb-5 text-h2 font-bold md:mb-6">How we build</h2>
          <p className="text-medium">
            A clear process from first conversation to working software.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8">
            <Card className="flex flex-col">
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <Icon name="work" className="size-12 text-scheme-text" />
                </div>
                <p className="mb-2 font-semibold">Step 1</p>
                <h3 className="mb-3 text-h4 font-bold md:mb-4">
                  Discovery and requirements
                </h3>
                <p>
                  We learn your workflows, pain points and goals before writing
                  code.
                </p>
                <div className="mt-5 md:mt-6">
                  <Button asChild
                    title="Contact"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  ><a href={href("/contact/")}>Get in touch</a></Button>
                </div>
              </div>
            </Card>
            <Card className="flex flex-col">
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <p className="mb-2 font-semibold">Step 2</p>
                <h3 className="mb-3 text-h4 font-bold md:mb-4">
                  Design and architecture
                </h3>
                <p>
                  We map the solution and choose the right technology stack.
                </p>
                <div className="mt-5 md:mt-6">
                  <Button asChild
                    title="Contact"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  ><a href={href("/contact/")}>Get in touch</a></Button>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-center self-start">
                <Visual photo="whiteboardTeam" kind="consult" className="w-full aspect-[3/2] rounded-none" />
              </div>
            </Card>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8">
            <Card className="flex flex-col">
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <p className="mb-2 font-semibold">Step 3</p>
                <h3 className="mb-3 text-h4 font-bold md:mb-4">
                  Build and test
                </h3>
                <p>
                  We develop in short iterations with regular demos and
                  feedback.
                </p>
                <div className="mt-5 md:mt-6">
                  <Button asChild
                    title="Contact"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  ><a href={href("/contact/")}>Get in touch</a></Button>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-center self-start">
                <Visual photo="codeJava" kind="code" className="w-full aspect-[3/2] rounded-none" />
              </div>
            </Card>
            <Card className="flex flex-col">
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <Icon name="monitoring" className="size-12 text-scheme-text" />
                </div>
                <p className="mb-2 font-semibold">Step 4</p>
                <h3 className="mb-3 text-h4 font-bold md:mb-4">
                  Deploy and launch
                </h3>
                <p>
                  We release to production with automated pipelines and
                  monitoring.
                </p>
                <div className="mt-5 md:mt-6">
                  <Button asChild
                    title="Contact"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  ><a href={href("/contact/")}>Get in touch</a></Button>
                </div>
              </div>
            </Card>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8">
            <Card className="flex flex-col">
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <Icon name="interactive_space" className="size-12 text-scheme-text" />
                </div>
                <p className="mb-2 font-semibold">Step 5</p>
                <h3 className="mb-3 text-h4 font-bold md:mb-4">
                  Iterate and improve
                </h3>
                <p>We keep refining based on real usage and changing needs.</p>
                <div className="mt-5 md:mt-6">
                  <Button asChild
                    title="Contact"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  ><a href={href("/contact/")}>Get in touch</a></Button>
                </div>
              </div>
            </Card>
            <Card className="flex flex-col">
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <p className="mb-2 font-semibold">Step 6</p>
                <h3 className="mb-3 text-h4 font-bold md:mb-4">
                  Support and maintain
                </h3>
                <p>
                  We monitor, optimise and fix issues before they affect you.
                </p>
                <div className="mt-5 md:mt-6">
                  <Button asChild
                    title="Contact"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  ><a href={href("/contact/")}>Get in touch</a></Button>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-center self-start">
                <Visual photo="deskMacbook" kind="pipeline" className="w-full aspect-[3/2] rounded-none" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
