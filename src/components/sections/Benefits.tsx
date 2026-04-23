import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/Reveal';

type Item = { title: string; body: string };

export function Benefits() {
  const t = useTranslations('benefits');
  const items = t.raw('items') as Item[];

  return (
    <section id="benefits" className="py-28 md:py-36 border-t border-ink-faint/50">
      <Container>
        <Reveal>
          <Eyebrow label={t('eyebrow')} num="/benefits" className="mb-10" />

          <div className="max-w-3xl mb-20">
            <h2 className="font-serif text-[36px] md:text-[48px] leading-[1.08] tracking-[-0.03em] font-light [font-variation-settings:'opsz'_96]">
              {t('title')}
            </h2>
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
              className="grid md:grid-cols-[120px_1fr_2fr] gap-5 md:gap-10 items-baseline py-8 md:py-10 border-b border-ink-faint/60"
            >
              <span className="font-meta text-burgundy">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-serif font-light text-[22px] md:text-[26px] leading-[1.2] tracking-[-0.02em]">
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
