import { cn } from '@/lib/cn';

type Variant = 'primary' | 'ink' | 'outline' | 'ghost';
type Size = 'md' | 'lg';

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className,
  ...props
}: {
  variant?: Variant;
  size?: Size;
  href?: string;
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const base =
    'inline-flex items-center gap-2 font-mono font-semibold uppercase tracking-[0.12em] rounded-sm border transition-transform active:translate-y-px';

  const sizes: Record<Size, string> = {
    md: 'text-[12px] px-5 py-3',
    lg: 'text-[13px] px-7 py-4',
  };

  const variants: Record<Variant, string> = {
    primary: 'bg-terracotta text-white border-terracotta-deep hover:bg-terracotta-deep',
    ink: 'bg-ink text-paper-light border-ink hover:bg-ink/90',
    outline: 'bg-transparent text-ink border-ink hover:bg-ink hover:text-paper-light',
    ghost: 'bg-transparent text-terracotta-deep border-transparent hover:underline',
  };

  const classes = cn(base, sizes[size], variants[variant], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
