'use client';

import { useEffect, useRef, useState } from 'react';

function useInView<T extends Element>(threshold = 0.5) {
  const ref = useRef<T | null>(null);
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
      { threshold, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function useCountUp(target: number, inView: boolean, duration: number) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const t0 = performance.now();
    const ease = (x: number) => 1 - Math.pow(1 - x, 3);
    const step = (now: number) => {
      const t = Math.min(1, (now - t0) / duration);
      setVal(target * ease(t));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);
  return val;
}

type StatShape =
  | { kind: 'percent'; target: number }
  | { kind: 'fraction'; num: number; of: string; label: string }
  | { kind: 'text'; text: string };

function parseFigure(figure: string): StatShape {
  const pct = figure.match(/^(\d+)\s*%$/);
  if (pct) return { kind: 'percent', target: Number(pct[1]) };
  const frac = figure.match(/^(\d+)\s+(\S+)\s+(\d+)$/);
  if (frac) return { kind: 'fraction', num: Number(frac[1]), label: frac[2], of: frac[3] };
  return { kind: 'text', text: figure };
}

export function StatBlock({
  figure,
  label,
  delay = 0,
}: {
  figure: string;
  label: string;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const parsed = parseFigure(figure);

  const percentTarget = parsed.kind === 'percent' ? parsed.target : 0;
  const fractionTarget = parsed.kind === 'fraction' ? parsed.num : 0;
  const percentVal = useCountUp(percentTarget, inView && parsed.kind === 'percent', 1900);
  const fractionVal = useCountUp(fractionTarget, inView && parsed.kind === 'fraction', 1400);

  return (
    <div ref={ref} className="relative">
      <div
        aria-hidden
        className="h-px w-full origin-left bg-burgundy/30"
        style={{
          transform: inView ? 'scaleX(1)' : 'scaleX(0)',
          transition: `transform 1200ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        }}
      />
      <div className="pt-6">
        <div className="font-serif text-[56px] md:text-[72px] lg:text-[80px] leading-[0.95] tracking-[-0.04em] font-extralight text-burgundy [font-variation-settings:'opsz'_144]">
          {parsed.kind === 'percent' && (
            <span>{Math.round(percentVal)}%</span>
          )}
          {parsed.kind === 'fraction' && (
            <span>
              {Math.round(fractionVal)}{' '}
              <span className="italic font-light text-ink-soft text-[0.55em]">
                {parsed.label}
              </span>{' '}
              {parsed.of}
            </span>
          )}
          {parsed.kind === 'text' && <span>{parsed.text}</span>}
        </div>
        <p
          className="mt-5 font-sans text-[14px] leading-[1.65] text-ink-soft max-w-[32ch]"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateY(12px)',
            transition: `opacity 900ms cubic-bezier(0.22, 1, 0.36, 1) ${delay + 300}ms, transform 900ms cubic-bezier(0.22, 1, 0.36, 1) ${delay + 300}ms`,
          }}
        >
          {label}
        </p>
      </div>
    </div>
  );
}
