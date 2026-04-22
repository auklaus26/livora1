import { FeedbackForm } from "@/components/feedback-form";
import { Shell } from "@/components/shell";
import { legalPageContent } from "@/lib/site-content";
import { LegalContent } from "@/app/shared/legal-content";

export default function ComplaintsPage() {
  return (
    <>
      <LegalContent slug="complaints" content={legalPageContent.complaints} />

      <section id="feedback-form" className="scroll-mt-28 pb-20">
        <Shell className="max-w-4xl">
          <div className="grid gap-8 rounded-[32px] bg-[var(--color-surface-container-lowest)] p-8 shadow-[var(--shadow-editorial)] lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-tertiary)]">
                Feedback form
              </p>
              <h2 className="font-headline text-4xl font-extrabold tracking-[-0.03em]">
                Share feedback, a complaint, or a suggestion directly from this page.
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-[var(--color-on-surface-variant)]">
                Complete the form below and we will prepare an email addressed to Livora Care. You can include your
                details or choose to submit anonymously.
              </p>
            </div>
            <FeedbackForm />
          </div>
        </Shell>
      </section>
    </>
  );
}
