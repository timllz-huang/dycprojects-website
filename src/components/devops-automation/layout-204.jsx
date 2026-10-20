"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { href, site } from "@/lib/site";
import { Visual } from "@/components/visual";
import { ChevronRight } from "relume-icons";

export function Layout204() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <Visual photo="codePython" kind="code" className="w-full rounded-image" />
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-3 font-semibold md:mb-4">Infrastructure</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Manage cloud environments as code not by hand
            </h2>
            <p className="mb-5 text-medium md:mb-6">
              Infrastructure as code means your servers, networks and security
              settings live in version-controlled files. Spin up a new
              environment in hours and know it matches production exactly.
            </p>
            <ul className="flex flex-wrap items-center gap-3 py-2" aria-label="Tooling">
              {["Terraform", "Bicep", "Azure DevOps", "GitHub Actions", "Docker", "Kubernetes"].map((t) => (
                <li key={t} className="rounded-badge border border-scheme-border bg-scheme-foreground px-3 py-1.5 text-small font-semibold">
                  {t}
                </li>
              ))}
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
