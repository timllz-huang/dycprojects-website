"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { href, site } from "@/lib/site";
import { ChevronRight } from "relume-icons";

export function Stats31() {
  return (
    <section id="why-dyc" className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-[0.5fr_1fr] lg:items-center lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Why DYC</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              What you can expect from us
            </h2>
            <p className="text-medium">
              A Sydney-based consultancy that keeps things simple: clear advice, honest
              scope and engineering you can rely on.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button asChild title="Book" variant="secondary"><a href={href("/contact/")}>Book a consultation</a></Button>
              <Button asChild
                title="Consultation"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              ><a href={href("/services/")}>Our services</a></Button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 py-2 md:grid-cols-2">
            <Card className="p-8">
              <p className="mb-8 font-[Manrope] text-[3.5rem] leading-[1.3] font-bold text-blumine md:mb-10 md:text-[4rem] lg:mb-12 lg:text-[5rem]">
                Free
              </p>
              <h3 className="text-h6 font-bold">First consultation</h3>
              <p className="mt-2">An initial conversation about your systems and goals, with no obligation.</p>
            </Card>
            <Card className="p-8">
              <p className="mb-8 font-[Manrope] text-[3.5rem] leading-[1.3] font-bold text-blumine md:mb-10 md:text-[4rem] lg:mb-12 lg:text-[5rem]">
                3
              </p>
              <h3 className="text-h6 font-bold">Major cloud platforms</h3>
              <p className="mt-2">Microsoft Azure, Amazon Web Services and Google Cloud.</p>
            </Card>
            <Card className="p-8">
              <p className="mb-8 font-[Manrope] text-[3.5rem] leading-[1.3] font-bold text-blumine md:mb-10 md:text-[4rem] lg:mb-12 lg:text-[5rem]">
                1
              </p>
              <h3 className="text-h6 font-bold">Point of contact</h3>
              <p className="mt-2">You deal directly with the engineer responsible for your work.</p>
            </Card>
            <Card className="p-8">
              <p className="mb-8 font-[Manrope] text-[3.5rem] leading-[1.3] font-bold text-blumine md:mb-10 md:text-[4rem] lg:mb-12 lg:text-[5rem]">
                NSW
              </p>
              <h3 className="text-h6 font-bold">Based in Sydney</h3>
              <p className="mt-2">Located in Ryde and working with businesses across Australia.</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
