import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Mark } from '@/components/Mark';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section id="top" className="pt-16 md:pt-24 pb-24 md:pb-32">
      <Container>
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-end">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="h-[6px] w-[6px] rounded-full bg-terracotta shadow-[0_0_10px_rgba(194,83,42,0.5)]" />
              <span className="font-meta text-terracotta">{t('eyebrow')}</span>
            </div>

            <h1 className="font-display text-[56px] md:text-[88px] lg:text-[104px] leading-[0.92] tracking-[-0.045em] font-normal">
              {t('titleStart')}
              <br />
              <span className="italic font-medium text-terracotta-deep">{t('titleEm')}</span>
              <br />
              {t('titleEnd')}
            </h1>

            <p className="mt-8 max-w-[52ch] text-[17px] md:text-[19px] leading-[1.55] italic font-light text-ink/80">
              {t('sub')}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="#book" variant="primary" size="lg">
                {t('ctaPrimary')} →
              </Button>
              <Button href="#how" variant="ghost" size="lg">
                {t('ctaSecondary')}
              </Button>
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-end gap-6">
            <div className="relative">
              <Mark size={220} color="var(--color-ink)" />
            </div>

            <dl className="w-full max-w-[320px] border-t border-ink/20 pt-4 space-y-2 font-mono text-[11px]">
              <div className="flex justify-between py-1 border-b border-dotted border-ink/15">
                <dt className="text-terracotta uppercase tracking-widest">Duration</dt>
                <dd className="text-ink">{t('metaDuration')}</dd>
              </div>
              <div className="flex justify-between py-1 border-b border-dotted border-ink/15">
                <dt className="text-terracotta uppercase tracking-widest">Format</dt>
                <dd className="text-ink">{t('metaFormat')}</dd>
              </div>
              <div className="flex justify-between py-1">
                <dt className="text-terracotta uppercase tracking-widest">Languages</dt>
                <dd className="text-ink">{t('metaLangs')}</dd>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
