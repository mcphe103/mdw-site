// components/sections/Testimonials.tsx
import { SectionTitle } from "@/components/sections/SectionTitle";

export function Testimonial() {
  const testimonials = [
    {
      quote:
        "Matthew delivered a fast, clean site and keeps everything running. I don’t even think about it anymore.",
      name: "Chairez Fencing",
      role: "Small Business Owner",
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container-xl max-w-4xl mx-auto px-4 text-center">
        <SectionTitle kicker="Feedback" title="What Clients Are Saying" />

        <div className="mt-10 flex justify-center">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8 md:p-10 max-w-2xl">
            <p className="text-base md:text-lg text-base-text/85 italic leading-relaxed">
              “{testimonials[0].quote}”
            </p>

            <div className="mt-6 flex flex-col items-center">
              <div className="h-1.5 w-1.5 rounded-full bg-base-accent/80 mb-4" />

              <p className="text-base-heading font-medium">
                {testimonials[0].name}
              </p>
              <p className="text-base-text/60 text-sm">
                {testimonials[0].role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
