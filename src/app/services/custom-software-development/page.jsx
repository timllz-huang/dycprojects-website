import React from "react";
import { ServicePage } from "@/components/service-page";
import { software } from "@/data/software";

export const faq = software.faq;
export default function Page() {
  return <ServicePage d={software} />;
}
