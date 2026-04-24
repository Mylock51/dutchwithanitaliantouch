import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';

type Item = { quote: string; author: string; context: string };

export function Testimonials() {
  const t = useTranslations('testimonials');
  const items = t.raw('items') as Item[];
  const featured = items[0];

  return (
    <section className="py-28 md:py-36 bg-sand border-t border-ink-faint/40">
      <Container>
        <Reveal className="max-w-[48rem] mx-auto text-center">
          <div className="font-meta text-ink-soft mb-10">{t('eyebrow')}</div>

          <blockquote className="font-serif italic font-light text-[28px] md:text-[40px] leading-[1.25] tracking-[-0.02em] text-ink">
            &ldquo;{featured.quote}&rdquo;
          </blockquote>

          <figcaption className="mt-12 font-meta text-ink-soft flex flex-wrap justify-center gap-x-4 gap-y-1">
            <span>{featured.author}</span>
            <span className="text-ink-faint">·</span>
            <span>{featured.context}</span>
          </figcaption>
        </Reveal>
      </Container>
    </section>
  );
}
