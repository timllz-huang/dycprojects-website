"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/icon";
import React from "react";
import { href } from "@/lib/site";
import { ChevronRight } from "relume-icons";

const items = [
  ["speed", "Productivity", "More output with less manual effort", "Automate repetitive tasks and streamline workflows so your team can handle more work without adding headcount."],
  ["query_stats", "Visibility", "Better data, better decisions", "Bring information out of spreadsheets and inboxes into one place, with reporting that shows what is actually happening."],
  ["star", "Differentiation", "Processes your competitors cannot copy", "Software shaped around how you work turns the way you do business into an advantage, not a compromise."],
  ["hub", "Integration", "Systems that talk to each other", "Connect your CRM, accounting, inventory and other platforms so data flows automatically and is entered once."],
];

export function Layout357() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-[0.5fr_1fr] lg:items-center lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Benefits</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">The business case for custom software</h2>
            <p className="text-medium">
              Good software pays for itself in time saved, errors avoided and decisions made with better information.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button asChild variant="secondary">
                <a href={href("/contact/")}>Book a consultation</a>
              </Button>
              <Button asChild variant="link" size="link" iconRight={<ChevronRight className="text-scheme-text" />}>
                <a href={href("/services/")}>All services</a>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {items.map(([icon, kicker, title, body]) => (
              <Card key={kicker} className="p-6 md:p-8">
                <Icon name={icon} className="mb-5 size-12 text-blumine md:mb-6" />
                <p className="mb-2 text-small font-semibold">{kicker}</p>
                <h3 className="mb-3 text-h6 font-bold">{title}</h3>
                <p>{body}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
