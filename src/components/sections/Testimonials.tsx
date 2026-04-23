import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/Reveal';

type Item = { quote: string; author: string; context: string };

export function Testimonials() {
  const t = useTranslations('testimonials');
  const items = t.raw('items') as Item[];

  return (
    <section className="py-28 md:py-36 border-t border-ink-faint/50">
      <Container>
        <Reveal>
          <Eyebrow label={t('eyebrow')} num="/voices" className="mb-20" />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {items.map((item, i) => (
            <Reveal
              as="figure"
              key={i}
              delay={i * 140}
              className="border-t border-ink-faint/60 pt-8"
            >
              <span
                aria-hidden
                className="font-serif italic text-[56px] leading-none text-burgundy/30 select-none block mb-2"
              >
                &ldquo;
              </span>
              <blockquote className="font-serif italic font-light text-[22px] md:text-[26px] leading-[1.35] text-ink max-w-[38ch]">
                {item.quote}
              </blockquote>
              <figcaption className="mt-8 pt-5 border-t border-dotted border-ink-faint/60">
                <div className="font-serif text-[15px] font-normal text-ink">{item.author}</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft mt-1.5">
                  {item.context}
                </div>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
