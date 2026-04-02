import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { ReferralForm } from "@/components/referral-form";
import { SectionHeading } from "@/components/section-heading";
import { Shell } from "@/components/shell";
import { heroVisualLabels, quickContact, referralSteps } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Referral Form",
  description: "Submit a referral to Livora Care with participant, support, and safety information for intake triage.",
};

export default function ReferralPage() {
  return (
    <>
      <PageHero
        eyebrow="Secure professional referral"
        title={
          <>
            Partnering in <span className="text-[var(--color-primary)] italic">excellence</span> of care.
          </>
        }
        description="Use the online referral form to send participant details, requested supports, and risk information directly to Livora Care's intake pathway."
        primaryCta={{ href: "#referral-form", label: "Start referral" }}
        secondaryCta={{ href: "/referrers", label: "View process" }}
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
                title="Triage is structured and responsive."
                description={referralSteps.map((step, index) => `${index + 1}. ${step.title}: ${step.description}`).join(" ")}
              />
            </div>
            <div className="rounded-[28px] bg-[var(--color-surface-container-lowest)] p-8 shadow-[var(--shadow-editorial)]">
              <p className="font-headline text-2xl font-bold">Need to speak to someone first?</p>
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
            </div>
          </aside>
        </Shell>
      </section>
    </>
  );
}
