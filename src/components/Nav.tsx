import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { LangSwitcher } from '@/components/LangSwitcher';

export function Nav() {
  const t = useTranslations('nav');

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-bone/80 border-b border-ink-faint/40">
      <Container className="flex items-center justify-between py-5">
        <a
          href="#top"
          className="font-serif italic font-light text-[22px] leading-none text-ink"
          aria-label="Dutch with an Italian Touch"
        >
          d<span className="text-burgundy">·</span>i
        </a>

        <nav className="hidden md:flex items-center gap-9 font-sans text-[13px] text-ink-soft">
          <a href="#how" className="hover:text-burgundy transition-colors">{t('services')}</a>
          <a href="#for-who" className="hover:text-burgundy transition-colors">{t('forWho')}</a>
          <a href="#benefits" className="hover:text-burgundy transition-colors">{t('benefits')}</a>
          <a href="#faq" className="hover:text-burgundy transition-colors">{t('faq')}</a>
        </nav>

        <div className="flex items-center gap-5">
          <LangSwitcher />
          <a
            href="#book"
            className="hidden md:inline-flex items-center font-sans font-medium tracking-[0.01em] text-[13px] px-5 py-2.5 bg-burgundy text-bone-light rounded-md hover:bg-burgundy-deep transition-colors"
          >
            {t('book')}
          </a>
        </div>
      </Container>
    </header>
  );
}
