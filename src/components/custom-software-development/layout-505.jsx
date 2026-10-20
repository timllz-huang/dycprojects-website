"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { Icon } from "@/components/icon";
import { href, site } from "@/lib/site";
import { ChevronRight } from "relume-icons";

export function Layout505() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Capabilities</p>
          <h2 className="mb-5 text-h2 font-bold md:mb-6">
            Software that works
          </h2>
          <p className="text-medium">
            We build practical software that solves real business problems. No
            hype, just reliable engineering.
          </p>
        </div>
        <Card>
          <Tabs
            defaultValue="tab-1"
            orientation="vertical"
            className="relative grid auto-cols-fr grid-cols-1 md:grid-cols-[1fr_1.5fr]"
          >
            <TabsList className="relative grid h-full auto-cols-fr grid-cols-1 border-b border-scheme-border group-data-[slot=card-flat]:border-0 md:border-r md:border-b-0 md:group-data-[slot=card-flat]:border-0">
              <TabsTrigger
                value="tab-1"
                className="items-start justify-start rounded-none border-0 border-b p-6 text-h5 font-bold group-data-[slot=card-flat]:border-0 last-of-type:border-0 data-[state=active]:bg-scheme-foreground data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background group-data-[slot=card-flat]:data-[state=inactive]:border-0 md:px-8"
              >
                Web applications
              </TabsTrigger>
              <TabsTrigger
                value="tab-2"
                className="items-start justify-start rounded-none border-0 border-b p-6 text-h5 font-bold group-data-[slot=card-flat]:border-0 last-of-type:border-0 data-[state=active]:bg-scheme-foreground data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background group-data-[slot=card-flat]:data-[state=inactive]:border-0 md:px-8"
              >
                Internal tools
              </TabsTrigger>
              <TabsTrigger
                value="tab-3"
                className="items-start justify-start rounded-none border-0 border-b p-6 text-h5 font-bold group-data-[slot=card-flat]:border-0 last-of-type:border-0 data-[state=active]:bg-scheme-foreground data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background group-data-[slot=card-flat]:data-[state=inactive]:border-0 md:px-8"
              >
                API development
              </TabsTrigger>
              <TabsTrigger
                value="tab-4"
                className="items-start justify-start rounded-none border-0 border-b p-6 text-h5 font-bold group-data-[slot=card-flat]:border-0 last-of-type:border-0 data-[state=active]:bg-scheme-foreground data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background group-data-[slot=card-flat]:data-[state=inactive]:border-0 md:px-8"
              >
                System integrations
              </TabsTrigger>
              <TabsTrigger
                value="tab-5"
                className="items-start justify-start rounded-none border-0 border-b p-6 text-h5 font-bold group-data-[slot=card-flat]:border-0 last-of-type:border-0 data-[state=active]:bg-scheme-foreground data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background group-data-[slot=card-flat]:data-[state=inactive]:border-0 md:px-8"
              >
                Legacy modernisation
              </TabsTrigger>
              <TabsTrigger
                value="tab-6"
                className="items-start justify-start rounded-none border-0 border-b p-6 text-h5 font-bold group-data-[slot=card-flat]:border-0 last-of-type:border-0 data-[state=active]:bg-scheme-foreground data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background group-data-[slot=card-flat]:data-[state=inactive]:border-0 md:px-8"
              >
                Cloud software
              </TabsTrigger>
            </TabsList>
            <div>
              <TabsContent
                value="tab-1"
                className="data-[state=active]:animate-tabs"
              >
                <div className="flex h-full flex-col justify-center p-6 md:p-8 lg:p-16">
                  <div className="mb-5 md:mb-6">
                    <Icon name="web" className="size-12 text-scheme-text" />
                  </div>
                  <h2 className="mb-5 text-h3 font-bold md:mb-6">
                    Web applications built for your users
                  </h2>
                  <p>
                    Secure, responsive web applications that handle your
                    workflows and scale with your business.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    
                    <Button asChild
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                    ><a href={href("/contact/")}>Get in touch</a></Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="tab-2"
                className="data-[state=active]:animate-tabs"
              >
                <div className="flex h-full flex-col justify-center p-6 md:p-8 lg:p-16">
                  <div className="mb-5 md:mb-6">
                    <Icon name="add_business" className="size-12 text-scheme-text" />
                  </div>
                  <h2 className="mb-5 text-h3 font-bold md:mb-6">
                    Internal business tools that save time
                  </h2>
                  <p>
                    Replace spreadsheets and manual processes with custom tools
                    your team will actually use.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    
                    <Button asChild
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                    ><a href={href("/contact/")}>Get in touch</a></Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="tab-3"
                className="data-[state=active]:animate-tabs"
              >
                <div className="flex h-full flex-col justify-center p-6 md:p-8 lg:p-16">
                  <div className="mb-5 md:mb-6">
                    <Icon name="api" className="size-12 text-scheme-text" />
                  </div>
                  <h2 className="mb-5 text-h3 font-bold md:mb-6">
                    APIs that connect your systems
                  </h2>
                  <p>
                    Well-documented, secure APIs that let your software talk to
                    other platforms without friction.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    
                    <Button asChild
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                    ><a href={href("/contact/")}>Get in touch</a></Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="tab-4"
                className="data-[state=active]:animate-tabs"
              >
                <div className="flex h-full flex-col justify-center p-6 md:p-8 lg:p-16">
                  <div className="mb-5 md:mb-6">
                    <Icon name="automation" className="size-12 text-scheme-text" />
                  </div>
                  <h2 className="mb-5 text-h3 font-bold md:mb-6">
                    Integrations that remove manual work
                  </h2>
                  <p>
                    Connect your CRM, accounting, inventory and other systems so
                    data flows automatically.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    
                    <Button asChild
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                    ><a href={href("/contact/")}>Get in touch</a></Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="tab-5"
                className="data-[state=active]:animate-tabs"
              >
                <div className="flex h-full flex-col justify-center p-6 md:p-8 lg:p-16">
                  <div className="mb-5 md:mb-6">
                    <Icon name="update" className="size-12 text-scheme-text" />
                  </div>
                  <h2 className="mb-5 text-h3 font-bold md:mb-6">
                    Modernise legacy systems without the risk
                  </h2>
                  <p>
                    We update old software incrementally so your business keeps
                    running while we rebuild.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    
                    <Button asChild
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                    ><a href={href("/contact/")}>Get in touch</a></Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="tab-6"
                className="data-[state=active]:animate-tabs"
              >
                <div className="flex h-full flex-col justify-center p-6 md:p-8 lg:p-16">
                  <div className="mb-5 md:mb-6">
                    <Icon name="cloud" className="size-12 text-scheme-text" />
                  </div>
                  <h2 className="mb-5 text-h3 font-bold md:mb-6">
                    Cloud software that scales with you
                  </h2>
                  <p>
                    Build on Azure, AWS or Google Cloud with architecture
                    designed for growth and cost control.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    
                    <Button asChild
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                    ><a href={href("/contact/")}>Get in touch</a></Button>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </Card>
      </div>
    </section>
  );
}
