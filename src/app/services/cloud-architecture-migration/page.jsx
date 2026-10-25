import React from "react";
import { ServicePage } from "@/components/service-page";
import { cloud } from "@/data/cloud";

export const faq = cloud.faq;
export default function Page() {
  return <ServicePage d={cloud} />;
}
