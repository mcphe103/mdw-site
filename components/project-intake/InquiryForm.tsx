"use client";

import { useRef, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { trackInquirySuccess } from "@/lib/analytics";

type InquiryFormProps = {
  idPrefix: string;
  className?: string;
  onSuccess?: () => void;
};

export function InquiryForm({ idPrefix, className, onSuccess }: InquiryFormProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successful, setSuccessful] = useState(false);
  const startedAt = useRef(Date.now());

  const fieldId = (name: string) => `${idPrefix}-${name}`;

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data: Record<string, FormDataEntryValue | number | boolean> = Object.fromEntries(
      new FormData(form).entries(),
    );

    data.consent = data.consent === "on" ? true : false;
    data.startedAt = startedAt.current;
    setError(null);
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Request failed");

      trackInquirySuccess(typeof data.topic === "string" ? data.topic : "Other");
      form.reset();
      startedAt.current = Date.now();
      if (onSuccess) onSuccess();
      else setSuccessful(true);
    } catch {
      setError("Your inquiry could not be sent. Please wait a moment and try again.");
    } finally {
      setLoading(false);
    }
  }

  if (successful) {
    return (
      <div role="status" className="grid min-h-80 place-items-center px-4 py-10 text-center">
        <div className="max-w-lg">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-base-cyan/50 bg-base-cyan/10 text-base-cyan shadow-[0_0_30px_hsl(var(--signal-cyan)/0.2)]">
            <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
          </span>
          <h3 className="mt-6 text-2xl font-semibold tracking-[-0.035em] text-base-heading">Your inquiry has been received.</h3>
          <p className="mt-3 leading-7 text-base-text/70">I&apos;ll review what you shared and respond within one to two business days, often sooner.</p>
          <Button type="button" variant="outline" className="mt-6" onClick={() => setSuccessful(false)}>
            Send another inquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={cn("grid gap-5 md:grid-cols-2", className)}>
      <div aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden">
        <Label htmlFor={fieldId("website")}>Website</Label>
        <Input
          id={fieldId("website")}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <Label htmlFor={fieldId("name")} className="text-base-text/70">
          Name
        </Label>
        <Input
          id={fieldId("name")}
          name="name"
          required
          minLength={2}
          maxLength={100}
          autoComplete="name"
          className="mt-2 border-white/10 bg-base-bg/65"
        />
      </div>

      <div>
        <Label htmlFor={fieldId("email")} className="text-base-text/70">
          Email
        </Label>
        <Input
          id={fieldId("email")}
          type="email"
          name="email"
          required
          maxLength={254}
          autoComplete="email"
          className="mt-2 border-white/10 bg-base-bg/65"
        />
      </div>

      <div className="md:col-span-2">
        <Label htmlFor={fieldId("company")} className="text-base-text/70">
          Company (optional)
        </Label>
        <Input
          id={fieldId("company")}
          name="company"
          maxLength={120}
          autoComplete="organization"
          className="mt-2 border-white/10 bg-base-bg/65"
        />
      </div>

      <div className="grid gap-4 md:col-span-2 md:grid-cols-2">
        <div>
          <Label htmlFor={fieldId("topic")} className="text-base-text/70">
            What do you need?
          </Label>
          <select
            id={fieldId("topic")}
            name="topic"
            className="mt-2 h-10 w-full rounded-md border border-white/10 bg-base-bg/65 px-3 text-sm text-base-text"
            defaultValue="New site"
          >
            <option>New site</option>
            <option>Redesign</option>
            <option>Hosting &amp; Care</option>
            <option>Other</option>
          </select>
        </div>

        <div className="flex items-center gap-2 pt-1 md:pt-6">
          <input
            id={fieldId("consent")}
            type="checkbox"
            name="consent"
            className="h-4 w-4 accent-base-accent"
            required
          />
          <Label htmlFor={fieldId("consent")} className="text-sm leading-5 text-base-text/80">
            You can email me about this request.
          </Label>
        </div>
      </div>

      <div className="md:col-span-2">
        <Label htmlFor={fieldId("message")} className="text-base-text/70">
          What would you like your website to accomplish?
        </Label>
        <Textarea
          id={fieldId("message")}
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={5}
          className="mt-2 border-white/10 bg-base-bg/65"
        />
      </div>

      <div className="mt-1 md:col-span-2">
        {error && (
          <p role="alert" className="mb-4 border-l border-destructive bg-destructive/10 px-4 py-3 text-sm leading-6 text-destructive-foreground">
            {error}
          </p>
        )}
        <Button type="submit" disabled={loading} size="lg">
          {loading ? "Sending inquiry…" : "Send Project Inquiry"}
          {!loading && <ArrowRight aria-hidden="true" />}
        </Button>
      </div>
    </form>
  );
}
