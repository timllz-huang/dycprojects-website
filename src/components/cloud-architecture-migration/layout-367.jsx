"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { Icon } from "@/components/icon";
import { href, site } from "@/lib/site";
import { Visual } from "@/components/visual";
import { ChevronRight } from "relume-icons";

export function Layout367() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Partnership</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              We stay after the move
            </h2>
            <p className="text-medium">
              Migration is the start, not the finish.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            <Card className="flex flex-col">
              <div className="flex flex-col justify-center p-6 md:p-8 lg:p-12">
                <div>
                  <div className="mb-5 md:mb-6">
                    <Icon name="monitoring" className="size-12 text-scheme-text" />
                  </div>
                  <h3 className="mb-5 text-h3 font-bold md:mb-6">
                    Ongoing optimisation
                  </h3>
                  <p>
                    We watch performance and usage patterns. Then we tune the
                    environment so you never pay for waste.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button asChild variant="secondary"><a href={href("/contact/")}>Book a consultation</a></Button>
                    <Button asChild
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                    ><a href={href("/#process")}>How we work</a></Button>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="flex flex-col">
              <div className="flex flex-col justify-center p-6 md:p-8 lg:p-12">
                <div>
                  <div className="mb-5 md:mb-6">
                    <Icon name="savings" className="size-12 text-scheme-text" />
                  </div>
                  <h3 className="mb-5 text-h3 font-bold md:mb-6">
                    Cost management
                  </h3>
                  <p>
                    We review your cloud spend regularly, flag waste and
                    recommend changes before costs creep up.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button asChild variant="secondary"><a href={href("/contact/")}>Book a consultation</a></Button>
                    <Button asChild
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                    ><a href={href("/#process")}>How we work</a></Button>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="flex flex-col md:col-span-2 md:row-span-2 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3">
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8 lg:p-12">
                <div>
                  <p className="mb-2 text-small font-semibold">Reliability</p>
                  <h3 className="mb-5 text-h3 font-bold md:mb-6">
                    You get a partner who answers the phone
                  </h3>
                  <p>
                    When something breaks, you call us and we work the problem
                    until it is fixed. That is the whole promise.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button asChild title="Consult" variant="secondary"><a href={href("/contact/")}>Book a consultation</a></Button>
                  <Button asChild
                    title="Approach"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  ><a href={href("/#process")}>How we work</a></Button>
                </div>
              </div>
              <div>
                <Visual photo="bizMeeting" kind="consult" className="w-full aspect-[3/2] rounded-none" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
