import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section id="top" className="pt-28 md:pt-36 pb-24 md:pb-32">
      <Container>
        <div className="grid lg:grid-cols-[7fr_5fr] gap-12 lg:gap-20 items-end">
          <div>
            <div className="font-meta text-ink-soft mb-10">{t('eyebrow')}</div>

            <h1 className="font-serif font-extralight text-[48px] md:text-[72px] lg:text-[88px] leading-[1.02] tracking-[-0.035em] [font-variation-settings:'opsz'_144] text-ink">
              {t('titleStart')}
              <br />
              <span className="text-burgundy">{t('titleEm')}</span>
              <br />
              {t('titleEnd')}
            </h1>

            <p className="mt-10 max-w-[46ch] font-sans text-[16px] md:text-[17px] leading-[1.65] text-ink-soft">
              {t('sub')}
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-8">
              <Button href="#book" variant="primary" size="lg">
                {t('ctaPrimary')}
              </Button>
              <Button href="#how" variant="link">
                {t('ctaSecondary')} <span className="font-serif italic font-light">→</span>
              </Button>
            </div>

            <div className="mt-14 font-meta text-ink-soft flex flex-wrap gap-x-6 gap-y-2">
              <span>{t('metaDuration')}</span>
              <span className="text-ink-faint">·</span>
              <span>{t('metaFormat')}</span>
              <span className="text-ink-faint">·</span>
              <span>{t('metaLangs')}</span>
            </div>
          </div>

          <figure className="hidden lg:block relative">
            <div className="relative aspect-[4/5] w-full rounded-md overflow-hidden bg-bone-deep">
              <img
                src="/maaike.jpg"
                alt="Maaike Mooij — founder coach"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(31,26,23,0) 55%, rgba(31,26,23,0.35) 100%)",
                }}
              />
              <figcaption className="absolute bottom-6 left-6 font-meta text-bone-light">
                Maaike · coach
              </figcaption>
            </div>
          </figure>
        </div>
      </Container>
    </section>
  );
}
