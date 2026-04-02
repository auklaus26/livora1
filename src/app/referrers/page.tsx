import type { Metadata } from "next";

import { ButtonLink } from "@/components/button-link";
import { CtaBand } from "@/components/cta-band";
import { FeatureCard } from "@/components/feature-card";
import { PageHero } from "@/components/page-hero";
import { ProcessSteps } from "@/components/process-steps";
import { SectionHeading } from "@/components/section-heading";
import { Shell } from "@/components/shell";
import { ctaStrip, heroVisualLabels, homeServices, referralSteps } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Referrers Hub",
  description: "Referral information for support coordinators, allied health professionals, and housing partners.",
};

export default function ReferrersPage() {
  return (
    <>
      <PageHero
        eyebrow="Professional partnership"
        title={
          <>
            Partnering with <span className="text-[var(--color-primary)]">support coordinators</span> and allied health.
          </>
        }
        description="Livora Care works with referrers to triage fit quickly, surface support needs early, and coordinate participant transitions with clear communication."
        primaryCta={{ href: "/referrals/new", label: "Submit referral" }}
        secondaryCta={{ href: "/services/sil", label: "Download service overview" }}
        labels={heroVisualLabels.referrers}
      />

      <section className="section-wash py-20">
        <Shell className="space-y-10">
          <SectionHeading
            eyebrow="Services available"
            title="Support pathways that can be referred with confidence."
            description="The prototype set already groups the right offer areas. In implementation, keep the service list concise and route deeper detail to the SIL page and referral form."
          />
          <div className="grid gap-6 lg:grid-cols-4">
            {homeServices.map((service, index) => (
              <FeatureCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                tone={index === 0 ? "light" : index === 1 ? "primary" : index === 2 ? "warm" : "light"}
              />
            ))}
          </div>
        </Shell>
      </section>

      <section className="py-20">
        <Shell className="space-y-10">
          <SectionHeading
            eyebrow="Referral process"
            title="A streamlined intake sequence."
            description="This page should reduce uncertainty for referrers: what to send, how quickly Livora responds, and what happens before a participant is onboarded."
          />
          <ProcessSteps steps={referralSteps} />
          <div className="rounded-[32px] bg-[var(--color-surface-container-lowest)] p-8 shadow-[var(--shadow-editorial)] md:flex md:items-center md:justify-between">
            <div className="space-y-2">
              <p className="font-headline text-2xl font-bold">Upholding the highest NDIS standards</p>
              <p className="max-w-2xl text-sm leading-7 text-[var(--color-on-surface-variant)]">
                Governance, safeguarding, and quality review should be visible throughout the referrer experience, not buried in a policy page.
              </p>
            </div>
            <ButtonLink href="/referrals/new" className="mt-5 md:mt-0">
              Submit referral form
            </ButtonLink>
          </div>
        </Shell>
      </section>

      <CtaBand {...ctaStrip} />
    </>
  );
}
