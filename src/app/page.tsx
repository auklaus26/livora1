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
            Supported Independent Living and <span className="text-[var(--color-primary)] italic">disability supports</span> in Melbourne.
          </>
        }
        description="Livora Care brings together warm editorial design, structured service delivery, and practical participant support across SIL, in-home care, and collaborative referral pathways."
        primaryCta={{ href: "/services/sil", label: "Explore our services" }}
        secondaryCta={{ href: "/about", label: "Meet our team" }}
        labels={heroVisualLabels.home}
        aside={<StatStrip stats={statHighlights} />}
      />

      <section className="section-wash py-20">
        <Shell className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Why Livora"
            title={<>Experience care that breathes life into your goals.</>}
            description="The prototype direction is strongest when it feels calm but still practical. In production, that means generous spacing, clear pathways, and content written for participants and referrers rather than generic marketing language."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {homeServices.map((service, index) => (
              <FeatureCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                tone={index === 1 ? "primary" : index === 3 ? "warm" : "light"}
              />
            ))}
          </div>
        </Shell>
      </section>

      <section className="py-20">
        <Shell className="space-y-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="The Livora difference"
              title="Professional standards without a clinical feel."
              description="The prototype's design-system note is directionally right: tone and layout should signal safety and professionalism without looking institutional."
            />
            <ButtonLink href="/referrers" variant="tertiary" className="gap-2">
              Information for referrers
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
