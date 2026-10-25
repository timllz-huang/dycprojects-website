import React from "react";
import { Container, Eyebrow, Reveal } from "@/components/ui";

/** Simple, readable layout for legal pages. sections: [heading, [paragraph nodes]] */
export function LegalPage({ title, updated, intro, sections }) {
  return (
    <section className="bg-paper pt-24 pb-16 md:pb-24">
      <Container className="mt-12 md:mt-16">
        <Reveal className="max-w-[680px]">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="text-hero pb-2 text-4xl md:text-5xl">{title}</h1>
          <p className="mt-4 text-sm text-ink-muted">Last updated {updated}</p>
          <p className="mt-8 text-lg text-ink-soft">{intro}</p>
        </Reveal>
        <div className="mt-12 max-w-[680px] space-y-12">
          {sections.map(([h, paras]) => (
            <Reveal key={h}>
              <h2 className="text-2xl">{h}</h2>
              {paras.map((p, i) => (
                <p key={i} className="mt-4 text-base text-ink-soft">
                  {p}
                </p>
              ))}
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
