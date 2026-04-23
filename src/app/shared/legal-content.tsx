import { SectionHeading } from "@/components/section-heading";
import { Shell } from "@/components/shell";

export function LegalContent({
  content,
}: {
  slug: string;
  content: { title: string; description?: string; sections: { heading: string; paragraphs: string[] }[] };
}) {
  return (
    <section className="py-20">
      <Shell className="max-w-4xl space-y-8">
        <SectionHeading eyebrow="Policy" title={content.title} description={content.description} />
        <div className="rounded-[32px] bg-[var(--color-surface-container-lowest)] p-8 shadow-[var(--shadow-editorial)]">
          <div className="space-y-8 text-base leading-8 text-[var(--color-body-copy)]">
            {content.sections.map((section) => (
              <div key={section.heading} className="space-y-4">
                <h3 className="font-headline text-2xl font-bold text-[var(--color-on-background)]">{section.heading}</h3>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Shell>
    </section>
  );
}
