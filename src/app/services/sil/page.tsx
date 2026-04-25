import type { Metadata } from "next";

import { CtaBand } from "@/components/cta-band";
import { FeatureCard } from "@/components/feature-card";
import { PageHero } from "@/components/page-hero";
import { ProcessSteps } from "@/components/process-steps";
import { SectionHeading } from "@/components/section-heading";
import { Shell } from "@/components/shell";
import { WeheartNdisLogo } from "@/components/weheart-ndis-logo";
import { ctaStrip, heroVisualLabels, referralSteps, silSupports } from "@/lib/site-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Supported Independent Living in Melbourne",
  description: "Person-centred Supported Independent Living services in Melbourne designed to help NDIS participants live safely and independently.",
  path: "/services/sil",
});

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
        description="Person-centred supported living services designed to help NDIS participants live safely, confidently and independently."
        primaryCta={{ href: "/contact#free-consultation", label: "Book Free Consultation" }}
        secondaryCta={{ href: "/referrals/new", label: "Refer a Participant" }}
        ctaAside={<WeheartNdisLogo />}
        labels={heroVisualLabels.sil}
      />

      <section className="section-wash py-20">
        <Shell className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="What is SIL"
            title="Supported Independent Living helps participants build independence in a safe and supportive home environment."
            description="SIL is an NDIS support for participants who need help with daily activities while living in shared or supported accommodation. At Livora Care, SIL is delivered with a strong focus on participant choice, dignity and skill development."
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
          <div className="rounded-[32px] bg-[linear-gradient(135deg,var(--color-secondary-container))] p-8 shadow-[var(--shadow-editorial)]">
            <SectionHeading
              eyebrow="24-hour support"
              title="Structured support can be delivered across a 24-hour roster when required."
              description="Morning supports focus on preparing for the day, while afternoon, evening and overnight supports help maintain safety, household routines and community participation."
            />
          </div>
          <div className="rounded-[32px] bg-[var(--color-surface-container-lowest)] p-8 shadow-[var(--shadow-editorial)]">
            <SectionHeading
              eyebrow="Who Can Benefit"
              title="SIL may suit participants who need regular support with daily living and benefit from a supported environment."
              description="Participants receiving SIL often need assistance with routines, household management, personal care and social engagement while building confidence and staying connected to their community."
            />
          </div>
        </Shell>
      </section>

      <section className="section-wash py-20">
        <Shell className="space-y-10">
          <SectionHeading
            eyebrow="Collaboration and Intake"
            title="We work closely with participants, families and professional support teams."
            description="Livora Care collaborates with support coordinators, local area coordinators, occupational therapists, behaviour support practitioners and allied health professionals so that SIL arrangements remain aligned with each participant's NDIS plan and goals."
          />
          <ProcessSteps steps={referralSteps} />
        </Shell>
      </section>

      <CtaBand {...ctaStrip} />
    </>
  );
}
