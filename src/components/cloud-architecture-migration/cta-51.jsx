"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { href, site } from "@/lib/site";

export function Cta51() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <Card className="flex flex-col items-center p-8 md:p-12 lg:p-16">
          <div className="max-w-lg text-center">
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Talk to a cloud architect
            </h2>
            <p className="text-medium">
              Book a free consultation and receive a tailored assessment and
              migration roadmap for your business.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            <Button asChild title="Consult"><a href={href("/contact/")}>Book a consultation</a></Button>
            <Button asChild title="Approach" variant="secondary"><a href={href("/#process")}>How we work</a></Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
