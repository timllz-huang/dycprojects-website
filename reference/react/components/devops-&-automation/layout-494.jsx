"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VideoIframe } from "@/components/ui/video-iframe";
import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import { ChevronRight, PlayCircle } from "relume-icons";

const useActiveValue = (initialValue) => {
  const [activeValue, setActiveValue] = useState(initialValue);

  const getActiveValue = (tabValue) => {
    return {
      height: activeValue === tabValue ? "auto" : 0,
      opacity: activeValue === tabValue ? 1 : 0,
    };
  };

  return {
    setActiveValue,
    getActiveValue,
  };
};

export function Layout494() {
  const activeValueState = useActiveValue("tab-one");
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="relative">
          <div>
            <div className="w-full pr-0 md:w-1/2 md:pr-6 lg:pr-10">
              <div className="mb-8 w-full md:w-auto">
                <p className="mb-3 font-semibold md:mb-4">Containers</p>
                <h1 className="mb-5 text-h2 font-bold md:mb-6">
                  Build once and run it anywhere
                </h1>
                <p className="text-medium">
                  Containers package your application with everything it needs
                  to run. The same image moves from a developer laptop to
                  testing to production without surprises.
                </p>
              </div>
            </div>
            <div className="w-full pr-0 md:w-1/2 md:pr-6 lg:pr-10">
              <Tabs
                defaultValue="tab-one"
                onValueChange={activeValueState.setActiveValue}
              >
                <div className="static flex flex-col flex-wrap justify-stretch md:block">
                  <TabsList className="mb-8 flex-col md:mb-0">
                    <TabsTrigger
                      value="tab-one"
                      className="flex-col items-start justify-start rounded-none border-0 border-b px-0 py-4 text-left whitespace-normal data-[state=active]:border-scheme-border data-[state=active]:bg-transparent data-[state=inactive]:border-scheme-border data-[state=inactive]:opacity-25"
                    >
                      <h2 className="text-h5 font-bold">Portability</h2>
                      <motion.div
                        initial={false}
                        animate={activeValueState.getActiveValue("tab-one")}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3 md:mt-4">
                          Move workloads between cloud providers or on-premises
                          without rewriting your application.
                        </p>
                      </motion.div>
                    </TabsTrigger>
                    <TabsTrigger
                      value="tab-two"
                      className="flex-col items-start justify-start rounded-none border-0 border-b px-0 py-4 text-left whitespace-normal data-[state=active]:border-scheme-border data-[state=active]:bg-transparent data-[state=inactive]:border-scheme-border data-[state=inactive]:opacity-25"
                    >
                      <h2 className="text-h5 font-bold">Efficiency</h2>
                      <motion.div
                        initial={false}
                        animate={activeValueState.getActiveValue("tab-two")}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3 md:mt-4">
                          Run more services on less hardware and cut your cloud
                          bill.
                        </p>
                      </motion.div>
                    </TabsTrigger>
                    <TabsTrigger
                      value="tab-three"
                      className="flex-col items-start justify-start rounded-none border-0 border-b px-0 py-4 text-left whitespace-normal data-[state=active]:border-scheme-border data-[state=active]:bg-transparent data-[state=inactive]:border-scheme-border data-[state=inactive]:opacity-25"
                    >
                      <h2 className="text-h5 font-bold">Consistency</h2>
                      <motion.div
                        initial={false}
                        animate={activeValueState.getActiveValue("tab-three")}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3 md:mt-4">
                          Eliminate the classic it works on my machine problem
                          for good.
                        </p>
                      </motion.div>
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent
                    value="tab-one"
                    className="relative top-0 right-0 bottom-0 left-auto flex size-full items-center justify-center data-[state=active]:animate-tabs md:absolute md:w-1/2 md:pl-6 lg:pl-10"
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder image 1"
                          className="rounded-image"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </TabsContent>
                  <TabsContent
                    value="tab-two"
                    className="relative top-0 right-0 bottom-0 left-auto flex size-full items-center justify-center data-[state=active]:animate-tabs md:absolute md:w-1/2 md:pl-6 lg:pl-10"
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Dialog>
                          <DialogTrigger className="relative flex w-full items-center justify-center overflow-hidden rounded-image">
                            <img
                              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail.svg"
                              alt="Relume placeholder image 2"
                              className="size-full object-cover"
                            />
                            <PlayCircle className="absolute z-20 size-20 text-white" />
                            <span className="absolute inset-0 z-10 bg-neutral-darkest/50" />
                          </DialogTrigger>
                          <DialogContent>
                            <VideoIframe video="https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW" />
                          </DialogContent>
                        </Dialog>
                      </motion.div>
                    </AnimatePresence>
                  </TabsContent>
                  <TabsContent
                    value="tab-three"
                    className="relative top-0 right-0 bottom-0 left-auto flex size-full items-center justify-center data-[state=active]:animate-tabs md:absolute md:w-1/2 md:pl-6 lg:pl-10"
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder image 3"
                          className="rounded-image"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
            <div className="w-full pr-0 md:w-1/2 md:pr-6 lg:pr-10">
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button variant="secondary">Services</Button>
                <Button
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Contact
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
