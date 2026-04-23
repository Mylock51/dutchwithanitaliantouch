import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/Reveal';

type Step = { num: string; title: string; body: string };

export function HowItWorks() {
  const t = useTranslations('howItWorks');
  const steps = t.raw('steps') as Step[];

  return (
    <section id="how" className="py-28 md:py-36 border-t border-ink-faint/50 bg-bone-deep/30">
      <Container>
        <Reveal>
          <Eyebrow label={t('eyebrow')} num="/how" className="mb-10" />

          <div className="max-w-3xl mb-20">
            <h2 className="font-serif text-[36px] md:text-[52px] leading-[1.05] tracking-[-0.03em] font-light [font-variation-settings:'opsz'_96]">
              {t('title').split(',').map((part, i, arr) =>
                i === arr.length - 1 ? (
                  <span key={i} className="italic font-normal text-burgundy">,{part}</span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </h2>
            <p className="mt-5 font-sans text-[15px] md:text-[16px] leading-[1.7] text-ink-soft max-w-[52ch]">
              {t('sub')}
            </p>
          </div>
        </Reveal>

        <ol className="relative">
          {steps.map((step, i) => (
            <Reveal
              as="li"
              key={step.num}
              delay={i * 140}
              className="grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr_1fr] gap-6 md:gap-10 py-10 border-t border-ink-faint/60 last:border-b-0"
            >
              <span className="font-serif italic font-extralight text-[40px] md:text-[56px] leading-none text-burgundy [font-variation-settings:'opsz'_144]">
                {step.num}
              </span>
              <h3 className="font-serif font-light text-[22px] md:text-[26px] leading-[1.15] tracking-[-0.02em] self-start">
                {step.title}
              </h3>
              <p className="md:col-start-3 font-sans text-[14px] leading-[1.7] text-ink-soft max-w-[44ch]">
                {step.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
