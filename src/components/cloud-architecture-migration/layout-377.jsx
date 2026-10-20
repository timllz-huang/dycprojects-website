"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { Icon } from "@/components/icon";
import { href, site } from "@/lib/site";
import { Visual } from "@/components/visual";
import { ChevronRight } from "relume-icons";

export function Layout377() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Why</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">What you gain</h2>
            <p className="text-medium">
              Cloud migration is not about technology. It is about business.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <Card className="flex flex-col">
              <div className="flex h-full flex-col justify-between p-6 md:p-8 lg:p-6">
                <div>
                  <div className="mb-3 md:mb-4">
                    <Icon name="savings" className="size-12 text-scheme-text" />
                  </div>
                  <h3 className="mb-2 text-h5 font-bold">Lower infrastructure costs</h3>
                  <p>You stop paying for idle servers and start paying for what you use.</p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <Button asChild
                    title="Consult"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  ><a href={href("/contact/")}>Book a consultation</a></Button>
                </div>
              </div>
            </Card>
            <Card className="flex flex-col">
              <div className="flex h-full flex-col justify-between p-6 md:p-8 lg:p-6">
                <div>
                  <div className="mb-3 md:mb-4">
                    <Icon name="trending_up" className="size-12 text-scheme-text" />
                  </div>
                  <h3 className="mb-2 text-h5 font-bold">Room to grow</h3>
                  <p>Scale up for busy periods and back down when demand drops, without buying new hardware.</p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <Button asChild
                    title="Consult"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  ><a href={href("/contact/")}>Book a consultation</a></Button>
                </div>
              </div>
            </Card>
            <Card className="flex flex-col">
              <div className="flex h-full flex-col justify-between p-6 md:p-8 lg:p-6">
                <div>
                  <div className="mb-3 md:mb-4">
                    <Icon name="security" className="size-12 text-scheme-text" />
                  </div>
                  <h3 className="mb-2 text-h5 font-bold">Stronger security</h3>
                  <p>Modern identity, encryption and monitoring built into the platform from day one.</p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <Button asChild
                    title="Consult"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  ><a href={href("/contact/")}>Book a consultation</a></Button>
                </div>
              </div>
            </Card>
            <Card className="flex flex-col">
              <div className="flex h-full flex-col justify-between p-6 md:p-8 lg:p-6">
                <div>
                  <div className="mb-3 md:mb-4">
                    <Icon name="backup" className="size-12 text-scheme-text" />
                  </div>
                  <h3 className="mb-2 text-h5 font-bold">Better disaster recovery</h3>
                  <p>Automated backups and recovery plans that are tested, not just written down.</p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <Button asChild
                    title="Consult"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  ><a href={href("/contact/")}>Book a consultation</a></Button>
                </div>
              </div>
            </Card>
            <Card className="flex flex-col sm:col-span-2 sm:col-start-1 sm:row-span-2 sm:row-start-3 lg:col-span-2 lg:col-start-3 lg:row-span-2 lg:row-start-1">
              <div className="flex items-center justify-center">
                <Visual photo="dashLaptop" kind="chart" className="w-full aspect-[3/2] rounded-none" />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8 lg:p-12">
                <div>
                  <p className="mb-2 text-small font-semibold">Agility</p>
                  <h3 className="mb-5 text-h3 font-bold md:mb-6">
                    Your team ships faster and responds to change without
                    waiting on infrastructure.
                  </h3>
                  <p>
                    Cloud migration removes the friction that slows your
                    business down.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
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
          </div>
        </div>
      </div>
    </section>
  );
}
