"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/icon";
import { href, site } from "@/lib/site";
import { services } from "@/lib/services";

const field =
  "w-full rounded-form border border-scheme-border bg-white px-3 py-2.5 text-regular text-neutral-darkest placeholder:text-neutral transition-colors focus:border-blumine focus:outline-none focus:ring-2 focus:ring-blumine/20";
const label = "mb-2 block text-small font-semibold";

function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const endpoint = `https://formsubmit.co/${site.formMailTo}`;

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("sent") === "1") setStatus("sent");
  }, []);

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(endpoint.replace("formsubmit.co/", "formsubmit.co/ajax/"), {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || String(data.success) === "false") throw new Error(data.message || "Send failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <Card className="p-8 md:p-10" role="status">
        <Icon name="task_alt" className="mb-5 size-12 text-puerto-rico-dark" />
        <h2 className="mb-3 text-h4 font-bold">Thanks, we have your message</h2>
        <p>
          We will be in touch within one business day. If it is urgent, call us on{" "}
          <a className="underline" href={`tel:${site.telephone}`}>
            {site.telephoneDisplay}
          </a>
          .
        </p>
      </Card>
    );
  }

  return (
    <Card className="p-6 md:p-8 lg:p-10">
      <form action={endpoint} method="POST" onSubmit={onSubmit} className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <input type="hidden" name="_subject" value="New enquiry from dycprojects.com.au" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value={`${site.baseUrl}/contact/?sent=1`} />
        <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

        <div>
          <label htmlFor="name" className={label}>
            Name *
          </label>
          <input id="name" name="name" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="company" className={label}>
            Company
          </label>
          <input id="company" name="company" autoComplete="organization" className={field} />
        </div>
        <div>
          <label htmlFor="email" className={label}>
            Email *
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={field} />
        </div>
        <div>
          <label htmlFor="phone" className={label}>
            Phone
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="service" className={label}>
            What can we help with?
          </label>
          <select id="service" name="service" className={field} defaultValue="">
            <option value="" disabled>
              Choose a service
            </option>
            {services.map((s) => (
              <option key={s.id}>{s.title}</option>
            ))}
            <option>Not sure yet</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="message" className={label}>
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="Tell us a little about your systems and what you would like to achieve."
            className={field + " min-h-[9rem] resize-y"}
          />
        </div>
        <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:justify-between">
          <p className="text-small text-neutral-dark">
            We only use your details to respond to your enquiry. See our{" "}
            <a className="underline" href={href("/privacy/")}>
              privacy policy
            </a>
            .
          </p>
          <Button type="submit" disabled={status === "sending"} className="px-6 py-2.5">
            {status === "sending" ? "Sending…" : "Send enquiry"}
          </Button>
        </div>
        {status === "error" && (
          <p className="text-small text-red-700 md:col-span-2" role="alert">
            Sorry, your message could not be sent. Please email{" "}
            <a className="underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>{" "}
            or call {site.telephoneDisplay}.
          </p>
        )}
      </form>
    </Card>
  );
}

export default function Page() {
  const a = site.address;
  const details = [
    ["call", "Phone", site.telephoneDisplay, `tel:${site.telephone}`],
    ["mail", "Email", site.email, `mailto:${site.email}`],
    ["location_on", "Office", `${a.streetAddress}, ${a.addressLocality} ${a.addressRegion} ${a.postalCode}`, null],
  ];
  return (
    <>
      <section className="px-[5%] pt-16 md:pt-24 lg:pt-28 scheme-1">
        <div className="container">
          <div className="max-w-lg">
          <p className="mb-3 font-semibold md:mb-4">Contact</p>
          <h1 className="mb-5 text-h1 font-bold md:mb-6">Book a free consultation</h1>
          <p className="text-medium">
            Tell us where your systems are today and where you want them to be. We will come back with practical next
            steps, in plain English.
          </p>
          </div>
        </div>
      </section>
      <section id="form" className="px-[5%] py-12 md:py-18 lg:py-20 scheme-1">
        <div className="container grid grid-cols-1 gap-12 lg:grid-cols-[0.6fr_1fr] lg:gap-20">
          <div>
            <ul className="grid gap-8">
              {details.map(([icon, t, v, link]) => (
                <li key={t} className="flex gap-4">
                  <Icon name={icon} className="size-8 shrink-0 text-blumine" />
                  <div>
                    <p className="mb-1 font-semibold">{t}</p>
                    {link ? (
                      <a href={link} className="underline">
                        {v}
                      </a>
                    ) : (
                      <p>{v}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-10 h-px w-full bg-scheme-border" />
            <p className="mt-8 font-semibold">What happens next</p>
            <ol className="mt-4 grid gap-3 text-regular">
              <li>1. We reply within one business day to arrange a time.</li>
              <li>2. A free consultation to understand your goals and current setup.</li>
              <li>3. A clear written recommendation with scope, timing and cost.</li>
            </ol>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
