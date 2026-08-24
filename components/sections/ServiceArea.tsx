import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/MotionSystem";
import { SectionTitle } from "@/components/sections/SectionTitle";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function ServiceArea() {
  return (
    <section
      id="service-area"
      className="section-space section-panel overflow-hidden border-y border-white/[0.07]"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-20">
          <Reveal>
            <SectionTitle
              kicker="Local service area"
              title="Serving Modesto and Central Valley small businesses."
              description="MDW provides professional web design, website redesign, and ongoing care for businesses throughout the region, with select remote projects available beyond it."
              align="left"
            />
            <Button asChild variant="outline" className="mt-8">
              <Link href="/modesto-web-design">
                Explore Modesto Web Design
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>

          <Stagger className="signal-panel relative overflow-hidden border border-base-cyan/15 bg-base-bg/45 p-6 sm:p-8">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-base-cyan/10 shadow-[0_0_80px_hsl(var(--signal-cyan)/0.08)]"
              aria-hidden="true"
            />
            <div className="flex items-center gap-3 border-b border-white/10 pb-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-base-cyan/30 bg-base-cyan/10 text-base-cyan">
                <MapPin className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold text-base-heading">Based in Modesto, California</p>
                <p className="mt-1 text-sm text-base-mute">Available by appointment</p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {siteConfig.serviceAreas.map((city) => (
                <StaggerItem
                  key={city}
                  className="flex items-center gap-3 border border-white/[0.08] bg-white/[0.018] px-4 py-3 text-sm font-medium text-base-text/78"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-base-cyan shadow-[0_0_10px_hsl(var(--signal-cyan)/0.65)]" />
                  {city}
                </StaggerItem>
              ))}
            </div>

            <p className="mt-6 border-t border-white/10 pt-5 text-sm leading-6 text-base-mute">
              Serving surrounding Central Valley communities and select clients remotely.
            </p>
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
