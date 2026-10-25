import React from "react";
import { LegalPage } from "@/components/legal";
import { href, site } from "@/lib/site";

export default function Page() {
  const a = site.address;
  const link = "font-semibold text-brand underline";
  return (
    <LegalPage
      title="Privacy policy"
      updated="20 October 2026"
      intro={`This policy explains how ${site.legalName} ("DYC Projects", "we", "us") handles personal information collected through dycprojects.com.au. We aim to handle personal information in line with the Australian Privacy Principles.`}
      sections={[
        [
          "What we collect",
          [
            "When you use our contact form or email us, we collect the details you choose to give us: typically your name, email address, phone number, company and the content of your message. We do not use analytics, advertising trackers or marketing cookies on this website.",
          ],
        ],
        [
          "How we use it",
          [
            "We use your information only to respond to your enquiry, provide a quote or consultation, and deliver any services you engage us for. We do not sell or rent personal information, and we do not add you to marketing lists without your consent.",
          ],
        ],
        [
          "Service providers",
          [
            "This website is hosted on GitHub Pages, which may record technical information such as IP addresses in server logs. Photos are served by Unsplash's image service. Contact form submissions are relayed to our inbox by FormSubmit (formsubmit.co). These providers may store data outside Australia. We only share what is needed for them to provide their service.",
          ],
        ],
        [
          "Storage and security",
          [
            "Enquiries are kept in our business email system, with access limited to the people who need it to respond. We keep information only for as long as we need it for the purposes above or as required by law.",
          ],
        ],
        [
          "Access, correction and complaints",
          [
            <>
              You can ask to access or correct the personal information we hold about you, or raise a privacy concern, by
              contacting us using the details below. We will respond within 30 days. If you are not satisfied with our
              response, you can contact the Office of the Australian Information Commissioner at{" "}
              <a className={link} href="https://www.oaic.gov.au" rel="noopener">
                oaic.gov.au
              </a>
              .
            </>,
          ],
        ],
        [
          "Contact us",
          [
            <>
              {site.legalName}, {a.streetAddress}, {a.addressLocality} {a.addressRegion} {a.postalCode}. Email{" "}
              <a className={link} href={`mailto:${site.email}`}>
                {site.email}
              </a>{" "}
              or call{" "}
              <a className={link} href={`tel:${site.telephone}`}>
                {site.telephoneDisplay}
              </a>
              . You can also use our <a className={link} href={href("/contact/")}>contact page</a>.
            </>,
          ],
        ],
      ]}
    />
  );
}
