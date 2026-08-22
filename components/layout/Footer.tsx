import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/Container";

const exploreLinks = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#portfolio" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/about" },
];

const resourceLinks = [
  { label: "Services & Pricing", href: "/pricing" },
  { label: "Contact page", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-base-cyan/[0.1] bg-base-carbon/92 shadow-[0_-24px_80px_rgba(0,0,0,0.2)] backdrop-blur-sm sm:mt-32">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.5fr)_repeat(3,minmax(8rem,0.6fr))] lg:gap-8">
          <section aria-labelledby="footer-brand-heading" className="max-w-xl">
            <div className="relative h-28 w-40">
              <Image
                src="/brand/mdw-lockup.png"
                alt="McPherson Digital Works"
                fill
                sizes="216px"
                className="object-contain object-left drop-shadow-[0_0_14px_hsl(var(--signal-cyan)/0.2)]"
              />
            </div>
            <h2 id="footer-brand-heading" className="sr-only">McPherson Digital Works</h2>
            <p className="mt-4 max-w-lg text-sm leading-6 text-base-mute sm:text-[0.9375rem]">
              A founder-led web design studio serving Central Valley small businesses and select clients beyond the region. Professional websites, clear project execution, and dependable care after launch.
            </p>
            <p className="mt-6 font-mono text-[0.625rem] uppercase leading-5 tracking-[0.16em] text-base-mute">
              Veteran-owned · Central Valley focused
              <br />
              Available for select remote projects
            </p>
          </section>

          <FooterGroup title="Explore" links={exploreLinks} />
          <FooterGroup title="Resources" links={resourceLinks} />
          <FooterGroup title="Legal" links={legalLinks} />
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.08] pt-6 text-xs leading-5 text-base-mute sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} McPherson Digital Works. All rights reserved.</p>
          <p>Design · Development · Ongoing Care</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterGroup({
  title,
  links,
}: {
  title: string;
  links: ReadonlyArray<{ label: string; href: string }>;
}) {
  return (
    <nav aria-label={`${title} links`}>
      <p className="font-mono text-[0.625rem] font-medium uppercase tracking-[0.17em] text-base-mute">
        {title}
      </p>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="rounded-sm text-sm text-base-text/75 transition-colors hover:text-base-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-base-carbon"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
