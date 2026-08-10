import { CheckCircle2 } from "lucide-react";

import { InquiryForm } from "@/components/project-intake/InquiryForm";
import { SectionTitle } from "@/components/sections/SectionTitle";

export function Contact() {
  return (
    <section id="contact" className="section-space">
      <div className="container-xl">
        <div className="signal-panel relative overflow-hidden border border-base-cyan/15 bg-[radial-gradient(circle_at_6%_8%,hsl(var(--signal-cyan)/0.12),transparent_25rem),linear-gradient(145deg,hsl(var(--surface-graphite)/0.92),hsl(var(--canvas-carbon)/0.96))] p-6 sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute right-0 top-0 h-px w-2/3 bg-gradient-to-l from-base-cyan/55 to-transparent" />
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16 xl:gap-20">
            <div className="flex flex-col">
              <SectionTitle
                kicker="Project inquiry / 06"
                title="You do not need to have everything figured out."
                description="Tell me what you are building, what is not working, or where you need direction. We can start with what you know now."
                align="left"
              />
              <div className="mt-8 space-y-3 border-t border-white/10 pt-6 text-sm leading-6 text-base-text/72">
                {[
                  "A straightforward conversation—not a sales ambush.",
                  "No obligation or project date reserved by submitting.",
                  "Google Meet or phone, by appointment.",
                ].map((item) => (
                  <p key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-base-cyan" aria-hidden="true" />
                    {item}
                  </p>
                ))}
              </div>
              <p className="mt-auto pt-8 text-sm font-semibold text-base-heading">Website packages begin at $599.</p>
            </div>

            <div className="rounded-lg border border-white/12 bg-base-bg/72 p-6 shadow-elevation backdrop-blur-sm sm:p-8">
              <div className="mb-5 border-b border-white/10 pb-5">
                <p className="text-xl font-semibold tracking-[-0.025em] text-base-heading">Start the conversation</p>
                <p className="mt-2 text-sm leading-6 text-base-mute">A few details will help me understand what kind of support may fit.</p>
              </div>
              <InquiryForm idPrefix="contact" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
