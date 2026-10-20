"use client";

import React from "react";
import { href, site } from "@/lib/site";

const updated = "20 October 2026";

export default function Page() {
  const a = site.address;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
      <div className="max-w-lg">
        <p className="mb-3 font-semibold md:mb-4">Legal</p>
        <h1 className="mb-5 text-h2 font-bold md:mb-6">Privacy policy</h1>
        <p className="mb-10 text-small text-neutral-dark">Last updated {updated}</p>

        <div className="prose max-w-none prose-headings:font-[Manrope] prose-headings:font-medium prose-headings:uppercase prose-h2:text-h5 prose-a:text-blumine">
          <p>
            This policy explains how {site.legalName} ("DYC Projects", "we", "us") handles personal information collected
            through dycprojects.com.au. We aim to handle personal information in line with the Australian Privacy
            Principles.
          </p>

          <h2>What we collect</h2>
          <p>
            When you use our contact form or email us, we collect the details you choose to give us: typically your name,
            email address, phone number, company and the content of your message. We do not use analytics, advertising
            trackers or marketing cookies on this website.
          </p>

          <h2>How we use it</h2>
          <p>
            We use your information only to respond to your enquiry, provide a quote or consultation, and deliver any
            services you engage us for. We do not sell or rent personal information, and we do not add you to marketing
            lists without your consent.
          </p>

          <h2>Service providers</h2>
          <p>
            This website is hosted on GitHub Pages, which may record technical information such as IP addresses in server
            logs. Contact form submissions are relayed to our inbox by FormSubmit (formsubmit.co). These providers may store
            data outside Australia. We only share what is needed for them to provide their service.
          </p>

          <h2>Storage and security</h2>
          <p>
            Enquiries are kept in our business email system, with access limited to the people who need it to
            respond. We keep information only for as long as we need it for the purposes above or as required by
            law.
          </p>

          <h2>Access, correction and complaints</h2>
          <p>
            You can ask to access or correct the personal information we hold about you, or raise a privacy concern, by
            contacting us using the details below. We will respond within 30 days. If you are not satisfied with our
            response, you can contact the Office of the Australian Information Commissioner at{" "}
            <a href="https://www.oaic.gov.au" rel="noopener">
              oaic.gov.au
            </a>
            .
          </p>

          <h2>Contact us</h2>
          <p>
            {site.legalName}
            <br />
            {a.streetAddress}, {a.addressLocality} {a.addressRegion} {a.postalCode}
            <br />
            Email: <a href={`mailto:${site.email}`}>{site.email}</a>
            <br />
            Phone: <a href={`tel:${site.telephone}`}>{site.telephoneDisplay}</a>
          </p>
          <p>
            <a href={href("/contact/")}>Go to the contact page</a>
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}
