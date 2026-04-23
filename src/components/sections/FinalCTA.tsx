import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { CalEmbed } from '@/components/CalEmbed';
import { Reveal } from '@/components/Reveal';

export function FinalCTA() {
  const t = useTranslations('finalCta');

  return (
    <section id="book" className="py-28 md:py-36 border-t border-ink-faint/50 bg-bone-deep/30">
      <Container>
        <Reveal>
          <Eyebrow label={t('eyebrow')} num="/book" className="mb-10" />

          <div className="max-w-3xl mb-20">
            <h2 className="font-serif text-[36px] md:text-[56px] leading-[1.05] tracking-[-0.03em] font-light [font-variation-settings:'opsz'_96]">
              {t('title').split('—').map((part, i, arr) =>
                i === 0 ? (
                  <span key={i}>{part}</span>
                ) : (
                  <span key={i}>
                    <span className="text-burgundy">—</span>
                    <span className="italic font-normal text-burgundy">{part}</span>
                  </span>
                )
              )}
            </h2>
            <p className="mt-5 font-serif italic font-light text-[17px] text-ink-soft max-w-[52ch]">
              {t('sub')}
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <CalEmbed />
        </Reveal>
      </Container>
    </section>
  );
}
