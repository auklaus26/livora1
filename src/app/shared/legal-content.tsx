import { SectionHeading } from "@/components/section-heading";
import { Shell } from "@/components/shell";

const contactLinkPattern =
  /([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}|(?:https?:\/\/)?www\.[a-z0-9.-]+\.[a-z]{2,}(?:\/[^\s]*)?|\+?\d[\d\s().-]{6,}\d)/gi;

function getContactHref(value: string) {
  if (value.includes("@")) {
    return `mailto:${value}`;
  }

  if (value.toLowerCase().startsWith("http")) {
    return value;
  }

  if (value.toLowerCase().startsWith("www.")) {
    return `https://${value}`;
  }

  return `tel:${value.replace(/[^\d+]/g, "")}`;
}

function renderLinkedParagraph(paragraph: string) {
  return paragraph.split(contactLinkPattern).map((part, index) => {
    if (!part.match(contactLinkPattern)) {
      return part;
    }

    const href = getContactHref(part);
    const isExternalLink = href.startsWith("http");

    return (
      <a
        key={`${part}-${index}`}
        href={href}
        className="font-semibold text-[var(--color-primary)] underline underline-offset-4 transition [overflow-wrap:anywhere] hover:text-[var(--color-primary-fixed-dim)]"
        {...(isExternalLink ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {part}
      </a>
    );
  });
}

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
                  <p key={paragraph} className="min-w-0">
                    {renderLinkedParagraph(paragraph)}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Shell>
    </section>
  );
}
