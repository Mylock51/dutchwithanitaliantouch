import { cn } from '@/lib/cn';

type SymbolProps = {
  size?: number;
  className?: string;
  color?: string;
  withLabels?: boolean;
};

export function MarkSymbol({
  size = 48,
  className,
  color = '#6E1F2A',
  withLabels = false,
}: SymbolProps) {
  const letters = ['D', 'W', 'A', 'I', 'T'];
  const cx = [12, 32, 52, 72, 92];
  const y = withLabels ? 54 : 60;

  return (
    <svg
      viewBox="0 0 104 120"
      width={size}
      height={size * (120 / 104)}
      className={className}
      aria-label="Dutch with an Italian Touch"
    >
      {cx.map((x, i) => (
        <circle key={i} cx={x} cy={y} r={5} fill={color} />
      ))}
      {withLabels &&
        letters.map((l, i) => (
          <text
            key={l}
            x={cx[i]}
            y={86}
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize="9"
            fontWeight={500}
            letterSpacing="0.22em"
            fill="#1F1A17"
          >
            {l}
          </text>
        ))}
    </svg>
  );
}

type WordmarkProps = {
  className?: string;
  size?: number;
  color?: string;
  accent?: string;
  letterSpacing?: string;
};

export function MarkWordmark({
  className,
  size = 22,
  color = 'currentColor',
  accent = '#6E1F2A',
  letterSpacing = '0.04em',
}: WordmarkProps) {
  const letters = ['D', 'W', 'A', 'I', 'T'];
  return (
    <span
      className={cn('inline-flex items-baseline', className)}
      style={{
        fontFamily: 'var(--font-serif)',
        fontWeight: 300,
        fontStyle: 'italic',
        fontSize: size,
        lineHeight: 1,
        letterSpacing,
        color,
        fontVariationSettings: "'opsz' 144",
      }}
      aria-label="DWAIT — Dutch with an Italian Touch"
    >
      {letters.map((l, i) => (
        <span key={i} className="inline-flex items-baseline">
          <span>{l}</span>
          {i < letters.length - 1 && (
            <span
              aria-hidden
              style={{
                color: accent,
                margin: '0 0.18em',
                fontSize: '0.55em',
                transform: 'translateY(-0.15em)',
                display: 'inline-block',
              }}
            >
              ·
            </span>
          )}
        </span>
      ))}
    </span>
  );
}

export function Mark(props: { size?: number; className?: string }) {
  return <MarkSymbol {...props} />;
}
