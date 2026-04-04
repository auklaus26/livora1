"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { ButtonLink } from "@/components/button-link";
import { Shell } from "@/components/shell";
import { navItems } from "@/lib/site-content";
import livoraLogo from "../../public/livora-logo.png";

export function SiteHeader() {
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);

  function closeMobileMenu() {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.open = false;
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(189,201,202,0.3)] bg-[rgba(251,249,243,0.72)] backdrop-blur-xl">
      <Shell className="flex min-h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center" aria-label="Livora Care home">
          <Image
            src={livoraLogo}
            alt="Livora Care"
            className="h-18 w-auto"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold tracking-tight text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <ButtonLink href="/referrals/new">Book Consultation</ButtonLink>
        </div>
        <details ref={mobileMenuRef} className="group md:hidden">
          <summary className="list-none rounded-full bg-[var(--color-surface-container)] px-4 py-2 text-sm font-semibold">
            Menu
          </summary>
          <div className="absolute inset-x-4 top-20 rounded-[24px] bg-[var(--color-surface-container-lowest)] p-5 shadow-[var(--shadow-editorial)]">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="text-base font-semibold text-[var(--color-on-background)]"
                >
                  {item.label}
                </Link>
              ))}
              <ButtonLink href="/referrals/new" onClick={closeMobileMenu} className="mt-2 w-full">
                Book Consultation
              </ButtonLink>
            </nav>
          </div>
        </details>
      </Shell>
    </header>
  );
}
