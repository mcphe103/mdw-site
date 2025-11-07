"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

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

      if (!res.ok) {
        // Try to extract any error message the API might return
        let message = "Request failed";
        try {
          const json = await res.json();
          if (json?.message) message = json.message;
        } catch {}
        throw new Error(message);
      }

      form.reset();
      toast.success("Message sent!", {
        description: "Thanks for reaching out. I’ll get back to you soon.",
      });
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Please try again later.";
      toast.error("Something went wrong", { description: message });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-10">
      <div className="container-xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-base-heading">
          Contact
        </h2>

        <form onSubmit={onSubmit} className="mt-6 grid md:grid-cols-2 gap-4">
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
                aria-label="What do you need?"
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
              <Label htmlFor="consent" className="text-sm text-base-text/80">
                You can email me about this request.
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

          <div className="md:col-span-2 flex items-center gap-3">
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
