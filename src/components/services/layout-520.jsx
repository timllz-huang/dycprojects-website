"use client";

import { Button } from "@/components/ui/button";
import { BackgroundCard } from "@/components/ui/card";
import { Icon } from "@/components/icon";
import { Visual } from "@/components/visual";
import React from "react";
import { href } from "@/lib/site";
import { services } from "@/lib/services";
import { ChevronRight } from "relume-icons";

export function Layout520() {
  return (
    <section id="all-services" className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2 btn-light alternate logo-alt">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">What we do</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">Six core services</h2>
            <p className="text-medium">Practical engineering across the full lifecycle of your digital systems.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {services.map((s) => {
            const hasPage = !s.to.includes("#");
            return (
              <BackgroundCard
                key={s.id}
                id={s.id}
                className="relative flex min-h-[20rem] scroll-mt-28 flex-col p-6 md:min-h-[22rem] md:p-8"
              >
                <div className="absolute inset-0 z-0">
                  <Visual photo={s.photo} kind={s.visual} sizes="(min-width: 992px) 33vw, (min-width: 768px) 50vw, 100vw" className="size-full rounded-none" />
                  <div className="absolute inset-0 bg-gradient-to-b from-blumine-darkest/85 via-blumine-darkest/70 to-blumine-darkest/95" />
                </div>
                <div className="relative z-10 flex flex-1 flex-col">
                  <div className="mb-5 md:mb-6">
                    <Icon name={s.icon} className="size-12 text-white" />
                  </div>
                  <h3 className="mb-3 text-h5 font-bold text-white md:mb-4">{s.title}</h3>
                  <p className="text-white/85">{s.short}</p>
                  <div className="mt-auto flex items-center pt-5 md:pt-6">
                    <Button asChild variant="link-alt" size="link" iconRight={<ChevronRight className="text-white" />}>
                      <a href={href(hasPage ? s.to : "/contact/")}>{hasPage ? "Learn more" : "Ask about this service"}</a>
                    </Button>
                  </div>
                </div>
              </BackgroundCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
