"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

import { carePlans } from "@/lib/services";

export function CarePlanPopover({
  recommendedCarePlan,
  careDetailsHref,
}: {
  recommendedCarePlan: string;
  careDetailsHref: string;
}) {
  const [open, setOpen] = useState(false);
  const popoverId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    function closeOnOutsidePress(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      triggerRef.current?.focus();
    }

    document.addEventListener("pointerdown", closeOnOutsidePress);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePress);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={`relative mt-5 ${open ? "z-50" : "z-0"}`}>
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={popoverId}
        onClick={() => setOpen((current) => !current)}
        className="flex w-full cursor-pointer items-center justify-between gap-4 border border-white/12 bg-base-bg/40 px-4 py-3.5 text-left transition-colors hover:border-base-cyan/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-base-cyan"
      >
        <span>
          <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-base-heading">Choose Hosting &amp; Care</span>
          <span className="mt-1 block text-xs leading-5 text-base-text/65">
            From {carePlans[0].monthlyPrice} · {recommendedCarePlan.replace("Managed ", "")} recommended
          </span>
        </span>
        <ChevronDown className={`h-4 w-4 shrink-0 text-base-cyan transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>

      {open ? (
        <div
          id={popoverId}
          role="region"
          aria-label="Hosting and care options"
          className="absolute inset-x-0 top-[calc(100%+0.5rem)] z-50 border border-base-cyan/35 bg-[#0b1115] p-4 shadow-[0_18px_48px_rgba(0,0,0,0.72),0_0_28px_hsl(var(--signal-cyan)/0.08)]"
        >
          <span className="absolute inset-x-0 top-0 h-px bg-base-cyan/75 shadow-[0_0_18px_hsl(var(--signal-cyan)/0.55)]" aria-hidden="true" />
          <div className="grid gap-2.5">
            {carePlans.map((care) => {
              const recommended = care.name === recommendedCarePlan;

              return (
                <div
                  key={care.name}
                  className={`border px-3.5 py-3 ${recommended ? "border-base-cyan/40 bg-base-cyan/[0.07]" : "border-white/10 bg-base-bg/70"}`}
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
      ) : null}
    </div>
  );
}
