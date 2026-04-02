import type { LucideIcon } from "lucide-react";

export function FeatureCard({
  icon: Icon,
  title,
  description,
  tone = "light",
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  tone?: "light" | "primary" | "warm";
}) {
  const toneClass =
    tone === "primary"
      ? "bg-[linear-gradient(135deg,var(--color-primary),var(--color-primary-container))] text-white"
      : tone === "warm"
        ? "bg-[linear-gradient(135deg,var(--color-tertiary-container),var(--color-tertiary-fixed-dim))] text-white"
        : "bg-[var(--color-surface-container-lowest)] text-[var(--color-on-background)]";

  const descriptionClass = tone === "light" ? "text-[var(--color-on-surface-variant)]" : "text-white/88";

  return (
    <article className={`rounded-[28px] p-8 shadow-[var(--shadow-editorial)] ${toneClass}`}>
      <div className="mb-6 inline-flex rounded-2xl bg-white/18 p-3">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="font-headline text-2xl font-bold tracking-tight">{title}</h3>
      <p className={`mt-4 text-sm leading-7 ${descriptionClass}`}>{description}</p>
    </article>
  );
}
