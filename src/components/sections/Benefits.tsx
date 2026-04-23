import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/Reveal';

type Item = { title: string; body: string };

const accents = ['terracotta', 'moss', 'ochre', 'terracotta-deep'] as const;

export function Benefits() {
  const t = useTranslations('benefits');
  const items = t.raw('items') as Item[];

  return (
    <section id="benefits" className="py-20 md:py-28 border-t border-ink/15">
      <Container>
        <Reveal>
          <Eyebrow label={t('eyebrow')} num="/benefits" className="mb-6" />

          <div className="max-w-3xl mb-14">
            <h2 className="font-display text-[36px] md:text-[52px] leading-[1.05] tracking-[-0.03em] font-normal">
              {t('title')}
            </h2>
            <p className="mt-4 text-[17px] italic font-light text-ink/70 max-w-[52ch]">{t('sub')}</p>
          </div>
        </Reveal>

        <Reveal delay={120} className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-ink/60 rounded-lg overflow-hidden bg-paper-light card-shadow">
          {items.map((item, i) => {
            const accent = accents[i % accents.length];
            return (
              <article
                key={i}
                className="p-7 border-ink/15 [&:not(:last-child)]:border-b md:[&:not(:last-child)]:border-b-0 md:[&:not(:last-child)]:border-r last:border-r-0 transition-colors hover:bg-paper-warm"
              >
                <div
                  className="font-mono text-[11px] font-semibold tracking-widest uppercase mb-5"
                  style={{ color: `var(--color-${accent})` }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-display font-semibold text-[22px] leading-[1.2] tracking-[-0.02em] mb-3">
                  {item.title}
                </h3>
                <p className="text-[14px] leading-[1.6] text-ink/80">{item.body}</p>
              </article>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}
