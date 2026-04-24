'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

type Segment = { text: string; accent?: boolean; newline?: boolean };

export function WordReveal({
  segments,
  className,
  baseDelay = 120,
  stagger = 90,
  trailingDot = false,
  dotDelay = 600,
}: {
  segments: Segment[];
  className?: string;
  baseDelay?: number;
  stagger?: number;
  trailingDot?: boolean;
  dotDelay?: number;
}) {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true);
            io.unobserve(el);
          }
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -5% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  let wordIndex = 0;
  const nodes: ReactNode[] = [];
  segments.forEach((seg, si) => {
    if (seg.newline) {
      nodes.push(<br key={`br-${si}`} />);
      return;
    }
    const words = seg.text.split(' ').filter(Boolean);
    words.forEach((w, wi) => {
      const delay = baseDelay + wordIndex * stagger;
      wordIndex += 1;
      nodes.push(
        <span
          key={`w-${si}-${wi}`}
          className="inline-block overflow-hidden align-baseline"
          style={{ lineHeight: 'inherit' }}
        >
          <span
            className="inline-block"
            style={{
              color: seg.accent ? '#6E1F2A' : undefined,
              fontStyle: seg.accent ? 'italic' : undefined,
              fontWeight: seg.accent ? 400 : undefined,
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(0.9em)',
              transition: `opacity 1100ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 1100ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
            }}
          >
            {w}
          </span>
        </span>
      );
      nodes.push(<span key={`sp-${si}-${wi}`}>{' '}</span>);
    });
  });

  if (trailingDot) {
    const delay = baseDelay + wordIndex * stagger + dotDelay;
    nodes.push(
      <span
        key="dot"
        aria-hidden
        className="inline-block align-baseline"
        style={{
          color: '#6E1F2A',
          marginLeft: '0.05em',
          opacity: inView ? 1 : 0,
          transform: inView ? 'scale(1)' : 'scale(0.3)',
          transition: `opacity 500ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 700ms cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`,
        }}
      >
        .
      </span>
    );
  }

  return (
    <h1 ref={ref} className={className}>
      {nodes}
    </h1>
  );
}
