"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";

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
            <Button title="Book">Book</Button>
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
