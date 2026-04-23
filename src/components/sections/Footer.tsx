import { useLocale, useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { LangSwitcher } from '@/components/LangSwitcher';

export function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-faint/60 bg-bone">
      <Container className="py-20">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 mb-14">
          <div>
            <a
              href="#top"
              className="font-serif italic font-light text-[32px] leading-none text-ink block mb-6"
              aria-label="Dutch with an Italian Touch"
            >
              d<span className="text-burgundy">·</span>i
            </a>
            <p className="font-sans text-[14px] leading-[1.7] text-ink-soft max-w-[36ch]">
              {t('tagline')}
            </p>

            <ul className="mt-8 flex items-center gap-5">
              <li>
                <a
                  href="https://www.instagram.com/dutchwithanitaliantouch/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex items-center justify-center w-9 h-9 text-ink-soft hover:text-burgundy transition-colors"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@dutchwithanitaliantouch"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="inline-flex items-center justify-center w-9 h-9 text-ink-soft hover:text-burgundy transition-colors"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.1v12.53a2.52 2.52 0 0 1-2.52 2.52 2.52 2.52 0 0 1-2.52-2.52 2.52 2.52 0 0 1 2.52-2.52c.26 0 .51.04.75.11v-3.15a5.65 5.65 0 0 0-.75-.05 5.67 5.67 0 0 0-5.67 5.67 5.67 5.67 0 0 0 5.67 5.67 5.67 5.67 0 0 0 5.67-5.67V9.34a7.35 7.35 0 0 0 4.29 1.37V7.61a4.28 4.28 0 0 1-3.28-1.79z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-meta text-ink-soft mb-5">{t('links')}</div>
            <ul className="space-y-2.5 font-sans text-[14px] text-ink-soft">
              <li><a href="#for-who" className="hover:text-burgundy transition-colors">Per chi</a></li>
              <li><a href="#benefits" className="hover:text-burgundy transition-colors">Benefici</a></li>
              <li><a href="#how" className="hover:text-burgundy transition-colors">Come funziona</a></li>
              <li><a href="#book" className="hover:text-burgundy transition-colors">Prenota</a></li>
            </ul>
          </div>

          <div>
            <div className="font-meta text-ink-soft mb-5">For companies</div>
            <ul className="space-y-2.5 font-sans text-[14px] text-ink-soft">
              <li>
                <a href={`/${locale}/for-companies`} className="inline-flex items-center gap-2 hover:text-burgundy transition-colors">
                  Her Next Chapter Live <span className="font-serif italic font-light">→</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-meta text-ink-soft mb-5">{t('languages')}</div>
            <LangSwitcher />
          </div>
        </div>

        <div className="pt-6 border-t border-ink-faint/60 flex flex-wrap gap-4 items-center justify-between font-meta text-ink-faint">
          <span>© {year} · Dutch with an Italian Touch</span>
          <span>{t('rights')}</span>
        </div>
      </Container>
    </footer>
  );
}
