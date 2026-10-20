import React from "react";
import { Navbar2 } from "@/components/navbar-02";
import { Footer3 } from "@/components/footer-03";

export function Layout({ children }) {
  return (
    <>
      <Navbar2 />
      <main id="main">{children}</main>
      <Footer3 />
    </>
  );
}
