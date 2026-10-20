"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { href, site } from "@/lib/site";
import { Visual } from "@/components/visual";
import { ChevronRight } from "relume-icons";

export function Layout1_1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Efficiency</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Tools that work the way you do
            </h2>
            <p className="text-medium">
              Custom software removes the friction between your team and their
              work. We build systems that cut manual effort and let your people
              focus on what matters.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button asChild title="Consult" variant="secondary"><a href={href("/contact/")}>Book a consultation</a></Button>
              <Button asChild
                title="Services"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              ><a href={href("/services/")}>All services</a></Button>
            </div>
          </div>
          <div>
            <Visual photo="teamWorking" kind="chart" className="w-full rounded-image" />
          </div>
        </div>
      </div>
    </section>
  );
}
