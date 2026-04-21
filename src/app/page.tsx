import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/button-link";
import { CtaBand } from "@/components/cta-band";
import { FeatureCard } from "@/components/feature-card";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Shell } from "@/components/shell";
import { StatStrip } from "@/components/stat-strip";
import { ctaStrip, differentiators, heroVisualLabels, homeServices, statHighlights } from "@/lib/site-content";

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="Registered NDIS provider"
        title={
          <>
            <span className="text-[var(--color-primary)] italic">NDIS disability supports</span> in Melbourne.
          </>
        }
        description="Livora Care is a registered NDIS provider delivering person-centred disability supports that promote independence, safety and meaningful participation in everyday life. We work closely with participants, families and support coordinators to provide reliable and high-quality supports tailored to each individual's goals."
        primaryCta={{ href: "/contact", label: "Book Free Consultation" }}
        secondaryCta={{ href: "/referrals/new", label: "Refer a Participant" }}
        labels={heroVisualLabels.home}
        aside={<StatStrip stats={statHighlights} />}
      />

      <section className="section-wash py-20">
        <Shell className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Welcome to Livora Care"
            title={<>NDIS services designed to support independence, daily living and community participation.</>}
            description="Livora Care provides professional disability support services for NDIS participants across Melbourne. Our team focuses on helping individuals live as independently as possible while receiving the support they need with daily activities, life skills and community participation."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {homeServices.map((service, index) => (
              <FeatureCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                tone={index === 1 ? "light" : index === 3 ? "light" : "light"}
              />
            ))}
          </div>
        </Shell>
      </section>

      <section className="py-20">
        <Shell className="space-y-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Why Choose Livora Care"
              title="Participants choose Livora Care for safe, reliable and participant-centred supports."
              description="Our organisation operates in alignment with the NDIS Practice Standards and Code of Conduct, with a strong focus on participant dignity and choice, reliable and responsive service delivery, and collaborative work with support coordinators and clinicians."
            />
            <ButtonLink href="/referrers" variant="tertiary" className="gap-2">
              Submit a Referral
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {differentiators.map((item) => (
              <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
            ))}
          </div>
        </Shell>
      </section>

      <CtaBand {...ctaStrip} />
    </>
  );
}
