import React from "react";
import { BenefitGrid, Faq, FeatureSplit, FinalCta, PageHero, ServiceGrid, Steps } from "@/components/sections";

export const faq = [
  [
    "Do I need to know which service I need?",
    "No. Most people start with a free consultation. We listen first, then recommend the smallest piece of work that solves the real problem.",
  ],
  [
    "Can you combine services in one project?",
    "Yes. A cloud migration often includes security hardening and automation, and we plan them together so nothing is done twice.",
  ],
  [
    "How is pricing worked out?",
    "After the consultation you get a written recommendation with the scope, timing and cost before any work starts.",
  ],
  [
    "Do you offer ongoing support?",
    "Yes. Managed cloud and support covers monitoring, patching, backups and regular cost reviews.",
  ],
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={["Cloud and software services", "you can depend on"]}
        intro="Dependable systems for Australian businesses, without the overhead of a full time engineering team. Pick one service or combine them in a single plan."
        photo="bizMeeting"
        status="health"
      />
      <ServiceGrid
        tone="mist"
        eyebrow="What we do"
        title="Six core services"
        intro="Practical engineering across the full lifecycle of your digital systems."
      />
      <FeatureSplit
        id="managed-cloud"
        eyebrow="Managed cloud & support"
        title="Keep your environment healthy, every day"
        body="We look after your cloud environment so problems are caught early and costs stay under control."
        photo="monitoring"
        bullets={[
          ["Monitoring and alerting", "Issues are spotted before your customers notice."],
          ["Patching and backups", "Systems stay current and data can be restored."],
          ["Regular cost reviews", "We flag waste and recommend changes before costs creep up."],
        ]}
      />
      <FeatureSplit
        id="cloud-security"
        tone="mist"
        reverse
        eyebrow="Cloud security & compliance"
        title="Security that matches the risk"
        body="Sensible controls aligned with Australian guidance, explained so your team understands why each one matters."
        photo="padlock"
        bullets={[
          ["Identity and access control", "Multi factor sign in and access limited to what each person needs."],
          ["Backup and recovery", "Backups that are tested, so recovery works when you need it."],
          ["Essential Eight alignment", "Controls mapped to the ACSC Essential Eight maturity model."],
        ]}
      />
      <FeatureSplit
        id="consulting"
        eyebrow="Technical consulting"
        title="Independent advice in plain English"
        body="When you need to make a technology decision, we help you understand the options and what each one means for the business."
        photo="planningPaper"
        bullets={[
          ["Technology roadmaps", "Know what to do next and why, in an order that makes sense."],
          ["Platform and vendor advice", "Compare options on cost, capability and risk."],
          ["Second opinions", "A fresh look at a plan or quote before you commit."],
        ]}
      />
      <BenefitGrid
        tone="mist"
        eyebrow="Our approach"
        title="We speak business, not just tech"
        intro="You do not need more jargon. You need a clear path from where you are to where you want to be."
        items={[
          ["calendar-check", "Reliable delivery", "We commit to timelines we can keep and give honest updates along the way."],
          ["wrench", "Practical solutions", "No over engineering. We build what your business needs and nothing it does not."],
          ["handshake", "Long term partnership", "We stay after launch. Monitoring, optimisation and support become part of how you operate."],
        ]}
      />
      <Steps
        tone="paper"
        title="A simple way to get started"
        intro="From the first conversation to ongoing support, you always know where things stand."
        steps={[
          { title: "Free consultation", body: "We learn about your systems, goals and pain points. No cost and no obligation." },
          { title: "A clear written plan", body: "You get a recommendation with scope, timing and cost, explained in plain terms." },
          { title: "Build, migrate and support", body: "We deliver in stages with regular updates, then stay on to monitor and improve." },
        ]}
      />
      <Faq items={faq} tone="mist" />
      <FinalCta />
    </>
  );
}
