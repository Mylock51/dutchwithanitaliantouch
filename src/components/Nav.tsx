import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Mark } from '@/components/Mark';
import { LangSwitcher } from '@/components/LangSwitcher';

export function Nav() {
  const t = useTranslations('nav');

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-bone/75 border-b border-ink-faint/40">
      <Container className="flex items-center justify-between py-5">
        <a href="#top" className="flex items-center gap-3 text-ink">
          <Mark size={32} />
          <span className="hidden md:inline font-serif text-[17px] italic font-light leading-none">
            dutch<span className="text-burgundy">·</span>i
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9 font-sans text-[13px] text-ink-soft">
          <a href="#for-who" className="hover:text-burgundy transition-colors">{t('forWho')}</a>
          <a href="#benefits" className="hover:text-burgundy transition-colors">{t('benefits')}</a>
          <a href="#how" className="hover:text-burgundy transition-colors">{t('services')}</a>
          <a href="#faq" className="hover:text-burgundy transition-colors">{t('faq')}</a>
        </nav>

        <div className="flex items-center gap-5">
          <LangSwitcher />
          <a
            href="#book"
            className="hidden md:inline-flex items-center gap-2 font-sans font-medium tracking-[0.01em] text-[13px] px-5 py-2.5 bg-burgundy text-bone-light rounded-xs hover:bg-burgundy-deep transition-colors"
          >
            {t('book')} <span className="font-serif italic font-light">→</span>
          </a>
        </div>
      </Container>
    </header>
  );
}
