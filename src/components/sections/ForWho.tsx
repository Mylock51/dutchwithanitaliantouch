import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/Reveal';
import { GrowRule } from '@/components/GrowRule';

type Item = { tag: string; title: string; body: string };

export function ForWho() {
  const t = useTranslations('forWho');
  const items = t.raw('items') as Item[];

  return (
    <section id="for-who" className="py-20 md:py-24 bg-bone-deep/60 border-t border-ink-faint/40">
      <Container>
        <Reveal>
          <Eyebrow label={t('eyebrow')} num="/for-who" className="mb-10" />

          <div className="max-w-3xl mb-20">
            <h2 className="font-serif text-[36px] md:text-[48px] leading-[1.08] tracking-[-0.03em] font-light [font-variation-settings:'opsz'_96]">
              {t('title')}
            </h2>
            <p className="mt-5 font-sans text-[15px] md:text-[16px] leading-[1.7] text-ink-soft max-w-[54ch]">
              {t('sub')}
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {items.map((item, i) => (
            <Reveal
              as="article"
              key={i}
              delay={120 + i * 120}
              className="group relative bg-bone-light rounded-[2px] pt-8 px-8 pb-10 transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[3px] hover:shadow-[0_18px_40px_-24px_rgba(31,26,23,0.22)]"
              data-grow-rule-parent
            >
              <GrowRule
                className="absolute top-0 left-0"
                delay={120 + i * 120}
                width="48px"
                hoverWidth="100%"
              />
              <span className="font-meta text-burgundy/90 mb-6 block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[2px]">
                {String(i + 1).padStart(2, '0')} · {item.tag}
              </span>
              <h3 className="font-serif font-normal text-[22px] md:text-[24px] leading-[1.25] tracking-[-0.015em] mb-4">
                {item.title}
              </h3>
              <p className="font-sans text-[14px] leading-[1.7] text-ink-soft">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
