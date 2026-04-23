import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';

type Stat = { figure: string; label: string };
type Day = { num: string; title: string; framework: string; bullets: string[] };
type Detail = { key: string; value: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'forCompanies' });
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

export default async function ForCompaniesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ForCompaniesContent locale={locale} />;
}

function ForCompaniesContent({ locale }: { locale: string }) {
  const t = useTranslations('forCompanies');
  const stats = t.raw('stats.items') as Stat[];
  const days = t.raw('days') as Day[];
  const details = t.raw('details.items') as Detail[];

  return (
    <>
      <Nav />
      <main>
        {/* ============ HERO ============ */}
        <section className="pt-20 md:pt-28 pb-20 md:pb-24 border-b border-ink-faint/60">
          <Container>
            <Eyebrow label={t('nav.eyebrow')} num={t('nav.num')} className="mb-10" />

            <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-end">
              <div>
                <h1 className="font-serif text-[44px] md:text-[72px] lg:text-[88px] leading-[0.98] tracking-[-0.035em] font-extralight [font-variation-settings:'opsz'_144]">
                  {t('hero.titleLine1')}
                  <br />
                  {t('hero.titleLine2Start')}{' '}
                  <span className="italic font-light text-burgundy">{t('hero.titleEm')}</span>
                </h1>
              </div>
              <p className="font-sans text-[15px] md:text-[16px] leading-[1.7] text-ink-soft max-w-[52ch]">
                {t('hero.body')}
              </p>
            </div>
          </Container>
        </section>

        {/* ============ STATS ============ */}
        <section className="py-20 md:py-24 border-b border-ink-faint/60 bg-bone-deep/30">
          <Container>
            <div className="mb-14 max-w-2xl">
              <span className="font-mono text-[10px] font-medium tracking-[0.22em] uppercase text-burgundy">
                {t('stats.eyebrow')}
              </span>
              <h2 className="mt-5 font-serif text-[28px] md:text-[36px] leading-[1.1] tracking-[-0.02em] font-light">
                {t('stats.title')}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
              {stats.map((s, i) => (
                <div key={i} className="border-t border-burgundy/30 pt-6">
                  <div className="font-serif text-[56px] md:text-[72px] lg:text-[80px] leading-[0.95] tracking-[-0.04em] font-extralight text-burgundy [font-variation-settings:'opsz'_144]">
                    {s.figure}
                  </div>
                  <p className="mt-5 font-sans text-[14px] leading-[1.65] text-ink-soft max-w-[32ch]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ============ PROGRAMME ============ */}
        <section className="py-20 md:py-28 border-b border-ink-faint/60">
          <Container>
            <Eyebrow label={t('programme.eyebrow')} num={t('programme.num')} className="mb-10" />

            <div className="max-w-4xl mb-16">
              <h2 className="font-serif text-[36px] md:text-[52px] leading-[1.05] tracking-[-0.03em] font-light [font-variation-settings:'opsz'_96]">
                {t('programme.titleStart')}{' '}
                <span className="italic font-normal text-burgundy">{t('programme.titleEm')}</span>
              </h2>
              <p className="mt-5 font-sans text-[15px] md:text-[16px] leading-[1.7] text-ink-soft max-w-[62ch]">
                {t('programme.body')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 md:gap-14">
              {days.map((day, i) => (
                <div key={i} className="border-t border-ink-faint/60 pt-7">
                  <div className="font-mono text-[10px] font-medium tracking-[0.22em] uppercase text-burgundy mb-5">
                    {day.num}
                  </div>
                  <h3 className="font-serif font-light text-[28px] md:text-[32px] leading-[1.1] tracking-[-0.025em] mb-3">
                    {day.title}
                  </h3>
                  <p className="font-serif italic font-light text-[16px] text-ink-soft mb-6">
                    {day.framework}
                  </p>
                  <ul className="space-y-2.5 font-sans text-[14px] leading-[1.6] text-ink-soft">
                    {day.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="text-burgundy mt-[3px]">·</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ============ DELIVERABLE ============ */}
        <section className="py-20 md:py-24 border-b border-ink-faint/60">
          <Container>
            <div className="grid md:grid-cols-[1fr_1.5fr] gap-10 md:gap-16">
              <div>
                <span className="font-mono text-[10px] font-medium tracking-[0.22em] uppercase text-burgundy">
                  {t('deliverable.eyebrow')}
                </span>
              </div>
              <div>
                <h2 className="font-serif text-[28px] md:text-[40px] leading-[1.1] tracking-[-0.025em] font-light">
                  {t('deliverable.titleStart')}{' '}
                  <span className="italic font-normal text-burgundy">{t('deliverable.titleEm')}</span>
                  {t('deliverable.titleEnd')}
                </h2>
              </div>
            </div>
          </Container>
        </section>

        {/* ============ DETAILS ============ */}
        <section className="py-20 md:py-24 border-b border-ink-faint/60 bg-bone-deep/30">
          <Container>
            <Eyebrow label={t('details.eyebrow')} num={t('details.num')} className="mb-10" />

            <dl className="grid md:grid-cols-4 gap-0 border-t border-ink-faint/60">
              {details.map((d) => (
                <div key={d.key} className="border-b md:border-b-0 md:border-r border-ink-faint/60 last:border-r-0 py-7 md:py-8 md:pr-6">
                  <dt className="font-mono text-[10px] font-medium tracking-[0.22em] uppercase text-burgundy mb-4">
                    {d.key}
                  </dt>
                  <dd className="font-serif font-light text-[22px] md:text-[24px] leading-[1.2] tracking-[-0.015em]">
                    {d.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>

        {/* ============ CTA ============ */}
        <section className="py-24 md:py-32 border-b border-ink-faint/60">
          <Container>
            <div className="max-w-3xl">
              <h2 className="font-serif text-[36px] md:text-[56px] leading-[1.05] tracking-[-0.03em] font-light [font-variation-settings:'opsz'_96]">
                {t('finalCta.titleStart')}{' '}
                <span className="italic font-normal text-burgundy">{t('finalCta.titleEm')}</span>
              </h2>

              <div className="mt-10 flex flex-wrap items-center gap-8">
                <a
                  href="mailto:hello@dwait.com?subject=Her%20Next%20Chapter%20Live%20%E2%80%94%20enquiry"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-burgundy text-bone-light font-sans font-medium text-[15px] tracking-[0.01em] rounded-md hover:bg-burgundy-deep transition-colors"
                >
                  {t('finalCta.cta')} <span className="font-serif italic font-light">→</span>
                </a>
                <a
                  href={`/${locale}`}
                  className="inline-flex items-center gap-2 pb-1 border-b border-ink font-sans font-medium text-[14px] tracking-[0.01em] text-ink hover:text-burgundy hover:border-burgundy transition-colors"
                >
                  {t('finalCta.back')} <span className="font-serif italic font-light">→</span>
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* ============ CROSS-SELL ============ */}
        <section className="py-16 md:py-20">
          <Container>
            <div className="max-w-3xl">
              <span className="font-mono text-[10px] font-medium tracking-[0.22em] uppercase text-ink-soft">
                {t('crossSell.eyebrow')}
              </span>
              <p className="mt-5 font-serif italic font-light text-[20px] md:text-[24px] leading-[1.4] text-ink max-w-[58ch]">
                <span className="not-italic font-normal">{t('crossSell.bodyStart')}</span>
                {t('crossSell.bodyEnd')}
              </p>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
