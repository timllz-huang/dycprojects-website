"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { href, site } from "@/lib/site";

export function Header62() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container max-w-lg text-center">
        <p className="mb-3 font-semibold md:mb-4">Software</p>
        <h1 className="mb-5 text-h1 font-bold md:mb-6">Built for work</h1>
        <p className="text-medium">
          Web applications, internal tools, APIs and integrations designed
          around the way your business actually operates.
        </p>
        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          <Button asChild title="Consult"><a href={href("/contact/")}>Book a consultation</a></Button>
          <Button asChild title="Services" variant="secondary"><a href={href("/services/")}>All services</a></Button>
        </div>
      </div>
    </section>
  );
}
