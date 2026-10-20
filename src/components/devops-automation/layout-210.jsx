"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { href, site } from "@/lib/site";
import { Visual } from "@/components/visual";
import { ChevronRight } from "relume-icons";

export function Layout210() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <Visual kind="pipeline" className="w-full rounded-image" />
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-3 font-semibold md:mb-4">Deployments</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Take the manual work out of every release
            </h2>
            <p className="mb-5 text-medium md:mb-6">
              Automated deployment strategies remove the human error from
              shipping software. Your engineers spend their time building
              features instead of babysitting servers.
            </p>
            <ul className="my-4 list-disc pl-5">
              <li className="my-1 self-start pl-2">
                <p>Zero-downtime rollouts keep your customers online</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Automatic rollbacks undo bad releases instantly</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Approval gates give managers control without delays</p>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button asChild title="Services" variant="secondary"><a href={href("/services/")}>All services</a></Button>
              <Button asChild
                title="Contact"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              ><a href={href("/contact/")}>Get in touch</a></Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
