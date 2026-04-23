import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/Reveal';

type Step = { num: string; title: string; body: string };

export function HowItWorks() {
  const t = useTranslations('howItWorks');
  const steps = t.raw('steps') as Step[];

  return (
    <section id="how" className="py-28 md:py-36 bg-bone-light border-t border-ink-faint/40">
      <Container>
        <Reveal>
          <Eyebrow label={t('eyebrow')} num="/how" className="mb-10" />

          <div className="max-w-3xl mb-20">
            <h2 className="font-serif text-[36px] md:text-[48px] leading-[1.08] tracking-[-0.03em] font-light [font-variation-settings:'opsz'_96]">
              {t('title')}
            </h2>
            <p className="mt-5 font-sans text-[15px] md:text-[16px] leading-[1.7] text-ink-soft max-w-[54ch]">
              {t('sub')}
            </p>
          </div>
        </Reveal>

        <ol className="border-t border-ink-faint/60">
          {steps.map((step, i) => (
            <Reveal
              as="li"
              key={step.num}
              delay={i * 140}
              className="grid md:grid-cols-[120px_1fr_1.4fr] gap-5 md:gap-10 items-baseline py-10 md:py-12 border-b border-ink-faint/60"
            >
              <span className="font-meta text-burgundy">{step.num}</span>
              <h3 className="font-serif font-light text-[22px] md:text-[26px] leading-[1.2] tracking-[-0.02em]">
                {step.title}
              </h3>
              <p className="font-sans text-[14px] md:text-[15px] leading-[1.7] text-ink-soft max-w-[54ch]">
                {step.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
