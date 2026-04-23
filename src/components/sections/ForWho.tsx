import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/Reveal';

type Item = { tag: string; title: string; body: string };

export function ForWho() {
  const t = useTranslations('forWho');
  const items = t.raw('items') as Item[];

  return (
    <section id="for-who" className="py-28 md:py-36 bg-bone-deep/60 border-t border-ink-faint/40">
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
              className="bg-bone-light rounded-md pt-8 px-8 pb-10 relative"
            >
              <span
                aria-hidden
                className="absolute top-0 left-0 h-[2px] bg-burgundy"
                style={{ width: '48px' }}
              />
              <span className="font-meta text-burgundy/90 mb-6 block">
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
