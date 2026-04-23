type Props = {
  size?: number;
  className?: string;
  color?: string;
  accent?: string;
};

export function Mark({
  size = 48,
  className,
  color = 'currentColor',
  accent = '#C2532A',
}: Props) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={className}
      aria-label="Dutch with an Italian Touch logo"
    >
      <circle cx="60" cy="60" r="56" fill="none" stroke={color} strokeWidth={2} />
      <text
        x="60"
        y="80"
        textAnchor="middle"
        fontFamily="var(--font-serif)"
        fontSize="62"
        fontStyle="italic"
        fontWeight={500}
        fill={color}
        style={{ fontVariationSettings: "'opsz' 144" }}
      >
        d<tspan fill={accent}>·</tspan>i
      </text>
    </svg>
  );
}
