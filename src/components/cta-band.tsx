import { ButtonLink } from "@/components/button-link";
import { Shell } from "@/components/shell";

export function CtaBand({
  title,
  description,
  primary,
  secondary,
  tertiary,
}: {
  title: string;
  description: string;
  primary: { href: string; label: string };
  secondary: { href: string; label: string };
  tertiary: { href: string; label: string };
}) {
  return (
    <section className="py-20">
      <Shell>
        <div className="rounded-[40px] bg-[linear-gradient(135deg,rgba(183,231,247,0.9),rgba(240,238,231,0.96),rgba(122,213,221,0.24))] px-8 py-12 shadow-[var(--shadow-editorial)] md:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr] lg:items-end">
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-primary)]">Care pathway</p>
              <h2 className="font-headline text-4xl font-extrabold tracking-[-0.03em] text-balance md:text-5xl">{title}</h2>
              <p className="max-w-2xl text-lg leading-8 text-[var(--color-on-surface-variant)]">{description}</p>
            </div>
            <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:justify-end">
              <ButtonLink href={primary.href}>{primary.label}</ButtonLink>
              <ButtonLink href={secondary.href} variant="secondary">
                {secondary.label}
              </ButtonLink>
              <ButtonLink href={tertiary.href} variant="tertiary">
                {tertiary.label}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Shell>
    </section>
  );
}
