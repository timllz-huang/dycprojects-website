"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { href, site } from "@/lib/site";
import { Visual } from "@/components/visual";

export function Header1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="mb-5 text-h1 font-bold md:mb-6">
              We build and run modern digital systems
            </h1>
            <p className="text-medium">
              DYC Projects is an Australian technology consultancy that designs,
              builds, migrates and runs secure, scalable cloud and software
              systems. We explain technology in plain business terms and deliver
              practical solutions without the hype.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button asChild title="Book"><a href={href("/contact/")}>Book a free consultation</a></Button>
              <Button asChild title="Services" variant="secondary"><a href={href("/services/")}>Our services</a></Button>
            </div>
          </div>
          <div>
            <Visual priority photo="engineerDc" kind="network" className="w-full rounded-image" />
          </div>
        </div>
      </div>
    </section>
  );
}
