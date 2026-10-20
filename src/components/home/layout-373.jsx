"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/icon";
import React from "react";
import { href } from "@/lib/site";
import { services } from "@/lib/services";
import { ChevronRight } from "relume-icons";

function ServiceCard({ s, featured }) {
  return (
    <Card className={featured ? "flex flex-col sm:col-span-2" : "flex flex-col"}>
      <div
        className={
          featured
            ? "flex h-full flex-col justify-between p-6 md:p-8 lg:p-12"
            : "flex h-full flex-col justify-between p-6 md:p-8 lg:p-6"
        }
      >
        <div>
          <div className={featured ? "mb-5 md:mb-6" : "mb-3 md:mb-4"}>
            <Icon name={s.icon} className="size-12 text-blumine" />
          </div>
          <h3 className={featured ? "mb-5 text-h3 font-bold md:mb-6" : "mb-2 text-h5 font-bold"}>{s.title}</h3>
          <p>{s.short}</p>
        </div>
        <div className={featured ? "mt-6 flex flex-wrap items-center gap-4 md:mt-8" : "mt-5 flex items-center gap-4 md:mt-6"}>
          {featured && (
            <Button asChild variant="secondary">
              <a href={href(s.to)}>Learn more</a>
            </Button>
          )}
          <Button
            asChild
            variant="link"
            size="link"
            iconRight={<ChevronRight className="text-scheme-text" />}
          >
            <a href={href(featured ? "/contact/" : s.to)} aria-label={featured ? "Book a consultation" : `Learn more about ${s.title}`}>
              {featured ? "Book a consultation" : "Learn more"}
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
}

export function Layout373() {
  return (
    <section id="services" className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Services</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">What we do</h2>
            <p className="text-medium">Six core services to design, build and run your systems.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <ServiceCard s={services[0]} featured />
          <ServiceCard s={services[1]} />
          <ServiceCard s={services[2]} />
          <ServiceCard s={services[3]} />
          <ServiceCard s={services[4]} />
          <ServiceCard s={services[5]} featured />
        </div>
      </div>
    </section>
  );
}
