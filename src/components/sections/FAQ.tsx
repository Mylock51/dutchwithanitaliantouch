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

          <h2 className="font-serif text-[36px] md:text-[48px] leading-[1.08] tracking-[-0.03em] font-light [font-variation-settings:'opsz'_96] max-w-2xl mb-16">
            {t('title')}
          </h2>
        </Reveal>

        <Reveal delay={120} className="max-w-3xl border-t border-ink-faint/60">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-ink-faint/60">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 md:py-7 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans font-normal text-[15px] md:text-[16px] leading-[1.45] text-ink">
                    {item.q}
                  </span>
                  <span
                    className={`relative shrink-0 w-4 h-4 transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                    aria-hidden
                  >
                    <span className="absolute top-1/2 left-0 right-0 h-px bg-ink -translate-y-1/2" />
                    <span className="absolute left-1/2 top-0 bottom-0 w-px bg-ink -translate-x-1/2" />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 pb-7' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <p className="overflow-hidden font-sans text-[14px] md:text-[15px] leading-[1.75] text-ink-soft max-w-[60ch]">
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
