import type { Metadata } from "next";

import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact a Modesto Web Designer",
  description:
    "Call, text, email, or send a project inquiry to McPherson Digital Works for professional web design in Modesto and the Central Valley.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="pt-10">
      <div className="container-xl">
        <h1 className="max-w-3xl text-3xl font-semibold text-base-heading md:text-4xl">
          Start a website project in Modesto or the Central Valley.
        </h1>
      </div>
      <Contact />
    </div>
  );
}
