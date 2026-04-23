import { cn } from '@/lib/cn';

type Variant = 'primary' | 'ink' | 'outline' | 'link';
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
  const isLink = variant === 'link';

  const base = isLink
    ? 'inline-flex items-center gap-2 font-sans font-medium text-[14px] tracking-[0.01em] pb-1 border-b transition-colors'
    : 'inline-flex items-center gap-2 font-sans font-medium tracking-[0.01em] rounded-md transition-colors';

  const sizes: Record<Size, string> = {
    md: 'text-[14px] px-7 py-3.5',
    lg: 'text-[15px] px-8 py-4',
  };

  const variants: Record<Variant, string> = {
    primary: 'bg-burgundy text-bone-light hover:bg-burgundy-deep',
    ink: 'bg-ink text-bone-light hover:bg-ink/90',
    outline: 'bg-transparent text-ink border border-ink hover:bg-ink hover:text-bone-light',
    link: 'text-ink border-ink hover:text-burgundy hover:border-burgundy',
  };

  const classes = cn(
    base,
    !isLink && sizes[size],
    variants[variant],
    className
  );

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
