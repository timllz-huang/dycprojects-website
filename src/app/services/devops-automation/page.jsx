import React from "react";
import { ServicePage } from "@/components/service-page";
import { devops } from "@/data/devops";

export const faq = devops.faq;
export default function Page() {
  return <ServicePage d={devops} />;
}
