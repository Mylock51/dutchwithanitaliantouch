import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';

type Item = { quote: string; author: string; context: string };

export function Testimonials() {
  const t = useTranslations('testimonials');
  const items = t.raw('items') as Item[];

  return (
    <section className="py-20 md:py-28 border-t border-ink/15">
      <Container>
        <Eyebrow label={t('eyebrow')} num="/voices" className="mb-12" />

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {items.map((item, i) => (
            <figure
              key={i}
              className="relative bg-paper-light border border-ink/15 rounded-xl p-8 md:p-10 card-shadow"
            >
              <span
                aria-hidden
                className="absolute top-4 left-6 font-display italic text-[80px] leading-none text-terracotta/30 select-none"
              >
                &ldquo;
              </span>
              <blockquote className="relative font-display italic text-[20px] md:text-[24px] leading-[1.35] text-ink">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 pt-4 border-t border-dotted border-ink/15">
                <div className="font-display font-semibold text-[15px] text-ink">{item.author}</div>
                <div className="font-mono text-[11px] uppercase tracking-widest text-ink-soft mt-1">
                  {item.context}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
