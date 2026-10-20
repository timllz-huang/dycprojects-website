"use client";

import { Button } from "@/components/ui/button";
import React from "react";

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
              <Button title="Book">Book</Button>
              <Button title="Services" variant="secondary">
                Services
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
