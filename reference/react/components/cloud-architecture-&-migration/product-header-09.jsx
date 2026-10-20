"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { VideoIframe } from "@/components/ui/video-iframe";
import React, { Fragment } from "react";
import { Check, KeyboardArrowDown, PlayCircle } from "relume-icons";

const Star = () => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => {
        const isFullStar = i < fullStars;
        const isHalfStar = hasHalfStar && i === fullStars;

        return (
          <div key={i}>
            {isFullStar ? (
              <StarFull className="text-scheme-text" />
            ) : isHalfStar ? (
              <StarHalf className="text-scheme-text" />
            ) : (
              <Star className="text-scheme-text" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export function ProductHeader9() {
  return (
    <header className="px-[5%] py-12 md:py-16 lg:py-20 scheme-1">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:gap-y-16 lg:grid-cols-[1.25fr_0.5fr] lg:gap-x-20">
          <div>
            <Breadcrumb className="mb-6 flex flex-wrap items-center text-small">
              <BreadcrumbList>
                <Fragment>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Services</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </Fragment>
                <Fragment>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Cloud</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </Fragment>
                <Fragment>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Migration project</BreadcrumbLink>
                  </BreadcrumbItem>
                </Fragment>
              </BreadcrumbList>
            </Breadcrumb>
            <h1 className="mb-3 text-h3 font-bold md:mb-4">
              Retail platform migration
            </h1>
            <p className="text-medium">
              A national retailer moved 40 servers to Azure without a single
              hour of unplanned downtime.
            </p>
            <div className="my-8 border border-scheme-border px-4 py-8 md:px-8">
              <p className="mb-3 text-medium font-semibold md:mb-4">
                Includes:
              </p>
              <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-6">
                <div className="flex">
                  <div className="mr-4 self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Post-migration support</p>
                </div>
                <div className="flex">
                  <div className="mr-4 self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Post-migration support</p>
                </div>
                <div className="flex">
                  <div className="mr-4 self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Post-migration support</p>
                </div>
                <div className="flex">
                  <div className="mr-4 self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Post-migration support</p>
                </div>
                <div className="flex">
                  <div className="mr-4 self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Post-migration support</p>
                </div>
                <div className="flex">
                  <div className="mr-4 self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Post-migration support</p>
                </div>
                <div className="flex">
                  <div className="mr-4 self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Post-migration support</p>
                </div>
                <div className="flex">
                  <div className="mr-4 self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Post-migration support</p>
                </div>
              </div>
            </div>
            <h2 className="mb-3 text-h5 font-bold md:mb-4">More information</h2>
            <Accordion type="multiple">
              <AccordionItem value="item-0">
                <AccordionTrigger
                  className="justify-start py-4 text-medium font-semibold md:py-5"
                  icon={
                    <KeyboardArrowDown className="order-first mr-4 h-6 w-[1.75rem] shrink-0 text-scheme-text transition-transform duration-300 md:size-6" />
                  }
                >
                  The challenge
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  We monitor the environment and manage costs monthly. The
                  client calls us when they need changes. We answer.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-1">
                <AccordionTrigger
                  className="justify-start py-4 text-medium font-semibold md:py-5"
                  icon={
                    <KeyboardArrowDown className="order-first mr-4 h-6 w-[1.75rem] shrink-0 text-scheme-text transition-transform duration-300 md:size-6" />
                  }
                >
                  The solution
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  We monitor the environment and manage costs monthly. The
                  client calls us when they need changes. We answer.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger
                  className="justify-start py-4 text-medium font-semibold md:py-5"
                  icon={
                    <KeyboardArrowDown className="order-first mr-4 h-6 w-[1.75rem] shrink-0 text-scheme-text transition-transform duration-300 md:size-6" />
                  }
                >
                  The outcome
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  We monitor the environment and manage costs monthly. The
                  client calls us when they need changes. We answer.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger
                  className="justify-start py-4 text-medium font-semibold md:py-5"
                  icon={
                    <KeyboardArrowDown className="order-first mr-4 h-6 w-[1.75rem] shrink-0 text-scheme-text transition-transform duration-300 md:size-6" />
                  }
                >
                  What we did
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  We monitor the environment and manage costs monthly. The
                  client calls us when they need changes. We answer.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger
                  className="justify-start py-4 text-medium font-semibold md:py-5"
                  icon={
                    <KeyboardArrowDown className="order-first mr-4 h-6 w-[1.75rem] shrink-0 text-scheme-text transition-transform duration-300 md:size-6" />
                  }
                >
                  What the client said
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  We monitor the environment and manage costs monthly. The
                  client calls us when they need changes. We answer.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger
                  className="justify-start py-4 text-medium font-semibold md:py-5"
                  icon={
                    <KeyboardArrowDown className="order-first mr-4 h-6 w-[1.75rem] shrink-0 text-scheme-text transition-transform duration-300 md:size-6" />
                  }
                >
                  Timeline
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  We monitor the environment and manage costs monthly. The
                  client calls us when they need changes. We answer.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger
                  className="justify-start py-4 text-medium font-semibold md:py-5"
                  icon={
                    <KeyboardArrowDown className="order-first mr-4 h-6 w-[1.75rem] shrink-0 text-scheme-text transition-transform duration-300 md:size-6" />
                  }
                >
                  Cost savings
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  We monitor the environment and manage costs monthly. The
                  client calls us when they need changes. We answer.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger
                  className="justify-start py-4 text-medium font-semibold md:py-5"
                  icon={
                    <KeyboardArrowDown className="order-first mr-4 h-6 w-[1.75rem] shrink-0 text-scheme-text transition-transform duration-300 md:size-6" />
                  }
                >
                  Support after launch
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  We monitor the environment and manage costs monthly. The
                  client calls us when they need changes. We answer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <div className="lg:sticky lg:top-32">
              <Dialog>
                <DialogTrigger className="relative mb-5 flex w-full items-center justify-center md:mb-6">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail-landscape.svg"
                    alt="Relume placeholder image"
                    className="size-full rounded-image object-cover"
                  />
                  <span className="absolute inset-0 z-10 bg-neutral-darkest/50" />
                  <PlayCircle className="absolute z-20 size-20 text-white" />
                </DialogTrigger>
                <DialogContent>
                  <VideoIframe video="https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW" />
                </DialogContent>
              </Dialog>
              <div className="mb-7 flex flex-col flex-wrap sm:flex-row md:mb-8">
                <h4 className="text-h4 font-bold">Free</h4>
                <div className="mx-4 hidden w-px self-stretch bg-scheme-border sm:block" />
                <div className="flex flex-col gap-1">
                  <Star rating={3.5} />
                  <p className="text-small">Consultation by request</p>
                </div>
              </div>
              <div className="mt-2 mb-4 flex flex-col gap-y-4">
                <Button title="Book a consultation">Book a consultation</Button>
                <Button title="Get in touch" variant="secondary">
                  Get in touch
                </Button>
              </div>
              <p className="text-center text-tiny">No obligation assessment</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
