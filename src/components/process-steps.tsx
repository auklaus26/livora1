import { ProcessStep } from "@/lib/site-content";

export function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {steps.map((step, index) => (
        <article
          key={step.title}
          className="rounded-[28px] bg-[var(--color-surface-container-lowest)] p-8 shadow-[var(--shadow-editorial)]"
        >
          <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)] text-lg font-bold text-white">
            {index + 1}
          </div>
          <h3 className="font-headline text-2xl font-bold">{step.title}</h3>
          <p className="mt-4 text-sm leading-7 text-[var(--color-on-surface-variant)]">{step.description}</p>
        </article>
      ))}
    </div>
  );
}
