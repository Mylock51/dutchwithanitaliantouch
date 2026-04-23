import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';

type Item = { tag: string; title: string; body: string };

export function ForWho() {
  const t = useTranslations('forWho');
  const items = t.raw('items') as Item[];

  return (
    <section id="for-who" className="py-20 md:py-28 border-t border-ink/15">
      <Container>
        <Eyebrow label={t('eyebrow')} num="/for-who" className="mb-6" />

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
          <p className="mt-4 text-[17px] italic font-light text-ink/70 max-w-[44ch]">{t('sub')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <article
              key={i}
              className="bg-paper-light border border-ink/15 rounded-lg p-7 card-shadow transition-transform hover:-translate-y-1"
            >
              <span className="inline-flex items-center gap-2 font-mono text-[10px] font-semibold tracking-widest uppercase text-paper-light bg-moss-deep px-2.5 py-1 rounded-[3px] mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-paper-light" />
                {item.tag}
              </span>
              <h3 className="font-display font-semibold text-[22px] leading-[1.2] tracking-[-0.02em] mb-3">
                {item.title}
              </h3>
              <p className="text-[14px] leading-[1.6] text-ink/80">{item.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
