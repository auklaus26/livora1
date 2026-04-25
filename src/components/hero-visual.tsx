import { cn } from "@/lib/utils";

export function HeroVisual({
  labels,
  accent = "teal",
  className,
}: {
  labels: string[];
  accent?: "teal" | "warm";
  className?: string;
}) {
  const accentStyles =
    accent === "warm"
      ? "from-[rgba(165,91,61,0.92)] to-[rgba(255,181,153,0.76)]"
      : "from-[rgba(0,96,103,0.92)] to-[rgba(122,213,221,0.76)]";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[36px] border border-white/30 p-8 shadow-[var(--shadow-editorial)]",
        "bg-[linear-gradient(160deg,rgba(255,255,255,0.7),rgba(255,255,255,0.38))]",
        className,
      )}
    >
      <div className={cn("absolute inset-0 opacity-90", `bg-gradient-to-br ${accentStyles}`)} />
      <div className="editorial-grid absolute inset-0 opacity-20" />
      <div className="relative flex min-h-[420px] flex-col justify-between">
        <div className="inline-flex w-fit rounded-full bg-white/18 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white backdrop-blur">
          Livora beyond care
        </div>
        <div className="space-y-4">
          {labels.map((label, index) => (
            <div
              key={label}
              className={cn(
                "surface-card max-w-xs rounded-[24px] px-5 py-4 text-sm font-semibold text-[var(--color-on-background)]",
                index === 1 && "ml-auto",
                index === 2 && "max-w-[18rem]",
              )}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
