'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/Reveal';

type Item = { q: string; a: string };

export function FAQ() {
  const t = useTranslations('faq');
  const items = t.raw('items') as Item[];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28 border-t border-ink/15">
      <Container>
        <Reveal>
          <Eyebrow label={t('eyebrow')} num="/faq" className="mb-6" />

          <h2 className="font-display text-[36px] md:text-[52px] leading-[1.05] tracking-[-0.03em] font-normal max-w-2xl mb-12">
            {t('title')}
          </h2>
        </Reveal>

        <Reveal delay={120} className="max-w-3xl divide-y divide-ink/15 border-y border-ink/40">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-medium text-[18px] md:text-[22px] leading-[1.3] tracking-[-0.01em] text-ink group-hover:text-terracotta-deep transition">
                    {item.q}
                  </span>
                  <span
                    className={`font-display italic text-[28px] text-terracotta shrink-0 transition-transform ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <p className="overflow-hidden text-[15px] leading-[1.7] text-ink/80 max-w-[60ch]">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}
