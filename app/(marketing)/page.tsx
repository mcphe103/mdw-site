import type { Metadata } from "next";

import { Hero } from "@/components/sections/Hero";
import { Problems } from "@/components/sections/Problems";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonial } from "@/components/sections/Testimonial";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "McPherson Digital Works | Web Design & Development",
  description:
    "McPherson Digital Works builds clean, modern websites for small businesses and local professionals.",
};

export default function Page() {
  return (
    <>
      <Hero />
      <Problems />
      <Services />
      <Process />
      <Pricing />
      <Testimonial />
      <About />
      <Contact />
    </>
  );
}
