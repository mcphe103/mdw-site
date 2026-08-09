import type { Metadata } from "next";

import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Start a Project",
  description:
    "Tell McPherson Digital Works about your business, website needs, and project goals.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="pt-10">
      <div className="container-xl">
        <h1 className="text-3xl md:text-4xl font-semibold text-base-heading">Contact</h1>
      </div>
      <Contact />
    </div>
  );
}
