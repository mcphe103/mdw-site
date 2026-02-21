"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const SECTIONS = ["services", "process", "pricing", "about", "contact"] as const;

export function Header() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const pathname = usePathname();
  const isHome = pathname === "/";

  const closeMobile = () => setMobileOpen(false);

  // Close mobile menu when navigating to a new route (ex: /privacy -> /)
  useEffect(() => {
    closeMobile();
  }, [pathname]);

  useEffect(() => {
    if (!isHome) {
      setActiveSection(null);
      return;
    }

    const handleScroll = () => {
      let current: string | null = null;

      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        // 96px is roughly below the sticky header
        if (rect.top <= 96 && rect.bottom >= 96) {
          current = id;
          break;
        }
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <header className="sticky top-0 z-50 bg-base-bg/75 backdrop-blur border-b border-white/5">
      <div className="container-xl h-16 flex items-center justify-between">
        {/* LOGO */}
        <Link
          href="/"
          className="font-semibold text-base-heading text-lg tracking-wide"
          onClick={closeMobile}
        >
          McPherson <span className="text-base-accent">Digital</span> Works
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-6 text-sm">
          <NavLink
            href={isHome ? "#services" : "/#services"}
            active={activeSection === "services"}
          >
            Services
          </NavLink>
          <NavLink
            href={isHome ? "#process" : "/#process"}
            active={activeSection === "process"}
          >
            Process
          </NavLink>
          <NavLink
            href={isHome ? "#pricing" : "/#pricing"}
            active={activeSection === "pricing"}
          >
            Pricing
          </NavLink>
          <NavLink
            href={isHome ? "#about" : "/#about"}
            active={activeSection === "about"}
          >
            About
          </NavLink>
          <NavLink
            href={isHome ? "#contact" : "/#contact"}
            active={activeSection === "contact"}
          >
            Contact
          </NavLink>
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden md:block">
          <Link href={isHome ? "#contact" : "/#contact"}>
            <Button>Book a free consult</Button>
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-3 py-1 text-xs text-base-text/80 hover:border-base-accent/60 hover:text-base-accent"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-base-bg/95 backdrop-blur">
          <nav className="container-xl flex flex-col gap-2 py-4 text-sm">
            <MobileNavLink
              href={isHome ? "#services" : "/#services"}
              active={activeSection === "services"}
              onClick={closeMobile}
            >
              Services
            </MobileNavLink>

            <MobileNavLink
              href={isHome ? "#process" : "/#process"}
              active={activeSection === "process"}
              onClick={closeMobile}
            >
              Process
            </MobileNavLink>

            <MobileNavLink
              href={isHome ? "#pricing" : "/#pricing"}
              active={activeSection === "pricing"}
              onClick={closeMobile}
            >
              Pricing
            </MobileNavLink>

            <MobileNavLink
              href={isHome ? "#about" : "/#about"}
              active={activeSection === "about"}
              onClick={closeMobile}
            >
              About
            </MobileNavLink>

            <MobileNavLink
              href={isHome ? "#contact" : "/#contact"}
              active={activeSection === "contact"}
              onClick={closeMobile}
            >
              Contact
            </MobileNavLink>

            <div className="pt-2">
              <Link href={isHome ? "#contact" : "/#contact"} onClick={closeMobile}>
                <Button className="w-full">Book a free consult</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLink({
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
      className={`
        relative inline-flex items-center text-sm
        transition-colors duration-200 group
        ${active ? "text-base-accent" : "text-base-text/80 hover:text-base-heading"}
      `}
    >
      <span>{children}</span>

      {/* underline */}
      <span
        className={`
          pointer-events-none absolute -bottom-1 left-0 h-0.5 w-full
          origin-left transform bg-base-accent
          transition-transform duration-200
          ${active ? "scale-x-100" : "scale-x-0"}
          group-hover:scale-x-100
        `}
      />
    </Link>
  );
}

function MobileNavLink({
  href,
  children,
  onClick,
  active,
}: {
  href: string;
  children: ReactNode;
  onClick?: () => void;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        py-1 text-sm transition-colors duration-200
        ${active ? "text-base-accent" : "text-base-text/80 hover:text-base-heading"}
      `}
    >
      {children}
    </Link>
  );
}