import { useLocale, useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';

export function ForCompaniesBand() {
  const locale = useLocale();
  const t = useTranslations('forCompaniesBand');

  return (
    <section className="py-20 md:py-24 border-t border-ink-faint/50 bg-bone-deep/30">
      <Container>
        <Reveal>
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 md:gap-16 items-end">
            <div>
              <span className="font-mono text-[10px] font-medium tracking-[0.22em] uppercase text-burgundy">
                {t('eyebrow')}
              </span>
              <h2 className="mt-5 font-serif text-[28px] md:text-[40px] leading-[1.1] tracking-[-0.025em] font-light [font-variation-settings:'opsz'_96]">
                {t('titleStart')}{' '}
                <span className="italic font-normal text-burgundy">{t('titleEm')}</span>
              </h2>
            </div>

            <div>
              <p className="font-sans text-[15px] md:text-[16px] leading-[1.7] text-ink-soft max-w-[56ch]">
                {t.rich('body', {
                  em: (chunks) => (
                    <span className="font-serif italic font-normal text-ink">{chunks}</span>
                  ),
                })}
              </p>

              <a
                href={`/${locale}/for-companies`}
                className="inline-flex items-center gap-2 mt-8 pb-1 border-b border-ink font-sans font-medium text-[14px] tracking-[0.01em] text-ink hover:text-burgundy hover:border-burgundy transition-colors"
              >
                {t('cta')} <span className="font-serif italic font-light">→</span>
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
