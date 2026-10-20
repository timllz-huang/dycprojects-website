"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout507() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Process</p>
          <h1 className="mb-5 text-h2 font-bold md:mb-6">How we work</h1>
          <p className="text-medium">
            A simple engagement from first conversation to ongoing support. You
            always know where things stand.
          </p>
        </div>
        <Card className="relative grid auto-cols-fr grid-cols-1 gap-x-12 lg:gap-x-0">
          <Tabs defaultValue="tab-1">
            <TabsList className="flex-col group-data-[slot=card-flat]:border-0 md:flex-row">
              <TabsTrigger
                value="tab-1"
                className="w-full items-start justify-start gap-4 rounded-none border-0 border-b p-6 text-h6 font-bold whitespace-normal group-data-[slot=card-flat]:border-0 data-[state=active]:bg-scheme-foreground data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background md:items-center md:justify-center md:border-t-0 md:border-r md:px-8 md:py-6 md:data-[state=active]:border-b-transparent"
              >
                Consult
              </TabsTrigger>
              <TabsTrigger
                value="tab-2"
                className="w-full items-start justify-start gap-4 rounded-none border-0 border-b p-6 text-h6 font-bold whitespace-normal group-data-[slot=card-flat]:border-0 data-[state=active]:bg-scheme-foreground data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background md:items-center md:justify-center md:border-t-0 md:border-r md:px-8 md:py-6 md:data-[state=active]:border-b-transparent"
              >
                Design
              </TabsTrigger>
              <TabsTrigger
                value="tab-3"
                className="w-full items-start justify-start gap-4 rounded-none border-0 border-b p-6 text-h6 font-bold whitespace-normal group-data-[slot=card-flat]:border-0 data-[state=active]:bg-scheme-foreground data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background md:items-center md:justify-center md:border-t-0 md:border-r md:px-8 md:py-6 md:data-[state=active]:border-b-transparent"
              >
                Build
              </TabsTrigger>
              <TabsTrigger
                value="tab-4"
                className="w-full items-start justify-start gap-4 rounded-none border-0 border-b p-6 text-h6 font-bold whitespace-normal group-data-[slot=card-flat]:border-0 data-[state=active]:bg-scheme-foreground data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background md:items-center md:justify-center md:border-t-0 md:border-r md:px-8 md:py-6 md:data-[state=active]:border-b-transparent"
              >
                Migrate
              </TabsTrigger>
              <TabsTrigger
                value="tab-5"
                className="w-full items-start justify-start gap-4 rounded-none border-0 border-b p-6 text-h6 font-bold whitespace-normal group-data-[slot=card-flat]:border-0 data-[state=active]:bg-scheme-foreground data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background md:items-center md:justify-center md:border-t-0 md:border-r md:px-8 md:py-6 md:data-[state=active]:border-b-transparent"
              >
                Run
              </TabsTrigger>
              <TabsTrigger
                value="tab-6"
                className="w-full items-start justify-start gap-4 rounded-none border-0 border-b p-6 text-h6 font-bold whitespace-normal group-data-[slot=card-flat]:border-0 data-[state=active]:bg-scheme-foreground data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background md:items-center md:justify-center md:border-t-0 md:px-8 md:py-6 md:data-[state=active]:border-b-transparent"
              >
                Support
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="tab-1"
              className="data-[state=active]:animate-tabs"
            >
              <div className="grid grid-cols-1 gap-y-12 p-6 md:grid-cols-2 md:items-center md:gap-x-12 md:p-8 lg:gap-x-20 lg:p-12">
                <div>
                  <p className="mb-3 font-semibold md:mb-4">Step 1</p>
                  <h2 className="mb-5 text-h3 font-bold md:mb-6">
                    We listen to your business goals first
                  </h2>
                  <p>
                    A free consultation to understand your systems, pain points
                    and objectives. We then outline a clear path forward.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button variant="secondary">Book</Button>
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                    >
                      Consultation
                    </Button>
                  </div>
                </div>
                <div className="h-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    className="size-full rounded-image object-cover"
                    alt="Relume placeholder image"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="tab-2"
              className="data-[state=active]:animate-tabs"
            >
              <div className="grid grid-cols-1 gap-y-12 p-6 md:grid-cols-2 md:items-center md:gap-x-12 md:p-8 lg:gap-x-20 lg:p-12">
                <div>
                  <p className="mb-3 font-semibold md:mb-4">Step 2</p>
                  <h2 className="mb-5 text-h3 font-bold md:mb-6">
                    We design a solution that fits your budget
                  </h2>
                  <p>
                    Architecture, timelines and costs laid out in plain terms.
                    No surprises later.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button variant="secondary">Book</Button>
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                    >
                      Consultation
                    </Button>
                  </div>
                </div>
                <div className="h-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    className="size-full rounded-image object-cover"
                    alt="Relume placeholder image"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="tab-3"
              className="data-[state=active]:animate-tabs"
            >
              <div className="grid grid-cols-1 gap-y-12 p-6 md:grid-cols-2 md:items-center md:gap-x-12 md:p-8 lg:gap-x-20 lg:p-12">
                <div>
                  <p className="mb-3 font-semibold md:mb-4">Step 3</p>
                  <h2 className="mb-5 text-h3 font-bold md:mb-6">
                    We build and test with regular updates
                  </h2>
                  <p>
                    Agile delivery with transparent communication at every
                    stage. You see progress as it happens.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button variant="secondary">Book</Button>
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                    >
                      Consultation
                    </Button>
                  </div>
                </div>
                <div className="h-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    className="size-full rounded-image object-cover"
                    alt="Relume placeholder image"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="tab-4"
              className="data-[state=active]:animate-tabs"
            >
              <div className="grid grid-cols-1 gap-y-12 p-6 md:grid-cols-2 md:items-center md:gap-x-12 md:p-8 lg:gap-x-20 lg:p-12">
                <div>
                  <p className="mb-3 font-semibold md:mb-4">Step 4</p>
                  <h2 className="mb-5 text-h3 font-bold md:mb-6">
                    We migrate your systems with minimal downtime
                  </h2>
                  <p>
                    Careful planning and execution to move your workloads
                    safely. Your business keeps running.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button variant="secondary">Book</Button>
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                    >
                      Consultation
                    </Button>
                  </div>
                </div>
                <div className="h-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    className="size-full rounded-image object-cover"
                    alt="Relume placeholder image"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="tab-5"
              className="data-[state=active]:animate-tabs"
            >
              <div className="grid grid-cols-1 gap-y-12 p-6 md:grid-cols-2 md:items-center md:gap-x-12 md:p-8 lg:gap-x-20 lg:p-12">
                <div>
                  <p className="mb-3 font-semibold md:mb-4">Step 5</p>
                  <h2 className="mb-5 text-h3 font-bold md:mb-6">
                    We run and optimise your environment
                  </h2>
                  <p>
                    Ongoing monitoring, cost management and performance tuning.
                    We keep things healthy.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button variant="secondary">Book</Button>
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                    >
                      Consultation
                    </Button>
                  </div>
                </div>
                <div className="h-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    className="size-full rounded-image object-cover"
                    alt="Relume placeholder image"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="tab-6"
              className="data-[state=active]:animate-tabs"
            >
              <div className="grid grid-cols-1 gap-y-12 p-6 md:grid-cols-2 md:items-center md:gap-x-12 md:p-8 lg:gap-x-20 lg:p-12">
                <div>
                  <p className="mb-3 font-semibold md:mb-4">Step 6</p>
                  <h2 className="mb-5 text-h3 font-bold md:mb-6">
                    We support you for the long term
                  </h2>
                  <p>
                    A partnership, not a project. We are here when you need us.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button variant="secondary">Book</Button>
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                    >
                      Consultation
                    </Button>
                  </div>
                </div>
                <div className="h-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    className="size-full rounded-image object-cover"
                    alt="Relume placeholder image"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </section>
  );
}
