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
              Ready to talk technology?
            </h2>
            <p className="text-medium">
              Book a free consultation or email info@dycprojects.com.au to
              discuss your cloud or software needs.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            <Button asChild title="Book"><a href={href("/contact/")}>Book a free consultation</a></Button>
            <Button asChild title="Contact" variant="secondary"><a href={href("/contact/")}>Get in touch</a></Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
