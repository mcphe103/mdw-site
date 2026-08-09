import type { Metadata } from "next";

import { Pricing } from "@/components/sections/Pricing";

export const metadata: Metadata = {
  title: "Website Pricing | McPherson Digital Works",
  description:
    "Explore website project starting investments and ongoing Hosting & Care from McPherson Digital Works.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return <Pricing />;
}
