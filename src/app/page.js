"use client"

import React from "react";
import { Header1 } from "@/components/home/header-01";
import { Layout10 } from "@/components/home/layout-10";
import { Layout373 } from "@/components/home/layout-373";
import { Layout507 } from "@/components/home/layout-507";
import { Stats31 } from "@/components/home/stats-31";
import { Cta51 } from "@/components/home/cta-51";


export default function Page() {
  return (
    <div>
      <Header1 />
      <Layout10 />
      <Layout373 />
      <Layout507 />
      <Stats31 />
      <Cta51 />
    </div>
  );
}
