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
    <section id="faq" className="py-28 md:py-36 border-t border-ink-faint/50">
      <Container>
        <Reveal>
          <Eyebrow label={t('eyebrow')} num="/faq" className="mb-10" />

          <h2 className="font-serif text-[36px] md:text-[52px] leading-[1.05] tracking-[-0.03em] font-light [font-variation-settings:'opsz'_96] max-w-2xl mb-16">
            {t('title')}
          </h2>
        </Reveal>

        <Reveal delay={120} className="max-w-3xl divide-y divide-ink-faint/50 border-y border-ink-faint/60">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-7 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-light text-[19px] md:text-[22px] leading-[1.3] tracking-[-0.01em] text-ink group-hover:text-burgundy transition-colors">
                    {item.q}
                  </span>
                  <span
                    className={`font-serif italic font-light text-[26px] text-burgundy shrink-0 transition-transform ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 pb-7' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <p className="overflow-hidden font-sans text-[15px] leading-[1.7] text-ink-soft max-w-[58ch]">
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
