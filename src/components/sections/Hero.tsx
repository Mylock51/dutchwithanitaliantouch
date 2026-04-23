import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Mark } from '@/components/Mark';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section id="top" className="pt-24 md:pt-32 pb-32 md:pb-40">
      <Container>
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-16 lg:gap-20 items-end">
          <div>
            <div className="flex items-center gap-4 mb-10">
              <span className="h-[5px] w-[5px] rounded-full bg-burgundy" />
              <span className="font-meta text-ink-soft">{t('eyebrow')}</span>
            </div>

            <h1 className="font-serif text-[56px] md:text-[88px] lg:text-[104px] leading-[0.96] tracking-[-0.04em] font-extralight [font-variation-settings:'opsz'_144]">
              {t('titleStart')}
              <br />
              <span className="italic font-light text-burgundy">{t('titleEm')}</span>
              <br />
              {t('titleEnd')}
            </h1>

            <p className="mt-10 max-w-[48ch] font-serif italic font-light text-[18px] md:text-[20px] leading-[1.55] text-ink-soft">
              {t('sub')}
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-8">
              <Button href="#book" variant="primary" size="lg">
                {t('ctaPrimary')} <span className="font-serif italic font-light">→</span>
              </Button>
              <Button href="#how" variant="link">
                {t('ctaSecondary')} <span className="font-serif italic font-light">→</span>
              </Button>
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-end gap-8">
            <div className="relative">
              <Mark size={200} color="var(--color-ink)" />
            </div>

            <dl className="w-full max-w-[320px] border-t border-ink-faint pt-5 space-y-2 font-mono text-[10px]">
              <div className="flex justify-between py-1.5 border-b border-dotted border-ink-faint/60">
                <dt className="text-burgundy uppercase tracking-[0.2em] font-medium">Duration</dt>
                <dd className="text-ink">{t('metaDuration')}</dd>
              </div>
              <div className="flex justify-between py-1.5 border-b border-dotted border-ink-faint/60">
                <dt className="text-burgundy uppercase tracking-[0.2em] font-medium">Format</dt>
                <dd className="text-ink">{t('metaFormat')}</dd>
              </div>
              <div className="flex justify-between py-1.5">
                <dt className="text-burgundy uppercase tracking-[0.2em] font-medium">Languages</dt>
                <dd className="text-ink">{t('metaLangs')}</dd>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
