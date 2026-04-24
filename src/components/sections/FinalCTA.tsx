import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { CalEmbed } from '@/components/CalEmbed';
import { Reveal } from '@/components/Reveal';
import { MarkWordmark } from '@/components/Mark';

export function FinalCTA() {
  const t = useTranslations('finalCta');

  return (
    <section id="book" className="py-32 md:py-40 bg-bone-deep/70 border-t border-ink-faint/40">
      <Container>
        <Reveal className="text-center max-w-[40rem] mx-auto mb-16">
          <div className="mb-8 flex justify-center">
            <MarkWordmark size={44} color="#6E1F2A" accent="#6E1F2A" />
          </div>

          <Eyebrow label={t('eyebrow')} num="/book" className="justify-center mb-8" />

          <h2 className="font-serif text-[36px] md:text-[52px] leading-[1.08] tracking-[-0.03em] font-light [font-variation-settings:'opsz'_96]">
            {t('title')}
          </h2>
          <p className="mt-6 font-sans text-[15px] md:text-[16px] leading-[1.7] text-ink-soft max-w-[52ch] mx-auto">
            {t('sub')}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <CalEmbed />
        </Reveal>
      </Container>
    </section>
  );
}
