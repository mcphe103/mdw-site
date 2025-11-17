// components/sections/Services.tsx
import { SectionTitle } from "@/components/sections/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Services() {
  const services = [
    {
      title: "Design",
      desc: "Clean, modern UI that fits your brand and goals.",
    },
    {
      title: "Build",
      desc: "Next.js + Tailwind for performance and reliability.",
    },
    {
      title: "Host & Care",
      desc: "Managed hosting, SSL, backups, updates, and support in one plan.",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container-xl max-w-5xl mx-auto px-4">
        <SectionTitle kicker="What I Do" title="Services" />

        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {services.map((s) => (
            <Card
              key={s.title}
              className="rounded-2xl border-white/10 bg-white/5 backdrop-blur transition-transform duration-200 hover:-translate-y-0.5"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-base-heading text-xl">{s.title}</CardTitle>
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
