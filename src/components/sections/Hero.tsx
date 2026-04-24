import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/Reveal';
import { WordReveal } from '@/components/WordReveal';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section id="top" className="pt-28 md:pt-32 pb-20 md:pb-24">
      <Container>
        <div className="grid lg:grid-cols-[7fr_5fr] gap-12 lg:gap-20 items-end">
          <div>
            <Reveal>
              <div className="font-meta text-ink-soft mb-10">{t('eyebrow')}</div>
            </Reveal>

            <WordReveal
              className="font-serif font-extralight text-[48px] md:text-[72px] lg:text-[88px] leading-[1.02] tracking-[-0.035em] [font-variation-settings:'opsz'_144] text-ink"
              segments={[
                { text: t('titleStart') },
                { newline: true, text: '' },
                { text: t('titleEm'), accent: true },
                { newline: true, text: '' },
                { text: t('titleEnd') },
              ]}
              baseDelay={150}
              stagger={95}
              trailingDot
              dotDelay={450}
            />

            <Reveal delay={1400}>
              <p className="mt-10 max-w-[46ch] font-sans text-[16px] md:text-[17px] leading-[1.65] text-ink-soft">
                {t('sub')}
              </p>
            </Reveal>

            <Reveal delay={1600}>
              <div className="mt-12 flex flex-wrap items-center gap-8">
                <Button href="#book" variant="primary" size="lg">
                  {t('ctaPrimary')}
                </Button>
                <Button href="#how" variant="link">
                  {t('ctaSecondary')} <span className="font-serif italic font-light">→</span>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={1800}>
              <div className="mt-14 font-meta text-ink-soft flex flex-wrap gap-x-6 gap-y-2">
                <span>{t('metaDuration')}</span>
                <span className="text-ink-faint">·</span>
                <span>{t('metaFormat')}</span>
                <span className="text-ink-faint">·</span>
                <span>{t('metaLangs')}</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={400} variant="slow" className="hidden lg:block">
            <figure className="relative">
              <div className="absolute -inset-3 border border-ink-faint/50 pointer-events-none" aria-hidden />
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-bone-deep">
                <img
                  src="/maaike.jpg"
                  alt="Maaike Mooij — founder coach"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ filter: 'saturate(0.9) contrast(1.02)' }}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(31,26,23,0) 55%, rgba(31,26,23,0.38) 100%)',
                  }}
                />
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between font-meta text-ink-soft">
                <span>Maaike Mooij</span>
                <span className="text-ink-faint">Founder · Coach</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
