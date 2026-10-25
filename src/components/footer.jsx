import React from "react";
import { Logo } from "@/components/logo";
import { Container, motion } from "@/components/ui";
import { Icon } from "@/components/icon";
import { href, site } from "@/lib/site";
import { services } from "@/lib/services";
import { cn } from "@/lib/utils";

const company = [
  ["How we work", "/#process"],
  ["Questions", "/#faq"],
  ["Book a free consultation", "/contact/"],
];
const legal = [
  ["Privacy policy", "/privacy/"],
  ["Terms of use", "/terms/"],
];

function Column({ title, items }) {
  return (
    <div>
      <p className="text-sm font-semibold text-ink">{title}</p>
      <ul className="mt-4 space-y-3">
        {items.map(([label, to]) => (
          <li key={to}>
            <a href={href(to)} className={cn("text-sm text-ink-soft hover:text-brand", motion)}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const a = site.address;
  return (
    <footer className="border-t border-line bg-paper pt-16 pb-8">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <a href={href("/")} aria-label="DYC Projects home">
              <Logo />
            </a>
            <p className="mt-4 max-w-xs text-sm text-ink-soft">
              Cloud and software engineering for growing Australian businesses. Based in Ryde, Sydney.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a href={`tel:${site.telephone}`} className={cn("inline-flex items-center gap-2 text-ink hover:text-brand", motion)}>
                  <Icon name="phone" className="size-4 text-brand" />
                  {site.telephoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className={cn("inline-flex items-center gap-2 text-ink hover:text-brand", motion)}>
                  <Icon name="envelope-simple" className="size-4 text-brand" />
                  {site.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-ink-soft">
                <Icon name="map-pin" className="size-4 text-brand" />
                {a.streetAddress}, {a.addressLocality} {a.addressRegion} {a.postalCode}
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            <Column title="Services" items={services.map((s) => [s.title, s.to])} />
            <Column title="Company" items={company} />
            <Column title="Legal" items={legal} />
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-2 border-t border-line pt-8 text-xs text-ink-muted md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}
            {site.abn ? ` · ABN ${site.abn}` : ""}
          </p>
          <p>Sydney, New South Wales, Australia</p>
        </div>
      </Container>
    </footer>
  );
}
