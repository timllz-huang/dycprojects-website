"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { Icon } from "@/components/icon";
import { href, site } from "@/lib/site";
import { Visual } from "@/components/visual";
import { ChevronRight } from "relume-icons";

export function Layout16() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Pipelines</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Release code with confidence every single time
            </h2>
            <p className="mb-5 text-medium md:mb-6">
              We build CI/CD pipelines that test and deploy your code
              automatically. Your team ships faster and your customers get fixes
              sooner.
            </p>
            <ul className="grid grid-cols-1 gap-4 py-2">
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <Icon name="automation" className="size-6 text-scheme-text" />
                </div>
                <span>Automated testing catches bugs before production</span>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <Icon name="deployed_code" className="size-6 text-scheme-text" />
                </div>
                <span>Deployments happen in minutes not days</span>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <Icon name="process_chart" className="size-6 text-scheme-text" />
                </div>
                <span>Every release follows the same reliable process</span>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button asChild title="Services" variant="secondary"><a href={href("/services/")}>All services</a></Button>
              <Button asChild
                title="Contact"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              ><a href={href("/contact/")}>Get in touch</a></Button>
            </div>
          </div>
          <div>
            <Visual kind="pipeline" className="w-full rounded-image" />
          </div>
        </div>
      </div>
    </section>
  );
}
