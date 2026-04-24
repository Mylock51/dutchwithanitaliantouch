'use client';

import { useEffect, useRef, useState } from 'react';

export function DayCard({
  num,
  title,
  framework,
  bullets,
  delay = 0,
}: {
  num: string;
  title: string;
  framework: string;
  bullets: string[];
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
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
      { threshold: 0.25, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const slide = (ms: number) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'none' : 'translateY(12px)',
    transition: `opacity 900ms cubic-bezier(0.22, 1, 0.36, 1) ${ms}ms, transform 900ms cubic-bezier(0.22, 1, 0.36, 1) ${ms}ms`,
  });

  return (
    <div ref={ref} className="group relative pt-7 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[3px]">
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px origin-left bg-ink-faint/60"
        style={{
          transform: inView ? 'scaleX(1)' : 'scaleX(0)',
          transition: `transform 1000ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        }}
      />
      <div
        className="font-mono text-[10px] font-medium tracking-[0.22em] uppercase text-burgundy mb-5"
        style={slide(delay + 150)}
      >
        {num}
      </div>
      <h3
        className="font-serif font-light text-[28px] md:text-[32px] leading-[1.1] tracking-[-0.025em] mb-3 transition-colors duration-500 group-hover:text-burgundy"
        style={slide(delay + 250)}
      >
        {title}
      </h3>
      <p
        className="font-serif italic font-light text-[16px] text-ink-soft mb-6"
        style={slide(delay + 350)}
      >
        {framework}
      </p>
      <ul className="space-y-2.5 font-sans text-[14px] leading-[1.6] text-ink-soft">
        {bullets.map((b, j) => (
          <li
            key={j}
            className="flex gap-3"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateY(8px)',
              transition: `opacity 700ms cubic-bezier(0.22, 1, 0.36, 1) ${delay + 450 + j * 80}ms, transform 700ms cubic-bezier(0.22, 1, 0.36, 1) ${delay + 450 + j * 80}ms`,
            }}
          >
            <span className="text-burgundy mt-[3px]">·</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
