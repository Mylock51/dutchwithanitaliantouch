import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { CalEmbed } from '@/components/CalEmbed';
import { Reveal } from '@/components/Reveal';

export function FinalCTA() {
  const t = useTranslations('finalCta');

  return (
    <section id="book" className="py-20 md:py-28 border-t border-ink/15 bg-paper-deep/40">
      <Container>
        <Reveal>
          <Eyebrow label={t('eyebrow')} num="/book" className="mb-6" />

          <div className="max-w-3xl mb-14">
            <h2 className="font-display text-[36px] md:text-[56px] leading-[1.05] tracking-[-0.03em] font-normal">
              {t('title').split('—').map((part, i, arr) =>
                i === 0 ? (
                  <span key={i}>{part}</span>
                ) : (
                  <span key={i}>
                    <span className="text-terracotta">—</span>
                    <span className="italic font-medium text-terracotta-deep">{part}</span>
                  </span>
                )
              )}
            </h2>
            <p className="mt-4 text-[17px] italic font-light text-ink/70 max-w-[52ch]">{t('sub')}</p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <CalEmbed />
        </Reveal>
      </Container>
    </section>
  );
}
