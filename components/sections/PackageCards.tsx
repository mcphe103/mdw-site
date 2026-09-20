import { ArrowRight, Check } from "lucide-react";
import { ProjectIntakeTrigger } from "@/components/project-intake/ProjectIntake";
import { carePlans, websitePackages } from "@/lib/services";

export function PackageCards() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {websitePackages.map((plan) => {
        const care = carePlans.find((item) => item.name === plan.carePlan)!;
        const installment = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(Number(plan.price.replace(/[^0-9.]/g, "")) / 2);
        const featured = "featured" in plan && plan.featured;
        return (
          <article key={plan.name} className={`flex flex-col border p-6 sm:p-8 ${featured ? "border-base-cyan/45 bg-base-cyan/[0.06]" : "border-white/15 bg-base-surface/60"}`}>
            <div className="flex min-h-6 items-center justify-between gap-3">
              <p className="operational-label">Package {plan.index}</p>
              {featured && <span className="text-xs font-semibold text-base-cyan">Most popular</span>}
            </div>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight text-base-heading">{plan.name}</h3>
            <p className="mt-3 text-sm leading-6 text-base-text/70 lg:min-h-24">{plan.description}</p>
            <div className="my-6 border-y border-white/15 py-5">
              <p className="text-xs uppercase tracking-widest text-base-mute">One-time website build</p>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-base-heading"><span className="mr-2 text-sm font-normal text-base-mute">From</span>{plan.price}</p>
              <div className="mt-4 border-l-2 border-base-cyan bg-base-cyan/[0.08] p-3">
                <p className="text-sm font-semibold leading-6 text-base-heading">{installment} to start · {installment} before launch</p>
                <p className="mt-1 text-xs leading-5 text-base-text/70">50% upfront. Deposit is based on your final approved quote.</p>
              </div>
              <p className="mt-5 text-xs uppercase tracking-widest text-base-mute">Recommended hosting &amp; care</p>
              <p className="mt-2 text-2xl font-semibold text-base-cyan">{care.monthlyPrice}</p>
              <p className="mt-2 text-xs leading-5 text-base-text/65">Billed separately after launch.</p>
            </div>
            <ul className="space-y-3 text-sm leading-6 text-base-text/75">
              {plan.summaryPoints.map((point) => <li key={point} className="flex gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-base-cyan" aria-hidden="true" />{point}</li>)}
            </ul>
            <div className="mt-auto pt-8">
              <ProjectIntakeTrigger variant={featured ? "default" : "outline"} className="w-full">Start Your Project <ArrowRight aria-hidden="true" /></ProjectIntakeTrigger>
            </div>
          </article>
        );
      })}
    </div>
  );
}
