"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { SectionTitle } from "@/components/sections/SectionTitle";

export function Contact() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Request failed");

      form.reset();
      toast.success("Message sent!", {
        description: "Thanks for reaching out. I’ll get back to you soon.",
      });
    } catch (err) {
      toast.error("Something went wrong", {
        description: "Please try again later.",
      });
    } finally {
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
        >
          <div>
            <Label htmlFor="name" className="text-base-text/70">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              required
              autoComplete="name"
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
        </form>
      </div>
    </section>
  );
}
