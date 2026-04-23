import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Mark } from '@/components/Mark';
import { LangSwitcher } from '@/components/LangSwitcher';

export function Nav() {
  const t = useTranslations('nav');

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-paper/70 border-b border-ink/10">
      <Container className="flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-3 text-ink">
          <Mark size={36} />
          <span className="hidden md:inline font-display text-[18px] italic leading-none">
            dutch<span className="text-terracotta-deep">·</span>i
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-[14px] text-ink/80">
          <a href="#for-who" className="hover:text-terracotta-deep transition">{t('forWho')}</a>
          <a href="#benefits" className="hover:text-terracotta-deep transition">{t('benefits')}</a>
          <a href="#how" className="hover:text-terracotta-deep transition">{t('services')}</a>
          <a href="#faq" className="hover:text-terracotta-deep transition">{t('faq')}</a>
        </nav>

        <div className="flex items-center gap-4">
          <LangSwitcher />
          <a
            href="#book"
            className="hidden md:inline-flex items-center gap-2 font-mono font-semibold uppercase tracking-[0.12em] text-[11px] px-4 py-2 bg-ink text-paper-light rounded-sm hover:bg-terracotta transition"
          >
            {t('book')} →
          </a>
        </div>
      </Container>
    </header>
  );
}
