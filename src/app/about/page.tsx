import type { Metadata } from "next";

import { CtaBand } from "@/components/cta-band";
import { FeatureCard } from "@/components/feature-card";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Shell } from "@/components/shell";
import { ctaStrip, heroVisualLabels, valuePillars } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About Our Team",
  description: "Learn about Livora Care's participant-centred philosophy, multidisciplinary leadership, and governance approach.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Why choose Livora Care"
        title={
          <>
            Multidisciplinary expertise at your <span className="text-[var(--color-primary)] italic">service.</span>
          </>
        }
        description="Livora Care combines healthcare understanding, service design, and governance discipline to deliver participant-centred support that feels responsive, respectful, and reliable."
        primaryCta={{ href: "/referrals/new", label: "Get started" }}
        secondaryCta={{ href: "/services/sil", label: "View services" }}
        labels={heroVisualLabels.about}
        accent="warm"
      />

      <section className="section-wash py-20">
        <Shell className="space-y-12">
          <SectionHeading
            eyebrow="Core pillars"
            title="A participant-centred philosophy backed by operational discipline."
            description="The website should communicate warmth, but trust is built by showing how care is governed, coordinated, and continuously improved."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {valuePillars.map((pillar) => (
              <FeatureCard key={pillar.title} icon={pillar.icon} title={pillar.title} description={pillar.description} />
            ))}
          </div>
        </Shell>
      </section>

      <section className="py-20">
        <Shell className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[32px] bg-[var(--color-surface-container)] p-8 shadow-[var(--shadow-editorial)]">
            <SectionHeading
              eyebrow="Reliability"
              title="Care plans should feel personal. Systems should feel dependable."
              description="The strongest message in this prototype set is that Livora is not trying to look like a generic provider. That is useful, but the production copy also needs to state how participants are kept safe, how decisions are made, and how teams stay aligned."
            />
          </div>
          <div className="rounded-[32px] bg-[var(--color-surface-container-lowest)] p-8 shadow-[var(--shadow-editorial)]">
            <SectionHeading
              eyebrow="Expertise"
              title="Healthcare, operations, and safeguarding working together."
              description="Use this page to explain leadership capability, values, and standards. It should reassure families and referrers without drifting into abstract brand language."
            />
          </div>
        </Shell>
      </section>

      <CtaBand {...ctaStrip} />
    </>
  );
}
