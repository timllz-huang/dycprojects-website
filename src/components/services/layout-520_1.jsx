"use client";

import { Button } from "@/components/ui/button";
import { BackgroundCard } from "@/components/ui/card";
import React from "react";
import { href, site } from "@/lib/site";
import { Icon } from "@/components/icon";
import { Visual } from "@/components/visual";
import { ChevronRight } from "relume-icons";

export function Layout520_1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3 btn-light alternate logo-alt">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Partnership</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">Built to last</h2>
            <p className="text-medium">
              We work with Australian businesses for the long haul.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <BackgroundCard className="relative flex min-h-[20rem] flex-col justify-end p-6 md:min-h-[22rem] md:p-8">
            <div className="absolute inset-0 z-0">
              <Visual photo="teamTable" kind="consult" className="size-full rounded-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-blumine-darker via-blumine-darker/85 to-blumine-darker/30" />
            </div>
            <div className="relative z-10">
              <div className="mb-5 md:mb-6">
                <Icon name="forum" className="size-12 text-white" />
              </div>
              <h3 className="mb-3 text-h4 font-bold text-white md:mb-4">
                Transparent communication
              </h3>
              <p className="text-white">
                You always know the status of your project.
              </p>
              <div className="mt-5 flex items-center md:mt-6">
                <Button asChild
                  variant="link-alt"
                  size="link"
                  iconRight={<ChevronRight className="text-white" />}
                ><a href={href("/#process")}>How we work</a></Button>
              </div>
            </div>
          </BackgroundCard>
          <BackgroundCard className="relative flex min-h-[20rem] flex-col justify-end p-6 md:min-h-[22rem] md:p-8">
            <div className="absolute inset-0 z-0">
              <Visual photo="whiteboardTeam" kind="pipeline" className="size-full rounded-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-blumine-darker via-blumine-darker/85 to-blumine-darker/30" />
            </div>
            <div className="relative z-10">
              <div className="mb-5 md:mb-6">
                <Icon name="event_available" className="size-12 text-white" />
              </div>
              <h3 className="mb-3 text-h4 font-bold text-white md:mb-4">
                Reliable delivery
              </h3>
              <p className="text-white">We do what we say, on time.</p>
              <div className="mt-5 flex items-center md:mt-6">
                <Button asChild
                  variant="link-alt"
                  size="link"
                  iconRight={<ChevronRight className="text-white" />}
                ><a href={href("/#process")}>How we work</a></Button>
              </div>
            </div>
          </BackgroundCard>
          <BackgroundCard className="relative flex min-h-[20rem] flex-col justify-end p-6 md:min-h-[22rem] md:p-8">
            <div className="absolute inset-0 z-0">
              <Visual photo="serverLights" kind="shield" className="size-full rounded-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-blumine-darker via-blumine-darker/85 to-blumine-darker/30" />
            </div>
            <div className="relative z-10">
              <div className="mb-5 md:mb-6">
                <Icon name="support_agent" className="size-12 text-white" />
              </div>
              <h3 className="mb-3 text-h4 font-bold text-white md:mb-4">
                Ongoing support
              </h3>
              <p className="text-white">
                We stay after launch to keep things running.
              </p>
              <div className="mt-5 flex items-center md:mt-6">
                <Button asChild
                  variant="link-alt"
                  size="link"
                  iconRight={<ChevronRight className="text-white" />}
                ><a href={href("/contact/")}>Talk to us</a></Button>
              </div>
            </div>
          </BackgroundCard>
        </div>
      </div>
    </section>
  );
}
