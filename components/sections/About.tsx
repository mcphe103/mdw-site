// components/sections/About.tsx
import { SectionTitle } from "@/components/sections/SectionTitle";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container-xl max-w-4xl mx-auto px-4">
        <SectionTitle
          title="About McPherson Digital Works"
          align="left"
          kicker="Who I work with"
        />

        <div className="mt-6 space-y-4 text-sm md:text-base text-base-text/80 leading-relaxed">
          <p>
            McPherson Digital Works is a one-person studio focused on building
            and maintaining websites for small businesses that need things to
            just work. No bloated page builders, no mystery boxes—just modern
            web technology, clear communication, and long-term support.
          </p>

          <p>
            I handle the full lifecycle of your site: planning, design, build,
            deployment, and ongoing hosting & care. That means you always know
            who to talk to when you need an update, a fix, or a new idea
            implemented.
          </p>

          <p>
            My priority is reliability and clarity: predictable pricing,
            documented changes, and a site that stays online and up to date so
            you can focus on running your business.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3 text-xs md:text-sm text-base-text/75">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <div className="text-base-heading font-semibold mb-1">
              Tech stack
            </div>
            <p>Next.js, React, Tailwind CSS, Vercel hosting, modern tooling.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <div className="text-base-heading font-semibold mb-1">
              Focus
            </div>
            <p>
              Fast, secure business sites with simple maintenance and clear
              communication.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <div className="text-base-heading font-semibold mb-1">
              How we work
            </div>
            <p>
              Project-based builds plus an optional Hosting & Care Plan for
              ongoing support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
