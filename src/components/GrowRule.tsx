'use client';

import { useEffect, useRef, useState } from 'react';

export function GrowRule({
  delay = 0,
  duration = 1000,
  width = '48px',
  hoverWidth,
  color = '#6E1F2A',
  height = 2,
  className,
}: {
  delay?: number;
  duration?: number;
  width?: string;
  hoverWidth?: string;
  color?: string;
  height?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [inView, setInView] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!hoverWidth) return;
    const el = ref.current;
    if (!el) return;
    const parent = el.closest<HTMLElement>('[data-grow-rule-parent]') || el.parentElement;
    if (!parent) return;
    const onEnter = () => setHovering(true);
    const onLeave = () => setHovering(false);
    parent.addEventListener('mouseenter', onEnter);
    parent.addEventListener('mouseleave', onLeave);
    return () => {
      parent.removeEventListener('mouseenter', onEnter);
      parent.removeEventListener('mouseleave', onLeave);
    };
  }, [hoverWidth]);

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
      { threshold: 0.3, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      aria-hidden
      className={className}
      style={{
        display: 'block',
        width: hovering && hoverWidth ? hoverWidth : width,
        height,
        background: color,
        transformOrigin: 'left center',
        transform: inView ? 'scaleX(1)' : 'scaleX(0)',
        transition: `transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, width 700ms cubic-bezier(0.22, 1, 0.36, 1)`,
      }}
    />
  );
}
