"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";

export function Cta51() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-4">
      <div className="container">
        <Card className="flex flex-col items-center p-8 md:p-12 lg:p-16">
          <div className="max-w-lg text-center">
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Talk to an engineer
            </h2>
            <p className="text-medium">
              Tell us what you are building. We will tell you the fastest way to
              get there.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            <Button title="Consult">Consult</Button>
            <Button title="Email" variant="secondary">
              Email
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
