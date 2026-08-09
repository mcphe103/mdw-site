import type { Metadata } from "next";

import { Hero } from "@/components/sections/Hero";
import {
  AboutOverview,
  BusinessNeeds,
  PricingOverview,
  ProcessOverview,
  ProjectCTA,
  ServicesOverview,
  WorkOverview,
} from "@/components/sections/Homepage";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Web Design for Central Valley Small Businesses | MDW",
  description:
    "McPherson Digital Works plans, designs, builds, and supports professional websites for Central Valley small businesses.",
  alternates: { canonical: "/" },
};

export default function Page() {
  return (
    <>
      <Hero />
      <BusinessNeeds />
      <ServicesOverview />
      <WorkOverview />
      <ProcessOverview />
      <PricingOverview />
      <AboutOverview />
      <ProjectCTA />
      <Contact />
    </>
  );
}
