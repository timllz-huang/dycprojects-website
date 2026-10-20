"use client";

import React from "react";
import { Logo } from "@/components/logo";
import { href, site } from "@/lib/site";

const col1 = [
  ["Home", "/"],
  ["Services", "/services/"],
  ["Cloud architecture & migration", "/services/cloud-architecture-migration/"],
  ["Custom software development", "/services/custom-software-development/"],
  ["DevOps & automation", "/services/devops-automation/"],
];
const col2 = [
  ["How we work", "/#process"],
  ["Managed cloud & support", "/services/#managed-cloud"],
  ["Cloud security & compliance", "/services/#cloud-security"],
  ["Technical consulting", "/services/#consulting"],
  ["Book a free consultation", "/contact/"],
];

export function Footer3() {
  const a = site.address;
  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20 scheme-1">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[4vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[1fr_0.75fr] lg:gap-y-4 lg:pb-20">
          <div>
            <div className="mb-6 md:mb-8">
              <a href={href("/")} aria-label="DYC Projects home">
                <Logo />
              </a>
            </div>
            <div className="mb-6 md:mb-8">
              <p className="text-small mb-1 font-semibold">Address:</p>
              <p className="text-small mb-5 md:mb-6">
                {a.streetAddress}, {a.addressLocality} {a.addressRegion} {a.postalCode}
              </p>
              <p className="text-small mb-1 font-semibold">Contact:</p>
              <a href={`tel:${site.telephone}`} className="text-small block underline">
                {site.telephoneDisplay}
              </a>
              <a href={`mailto:${site.email}`} className="text-small block underline">
                {site.email}
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-8 md:gap-y-4">
            {[col1, col2].map((col, i) => (
              <ul key={i}>
                {col.map(([label, to]) => (
                  <li key={to} className="text-small py-2 font-semibold">
                    <a href={href(to)} className="transition-colors hover:text-blumine">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="h-px w-full bg-scheme-border" />
        <div className="text-small flex flex-col-reverse items-start justify-between gap-4 pt-6 pb-4 md:flex-row md:items-center md:pt-8 md:pb-0">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
            {site.abn ? ` ABN ${site.abn}` : ""}
          </p>
          <ul className="text-small flex gap-6">
            <li className="underline">
              <a href={href("/privacy/")}>Privacy Policy</a>
            </li>
            <li className="underline">
              <a href={href("/contact/")}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
