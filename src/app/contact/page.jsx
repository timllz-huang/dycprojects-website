"use client";

import React, { useEffect, useState } from "react";
import { Container, Eyebrow, Reveal, SubmitButton, motion } from "@/components/ui";
import { Spotlight } from "@/components/motion";
import { Icon } from "@/components/icon";
import { href, site } from "@/lib/site";
import { services } from "@/lib/services";
import { cn } from "@/lib/utils";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const fieldBase =
  "w-full rounded-lg border bg-paper px-3 py-2 text-base text-ink placeholder:text-ink-muted focus:outline-none focus:ring-4 " +
  motion;

function Field({ id, label, required, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-ink">
        {label}
        {required && <span className="text-ink-muted"> (required)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 flex items-center gap-2 text-sm text-danger">
          <Icon name="warning-circle" className="size-4" />
          {error}
        </p>
      )}
    </div>
  );
}

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = "Enter your name.";
  if (!v.email.trim()) e.email = "Enter your email address.";
  else if (!EMAIL.test(v.email.trim())) e.email = "Enter an email address like name@company.com.au.";
  if (v.message.trim().length < 10) e.message = "Tell us a little more about what you need.";
  return e;
}

function ContactForm() {
  const [values, setValues] = useState({ name: "", company: "", email: "", phone: "", service: "", message: "" });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | failed

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("sent") === "1") setStatus("sent");
  }, []);

  const set = (k) => (e) => {
    const next = { ...values, [k]: e.target.value };
    setValues(next);
    if (touched[k]) setErrors(validate(next));
  };
  const blur = (k) => () => {
    setTouched((t) => ({ ...t, [k]: true }));
    setErrors(validate(values));
  };
  const cls = (k) =>
    cn(fieldBase, errors[k] && touched[k] ? "border-danger focus:ring-danger/15" : "border-line focus:border-brand focus:ring-brand/15");
  const aria = (k) => ({
    "aria-invalid": Boolean(errors[k] && touched[k]),
    "aria-describedby": errors[k] && touched[k] ? `${k}-error` : undefined,
  });

  async function onSubmit(e) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    setTouched({ name: true, email: true, message: true });
    if (Object.keys(found).length) {
      document.getElementById(Object.keys(found)[0])?.focus();
      return;
    }
    setStatus("sending");
    try {
      const body = new FormData(e.currentTarget);
      const res = await fetch(`https://formsubmit.co/ajax/${site.formMailTo}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body,
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || String(data.success) === "false") throw new Error("send failed");
      setStatus("sent");
    } catch {
      setStatus("failed");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-3xl border border-line bg-paper p-8 md:p-12">
        <span className="flex size-12 items-center justify-center rounded-full bg-brand-soft text-brand">
          <Icon name="check" className="size-6" />
        </span>
        <h2 className="mt-6 text-2xl">Thanks, we have your message</h2>
        <p className="mt-2 text-base text-ink-soft">
          We will reply within one business day. If it is urgent, call{" "}
          <a className="font-semibold text-brand underline" href={`tel:${site.telephone}`}>
            {site.telephoneDisplay}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      action={`https://formsubmit.co/${site.formMailTo}`}
      method="POST"
      className="rounded-3xl border border-line bg-paper p-6 md:p-8"
    >
      <input type="hidden" name="_subject" value="New enquiry from dycprojects.com.au" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value={`${site.baseUrl}/contact/?sent=1`} />
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid gap-6 md:grid-cols-2">
        <Field id="name" label="Name" required error={touched.name && errors.name}>
          <input id="name" name="name" autoComplete="name" value={values.name} onChange={set("name")} onBlur={blur("name")} className={cls("name")} {...aria("name")} />
        </Field>
        <Field id="company" label="Company">
          <input id="company" name="company" autoComplete="organization" value={values.company} onChange={set("company")} className={cls("company")} />
        </Field>
        <Field id="email" label="Email" required error={touched.email && errors.email}>
          <input id="email" name="email" type="email" autoComplete="email" inputMode="email" value={values.email} onChange={set("email")} onBlur={blur("email")} className={cls("email")} {...aria("email")} />
        </Field>
        <Field id="phone" label="Phone">
          <input id="phone" name="phone" type="tel" autoComplete="tel" value={values.phone} onChange={set("phone")} className={cls("phone")} />
        </Field>
        <div className="md:col-span-2">
          <Field id="service" label="What can we help with?">
            <select id="service" name="service" value={values.service} onChange={set("service")} className={cls("service")}>
              <option value="">Choose a service</option>
              {services.map((s) => (
                <option key={s.id}>{s.title}</option>
              ))}
              <option>Not sure yet</option>
            </select>
          </Field>
        </div>
        <div className="md:col-span-2">
          <Field id="message" label="Message" required error={touched.message && errors.message}>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={values.message}
              onChange={set("message")}
              onBlur={blur("message")}
              placeholder="Tell us about your current systems and what you would like to achieve."
              className={cn(cls("message"), "resize-y")}
              {...aria("message")}
            />
          </Field>
        </div>
      </div>

      {status === "failed" && (
        <p role="alert" className="mt-6 flex items-start gap-2 rounded-lg bg-danger/5 p-3 text-sm text-danger">
          <Icon name="warning-circle" className="size-4" />
          <span>
            We could not send your message. Please try again, or email{" "}
            <a className="font-semibold underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </span>
        </p>
      )}

      <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-ink-muted">
          We only use your details to reply. See our{" "}
          <a className="underline hover:text-brand" href={href("/privacy/")}>
            privacy policy
          </a>
          .
        </p>
        <SubmitButton disabled={status === "sending"} aria-busy={status === "sending"}>
          {status === "sending" ? "Sending your enquiry" : "Send enquiry"}
        </SubmitButton>
      </div>
    </form>
  );
}

