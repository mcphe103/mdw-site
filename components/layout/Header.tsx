"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";

import { Container } from "@/components/layout/Container";
import { ProjectIntakeTrigger } from "@/components/project-intake/ProjectIntake";
import { cn } from "@/lib/utils";

const NAVIGATION = [
  { label: "Services", section: "services", index: "01" },
  { label: "Work", section: "portfolio", index: "02" },
  { label: "Process", section: "process", index: "03" },
  { label: "Pricing", section: "pricing", index: "04", href: "/pricing" },
  { label: "About", section: "about", index: "05", href: "/about" },
] as const;

const SECTIONS = NAVIGATION.map((item) => item.section);

function sectionHref(section: string, isHome: boolean, href?: string) {
  if (href) return href;
  return isHome ? `#${section}` : `/#${section}`;
}

export function Header() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const closeMobile = () => setMobileOpen(false);

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      let current: string | null = null;

      for (const id of SECTIONS) {
        const element = document.getElementById(id);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        if (rect.top <= 112 && rect.bottom >= 112) {
          current = id;
          break;
        }
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    const toggleButton = toggleRef.current;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLElement>("a, button")?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      toggleButton?.focus();
    };
  }, [mobileOpen]);

  const handleMenuKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      closeMobile();
      return;
    }

    if (event.key !== "Tab") return;

    const focusable = menuRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
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
  };

  return (
    <header className="sticky top-0 z-50 border-b border-base-cyan/[0.12] bg-base-bg/90 shadow-[0_1px_0_hsl(var(--signal-cyan)/0.025),0_16px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl supports-[backdrop-filter]:bg-base-bg/78">
      <Container className="flex h-[4.5rem] items-center justify-between gap-6">
        <BrandLink onClick={closeMobile} />

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {NAVIGATION.map((item) => (
            <DesktopNavLink
              key={item.section}
              href={sectionHref(item.section, isHome, "href" in item ? item.href : undefined)}
              active={("href" in item && pathname === item.href) || (isHome && activeSection === item.section)}
            >
              {item.label}
            </DesktopNavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ProjectIntakeTrigger size="sm">Start a Project</ProjectIntakeTrigger>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="group inline-flex h-11 items-center gap-3 rounded-md border border-white/15 bg-white/[0.025] px-3.5 text-sm font-medium text-base-heading transition-colors hover:border-white/30 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-controls="mobile-navigation"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
        >
          <span>{mobileOpen ? "Close" : "Menu"}</span>
          <span aria-hidden="true" className="relative block h-3.5 w-4">
            <span
              className={cn(
                "absolute left-0 top-1 block h-px w-4 bg-current transition-transform duration-200",
                mobileOpen ? "translate-y-0.5 rotate-45" : "-translate-y-1",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-2 block h-px w-4 bg-current transition-transform duration-200",
                mobileOpen ? "-translate-y-0.5 -rotate-45" : "translate-y-1",
              )}
            />
          </span>
        </button>
      </Container>

      {mobileOpen && (
        <div
          ref={menuRef}
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          onKeyDown={handleMenuKeyDown}
          className="fixed inset-x-0 top-[4.5rem] h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-white/[0.07] bg-base-bg lg:hidden"
        >
          <Container className="flex min-h-full flex-col py-8 sm:py-10">
            <p className="operational-label">Navigation / MDW</p>

            <nav aria-label="Mobile navigation" className="mt-7 border-t border-white/10">
              {NAVIGATION.map((item) => (
                <MobileNavLink
                  key={item.section}
                  href={sectionHref(item.section, isHome, "href" in item ? item.href : undefined)}
                  index={item.index}
                  active={("href" in item && pathname === item.href) || (isHome && activeSection === item.section)}
                  onClick={closeMobile}
                >
                  {item.label}
                </MobileNavLink>
              ))}
            </nav>

            <div className="mt-8">
              <ProjectIntakeTrigger size="lg" className="w-full sm:w-auto" onBeforeOpen={closeMobile}>
                Start a Project
              </ProjectIntakeTrigger>
            </div>

            <div className="mt-auto border-t border-white/10 pt-6 text-sm leading-6 text-base-mute">
              <p>Founder-led · Veteran-owned</p>
              <p>Central Valley focused · Select remote projects</p>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}

function BrandLink({ onClick }: { onClick: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="McPherson Digital Works home"
      className="group inline-flex min-w-0 items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
    >
      <span className="relative h-8 w-[4.5rem] shrink-0" aria-hidden="true">
        <Image
          src="/brand/mdw-mark.png"
          alt=""
          fill
          sizes="72px"
          className="object-contain drop-shadow-[0_0_10px_hsl(var(--signal-cyan)/0.2)] transition-[filter] duration-200 group-hover:drop-shadow-[0_0_14px_hsl(var(--signal-cyan)/0.38)]"
        />
      </span>
      <span className="min-w-0 leading-none">
        <span className="block truncate text-[0.9375rem] font-semibold tracking-[-0.02em] text-base-heading sm:text-base">
          McPherson Digital Works
        </span>
        <span className="mt-1.5 hidden font-mono text-[0.5625rem] uppercase tracking-[0.17em] text-base-mute sm:block">
          Design · Development · Care
        </span>
      </span>
    </Link>
  );
}

function DesktopNavLink({
  href,
  active,
  children,
}: {
  href: string;
  active?: boolean;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "location" : undefined}
      className={cn(
        "relative rounded-sm py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background",
        active ? "text-base-heading" : "text-base-mute hover:text-base-heading",
      )}
    >
      {children}
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-x-0 -bottom-[1.08rem] h-px origin-left bg-primary transition-transform duration-200",
          active ? "scale-x-100" : "scale-x-0",
        )}
      />
    </Link>
  );
}

function MobileNavLink({
  href,
  index,
  children,
  onClick,
  active,
}: {
  href: string;
  index: string;
  children: ReactNode;
  onClick: () => void;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "location" : undefined}
      className="group flex min-h-16 items-center justify-between gap-5 border-b border-white/10 py-4 text-base-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
    >
      <span className="flex items-baseline gap-4">
        <span className="font-mono text-[0.625rem] tracking-[0.16em] text-base-mute">
          {index}
        </span>
        <span className="text-2xl font-medium tracking-[-0.035em] transition-colors group-hover:text-white">
          {children}
        </span>
      </span>
      <span aria-hidden="true" className={cn("text-xl", active ? "text-primary" : "text-base-mute")}>
        ↗
      </span>
    </Link>
  );
}
