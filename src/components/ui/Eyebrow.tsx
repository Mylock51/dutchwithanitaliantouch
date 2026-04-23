import { cn } from '@/lib/cn';

export function Eyebrow({
  label,
  num,
  className,
}: {
  label: string;
  num?: string;
  className?: string;
}) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <span className="h-[6px] w-[6px] rounded-full bg-terracotta shadow-[0_0_10px_rgba(194,83,42,0.5)]" />
      <span className="font-meta text-terracotta">{label}</span>
      <span className="h-px flex-1 bg-ink/15" />
      {num && <span className="font-mono text-[11px] tracking-widest text-ink-soft">{num}</span>}
    </div>
  );
}
