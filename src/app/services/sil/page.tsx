import type { Metadata } from "next";

import { CtaBand } from "@/components/cta-band";
import { FeatureCard } from "@/components/feature-card";
import { PageHero } from "@/components/page-hero";
import { ProcessSteps } from "@/components/process-steps";
import { SectionHeading } from "@/components/section-heading";
import { Shell } from "@/components/shell";
import { ctaStrip, heroVisualLabels, referralSteps, silSupports } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Supported Independent Living in Melbourne",
  description: "Supported Independent Living services in Melbourne with 24-hour support options and coordinated intake.",
};

export default function SilPage() {
  return (
    <>
      <PageHero
        eyebrow="NDIS registered provider"
        title={
          <>
            Supported Independent Living <span className="text-[var(--color-primary)]">(SIL)</span> in Melbourne.
          </>
        }
        description="Livora Care delivers person-centred SIL with practical daily living support, 24-hour options where required, and collaborative planning with families and referrers."
        primaryCta={{ href: "/referrals/new", label: "Check availability" }}
        secondaryCta={{ href: "/referrers", label: "For referrers" }}
        labels={heroVisualLabels.sil}
      />

      <section className="section-wash py-20">
        <Shell className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="What is SIL"
            title="Support inside the home, not just a roof overhead."
            description="This page should explain SIL plainly: help with daily tasks, routines, independence, and household life. The prototype has the right emotional direction, but production content needs plain-language clarity first."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {silSupports.map((item) => (
              <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
            ))}
          </div>
        </Shell>
      </section>

      <section className="py-20">
        <Shell className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[32px] bg-[linear-gradient(135deg,var(--color-primary),var(--color-primary-container))] p-8 text-white shadow-[var(--shadow-editorial)]">
            <SectionHeading
              eyebrow="24-hour support"
              title="Peace of mind for high-support environments."
              description="Where participant needs require active overnight or sleepover arrangements, the site should show that clearly without promising configurations before intake confirms fit."
            />
          </div>
          <div className="rounded-[32px] bg-[var(--color-surface-container-lowest)] p-8 shadow-[var(--shadow-editorial)]">
            <SectionHeading
              eyebrow="Who this suits"
              title="Participants who need consistent daily living support and a coordinated household environment."
              description="Use this section to speak directly to participants, families, and support coordinators about suitability, routines, and referral readiness."
            />
          </div>
        </Shell>
      </section>

      <section className="section-wash py-20">
        <Shell className="space-y-10">
          <SectionHeading
            eyebrow="Intake process"
            title="A collaborative pathway from referral to transition."
            description="SIL decisions are higher stakes than a simple marketing enquiry. The website should show the referral sequence, triage expectations, and the fact that matching and risk review are part of intake."
          />
          <ProcessSteps steps={referralSteps} />
        </Shell>
      </section>

      <CtaBand {...ctaStrip} />
    </>
  );
}
