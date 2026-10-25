import React from "react";
import { Container, Reveal } from "@/components/ui";
import { Icon } from "@/components/icon";
import { site } from "@/lib/site";

/** Credentials band. Renders nothing until real details are added to site.config.json → proof. */
export function Proof() {
  const p = site.proof || {};
  const items = [
    p.yearsExperience && ["medal", `${p.yearsExperience} years in IT and cloud`],
    ...(p.certifications || []).map((c) => ["certificate", c]),
  ].filter(Boolean);
  const orgs = p.organisations || [];
  // Until real credentials are supplied, show commitments the business has confirmed.
  if (!items.length && !orgs.length) {
    const commitments = [
      ["chat-circle-dots", "Free first consultation"],
      ["file-text", "Written scope and cost before work starts"],
      ["clock-clockwise", "Regular updates at every stage"],
    ];
    return (
      <section aria-label="Our commitments" className="-mt-8 bg-paper pb-16 md:-mt-12 md:pb-24">
        <Container>
          <Reveal className="rounded-2xl border border-line p-6 md:p-8">
            <ul className="grid gap-4 md:grid-cols-3 md:gap-6">
              {commitments.map(([icon, t], i) => (
                <li key={t} data-kid="left" style={{ "--d": `${200 + i * 80}ms` }} className="flex items-center gap-3 text-base font-semibold">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                    <Icon name={icon} className="size-5" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>
    );
  }
  return (
    <section aria-label="Credentials" className="bg-paper pb-16 md:pb-24">
      <Container>
        <Reveal className="rounded-2xl border border-line p-6 md:p-8">
          {items.length > 0 && (
            <ul className="flex flex-wrap gap-x-8 gap-y-4">
              {items.map(([icon, t]) => (
                <li key={t} className="inline-flex items-center gap-2 font-semibold">
                  <Icon name={icon} className="size-5 text-brand" />
                  {t}
                </li>
              ))}
            </ul>
          )}
          {orgs.length > 0 && (
            <p className="mt-6 text-sm text-ink-soft">
              Experience includes work with {orgs.join(", ")}.
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
