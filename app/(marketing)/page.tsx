import type { Metadata } from "next";

import { Hero } from "@/components/sections/Hero";
import {
  AboutOverview,
  ServicesOverview,
  PricingOverview,
  ProcessOverview,
} from "@/components/sections/Homepage";
import { WorkOverviewIntegrated } from "@/components/sections/WorkOverviewIntegrated";
import { ContactOverview } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Small-Business Websites & Ongoing Care",
  description:
    "McPherson Digital Works plans, designs, builds, and supports professional websites for small businesses in Modesto and across California's Central Valley.",
};

export default function Page() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WorkOverviewIntegrated />
      <AboutOverview />
      <PricingOverview />
      <ProcessOverview />
      <ContactOverview />
    </>
  );
}
