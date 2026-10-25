import React from "react";
import { BenefitGrid, Faq, FeatureSplit, FinalCta, PageHero, Steps, Tagline } from "@/components/sections";

/** Shared layout for the individual service pages, driven by a data object. */
export function ServicePage({ d }) {
  return (
    <>
      <PageHero {...d.hero} />
      {d.splits.map((s, i) => (
        <FeatureSplit key={s.title} {...s} reverse={i % 2 === 1} tone={i % 2 === 1 ? "mist" : "paper"} />
      ))}
      <Tagline lines={d.tagline} tone={d.splits.length % 2 === 1 ? "mist" : "paper"} />
      <BenefitGrid {...d.benefits} tone={d.splits.length % 2 === 1 ? "paper" : "mist"} />
      <Steps {...d.steps} id="steps" tone={d.splits.length % 2 === 1 ? "mist" : "paper"} />
      <Faq items={d.faq} tone={d.splits.length % 2 === 1 ? "paper" : "mist"} />
      <FinalCta title={d.cta} />
    </>
  );
}
