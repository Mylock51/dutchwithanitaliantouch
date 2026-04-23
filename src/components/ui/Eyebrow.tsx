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
    <div className={cn('flex items-center gap-4', className)}>
      <span className="h-[5px] w-[5px] rounded-full bg-burgundy" />
      <span className="font-meta text-ink-soft">{label}</span>
      <span className="h-px flex-1 bg-ink-faint/60" />
      {num && <span className="font-meta text-ink-faint">{num}</span>}
    </div>
  );
}
