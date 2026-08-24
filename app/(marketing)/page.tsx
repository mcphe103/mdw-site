import type { Metadata } from "next";

import { Hero } from "@/components/sections/Hero";
import {
  AboutOverview,
  PricingOverview,
  ServicesOverview,
  WorkOverview,
} from "@/components/sections/Homepage";
import { ContactOverview } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Modesto Web Design for Small Businesses",
  description:
    "McPherson Digital Works plans, designs, builds, and supports professional websites for small businesses in Modesto and across California's Central Valley.",
};

export default function Page() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WorkOverview />
      <PricingOverview />
      <AboutOverview />
      <ContactOverview />
    </>
  );
}
