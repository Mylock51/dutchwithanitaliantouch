import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Mark } from '@/components/Mark';
import { LangSwitcher } from '@/components/LangSwitcher';

export function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="mt-10 border-t-[3px] border-double border-ink bg-paper">
      <Container className="py-14">
        <div className="grid md:grid-cols-[1.3fr_1fr_1fr] gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Mark size={40} />
              <span className="font-display text-[20px] italic font-medium text-ink">
                dutch<span className="text-terracotta-deep">·</span>i
              </span>
            </div>
            <p className="text-[14px] leading-[1.6] text-ink/75 italic max-w-[40ch]">
              {t('tagline')}
            </p>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-terracotta font-semibold mb-4">
              {t('links')}
            </div>
            <ul className="space-y-2 text-[14px] text-ink/80">
              <li><a href="#for-who" className="hover:text-terracotta-deep transition">Per chi</a></li>
              <li><a href="#benefits" className="hover:text-terracotta-deep transition">Benefici</a></li>
              <li><a href="#how" className="hover:text-terracotta-deep transition">Come funziona</a></li>
              <li><a href="#book" className="hover:text-terracotta-deep transition">Prenota</a></li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-terracotta font-semibold mb-4">
              {t('languages')}
            </div>
            <LangSwitcher />
          </div>
        </div>

        <div className="pt-6 border-t border-ink/15 flex flex-wrap gap-4 items-center justify-between font-mono text-[10px] uppercase tracking-widest text-ink-soft">
          <span>© {year} · Dutch with an Italian Touch</span>
          <span className="font-display not-italic text-[20px] text-terracotta">✦</span>
          <span>{t('rights')}</span>
        </div>
      </Container>
    </footer>
  );
}
