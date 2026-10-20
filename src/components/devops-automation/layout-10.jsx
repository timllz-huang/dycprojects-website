"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { Icon } from "@/components/icon";
import { href, site } from "@/lib/site";
import { Visual } from "@/components/visual";
import { ChevronRight } from "relume-icons";

export function Layout10() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">About</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              A Sydney consultancy that speaks plain English
            </h2>
            <p className="mb-6 text-medium md:mb-8">
              DYC Projects is a technology consultancy based in Australia. We
              explain complex engineering in business terms and deliver what we
              promise.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <Icon name="cloud" className="size-12 text-scheme-text" />
                </div>
                <h6 className="mb-3 text-h6 font-bold md:mb-4">
                  Our expertise
                </h6>
                <p>
                  Hands-on engineering across Microsoft Azure, AWS and Google
                  Cloud, from first design to day-to-day operations.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <Icon name="tactic" className="size-12 text-scheme-text" />
                </div>
                <h6 className="mb-3 text-h6 font-bold md:mb-4">Our approach</h6>
                <p>
                  We listen first, then recommend practical solutions that fit
                  your budget and your goals.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button asChild title="Services" variant="secondary"><a href={href("/services/")}>All services</a></Button>
              <Button asChild
                title="Contact"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              ><a href={href("/contact/")}>Get in touch</a></Button>
            </div>
          </div>
          <div>
            <Visual kind="consult" className="w-full rounded-image" />
          </div>
        </div>
      </div>
    </section>
  );
}
