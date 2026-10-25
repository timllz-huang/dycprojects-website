import React from "react";
import { LegalPage } from "@/components/legal";
import { href, site } from "@/lib/site";

export default function Page() {
  const link = "font-semibold text-brand underline";
  return (
    <LegalPage
      title="Terms of use"
      updated="26 October 2026"
      intro={`These terms apply to your use of dycprojects.com.au, operated by ${site.legalName}. By using the website you agree to them.`}
      sections={[
        [
          "Information on this website",
          [
            "The content on this website is general information about our services. It is not professional advice for your specific situation. Before acting on it, talk to us about your circumstances.",
          ],
        ],
        [
          "Services and quotes",
          [
            "Any engagement for our services is governed by a separate written proposal or agreement. Nothing on this website is an offer to supply services on particular terms.",
          ],
        ],
        [
          "Intellectual property",
          [
            "The text, logo and design of this website belong to DYC Projects unless stated otherwise. Photographs are used under the Unsplash License. Please do not copy or reuse our content without permission.",
          ],
        ],
        [
          "Links to other websites",
          [
            "We may link to websites run by others. We are not responsible for their content or how they handle your information.",
          ],
        ],
        [
          "Liability",
          [
            "We take care to keep this website accurate and available, but we do not guarantee that it is free of errors or interruptions. To the extent permitted by law, including the Australian Consumer Law, we are not liable for loss arising from your use of the website.",
          ],
        ],
        [
          "Changes and contact",
          [
            <>
              We may update these terms from time to time. Questions about them can be sent to{" "}
              <a className={link} href={`mailto:${site.email}`}>
                {site.email}
              </a>{" "}
              or through our <a className={link} href={href("/contact/")}>contact page</a>. These terms are governed by
              the laws of New South Wales.
            </>,
          ],
        ],
      ]}
    />
  );
}
