import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { ReferralForm } from "@/components/referral-form";
import { SectionHeading } from "@/components/section-heading";
import { Shell } from "@/components/shell";
import { heroVisualLabels, quickContact, referralSteps } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Referral Form",
  description: "Make a referral to Livora Care for disability supports in Melbourne and share participant information for service review.",
};

export default function ReferralPage() {
  return (
    <>
      <PageHero
        eyebrow="Secure professional referral"
        title={
          <>
            Make a <span className="text-[var(--color-primary)] italic">referral</span> for Livora Care services.
          </>
        }
        description="If you are a support coordinator, allied health professional, hospital discharge planner, community organisation or family member, you can refer a participant to Livora Care using the form below. Our team will review the referral and respond promptly to discuss service suitability and availability."
        primaryCta={{ href: "#referral-form", label: "Start Referral" }}
        secondaryCta={{ href: "/contact#free-consultation", label: "Book Free Consultation" }}
        labels={heroVisualLabels.referral}
        accent="warm"
      />

      <section id="referral-form" className="py-12">
        <Shell className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <ReferralForm />
          </div>
          <aside className="space-y-6">
            <div className="rounded-[28px] bg-[var(--color-surface-container)] p-8 shadow-[var(--shadow-editorial)]">
              <SectionHeading
                eyebrow="What happens next"
                title="Our goal is to match the right supports to the participant's needs."
                description={referralSteps.map((step, index) => `${index + 1}. ${step.title}: ${step.description}`).join(" ")}
              />
            </div>
            <div className="rounded-[28px] bg-[var(--color-surface-container-lowest)] p-8 shadow-[var(--shadow-editorial)]">
              <p className="font-headline text-2xl font-bold">Prefer to discuss before referring?</p>
              <div className="mt-5 space-y-4">
                {quickContact.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 rounded-2xl bg-[var(--color-surface-container)] px-4 py-4 text-sm font-medium text-[var(--color-on-background)]"
                  >
                    <item.icon className="h-5 w-5 text-[var(--color-primary)]" />
                    <span>
                      <span className="block text-xs uppercase tracking-[0.18em] text-[var(--color-on-surface-variant)]">
                        {item.title}
                      </span>
                      {item.value}
                    </span>
                  </a>
                ))}
              </div>
              <p className="mt-5 text-sm leading-7 text-[var(--color-on-surface-variant)]">
                If you would like to discuss a participant before submitting a referral, our team is happy to assist.
              </p>
            </div>
          </aside>
        </Shell>
      </section>
    </>
  );
}
