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
  if (!items.length && !orgs.length) return null;
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
