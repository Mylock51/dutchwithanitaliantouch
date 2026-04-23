'use client';

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

export function Reveal({
  children,
  as: Tag = 'div',
  className,
  delay = 0,
  threshold = 0.15,
  rootMargin = '0px 0px -10% 0px',
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const triggerOffset = window.innerHeight * 0.9;
    let done = false;
    const check = () => {
      if (done) return;
      const rect = node.getBoundingClientRect();
      const visible = rect.top < triggerOffset && rect.bottom > 0;
      if (visible) {
        setInView(true);
        if (once) {
          done = true;
          window.removeEventListener('scroll', check);
          window.removeEventListener('resize', check);
          observer?.disconnect();
        }
      } else if (!once) {
        setInView(false);
      }
    };

    let observer: IntersectionObserver | undefined;
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setInView(true);
              if (once) {
                done = true;
                observer?.unobserve(entry.target);
              }
            } else if (!once) {
              setInView(false);
            }
          }
        },
        { threshold, rootMargin }
      );
      observer.observe(node);
    }

    check();
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    return () => {
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
      observer?.disconnect();
    };
  }, [threshold, rootMargin, once]);

  const style = delay
    ? ({ ['--reveal-delay' as string]: `${delay}ms` } as CSSProperties)
    : undefined;

  return (
    <Tag
      ref={ref as never}
      className={cn('reveal', inView && 'is-in', className)}
      style={style}
    >
      {children}
    </Tag>
  );
}