export default function Page() {
  const a = site.address;
  const details = [
    ["phone", "Phone", site.telephoneDisplay, `tel:${site.telephone}`],
    ["envelope-simple", "Email", site.email, `mailto:${site.email}`],
    ["map-pin", "Office", `${a.streetAddress}, ${a.addressLocality} ${a.addressRegion} ${a.postalCode}`, null],
  ];
  return (
    <section className="bg-mist pt-24 pb-16 md:pb-24">
      <Container className="mt-12 md:mt-16">
        <Reveal className="max-w-[680px]">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="text-hero pb-2 text-4xl md:text-5xl">Book a free consultation</h1>
          <p className="mt-6 text-lg text-ink-soft">
            Tell us where your systems are today and where you want them to be. We will come back with practical next
            steps, in plain English.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <Reveal delay={100}>
            <ul className="grid gap-6">
              {details.map(([icon, t, v, link]) => (
                <li key={t} className="flex gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-paper text-brand">
                    <Icon name={icon} className="size-6" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink-muted">{t}</p>
                    {link ? (
                      <a href={link} className={cn("text-base font-semibold text-ink hover:text-brand", motion)}>
                        {v}
                      </a>
                    ) : (
                      <p className="text-base font-semibold text-ink">{v}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-12 rounded-2xl border border-line bg-paper p-6">
              <p className="font-semibold">What happens next</p>
              <Spotlight as="ol" period={1.8} className="mt-4 space-y-4 text-base text-ink-soft">
                {[
                  "We reply within one business day to arrange a time.",
                  "A free consultation to understand your goals and current setup.",
                  "A clear written recommendation with scope, timing and cost.",
                ].map((t, i) => (
                  <li key={t} data-spot="" className="spot-step flex gap-4">
                    <span className="spot-num flex size-6 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-semibold text-white">
                      {i + 1}
                    </span>
                    {t}
                  </li>
                ))}
              </Spotlight>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
