export const cloud = {
  hero: {
    eyebrow: "Cloud architecture & migration",
    title: ["Move to the cloud", "without the chaos"],
    intro:
      "We assess your infrastructure and plan secure, scalable moves to Microsoft Azure, AWS or Google Cloud, including hybrid setups that keep some systems on premises.",
    status: "migration",
    photo: "dcAisle",
  },
  splits: [
    {
      eyebrow: "Assess",
      title: "We find the truth before we move anything",
      body: "We look hard at what you have: every server, application and dependency. Then we tell you what it costs to keep and what it costs to change.",
      photo: "dashDark",
      bullets: [
        ["Current system analysis", "We map your infrastructure and how each piece talks to the others."],
        ["Workload evaluation", "We measure performance and usage to see what belongs in the cloud."],
        ["Risk identification", "We find the weak points early and plan around them."],
      ],
    },
    {
      eyebrow: "Plan",
      title: "A roadmap built for your business, not a template",
      body: "We design the target architecture and choose the platform that fits the work. Cost, capability and compliance all weigh in.",
      photo: "whiteboard",
      bullets: [
        ["Platform selection", "Azure, AWS or Google Cloud, matched to your workloads."],
        ["Target architecture", "A clear picture of the end state before work begins."],
        ["Migration roadmap", "Phases that keep your business running, each with a clear outcome."],
      ],
    },
    {
      eyebrow: "Migrate",
      title: "The move itself, with minimal disruption",
      body: "We transfer data, move applications and cut over in a planned window. Your team keeps working while we do the heavy lifting.",
      photo: "fiber",
      bullets: [
        ["Data transfer", "Large datasets move in stages and are validated before cutover."],
        ["Applications", "Lift and shift or modernise, whichever gives the better return."],
        ["Go live", "A scheduled cutover with a rollback plan tested in advance."],
      ],
    },
    {
      eyebrow: "Hybrid",
      title: "Some things belong on premises. That is fine.",
      body: "Not every workload should move to the public cloud. We connect your own systems with Azure, AWS or Google Cloud where it makes sense.",
      photo: "rackCables",
      bullets: [
        ["Integrated networking", "Secure, reliable links between your site and the cloud."],
        ["Identity management", "One sign in for your team across both environments."],
        ["Gradual migration", "Move workloads at your own pace, over months rather than all at once."],
      ],
    },
  ],
  tagline: ["Migration is the start,", "not the finish."],
  benefits: {
    eyebrow: "What you gain",
    title: "Cloud migration is a business decision",
    intro: "The technology matters because of what it does for your costs, your team and your risk.",
    items: [
      ["coins", "Lower infrastructure costs", "Stop paying for idle servers and pay for what you use."],
      ["trend-up", "Room to grow", "Scale up for busy periods and back down when demand drops."],
      ["shield-check", "Stronger security", "Modern identity, encryption and monitoring from day one."],
      ["arrow-counter-clockwise", "Better disaster recovery", "Automated backups and recovery plans that are tested."],
      ["gauge", "Ongoing optimisation", "We review usage and tune the environment so you never pay for waste."],
      ["headset", "Someone to call", "When something breaks, you call us and we work it through to a fix."],
    ],
  },
  steps: {
    eyebrow: "How it works",
    title: "Three stages, no surprises",
    intro: "Each stage ends with something you can see and sign off.",
    steps: [
      { title: "Assess", body: "A review of your current systems, costs and risks, with a written summary." },
      { title: "Plan", body: "Target architecture, platform choice and a phased roadmap with timing and cost." },
      { title: "Migrate and optimise", body: "A staged move with tested rollback, then ongoing tuning and support." },
    ],
  },
  faq: [
    [
      "How long does a migration take?",
      "It depends on how many systems you have and how they connect. The assessment gives you a realistic timeline before any work starts.",
    ],
    [
      "Can we keep some systems on our own servers?",
      "Yes. A hybrid setup connects your own infrastructure with the cloud, and you can move more over later if it makes sense.",
    ],
    [
      "Which platform is best for us?",
      "There is no single answer. We compare Azure, AWS and Google Cloud against your workloads, budget and compliance needs, and explain the trade offs.",
    ],
    [
      "What happens after the move?",
      "We monitor performance and usage, tune the environment to control costs, and stay available when you need changes or support.",
    ],
  ],
  cta: "Talk to us about your cloud migration",
};
