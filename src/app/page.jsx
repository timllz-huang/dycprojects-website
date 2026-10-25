import React from "react";
import { Container, Heading, Reveal, Section } from "@/components/ui";
import { Spotlight } from "@/components/motion";
import { Icon } from "@/components/icon";
import { BenefitGrid, Faq, FinalCta, PageHero, PlatformStrip, ServiceGrid, Steps, Tagline } from "@/components/sections";
import { Proof } from "@/components/proof";

export const faq = [
  [
    "What size of business do you work with?",
    "Mostly small and medium businesses, growing startups and established organisations that need dependable systems without hiring a full time engineering team.",
  ],
  [
    "What happens in the free consultation?",
    "We talk through your current setup, what is not working and what you want to achieve. Afterwards we send you practical next steps. There is no cost and no obligation to go ahead.",
  ],
  [
    "How much does a project cost?",
    "It depends on scope. After the consultation you get a written recommendation that sets out the work, the timing and the cost before anything starts.",
  ],
  [
    "Which cloud platform should we choose?",
    "The one that fits your workloads, budget and compliance needs. We work across Microsoft Azure, AWS and Google Cloud and explain the trade offs in plain terms.",
  ],
  [
    "Will a migration disrupt our business?",
    "We migrate in stages, test the rollback plan beforehand and schedule the final switch for a low impact window, so your team keeps working.",
  ],
  [
    "Do you offer support after launch?",
    "Yes. Managed cloud and support covers monitoring, patching, backups and regular cost reviews, and you can call us whenever something needs attention.",
  ],
  [
    "Do you work outside Sydney?",
    "Yes. We are based in Ryde, Sydney, and work with businesses across Australia.",
  ],
];

const problems = [
  ["hard-drives", "Ageing servers and rising IT costs", "We plan a staged move to the cloud and right size what you pay for."],
  ["table", "Spreadsheets and manual work everywhere", "We build simple tools and integrations so data is entered once."],
  ["warning", "Releases that keep breaking things", "We automate testing and deployment so changes ship safely."],
  ["phone-x", "No one to call when things go wrong", "We stay after launch with monitoring, backups and support."],
];

function Problems() {
  return (
    <Section tone="paper">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <Heading
          eyebrow="Why businesses call us"
          title="Technology should help you grow, not hold you back"
          intro="Most of the businesses we speak with are dealing with one of these. Each has a practical fix."
        />
        <Spotlight as="ul" className="grid gap-4">
          {problems.map(([icon, p, fix], i) => (
            <Reveal as="li" kind="card" key={p} delay={i * 90} data-spot="" className="spot-row flex gap-6 rounded-2xl border border-line bg-paper p-6">
              <span data-kid="pop" style={{ "--d": `${i * 90 + 250}ms` }} className="spot-icon flex size-12 shrink-0 items-center justify-center rounded-xl bg-mist text-ink-soft">
                <Icon name={icon} className="size-6" />
              </span>
              <div>
                <h3 className="text-lg">{p}</h3>
                <p className="mt-2 flex items-start gap-2 text-base text-ink-soft">
                  <Icon name="arrow-right" className="spot-arrow mt-1 size-4 shrink-0 text-brand" />
                  {fix}
                </p>
              </div>
            </Reveal>
          ))}
        </Spotlight>
      </Container>
    </Section>
  );
}

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Cloud and software engineering in Sydney"
        title={["Reliable cloud and software", "for growing businesses"]}
        intro="We design, migrate and run secure systems on Azure, AWS and Google Cloud, and build the software your team actually needs. Clear advice, honest scope and no jargon."
        photo="engineerDc"
        status="health"
      />
      <PlatformStrip />
      <Problems />
      <ServiceGrid
        tone="mist"
        title="Everything you need to design, build and run your systems"
        intro="Six core services, delivered by an engineer who explains every decision in business terms."
      />
      <Tagline lines={["We say what we will do.", "Then we do it.", "No jargon, no surprises."]} />
      <Steps
        title="A simple way to get started"
        intro="From the first conversation to ongoing support, you always know where things stand."
        steps={[
          { title: "Free consultation", body: "We learn about your systems, goals and pain points. No cost and no obligation." },
          { title: "A clear written plan", body: "You get a recommendation with scope, timing and cost, explained in plain terms." },
          { title: "Build, migrate and support", body: "We deliver in stages with regular updates, then stay on to monitor and improve." },
        ]}
      />
      <BenefitGrid
        eyebrow="Why DYC Projects"
        title="What you can expect from us"
        intro="A Sydney consultancy that keeps things simple: clear advice, honest scope and engineering you can rely on."
        cols={4}
        items={[
          ["user-circle", "One point of contact", "You deal directly with the engineer responsible for your work."],
          ["cloud", "Three major clouds", "Microsoft Azure, Amazon Web Services and Google Cloud."],
          ["chat-circle-text", "Plain English advice", "Every recommendation is tied to a business outcome you can act on."],
          ["map-pin", "Based in Sydney", "Located in Ryde and working with businesses across Australia."],
        ]}
      />
      <Proof />
      <Faq items={faq} tone="mist" intro="Straight answers to the things people ask before getting in touch." />
      <FinalCta />
    </>
  );
}
