import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/Reveal';

type Step = { num: string; title: string; body: string };

export function HowItWorks() {
  const t = useTranslations('howItWorks');
  const steps = t.raw('steps') as Step[];

  return (
    <section id="how" className="py-20 md:py-28 border-t border-ink/15 bg-paper-deep/40">
      <Container>
        <Reveal>
          <Eyebrow label={t('eyebrow')} num="/how" className="mb-6" />

          <div className="max-w-3xl mb-14">
            <h2 className="font-display text-[36px] md:text-[52px] leading-[1.05] tracking-[-0.03em] font-normal">
              {t('title').split(',').map((part, i, arr) =>
                i === arr.length - 1 ? (
                  <span key={i} className="italic font-medium text-terracotta-deep">,{part}</span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </h2>
            <p className="mt-4 text-[17px] italic font-light text-ink/70 max-w-[48ch]">{t('sub')}</p>
          </div>
        </Reveal>

        <ol className="relative">
          {steps.map((step, i) => (
            <Reveal
              as="li"
              key={step.num}
              delay={i * 140}
              className="grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr_1fr] gap-6 md:gap-8 py-9 border-b border-ink/15 last:border-b-0 relative"
            >
              <span className="font-display italic font-light text-[40px] md:text-[56px] leading-none text-terracotta">
                {step.num}
              </span>
              <h3 className="font-display font-semibold text-[22px] md:text-[26px] leading-[1.15] tracking-[-0.02em] self-start">
                {step.title}
              </h3>
              <p className="md:col-start-3 text-[15px] leading-[1.65] text-ink/85 max-w-[44ch] bg-paper-warm/70 border-l-[3px] border-ink p-5 rounded-sm">
                {step.body}
              </p>

              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-[25px] md:left-[33px] -bottom-3 w-7 h-7 flex items-center justify-center bg-paper-deep/40 text-terracotta text-xl font-serif"
                >
                  ↓
                </span>
              )}
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
