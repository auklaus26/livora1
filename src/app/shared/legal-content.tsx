import { SectionHeading } from "@/components/section-heading";
import { Shell } from "@/components/shell";

export function LegalContent({
  content,
}: {
  slug: string;
  content: { title: string; body: string[] };
}) {
  return (
    <section className="py-20">
      <Shell className="max-w-4xl space-y-8">
        <SectionHeading eyebrow="Policy" title={content.title} description="This content is a starter implementation and should be reviewed against your final compliance wording before launch." />
        <div className="rounded-[32px] bg-[var(--color-surface-container-lowest)] p-8 shadow-[var(--shadow-editorial)]">
          <div className="space-y-5 text-base leading-8 text-[var(--color-on-surface-variant)]">
            {content.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Shell>
    </section>
  );
}
