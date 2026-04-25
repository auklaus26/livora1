import type { Metadata } from "next";

import { CtaBand } from "@/components/cta-band";
import { FeatureCard } from "@/components/feature-card";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Shell } from "@/components/shell";
import { ctaStrip, heroVisualLabels, valuePillars } from "@/lib/site-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Our Team",
  description: "Learn about Livora Care's multidisciplinary experience across healthcare, research, governance and disability support.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title={
          <>
            A team with <span className="text-[var(--color-primary)] italic">diverse professional experience.</span>
          </>
        }
        description="Livora Care is supported by a multidisciplinary team with experience across healthcare, disability support, clinical research and organisational management. This combination of expertise helps ensure compassionate service delivery alongside strong governance systems."
        primaryCta={{ href: "/contact", label: "Start a Conversation" }}
        secondaryCta={{ href: "/services/sil", label: "View SIL Services" }}
        labels={heroVisualLabels.about}
        accent="warm"
      />

      <section className="section-wash py-20">
        <Shell className="space-y-12">
          <SectionHeading
            eyebrow="Professional Experience"
            title="Healthcare, research and governance experience working together to support participants."
            description="Our leadership and operational team brings together experience from healthcare, biomedical research, the healthcare industry and corporate governance to support safe, respectful and participant-centred services."
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
              eyebrow="Working Together"
              title="The strength of Livora Care lies in the diversity of our team's experience."
              description="By combining knowledge from healthcare, research, disability services and organisational management, we are able to approach support delivery from multiple perspectives while staying focused on respectful, reliable and person-centred supports."
            />
          </div>
          <div className="rounded-[32px] bg-[var(--color-surface-container-lowest)] p-8 shadow-[var(--shadow-editorial)]">
            <SectionHeading
              eyebrow="Continuous Learning"
              title="A culture of continuous improvement and professional development."
              description="Our team regularly reviews service practices, regulatory requirements and emerging sector knowledge so that supports remain safe, responsive and aligned with best practice."
            />
          </div>
        </Shell>
      </section>

      <CtaBand {...ctaStrip} />
    </>
  );
}
