import type { Metadata } from "next";

import { Hero } from "@/components/sections/Hero";
import {
  AboutOverview,
  BusinessNeeds,
  PricingOverview,
  ProcessOverview,
  ServicesOverview,
  WorkOverview,
} from "@/components/sections/Homepage";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Modesto Web Design for Small Businesses",
  description:
    "McPherson Digital Works plans, designs, builds, and supports professional websites for small businesses in Modesto and across California's Central Valley.",
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
      <Contact compactTop />
    </>
  );
}
