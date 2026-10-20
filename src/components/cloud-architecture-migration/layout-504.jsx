"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { href, site } from "@/lib/site";
import { Visual } from "@/components/visual";
import { ChevronRight } from "relume-icons";

export function Layout504() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Execute</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">The move itself</h2>
            <p className="text-medium">
              We transfer data, re-platform applications, and cut over with
              minimal disruption. Your team keeps working while we do the heavy
              lifting.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              <Button asChild title="Consult" variant="secondary"><a href={href("/contact/")}>Book a consultation</a></Button>
              <Button asChild
                title="Approach"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              ><a href={href("/#process")}>How we work</a></Button>
            </div>
          </div>
        </div>
        <Tabs defaultValue="tab-one" className="flex flex-col items-center">
          <TabsList className="relative mb-12 scrollbar-none flex w-screen flex-nowrap items-center gap-x-6 overflow-auto px-[5vw] md:mb-16 md:w-auto md:max-w-full md:px-0">
            <TabsTrigger
              value="tab-one"
              className="rounded-none border-0 border-b bg-transparent px-0 py-2 data-[state=active]:border-scheme-text data-[state=active]:bg-transparent data-[state=inactive]:border-transparent"
            >
              Data transfer
            </TabsTrigger>
            <TabsTrigger
              value="tab-two"
              className="rounded-none border-0 border-b bg-transparent px-0 py-2 data-[state=active]:border-scheme-text data-[state=active]:bg-transparent data-[state=inactive]:border-transparent"
            >
              Re-platforming
            </TabsTrigger>
            <TabsTrigger
              value="tab-three"
              className="rounded-none border-0 border-b bg-transparent px-0 py-2 data-[state=active]:border-scheme-text data-[state=active]:bg-transparent data-[state=inactive]:border-transparent"
            >
              Cutover
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="tab-one"
            className="data-[state=active]:animate-tabs"
          >
            <Card className="grid grid-cols-1 md:grid-cols-2 md:items-center">
              <div className="aspect-square">
                <Visual photo="fiber" kind="cloud" className="size-full rounded-none" />
              </div>
              <div className="p-6 md:p-8 lg:p-12">
                <p className="mb-3 font-semibold md:mb-4">Data</p>
                <h2 className="mb-5 text-h3 font-bold md:mb-6">We move your data securely and verify integrity at every stage</h2>
                <p>Large datasets move in stages. We validate everything before the final cutover so nothing is lost.</p>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                  <Button asChild title="Consult" variant="secondary"><a href={href("/contact/")}>Book a consultation</a></Button>
                  <Button asChild
                    title="Approach"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  ><a href={href("/#process")}>How we work</a></Button>
                </div>
              </div>
            </Card>
          </TabsContent>
          <TabsContent
            value="tab-two"
            className="data-[state=active]:animate-tabs"
          >
            <Card className="grid grid-cols-1 md:grid-cols-2 md:items-center">
              <div className="aspect-square">
                <Visual photo="dcAisle" kind="hybrid" className="size-full rounded-none" />
              </div>
              <div className="p-6 md:p-8 lg:p-12">
                <p className="mb-3 font-semibold md:mb-4">Applications</p>
                <h2 className="mb-5 text-h3 font-bold md:mb-6">Re-platform or re-architect, depending on what pays off</h2>
                <p>Some applications lift and shift cleanly. Others benefit from modernising on the way. We recommend the option with the best return, not the most work.</p>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                  <Button asChild title="Consult" variant="secondary"><a href={href("/contact/")}>Book a consultation</a></Button>
                  <Button asChild
                    title="Approach"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  ><a href={href("/#process")}>How we work</a></Button>
                </div>
              </div>
            </Card>
          </TabsContent>
          <TabsContent
            value="tab-three"
            className="data-[state=active]:animate-tabs"
          >
            <Card className="grid grid-cols-1 md:grid-cols-2 md:items-center">
              <div className="aspect-square">
                <Visual photo="monitoring" kind="pipeline" className="size-full rounded-none" />
              </div>
              <div className="p-6 md:p-8 lg:p-12">
                <p className="mb-3 font-semibold md:mb-4">Go-live</p>
                <h2 className="mb-5 text-h3 font-bold md:mb-6">A planned cutover with a tested rollback</h2>
                <p>We schedule the switch for a low-impact window, test the rollback plan beforehand and stay on hand while your team gets back to work.</p>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                  <Button asChild title="Consult" variant="secondary"><a href={href("/contact/")}>Book a consultation</a></Button>
                  <Button asChild
                    title="Approach"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  ><a href={href("/#process")}>How we work</a></Button>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
