import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail, MessageSquareText, Phone } from "lucide-react";

import { Reveal } from "@/components/motion/MotionSystem";
import { ProjectIntakeTrigger } from "@/components/project-intake/ProjectIntake";
import { InquiryForm } from "@/components/project-intake/InquiryForm";
import { SectionTitle } from "@/components/sections/SectionTitle";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function ContactOverview() {
  return (
    <section id="contact" className="section-space">
      <div className="container-xl">
        <Reveal className="signal-panel relative overflow-hidden border border-base-cyan/20 bg-[radial-gradient(circle_at_8%_12%,hsl(var(--signal-cyan)/0.13),transparent_24rem),linear-gradient(145deg,hsl(var(--surface-graphite)/0.92),hsl(var(--canvas-carbon)/0.96))] p-7 sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute right-0 top-0 h-px w-2/3 bg-gradient-to-l from-base-cyan/55 to-transparent" />
          <div className="grid gap-10 lg:grid-cols-[0.76fr_1.24fr] lg:items-center lg:gap-14">
            <div>
              <SectionTitle
                kicker="Start a conversation"
                title="Bring the business problem. We can define the website together."
                description="A straightforward first conversation by Google Meet or phone—without a sales ambush or obligation."
                align="left"
              />
              <p className="mt-6 text-sm font-semibold text-base-heading">Website packages begin at $599.</p>
            </div>

            <div>
              <div className="grid gap-3 sm:grid-cols-3">
                <ContactMethod href={siteConfig.phone.href} icon={Phone} label="Call" value={siteConfig.phone.display} />
                <ContactMethod href={siteConfig.phone.smsHref} icon={MessageSquareText} label="Text" value={siteConfig.phone.display} />
                <ContactMethod href={`mailto:${siteConfig.email}`} icon={Mail} label="Email" value={siteConfig.email} />
              </div>
              <div className="mt-5 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center">
                <ProjectIntakeTrigger size="lg">
                  Start a Project <ArrowRight aria-hidden="true" />
                </ProjectIntakeTrigger>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">Open Contact Page</Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="section-space">
      <div className="container-xl">
        <div className="signal-panel relative overflow-hidden border border-base-cyan/15 bg-[radial-gradient(circle_at_6%_8%,hsl(var(--signal-cyan)/0.12),transparent_25rem),linear-gradient(145deg,hsl(var(--surface-graphite)/0.92),hsl(var(--canvas-carbon)/0.96))] p-6 sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute right-0 top-0 h-px w-2/3 bg-gradient-to-l from-base-cyan/55 to-transparent" />
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16 xl:gap-20">
            <div className="flex flex-col">
              <SectionTitle
                kicker="Project inquiry"
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
              <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                <ContactMethod
                  href={siteConfig.phone.href}
                  icon={Phone}
                  label="Call"
                  value={siteConfig.phone.display}
                />
                <ContactMethod
                  href={siteConfig.phone.smsHref}
                  icon={MessageSquareText}
                  label="Text"
                  value={siteConfig.phone.display}
                />
                <ContactMethod
                  href={`mailto:${siteConfig.email}`}
                  icon={Mail}
                  label="Email"
                  value={siteConfig.email}
                />
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

function ContactMethod({
  href,
  icon: Icon,
  label,
  value,
}: {
  href: string;
  icon: typeof Phone;
  label: string;
  value: string;
}) {
  return (
    <a
      href={href}
      className="group min-w-0 border border-white/10 bg-base-bg/45 px-4 py-3 transition-colors hover:border-base-cyan/30 hover:bg-base-cyan/[0.04]"
    >
      <span className="flex items-center gap-2 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-base-cyan">
        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
        {label}
      </span>
      <span className="mt-2 block truncate text-sm font-medium text-base-heading group-hover:text-white">
        {value}
      </span>
    </a>
  );
}
