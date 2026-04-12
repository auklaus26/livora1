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
  description: "Information for support coordinators, allied health professionals and community referrers working with Livora Care.",
};

export default function ReferrersPage() {
  return (
    <>
      <PageHero
        eyebrow="Professional partnership"
        title={
          <>
            Partnering with <span className="text-[var(--color-primary)]">support coordinators</span> and allied health professionals.
          </>
        }
        description="Livora Care works collaboratively with referrers to deliver safe, reliable and participant-centred NDIS supports."
        primaryCta={{ href: "/referrals/new", label: "Submit Referral" }}
        secondaryCta={{ href: "/contact", label: "Contact Our Team" }}
        labels={heroVisualLabels.referrers}
      />

      <section className="section-wash py-20">
        <Shell className="space-y-10">
          <SectionHeading
            eyebrow="Services available"
            title="Services available for referral across Melbourne."
            description="We support participants through Supported Independent Living, daily personal activities, household supports and community participation, with a focus on consistent service delivery and participant-centred planning."
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
            eyebrow="Collaborative Care"
            title="Strong communication, transparent documentation and clear referral pathways."
            description="Our team works closely with support coordinators and clinicians so that services remain aligned with participant goals, NDIS plans and any relevant clinical recommendations."
          />
          <ProcessSteps steps={referralSteps} />
          <div className="rounded-[32px] bg-[var(--color-surface-container-lowest)] p-8 shadow-[var(--shadow-editorial)] md:flex md:items-center md:justify-between">
            <div className="space-y-2">
              <p className="font-headline text-2xl font-bold">Upholding the highest NDIS standards</p>
              <p className="max-w-2xl text-sm leading-7 text-[var(--color-on-surface-variant)]">
                As a registered NDIS provider, Livora Care delivers services in accordance with the NDIS Practice Standards, the NDIS Code of Conduct, and structured safeguarding and complaints processes.
              </p>
            </div>
            <ButtonLink href="/referrals/new" className="mt-5 md:mt-0">
              Submit Referral
            </ButtonLink>
          </div>
        </Shell>
      </section>

      <CtaBand {...ctaStrip} />
    </>
  );
}
