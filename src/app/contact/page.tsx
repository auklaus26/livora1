import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";

import { ConsultationForm } from "@/components/consultation-form";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Shell } from "@/components/shell";
import { contactFaqs, heroVisualLabels, quickContact, siteConfig } from "@/lib/site-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description: "Contact Livora Care to discuss disability supports, referrals and service suitability in Melbourne.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Livora Care"
        title={
          <>
            Get in touch about <span className="text-[var(--color-primary)] italic">support needs</span> and services.
          </>
        }
        description="Whether you are a participant, family member, support coordinator, allied health professional or community organisation, Livora Care welcomes your enquiry and will respond as soon as possible."
        primaryCta={{ href: "/referrals/new", label: "Submit a Referral" }}
        secondaryCta={{ href: siteConfig.phoneHref, label: `Call ${siteConfig.phoneLabel}` }}
        labels={heroVisualLabels.referral}
        accent="warm"
      />

      <section className="section-wash py-20">
        <Shell className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Contact"
            title="Need the right support or want to learn more about our services?"
            description="Our team is here to help you, your family, or the participant you support find services that align with goals, needs and NDIS plans, including SIL, daily personal care, community participation, life skills, household supports and transport assistance."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {quickContact.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-[28px] bg-[var(--color-surface-container-lowest)] p-8 shadow-[var(--shadow-editorial)]"
              >
                <item.icon className="h-6 w-6 text-[var(--color-primary)]" />
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-on-surface-variant)]">
                  {item.title}
                </p>
                <p className="mt-2 font-headline text-2xl font-bold text-[var(--color-on-background)]">{item.value}</p>
              </a>
            ))}
          </div>
        </Shell>
      </section>

      <section id="free-consultation" className="scroll-mt-28 py-20">
        <Shell>
          <div className="grid gap-8 rounded-[32px] bg-[var(--color-surface-container-lowest)] p-8 shadow-[var(--shadow-editorial)] lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-tertiary)]">Free consultation</p>
              <h2 className="font-headline text-4xl font-extrabold tracking-[-0.03em]">Prefer to discuss before referring?</h2>
              <p className="max-w-2xl text-lg leading-8 text-[var(--color-on-surface-variant)]">
                Share your name, email, phone number, and preferred time.
              </p>
              <p className="text-sm leading-7 text-[var(--color-on-surface-variant)]">
                Your information will only be used to respond to this enquiry and arrange a suitable time to connect.
              </p>
            </div>
            <ConsultationForm />
          </div>
        </Shell>
      </section>

      <section className="section-wash py-20">
        <Shell className="space-y-8">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Get your questions answered"
            description="Learn more about how Livora Care supports participants, families and referrers when exploring NDIS services."
          />
          <div className="space-y-2">
            {contactFaqs.map((item) => (
              <details
                key={item.question}
                // open={index === 0}
                className="group rounded-[32px] border border-[var(--color-outline-variant)]/40 bg-[var(--color-surface-container-lowest)] px-7 py-6 shadow-[var(--shadow-editorial)]"
              >
                <summary className="cursor-pointer list-none pr-8 font-headline text-lg font-bold tracking-[-0.02em] text-[var(--color-on-background)] [&::-webkit-details-marker]:hidden">
                  <span className="relative block pl-8">
                    <span className="absolute left-0 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-surface-container)] text-[var(--color-primary)] transition-transform duration-200 group-open:rotate-180">
                      <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    {item.question}
                  </span>
                </summary>
                <p className="pt-5 pl-8 text-lg leading-8 text-[var(--color-on-surface-variant)]">{item.answer}</p>
              </details>
            ))}
          </div>
        </Shell>
      </section>
    </>
  );
}
