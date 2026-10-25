"use client";

import React, { useId, useState } from "react";
import { Button, Container, Eyebrow, Heading, Reveal, Section, motion } from "@/components/ui";
import { Icon } from "@/components/icon";
import { Photo } from "@/components/photo";
import { href, site } from "@/lib/site";
import { services } from "@/lib/services";
import { cn } from "@/lib/utils";
import { HeroStatus, Marquee, StepsFlow } from "@/components/motion";

/* ------------------------------------------------------------------ Hero */

const reassurance = ["Free first consultation", "No obligation", "Based in Sydney"];

export function PageHero({ eyebrow, title, intro, photo, status, cta = "Book a free consultation", ctaTo = "/contact/", note = true }) {
  return (
    <section className="bg-paper pt-24 pb-16 md:pb-24">
      <Container className="mt-12 grid items-center gap-12 md:mt-16 lg:grid-cols-[minmax(0,680px)_1fr] lg:gap-16">
        <div>
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="text-hero max-w-[680px] pb-2 text-4xl md:text-5xl">
              {title.map((line, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <br className="hidden md:block" />}
                  {i > 0 && <span className="md:hidden"> </span>}
                  {line}
                </React.Fragment>
              ))}
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 max-w-[680px] text-lg text-ink-soft">{intro}</p>
          </Reveal>
          <Reveal delay={200} className="mt-8">
            <Button to={ctaTo} arrow>
              {cta}
            </Button>
            {note && (
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
                {reassurance.map((t) => (
                  <li key={t} className="inline-flex items-center gap-2">
                    <Icon name="check-circle" className="size-4 text-success" />
                    {t}
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        </div>
        {photo && (
          <Reveal delay={150} className="relative">
            <Photo name={photo} priority className="aspect-[4/3] rounded-3xl lg:aspect-[4/5]" />
            {status && <HeroStatus kind={status} />}
          </Reveal>
        )}
      </Container>
    </section>
  );
}

/* --------------------------------------------------------- Platform strip */

export function PlatformStrip() {
  const items = [
    ["windows-logo", "Microsoft Azure"],
    ["amazon-logo", "Amazon Web Services"],
    ["google-logo", "Google Cloud"],
    ["buildings", "Hybrid and on premises"],
  ];
  return (
    <section aria-label="Platforms" className="border-y border-line bg-mist py-8">
      <Container className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-12">
        <p className="shrink-0 text-sm font-semibold text-ink-soft">Platforms we work with</p>
        <Marquee className="w-full md:max-w-2xl" seconds={24}>
          {items.map(([icon, label]) => (
            <span key={label} className="mr-12 inline-flex items-center gap-2 text-base font-semibold whitespace-nowrap text-ink">
              <Icon name={icon} className="size-5 text-ink-muted" />
              {label}
            </span>
          ))}
        </Marquee>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------ Service grid */

export function ServiceGrid({ eyebrow = "Services", title, intro, tone = "paper" }) {
  return (
    <Section tone={tone} id="services">
      <Container>
        <Heading eyebrow={eyebrow} title={title} intro={intro} />
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            return (
              <Reveal as="li" kind="card" key={s.id} delay={(i % 3) * 90}>
                <a
                  href={href(s.to)}
                  className={cn(
                    "group flex h-full flex-col rounded-2xl border border-line bg-paper p-6 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg active:scale-[0.98] md:p-8",
                    motion
                  )}
                >
                  <span data-kid="pop" style={{ "--d": `${(i % 3) * 90 + 250}ms` }} className="flex size-12 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <Icon name={s.icon} className={cn("size-6", motion, "group-hover:-rotate-6 group-hover:scale-110")} />
                  </span>
                  <h3 className="mt-6 text-xl">{s.title}</h3>
                  <p className="mt-2 text-base text-ink-soft">{s.short}</p>
                  <ul className="mt-6 space-y-2 text-sm text-ink-soft">
                    {s.points.map((p, j) => (
                      <li key={p} data-kid="left" style={{ "--d": `${(i % 3) * 90 + 400 + j * 60}ms` }} className="flex items-center gap-2">
                        <Icon name="check" className="size-4 text-brand" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-brand">
                    {s.cta}
                    <Icon name="arrow-right" className={cn("size-4", motion, "group-hover:translate-x-1")} />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------- Tagline reveal */

export function Tagline({ lines, tone = "paper" }) {
  let n = 0;
  return (
    <Section tone={tone}>
      <Container>
        <p data-tagline="" className="max-w-[680px] text-4xl font-semibold tracking-tight md:text-5xl">
          {lines.map((line, li) => (
            <span key={li} className="block [text-wrap:balance]">
              {line.split(" ").map((w) => (
                <React.Fragment key={n++}>
                  <span className="tagline-word">{w}</span>{" "}
                </React.Fragment>
              ))}
            </span>
          ))}
        </p>
      </Container>
    </Section>
  );
}

/* ---------------------------------------------------------------- Steps */

export function Steps({ eyebrow = "How it works", title, intro, steps, tone = "mist", id = "process" }) {
  return (
    <Section tone={tone} id={id}>
      <Container>
        <Heading eyebrow={eyebrow} title={title} intro={intro} />
        <ol className="relative mt-12 grid gap-6 md:grid-cols-3">
          <StepsFlow count={steps.length} />
          {steps.map((s, i) => (
            <Reveal as="li" kind="card" key={s.title} delay={i * 90} className="relative rounded-2xl border border-line bg-paper p-6 md:p-8">
              <span
                data-kid="pop"
                data-step-num=""
                style={{ "--d": `${i * 90 + 250}ms` }}
                className="relative z-20 flex size-10 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white"
              >
                {i + 1}
              </span>
              <h3 className="mt-6 text-xl">{s.title}</h3>
              <p className="mt-2 text-base text-ink-soft">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

/* --------------------------------------------------------- Feature split */

export function FeatureSplit({ eyebrow, title, body, bullets = [], photo, reverse = false, tone = "paper", id }) {
  return (
    <Section tone={tone} id={id}>
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className={cn(reverse && "lg:order-2")}>
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h2 className="text-3xl md:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-ink-soft">{body}</p>
          {bullets.length > 0 && (
            <ul className="mt-8 space-y-4">
              {bullets.map(([b, d], j) => (
                <li key={b} data-kid="left" style={{ "--d": `${300 + j * 80}ms` }} className="flex gap-4">
                  <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                    <Icon name="check" className="size-4" />
                  </span>
                  <span>
                    <span className="font-semibold text-ink">{b}</span>
                    {d && <span className="block text-base text-ink-soft">{d}</span>}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </Reveal>
        {photo && (
          <Reveal delay={150} className={cn(reverse && "lg:order-1")}>
            <Photo name={photo} className="aspect-[4/3] rounded-3xl" />
          </Reveal>
        )}
      </Container>
    </Section>
  );
}

/* ---------------------------------------------------------- Benefit grid */

export function BenefitGrid({ eyebrow, title, intro, items, tone = "paper", cols }) {
  cols = cols || (items.length === 4 ? 4 : 3);
  return (
    <Section tone={tone}>
      <Container>
        <Heading eyebrow={eyebrow} title={title} intro={intro} />
        <ul className={cn("mt-12 grid gap-6 md:grid-cols-2", cols === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4")}>
          {items.map(([icon, t, d], i) => (
            <Reveal as="li" kind="card" key={t} delay={(i % cols) * 90} className="rounded-2xl border border-line bg-paper p-6">
              <span data-kid="pop" style={{ "--d": `${(i % cols) * 90 + 250}ms` }} className="inline-flex">
                <Icon name={icon} className="size-8 text-brand" />
              </span>
              <h3 className="mt-6 text-lg">{t}</h3>
              <p className="mt-2 text-base text-ink-soft">{d}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------- FAQ */

function FaqItem({ q, a, open, onToggle }) {
  const id = useId();
  return (
    <li className="border-b border-line">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={onToggle}
          className={cn("flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-semibold hover:text-brand", motion)}
        >
          {q}
          <span className={cn("flex size-8 shrink-0 items-center justify-center rounded-full bg-mist", motion, open && "rotate-45 bg-brand-soft text-brand")}>
            <Icon name="plus" className="size-4" />
          </span>
        </button>
      </h3>
      <div id={id} role="region" className={cn("grid", motion, open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-6 text-base text-ink-soft">{a}</p>
        </div>
      </div>
    </li>
  );
}

export function Faq({ title = "Questions we hear often", intro, items, tone = "paper", id = "faq" }) {
  const [open, setOpen] = useState(0);
  return (
    <Section tone={tone} id={id}>
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <Heading eyebrow="FAQ" title={title} intro={intro} />
        <Reveal as="ul" delay={100} className="border-t border-line">
          {items.map(([q, a], i) => (
            <FaqItem key={q} q={q} a={a} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}

/* -------------------------------------------------------------- Final CTA */

export function FinalCta({ title = "Talk to an engineer about your systems", body }) {
  return (
    <Section tone="paper">
      <Container>
        <Reveal className="rounded-3xl bg-brand px-6 py-16 text-center text-white md:px-16 md:py-24">
          <h2 className="mx-auto max-w-2xl text-3xl md:text-5xl">{title}</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
            {body ||
              "Tell us where things are today and where you want to be. We will come back with practical next steps in plain English."}
          </p>
          <div className="mt-8 flex flex-col items-center gap-6">
            <Button to="/contact/" variant="inverse" arrow>
              Book a free consultation
            </Button>
            <p className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/80">
              <a href={`tel:${site.telephone}`} className={cn("hover:text-white", motion)}>
                Call {site.telephoneDisplay}
              </a>
              <a href={`mailto:${site.email}`} className={cn("hover:text-white", motion)}>
                {site.email}
              </a>
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
