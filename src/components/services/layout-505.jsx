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
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2 btn-light alternate logo-alt">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Benefits</p>
          <h2 className="mb-5 text-h2 font-bold md:mb-6">What you gain</h2>
          <p className="text-medium">
            Each service exists to solve a specific problem. Here is what that
            looks like in practice.
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
                Cloud
              </TabsTrigger>
              <TabsTrigger
                value="tab-2"
                className="items-start justify-start rounded-none border-0 border-b p-6 text-h5 font-bold group-data-[slot=card-flat]:border-0 last-of-type:border-0 data-[state=active]:bg-scheme-foreground data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background group-data-[slot=card-flat]:data-[state=inactive]:border-0 md:px-8"
              >
                Software
              </TabsTrigger>
              <TabsTrigger
                value="tab-3"
                className="items-start justify-start rounded-none border-0 border-b p-6 text-h5 font-bold group-data-[slot=card-flat]:border-0 last-of-type:border-0 data-[state=active]:bg-scheme-foreground data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background group-data-[slot=card-flat]:data-[state=inactive]:border-0 md:px-8"
              >
                DevOps
              </TabsTrigger>
              <TabsTrigger
                value="tab-4"
                className="items-start justify-start rounded-none border-0 border-b p-6 text-h5 font-bold group-data-[slot=card-flat]:border-0 last-of-type:border-0 data-[state=active]:bg-scheme-foreground data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background group-data-[slot=card-flat]:data-[state=inactive]:border-0 md:px-8"
              >
                Managed
              </TabsTrigger>
              <TabsTrigger
                value="tab-5"
                className="items-start justify-start rounded-none border-0 border-b p-6 text-h5 font-bold group-data-[slot=card-flat]:border-0 last-of-type:border-0 data-[state=active]:bg-scheme-foreground data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background group-data-[slot=card-flat]:data-[state=inactive]:border-0 md:px-8"
              >
                Security
              </TabsTrigger>
              <TabsTrigger
                value="tab-6"
                className="items-start justify-start rounded-none border-0 border-b p-6 text-h5 font-bold group-data-[slot=card-flat]:border-0 last-of-type:border-0 data-[state=active]:bg-scheme-foreground data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background group-data-[slot=card-flat]:data-[state=inactive]:border-0 md:px-8"
              >
                Consulting
              </TabsTrigger>
            </TabsList>
            <div>
              <TabsContent
                value="tab-1"
                className="data-[state=active]:animate-tabs"
              >
                <div className="flex h-full flex-col justify-center p-6 md:p-8 lg:p-16">
                  <div className="mb-5 md:mb-6">
                    <Icon name="cloud" className="size-12 text-scheme-text" />
                  </div>
                  <h2 className="mb-5 text-h3 font-bold md:mb-6">
                    Lower infrastructure costs
                  </h2>
                  <p>
                    Right-size your cloud spend and stop paying for capacity you
                    never use.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button asChild variant="secondary"><a href={href("/contact/")}>Book a consultation</a></Button>
                    <Button asChild
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                    ><a href={href("/services/cloud-architecture-migration/")}>Learn more</a></Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="tab-2"
                className="data-[state=active]:animate-tabs"
              >
                <div className="flex h-full flex-col justify-center p-6 md:p-8 lg:p-16">
                  <div className="mb-5 md:mb-6">
                    <Icon name="work" className="size-12 text-scheme-text" />
                  </div>
                  <h2 className="mb-5 text-h3 font-bold md:mb-6">
                    Software that fits your team
                  </h2>
                  <p>
                    Replace spreadsheets and manual work with tools built around
                    how you operate.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button asChild variant="secondary"><a href={href("/contact/")}>Book a consultation</a></Button>
                    <Button asChild
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                    ><a href={href("/services/custom-software-development/")}>Learn more</a></Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="tab-3"
                className="data-[state=active]:animate-tabs"
              >
                <div className="flex h-full flex-col justify-center p-6 md:p-8 lg:p-16">
                  <div className="mb-5 md:mb-6">
                    <Icon name="pip" className="size-12 text-scheme-text" />
                  </div>
                  <h2 className="mb-5 text-h3 font-bold md:mb-6">
                    Faster release cycles
                  </h2>
                  <p>
                    Automated pipelines cut deployment time from days to minutes
                    and reduce human error.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button asChild variant="secondary"><a href={href("/contact/")}>Book a consultation</a></Button>
                    <Button asChild
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                    ><a href={href("/services/devops-automation/")}>Learn more</a></Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="tab-4"
                className="data-[state=active]:animate-tabs"
              >
                <div className="flex h-full flex-col justify-center p-6 md:p-8 lg:p-16">
                  <div className="mb-5 md:mb-6">
                    <Icon name="monitoring" className="size-12 text-scheme-text" />
                  </div>
                  <h2 className="mb-5 text-h3 font-bold md:mb-6">
                    Less downtime
                  </h2>
                  <p>
                    Proactive monitoring catches issues before your customers
                    ever notice them.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button asChild variant="secondary"><a href={href("/contact/")}>Book a consultation</a></Button>
                    <Button asChild
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                    ><a href={href("#managed-cloud")}>Learn more</a></Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="tab-5"
                className="data-[state=active]:animate-tabs"
              >
                <div className="flex h-full flex-col justify-center p-6 md:p-8 lg:p-16">
                  <div className="mb-5 md:mb-6">
                    <Icon name="security" className="size-12 text-scheme-text" />
                  </div>
                  <h2 className="mb-5 text-h3 font-bold md:mb-6">
                    Stronger security posture
                  </h2>
                  <p>
                    Identity controls, backups and hardening aligned with
                    Australian best practice.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button asChild variant="secondary"><a href={href("/contact/")}>Book a consultation</a></Button>
                    <Button asChild
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                    ><a href={href("#cloud-security")}>Learn more</a></Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="tab-6"
                className="data-[state=active]:animate-tabs"
              >
                <div className="flex h-full flex-col justify-center p-6 md:p-8 lg:p-16">
                  <div className="mb-5 md:mb-6">
                    <Icon name="build" className="size-12 text-scheme-text" />
                  </div>
                  <h2 className="mb-5 text-h3 font-bold md:mb-6">
                    A clear technology roadmap
                  </h2>
                  <p>
                    Know what to build next and why, with a plan your
                    stakeholders can understand.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button asChild variant="secondary"><a href={href("/contact/")}>Book a consultation</a></Button>
                    <Button asChild
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                    ><a href={href("#consulting")}>Learn more</a></Button>
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
