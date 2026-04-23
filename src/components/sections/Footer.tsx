import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Mark } from '@/components/Mark';
import { LangSwitcher } from '@/components/LangSwitcher';

export function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-ink-faint/60 bg-bone">
      <Container className="py-20">
        <div className="grid md:grid-cols-[1.3fr_1fr_1fr_1fr] gap-12 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Mark size={36} />
              <span className="font-serif text-[18px] italic font-light text-ink">
                dutch<span className="text-burgundy">·</span>i
              </span>
            </div>
            <p className="font-sans text-[14px] leading-[1.7] text-ink-soft max-w-[36ch]">
              {t('tagline')}
            </p>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-burgundy font-medium mb-5">
              {t('links')}
            </div>
            <ul className="space-y-2.5 font-sans text-[14px] text-ink-soft">
              <li><a href="#for-who" className="hover:text-burgundy transition-colors">Per chi</a></li>
              <li><a href="#benefits" className="hover:text-burgundy transition-colors">Benefici</a></li>
              <li><a href="#how" className="hover:text-burgundy transition-colors">Come funziona</a></li>
              <li><a href="#book" className="hover:text-burgundy transition-colors">Prenota</a></li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-burgundy font-medium mb-5">
              For companies
            </div>
            <ul className="space-y-2.5 font-sans text-[14px] text-ink-soft">
              <li>
                <a href="/for-companies" className="inline-flex items-center gap-2 hover:text-burgundy transition-colors">
                  Her Next Chapter Live <span className="font-serif italic font-light">→</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-burgundy font-medium mb-5">
              {t('languages')}
            </div>
            <LangSwitcher />
          </div>
        </div>

        <div className="pt-6 border-t border-ink-faint/60 flex flex-wrap gap-4 items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint">
          <span>© {year} · Dutch with an Italian Touch</span>
          <span className="font-serif not-italic text-[18px] text-burgundy opacity-70">✦</span>
          <span>{t('rights')}</span>
        </div>
      </Container>
    </footer>
  );
}
