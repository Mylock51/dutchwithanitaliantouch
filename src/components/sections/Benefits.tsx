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
            <h2 className="font-serif text-[36px] md:text-[52px] leading-[1.05] tracking-[-0.03em] font-light [font-variation-settings:'opsz'_96]">
              {t('title')}
            </h2>
            <p className="mt-5 font-sans text-[15px] md:text-[16px] leading-[1.7] text-ink-soft max-w-[52ch]">
              {t('sub')}
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {items.map((item, i) => (
            <article key={i} className="border-t border-ink-faint/60 pt-7">
              <div className="font-mono text-[10px] font-medium tracking-[0.22em] uppercase text-burgundy mb-6">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="font-serif font-light text-[22px] leading-[1.2] tracking-[-0.02em] mb-4">
                {item.title}
              </h3>
              <p className="font-sans text-[14px] leading-[1.7] text-ink-soft">
                {item.body}
              </p>
            </article>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
