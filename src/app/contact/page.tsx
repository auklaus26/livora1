import type { Metadata } from "next";

import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Shell } from "@/components/shell";
import { heroVisualLabels, quickContact, siteConfig } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Livora Care for participant enquiries, referrals, and intake support in Melbourne.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Livora Care"
        title={
          <>
            Speak with the team about <span className="text-[var(--color-primary)] italic">support pathways</span> and intake.
          </>
        }
        description="Use this page for general enquiries, early intake questions, and support pathway discussions before starting a formal referral."
        primaryCta={{ href: "/referrals/new", label: "Submit Referral" }}
        secondaryCta={{ href: siteConfig.phoneHref, label: `Call ${siteConfig.phoneLabel}` }}
        labels={heroVisualLabels.referral}
        accent="warm"
      />

      <section className="section-wash py-20">
        <Shell className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Contact"
            title="Reach Livora through the intake team."
            description="This page is the non-referral contact destination in the header. It gives families, participants, and professionals a clear place to start before they move into the structured referral form."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {quickContact.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-[28px] bg-[var(--color-surface-container-lowest)] p-8 shadow-[var(--shadow-editorial)]"
              >
                <item.icon className="h-6 w-6 text-[var(--color-primary)]" />
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-on-surface-variant)]">
                  {item.title}
                </p>
                <p className="mt-2 font-headline text-2xl font-bold text-[var(--color-on-background)]">{item.value}</p>
              </a>
            ))}
          </div>
        </Shell>
      </section>

      <section className="py-20">
        <Shell>
          <div className="rounded-[32px] bg-[var(--color-surface-container-lowest)] p-8 shadow-[var(--shadow-editorial)] md:flex md:items-center md:justify-between">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-tertiary)]">Next step</p>
              <h2 className="font-headline text-4xl font-extrabold tracking-[-0.03em]">Ready to send participant details?</h2>
              <p className="max-w-2xl text-lg leading-8 text-[var(--color-on-surface-variant)]">
                Move from general contact into the structured referral form when you are ready to share support, participant, and safety information.
              </p>
            </div>
            <ButtonLink href="/referrals/new" className="mt-6 md:mt-0">
              Submit Referral
            </ButtonLink>
          </div>
        </Shell>
      </section>
    </>
  );
}
