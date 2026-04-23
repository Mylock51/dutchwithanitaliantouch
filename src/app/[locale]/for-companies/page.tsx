import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';

export const metadata: Metadata = {
  title: 'DWAIT for companies — Her Next Chapter Live',
  description:
    "A two-part programme for returning mothers. Cross-company cohorts, in person. Plus an anonymised insight report for the employer.",
};

const STATS = [
  {
    figure: '1 in 3',
    label: 'women consider leaving their job within the first year of returning from maternity leave',
  },
  {
    figure: '200%',
    label: 'of annual salary — the average cost of replacing a mid-senior female employee',
  },
  {
    figure: '87%',
    label: 'of returning mothers say they felt unsupported by their company during the transition back',
  },
];

const DAYS = [
  {
    num: 'Day 01',
    title: 'Who am I now?',
    framework: 'The Identity Shift framework',
    bullets: [
      'Guided individual reflection',
      'Facilitated group conversation',
      'Mapping what has changed — and what hasn’t',
    ],
  },
  {
    num: 'Day 02',
    title: 'Where am I going?',
    framework: 'The Compass framework',
    bullets: [
      'Defining values & non-negotiables',
      'What do I need from my company now?',
      'Personal toolkit + community setup',
    ],
  },
];

const DETAILS = [
  { key: 'Format', value: 'Two half-days, in person' },
  { key: 'Group size', value: '8–12 women maximum' },
  { key: 'Model', value: 'Cross-company cohorts' },
  { key: 'Investment', value: 'On request' },
];

export default async function ForCompaniesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Nav />
      <main>
        {/* ============ HERO ============ */}
        <section className="pt-20 md:pt-28 pb-20 md:pb-24 border-b border-ink-faint/60">
          <Container>
            <Eyebrow label="DWAIT for companies" num="/business-case" className="mb-10" />

            <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-end">
              <div>
                <h1 className="font-serif text-[44px] md:text-[72px] lg:text-[88px] leading-[0.98] tracking-[-0.035em] font-extralight [font-variation-settings:'opsz'_144]">
                  She came back.
                  <br />
                  But is she really <span className="italic font-light text-burgundy">back?</span>
                </h1>
              </div>
              <p className="font-sans text-[15px] md:text-[16px] leading-[1.7] text-ink-soft max-w-[52ch]">
                Returning from maternity leave is one of the most disorienting professional transitions
                a woman faces. Companies invest in onboarding, in leadership development, in retention —
                yet the return from maternity is left almost entirely unaddressed. The cost of getting
                it wrong is significant. The cost of getting it right is not.
              </p>
            </div>
          </Container>
        </section>

        {/* ============ STATS ============ */}
        <section className="py-20 md:py-24 border-b border-ink-faint/60 bg-bone-deep/30">
          <Container>
            <div className="mb-14 max-w-2xl">
              <span className="font-mono text-[10px] font-medium tracking-[0.22em] uppercase text-burgundy">
                The business case
              </span>
              <h2 className="mt-5 font-serif text-[28px] md:text-[36px] leading-[1.1] tracking-[-0.02em] font-light">
                The cost of ignoring it.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
              {STATS.map((s, i) => (
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
            <Eyebrow label="The programme" num="/her-next-chapter-live" className="mb-10" />

            <div className="max-w-4xl mb-16">
              <h2 className="font-serif text-[36px] md:text-[52px] leading-[1.05] tracking-[-0.03em] font-light [font-variation-settings:'opsz'_96]">
                Her Next Chapter <span className="italic font-normal text-burgundy">Live</span>
              </h2>
              <p className="mt-5 font-sans text-[15px] md:text-[16px] leading-[1.7] text-ink-soft max-w-[62ch]">
                A structured, retreat-like programme across two half-days — designed to help returning
                women reconnect with their professional identity, gain clarity on what they need to
                perform at their best, and build a lasting community with other women navigating the
                same transition.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 md:gap-14">
              {DAYS.map((day, i) => (
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
                  What your company receives
                </span>
              </div>
              <div>
                <h2 className="font-serif text-[28px] md:text-[40px] leading-[1.1] tracking-[-0.025em] font-light">
                  An <span className="italic font-normal text-burgundy">anonymised insight report</span>
                  {' '}— real signal on what your returning women need to perform at their best, straight
                  from the source.
                </h2>
              </div>
            </div>
          </Container>
        </section>

        {/* ============ DETAILS ============ */}
        <section className="py-20 md:py-24 border-b border-ink-faint/60 bg-bone-deep/30">
          <Container>
            <Eyebrow label="Programme details" num="/details" className="mb-10" />

            <dl className="grid md:grid-cols-4 gap-0 border-t border-ink-faint/60">
              {DETAILS.map((d) => (
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
                Let’s talk about your{' '}
                <span className="italic font-normal text-burgundy">returning women.</span>
              </h2>

              <div className="mt-10 flex flex-wrap items-center gap-8">
                <a
                  href="mailto:hello@dwait.com?subject=Her%20Next%20Chapter%20Live%20%E2%80%94%20enquiry"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-burgundy text-bone-light font-sans font-medium text-[15px] tracking-[0.01em] rounded-md hover:bg-burgundy-deep transition-colors"
                >
                  Get in touch <span className="font-serif italic font-light">→</span>
                </a>
                <a
                  href={`/${locale}`}
                  className="inline-flex items-center gap-2 pb-1 border-b border-ink font-sans font-medium text-[14px] tracking-[0.01em] text-ink hover:text-burgundy hover:border-burgundy transition-colors"
                >
                  Back to the 1:1 programme <span className="font-serif italic font-light">→</span>
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
                Looking for deeper support?
              </span>
              <p className="mt-5 font-serif italic font-light text-[20px] md:text-[24px] leading-[1.4] text-ink max-w-[58ch]">
                <span className="not-italic font-normal">Her Next Chapter</span> — our 1:1 coaching
                programme — is available for individual women who want to continue the work after the
                group experience.
              </p>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
