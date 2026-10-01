import Link from "next/link";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { ProjectIntakeTrigger } from "@/components/project-intake/ProjectIntake";
import { carePlans, websitePackages } from "@/lib/services";

export function PackageCards({ careDetailsHref = "/pricing#care-plans" }: { careDetailsHref?: string }) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {websitePackages.map((plan) => {
        const installment = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(Number(plan.price.replace(/[^0-9.]/g, "")) / 2);
        const featured = "featured" in plan && plan.featured;
        return (
          <article key={plan.name} className={`flex flex-col border p-6 sm:p-8 ${featured ? "border-base-cyan/45 bg-base-cyan/[0.06]" : "border-white/15 bg-base-surface/60"}`}>
            <div className="flex min-h-6 items-center justify-between gap-3">
              <p className="operational-label">Package {plan.index}</p>
              {featured && <span className="text-xs font-semibold text-base-cyan">For service businesses</span>}
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
              <details className="group mt-5 border border-white/12 bg-base-bg/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-base-cyan [&::-webkit-details-marker]:hidden">
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-base-heading">Choose Hosting &amp; Care</span>
                    <span className="mt-1 block text-xs leading-5 text-base-text/65">
                      From {carePlans[0].monthlyPrice} · {plan.recommendedCarePlan.replace("Managed ", "")} recommended
                    </span>
                  </span>
                  <ChevronDown className="h-4 w-4 shrink-0 text-base-cyan transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <div className="border-t border-white/10 px-4 pb-4 pt-3">
                  <div className="grid gap-2.5">
                    {carePlans.map((care) => {
                      const recommended = care.name === plan.recommendedCarePlan;

                      return (
                        <div
                          key={care.name}
                          className={`border px-3.5 py-3 ${recommended ? "border-base-cyan/40 bg-base-cyan/[0.07]" : "border-white/10 bg-base-bg/45"}`}
                        >
                          <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
                            <p className="text-sm font-semibold text-base-heading">{care.shortName}</p>
                            {recommended ? <span className="text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-base-cyan">Recommended</span> : null}
                          </div>
                          <p className="mt-1.5 text-xl font-semibold tracking-[-0.03em] text-base-cyan">{care.monthlyPrice}</p>
                          <p className="mt-1.5 text-xs leading-5 text-base-text/65">{care.summary}</p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs leading-5">
                    <p className="text-base-text/65">Selected and billed separately after launch.</p>
                    <Link href={careDetailsHref} className="font-semibold text-base-heading transition-colors hover:text-base-cyan">
                      Compare care plans
                    </Link>
                  </div>
                </div>
              </details>
            </div>
            <ul className="space-y-3 text-sm leading-6 text-base-text/75">
              {plan.summaryPoints.map((point) => <li key={point} className="flex gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-base-cyan" aria-hidden="true" />{point}</li>)}
            </ul>
            <div className="mt-auto pt-8">
              <ProjectIntakeTrigger variant={featured ? "default" : "outline"} className="w-full">Let’s Talk <ArrowRight aria-hidden="true" /></ProjectIntakeTrigger>
            </div>
          </article>
        );
      })}
    </div>
  );
}
