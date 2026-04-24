import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/Reveal';
import { GrowRule } from '@/components/GrowRule';

type Item = { title: string; body: string };

export function Benefits() {
  const t = useTranslations('benefits');
  const items = t.raw('items') as Item[];

  return (
    <section id="benefits" className="py-28 md:py-32 border-t border-ink-faint/50">
      <Container>
        <Reveal>
          <Eyebrow label={t('eyebrow')} num="/benefits" className="mb-10" />

          <div className="max-w-3xl mb-20">
            <h2 className="font-serif text-[36px] md:text-[48px] leading-[1.08] tracking-[-0.03em] font-light [font-variation-settings:'opsz'_96]">
              {t('title')}
            </h2>
            <GrowRule className="mt-7" delay={250} width="64px" />
            <p className="mt-5 font-sans text-[15px] md:text-[16px] leading-[1.7] text-ink-soft max-w-[54ch]">
              {t('sub')}
            </p>
          </div>
        </Reveal>

        <ul className="border-t border-ink-faint/60">
          {items.map((item, i) => (
            <Reveal
              as="li"
              key={i}
              delay={100 + i * 100}
              className="group grid md:grid-cols-[120px_1fr_2fr] gap-5 md:gap-10 items-baseline py-8 md:py-10 border-b border-ink-faint/60 transition-colors duration-500"
            >
              <span className="font-meta text-burgundy transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[3px]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-serif font-light text-[22px] md:text-[26px] leading-[1.2] tracking-[-0.02em] transition-colors duration-500 group-hover:text-burgundy">
                {item.title}
              </h3>
              <p className="font-sans text-[14px] md:text-[15px] leading-[1.7] text-ink-soft max-w-[56ch]">
                {item.body}
              </p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
