"use client";

import { useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { SectionTitle } from "@/components/sections/SectionTitle";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const startedAt = useRef(Date.now());
  const submitting = useRef(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting.current) return;

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      topic: formData.get("topic"),
      consent: formData.get("consent") === "on",
      message: formData.get("message"),
      website: formData.get("website"),
      startedAt: startedAt.current,
    };

    submitting.current = true;
    setLoading(true);
    setStatus("Sending your message…");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Request failed");

      form.reset();
      startedAt.current = Date.now();
      setStatus("Message sent. Thanks for reaching out; I’ll get back to you soon.");
      toast.success("Message sent!", {
        description: "Thanks for reaching out. I’ll get back to you soon.",
      });
    } catch {
      setStatus("Your message could not be sent. Please try again later.");
      toast.error("Something went wrong", {
        description: "Please try again later.",
      });
    } finally {
      submitting.current = false;
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container-xl max-w-3xl mx-auto px-4">
        <SectionTitle title="Contact" />

        <form
          onSubmit={onSubmit}
          className="mt-8 grid md:grid-cols-2 gap-4"
          aria-describedby="contact-form-status"
        >
          <div
            className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
            aria-hidden="true"
          >
            <Label htmlFor="website">Leave this field blank</Label>
            <Input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div>
            <Label htmlFor="name" className="text-base-text/70">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              required
              autoComplete="name"
              minLength={2}
              maxLength={100}
              className="mt-1 bg-white/5 border-white/10"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-base-text/70">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              name="email"
              required
              autoComplete="email"
              maxLength={254}
              className="mt-1 bg-white/5 border-white/10"
            />
          </div>

          <div className="md:col-span-2">
            <Label htmlFor="company" className="text-base-text/70">
              Company (optional)
            </Label>
            <Input
              id="company"
              name="company"
              autoComplete="organization"
              maxLength={120}
              className="mt-1 bg-white/5 border-white/10"
            />
          </div>

          <div className="md:col-span-2 grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="topic" className="text-base-text/70">
                What do you need?
              </Label>
              <select
                id="topic"
                name="topic"
                className="mt-1 w-full bg-white/5 border border-white/10 rounded-2xl px-3 py-2"
                defaultValue="New site"
                required
              >
                <option>New site</option>
                <option>Redesign</option>
                <option>Hosting & Care</option>
                <option>Other</option>
              </select>
            </div>
            <div className="flex items-center gap-2 pt-6">
              <input
                id="consent"
                type="checkbox"
                name="consent"
                className="accent-base-accent"
                required
              />
              <Label
                htmlFor="consent"
                className="text-sm text-base-text/80"
              >
                You can email us about this request.
              </Label>
            </div>
          </div>

          <div className="md:col-span-2">
            <Label htmlFor="message" className="text-base-text/70">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              rows={5}
              minLength={10}
              maxLength={5000}
              className="mt-1 bg-white/5 border-white/10"
            />
          </div>

          <div className="md:col-span-2 flex items-center justify-center gap-3 mt-2">
            <Button
              type="submit"
              disabled={loading}
              className="bg-base-accent/90 text-black hover:bg-base-accent shadow-glow"
            >
              {loading ? "Sending…" : "Send"}
            </Button>
          </div>

          <p
            id="contact-form-status"
            className="md:col-span-2 text-center text-sm text-base-text/80"
            role="status"
            aria-live="polite"
          >
            {status}
          </p>
        </form>
      </div>
    </section>
  );
}
