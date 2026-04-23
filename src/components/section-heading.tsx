import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("space-y-4", align === "center" && "mx-auto max-w-3xl text-center")}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-tertiary)]">{eyebrow}</p>
      ) : null}
      <h2 className="font-headline text-4xl font-extrabold tracking-[-0.03em] text-balance md:text-5xl">{title}</h2>
      {description ? (
        <p className="text-lg leading-8 text-[var(--color-body-copy)] text-pretty">{description}</p>
      ) : null}
    </div>
  );
}
