"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { Icon } from "@/components/icon";
import { href, site } from "@/lib/site";
import { Visual } from "@/components/visual";
import { ChevronRight } from "relume-icons";

export function Layout254() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Benefits</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              What automation actually does for your business
            </h2>
            <p className="text-medium">
              DevOps is not a buzzword. It is a way to ship software faster,
              spend less on operations and sleep better at night.
            </p>
          </div>
        </div>
        <div className="grid place-items-center gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-[1fr_1.5fr_1fr] lg:gap-x-12">
          <div className="grid w-full grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16">
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <Icon name="feature_search" className="size-12 text-scheme-text" />
              </div>
              <h3 className="mb-3 text-h5 font-bold md:mb-4">
                Faster time-to-market
              </h3>
              <p>
                Features reach customers in hours instead of weeks, giving you
                an edge over slower competitors.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <Icon name="engineering" className="size-12 text-scheme-text" />
              </div>
              <h3 className="mb-3 text-h5 font-bold md:mb-4">
                Lower operational overhead
              </h3>
              <p>
                Automated processes free your engineers from repetitive manual
                tasks, reducing the need for extra operational staff.
              </p>
            </div>
          </div>
          <div className="relative order-last w-full sm:col-span-2 lg:order-none lg:col-span-1">
            <Visual photo="dashLaptop" kind="chart" className="h-auto w-full rounded-image" />
          </div>
          <div className="grid w-full grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16">
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <Icon name="automation" className="size-12 text-scheme-text" />
              </div>
              <h3 className="mb-3 text-h5 font-bold md:mb-4">
                Improved system reliability
              </h3>
              <p>
                Consistent deployments and automated testing mean fewer
                surprises in production and less downtime for customers.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <Icon name="approval" className="size-12 text-scheme-text" />
              </div>
              <h3 className="mb-3 text-h5 font-bold md:mb-4">
                Reduced deployment risk
              </h3>
              <p>
                Automatic rollbacks and approval gates catch problems early,
                protecting your revenue and your reputation.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20">
          <Button asChild variant="secondary"><a href={href("/services/")}>All services</a></Button>
          <Button asChild
            iconRight={<ChevronRight className="text-scheme-text" />}
            variant="link"
            size="link"
          ><a href={href("/contact/")}>Get in touch</a></Button>
        </div>
      </div>
    </section>
  );
}
