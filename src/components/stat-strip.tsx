export function StatStrip({
  stats,
}: {
  stats: { value: string; label: string }[];
}) {
  return (
    <div className="grid gap-5 rounded-[32px] bg-[rgba(255,255,255,0.62)] p-6 shadow-[var(--shadow-editorial)] md:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label}>
          <p className="font-headline text-4xl font-extrabold tracking-tight text-[var(--color-primary)]">{stat.value}</p>
          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[var(--color-on-surface-variant)]">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
