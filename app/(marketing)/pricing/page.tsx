import type { Metadata } from "next";

import { Pricing } from "@/components/sections/Pricing";

export const metadata: Metadata = {
  title: "Small-Business Website Pricing",
  description:
    "Compare Quick Launch, Starter, and Growth website packages plus ongoing Hosting & Care for Modesto and Central Valley small businesses.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return <Pricing />;
}
