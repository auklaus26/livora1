import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "tertiary";
  className?: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">;

export function ButtonLink({
  children,
  href,
  variant = "primary",
  className,
  ...props
}: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-tight";
  const variants = {
    primary: "cta-gradient text-white",
    secondary:
      "bg-[var(--color-surface-container-highest)] text-[var(--color-on-background)] hover:bg-[var(--color-surface-container-high)]",
    tertiary: "text-[var(--color-primary)] underline-offset-4 hover:underline",
  };

  return (
    <Link href={href} className={cn(base, variants[variant], className)} {...props}>
      {children}
    </Link>
  );
}
