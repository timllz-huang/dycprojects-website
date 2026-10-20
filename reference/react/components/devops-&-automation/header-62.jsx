"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Header62() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container max-w-lg text-center">
        <p className="mb-3 font-semibold md:mb-4">DevOps</p>
        <h1 className="mb-5 text-h1 font-bold md:mb-6">Ship better software</h1>
        <p className="text-medium">
          We build automated pipelines and infrastructure that let your team
          deploy faster with fewer mistakes.
        </p>
        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          <Button title="Book">Book</Button>
          <Button title="Services" variant="secondary">
            Services
          </Button>
        </div>
      </div>
    </section>
  );
}
