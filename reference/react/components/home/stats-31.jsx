"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Stats31() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-[0.5fr_1fr] lg:items-center lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Results</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Numbers that matter to Australian businesses
            </h2>
            <p className="text-medium">
              We measure our work by the outcomes you see. Here is what we have
              delivered.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Book" variant="secondary">
                Book
              </Button>
              <Button
                title="Consultation"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Consultation
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 py-2 md:grid-cols-2">
            <Card className="p-8">
              <p className="mb-8 text-[3.5rem] leading-[1.3] font-bold md:mb-10 md:text-[4rem] lg:mb-12 lg:text-[5rem]">
                15+
              </p>
              <h3 className="text-h6 font-bold">Years combined experience</h3>
              <p className="mt-2">
                Senior engineers who have seen it all before.
              </p>
            </Card>
            <Card className="p-8">
              <p className="mb-8 text-[3.5rem] leading-[1.3] font-bold md:mb-10 md:text-[4rem] lg:mb-12 lg:text-[5rem]">
                40+
              </p>
              <h3 className="text-h6 font-bold">Cloud migrations completed</h3>
              <p className="mt-2">Moves to Azure, AWS and Google Cloud.</p>
            </Card>
            <Card className="p-8">
              <p className="mb-8 text-[3.5rem] leading-[1.3] font-bold md:mb-10 md:text-[4rem] lg:mb-12 lg:text-[5rem]">
                120+
              </p>
              <h3 className="text-h6 font-bold">Projects delivered</h3>
              <p className="mt-2">
                Software, infrastructure and consulting engagements.
              </p>
            </Card>
            <Card className="p-8">
              <p className="mb-8 text-[3.5rem] leading-[1.3] font-bold md:mb-10 md:text-[4rem] lg:mb-12 lg:text-[5rem]">
                98%
              </p>
              <h3 className="text-h6 font-bold">Client satisfaction rating</h3>
              <p className="mt-2">
                Based on post-project reviews from our clients.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
