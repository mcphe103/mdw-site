"use client";

import Link from "next/link";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { ArrowRight, CheckCircle2, X } from "lucide-react";

import { InquiryForm } from "@/components/project-intake/InquiryForm";
import { Button, type ButtonProps } from "@/components/ui/button";

type IntakeContextValue = {
  openIntake: () => void;
};

const IntakeContext = createContext<IntakeContextValue | null>(null);

export function ProjectIntakeProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [session, setSession] = useState(0);
  const openerRef = useRef<HTMLElement | null>(null);

  const openIntake = useCallback(() => {
    openerRef.current = document.activeElement as HTMLElement | null;
    setSubmitted(false);
    setSession((value) => value + 1);
    setOpen(true);
  }, []);

  const closeIntake = useCallback(() => setOpen(false), []);
  const returnFocus = useCallback(() => {
    if (openerRef.current?.isConnected) {
      openerRef.current.focus();
      return;
    }

    document.querySelector<HTMLElement>('button[aria-label="Open navigation"]')?.focus();
  }, []);

  return (
    <IntakeContext.Provider value={{ openIntake }}>
      {children}
      <ProjectIntakeDialog
        key={session}
        open={open}
        submitted={submitted}
        onClose={closeIntake}
        onSuccess={() => setSubmitted(true)}
        returnFocus={returnFocus}
      />
    </IntakeContext.Provider>
  );
}

type ProjectIntakeTriggerProps = Omit<ButtonProps, "onClick"> & {
  onBeforeOpen?: () => void;
};

export function ProjectIntakeTrigger({
  children,
  className,
  onBeforeOpen,
  ...props
}: ProjectIntakeTriggerProps) {
  const context = useContext(IntakeContext);

  if (!context) throw new Error("ProjectIntakeTrigger must be used inside ProjectIntakeProvider");

  return (
    <Button
      type="button"
      className={className}
      onClick={() => {
        onBeforeOpen?.();
        context.openIntake();
      }}
      {...props}
    >
      {children}
    </Button>
  );
}

function ProjectIntakeDialog({
  open,
  submitted,
  onClose,
  onSuccess,
  returnFocus,
}: {
  open: boolean;
  submitted: boolean;
  onClose: () => void;
  onSuccess: () => void;
  returnFocus: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      const initialTarget = dialogRef.current?.querySelector<HTMLElement>(
        'input:not([type="hidden"]):not([tabindex="-1"])',
      );
      initialTarget?.focus();
    }, 40);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      returnFocus();
    };
  }, [open, returnFocus]);

  useEffect(() => {
    if (!open || !submitted) return;

    const focusTimer = window.setTimeout(() => {
      dialogRef.current?.querySelector<HTMLElement>("[data-success-focus]")?.focus();
    }, 40);

    return () => window.clearTimeout(focusTimer);
  }, [open, submitted]);

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
      return;
    }

    if (event.key !== "Tab") return;

    const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]):not([tabindex="-1"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    if (!focusable?.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  if (!open) return null;

  return (
    <div
      className="intake-overlay fixed inset-0 z-[100] overflow-y-auto bg-base-bg/88 p-0 backdrop-blur-md sm:grid sm:place-items-center sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-intake-title"
        aria-describedby="project-intake-description"
        onKeyDown={handleKeyDown}
        className="intake-panel relative min-h-[100dvh] w-full overflow-hidden border-base-cyan/20 bg-base-carbon shadow-[0_30px_120px_rgba(0,0,0,0.72),0_0_80px_hsl(var(--signal-cyan)/0.12)] sm:min-h-0 sm:max-w-5xl sm:border"
      >
        <div className="signal-mist signal-mist-dialog" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <span className="absolute -right-24 -top-24 h-72 w-72 rotate-45 border border-base-cyan/10" />
          <span className="absolute left-[41%] top-0 h-24 w-px bg-gradient-to-b from-base-cyan/75 to-transparent shadow-[0_0_20px_hsl(var(--signal-cyan)/0.45)]" />
          <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-base-cyan/70 to-transparent" />
        </div>

        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-base-bg/72 text-base-text transition-colors hover:border-base-cyan/40 hover:text-base-heading focus-visible:ring-offset-base-carbon sm:right-6 sm:top-6"
          aria-label="Close project inquiry"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        {submitted ? (
          <div className="relative z-10 grid min-h-[100dvh] place-items-center px-6 py-24 text-center sm:min-h-[38rem] sm:px-12">
            <div className="max-w-2xl">
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-base-cyan/50 bg-base-cyan/10 text-base-cyan shadow-[0_0_36px_hsl(var(--signal-cyan)/0.22)]">
                <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
              </span>
              <p className="operational-label mt-8">Inquiry received</p>
              <h2 id="project-intake-title" className="mt-5 text-balance text-4xl font-semibold tracking-[-0.05em] text-base-heading sm:text-5xl">
                Your project is now on my radar.
              </h2>
              <p id="project-intake-description" className="mx-auto mt-5 max-w-xl text-base leading-7 text-base-text/72 sm:text-lg sm:leading-8">
                I&apos;ll review what you shared and respond within one to two business days, often sooner. A confirmation is on its way to your inbox.
              </p>
              <Button type="button" size="lg" className="mt-9" onClick={onClose} data-success-focus>
                Return to the site
                <ArrowRight aria-hidden="true" />
              </Button>
            </div>
          </div>
        ) : (
          <div className="relative z-10 grid min-h-[100dvh] lg:grid-cols-[0.8fr_1.2fr] sm:min-h-0">
            <div className="border-b border-white/10 bg-[linear-gradient(145deg,hsl(var(--signal-cyan)/0.09),transparent_65%)] px-6 pb-9 pt-24 sm:px-10 lg:border-b-0 lg:border-r lg:px-12 lg:py-16">
              <p className="operational-label">Project intake / Open channel</p>
              <h2 id="project-intake-title" className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-[-0.045em] text-base-heading sm:text-4xl">
                Let&apos;s build something dependable.
              </h2>
              <p id="project-intake-description" className="mt-5 text-base leading-7 text-base-text/72">
                Tell me about your business, what you need, and where you would like to go next. You do not need to have every detail figured out.
              </p>
              <div className="mt-8 space-y-3 border-t border-white/10 pt-6 text-sm leading-6 text-base-text/70">
                <p>Founder-led from the first conversation.</p>
                <p>No obligation or project date reserved by submitting.</p>
                <p>Website packages begin at $599.</p>
              </div>
              <p className="mt-8 text-sm leading-6 text-base-mute">
                Prefer a full page?{" "}
                <Link href="/contact" onClick={onClose} className="text-base-cyan underline decoration-base-cyan/35 underline-offset-4 hover:text-base-heading">
                  Open the contact page
                </Link>
              </p>
            </div>

            <div className="px-6 py-9 sm:px-10 lg:max-h-[min(52rem,calc(100dvh-3rem))] lg:overflow-y-auto lg:px-12 lg:py-14">
              <InquiryForm idPrefix="intake" onSuccess={onSuccess} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
