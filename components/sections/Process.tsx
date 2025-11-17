// components/sections/Process.tsx
import { SectionTitle } from "@/components/sections/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export function Process() {
  const steps = [
    {
      step: "1. Discovery",
      desc: "We begin by learning your business goals, audience, and brand vision to ensure every design choice aligns with your purpose.",
    },
    {
      step: "2. Design & Build",
      desc: "Using modern frameworks like Next.js and Tailwind, your website is built for speed, security, and scalability — with your brand in focus.",
    },
    {
      step: "3. Launch & Care",
      desc: "Once live, we handle hosting, maintenance, and continuous updates so you can focus on running your business confidently.",
    },
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-white/5">
      <div className="container-xl max-w-5xl mx-auto px-4">
        <SectionTitle kicker="How It Works" title="The MDW Process" />

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <Card
              key={s.step}
              className="rounded-2xl border-white/10 bg-white/5 backdrop-blur transition-transform duration-200 hover:-translate-y-0.5"
            >
              <CardHeader className="flex flex-row items-center gap-2 pb-2">
                <CheckCircle2 className="h-5 w-5 text-base-accent" />
                <CardTitle className="text-base-heading text-lg">{s.step}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-base-text/80 leading-relaxed">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
