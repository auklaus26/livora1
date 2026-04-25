import type { ReactNode } from "react";

import { ButtonLink } from "@/components/button-link";
import { HeroVisual } from "@/components/hero-visual";
import { Shell } from "@/components/shell";

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  ctaAside,
  labels,
  accent,
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  ctaAside?: ReactNode;
  labels: string[];
  accent?: "teal" | "warm";
  aside?: ReactNode;
}) {
  return (
    <section className="overflow-hidden pb-16 pt-16 lg:pb-24 lg:pt-24">
      <Shell className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-secondary-container)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-secondary)]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--color-primary)]" />
            {eyebrow}
          </div>
          <div className="space-y-6">
            <h1 className="font-headline text-5xl font-extrabold leading-[1.02] tracking-[-0.04em] text-balance md:text-7xl">
              {title}
            </h1>
            <p className="max-w-2xl text-justify text-lg leading-8 text-[var(--color-body-copy)] text-pretty md:text-xl">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
            {secondaryCta ? (
              <ButtonLink href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </ButtonLink>
            ) : null}
            {ctaAside}
          </div>
          {aside}
        </div>
        <HeroVisual labels={labels} accent={accent} />
      </Shell>
    </section>
  );
}
