'use client';

import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { LangSwitcher } from '@/components/LangSwitcher';
import { MarkWordmark } from '@/components/Mark';
import { cn } from '@/lib/cn';

export function Nav() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname() || '';
  const onForCompanies = pathname.includes('/for-companies');
  const home = `/${locale}`;
  const hash = (slug: string) => `${home}#${slug}`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-bone/80 border-b border-ink-faint/40">
      <Container className="flex items-center justify-between py-5">
        <div className="flex items-center gap-5">
          <a
            href={home}
            className="leading-none text-ink hover:opacity-80 transition-opacity"
            aria-label="DWAIT — home"
          >
            <MarkWordmark size={20} />
          </a>
          {onForCompanies && (
            <a
              href={home}
              className="hidden md:inline-flex items-center gap-2 font-mono text-[10px] font-medium tracking-[0.22em] uppercase text-ink-soft hover:text-burgundy transition-colors group"
              aria-label={t('backHome')}
            >
              <span
                aria-hidden
                className="inline-block w-4 h-px bg-ink-soft group-hover:bg-burgundy transition-[background-color,width] group-hover:w-6"
              />
              {t('backHome')}
            </a>
          )}
        </div>

        <nav className="hidden md:flex items-center gap-9 font-sans text-[13px] text-ink-soft">
          <a href={hash('how')} className="hover:text-burgundy transition-colors">{t('services')}</a>
          <a href={hash('for-who')} className="hover:text-burgundy transition-colors">{t('forWho')}</a>
          <a href={hash('benefits')} className="hover:text-burgundy transition-colors">{t('benefits')}</a>
          <a href={hash('faq')} className="hover:text-burgundy transition-colors">{t('faq')}</a>
          <a
            href={`/${locale}/for-companies`}
            aria-current={onForCompanies ? 'page' : undefined}
            className={cn(
              'font-serif italic font-light transition-colors',
              onForCompanies
                ? 'text-burgundy'
                : 'text-ink hover:text-burgundy'
            )}
          >
            For companies
          </a>
        </nav>

        <div className="flex items-center gap-5">
          <LangSwitcher />
          <a
            href={hash('book')}
            className="hidden md:inline-flex items-center font-sans font-medium tracking-[0.01em] text-[13px] px-5 py-2.5 bg-burgundy text-bone-light rounded-[2px] hover:bg-burgundy-deep transition-colors"
          >
            {t('book')}
          </a>
        </div>
      </Container>
    </header>
  );
}
