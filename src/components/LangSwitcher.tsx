'use client';

import { useEffect, useRef, useState } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing, type Locale } from '@/i18n/routing';
import { cn } from '@/lib/cn';

const LABELS: Record<Locale, { flag: string; name: string; full: string }> = {
  it: { flag: '🇮🇹', name: 'IT', full: 'Italiano' },
  en: { flag: '🇬🇧', name: 'EN', full: 'English' },
  nl: { flag: '🇳🇱', name: 'NL', full: 'Nederlands' },
};

export function LangSwitcher({ className }: { className?: string }) {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    function onDocClick(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const current = LABELS[locale];

  return (
    <div ref={rootRef} className={cn('relative inline-block', className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ink/60 bg-paper text-ink text-[11px] font-mono font-medium tracking-wider hover:bg-paper-deep transition"
      >
        <span aria-hidden>{current.flag}</span>
        <span>{current.name}</span>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          aria-hidden
          className={cn('transition-transform', open && 'rotate-180')}
        >
          <path d="M2 3.5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Language"
          className="absolute right-0 mt-2 min-w-[160px] rounded-xl border border-ink/15 bg-paper-light shadow-lg py-1 z-50"
        >
          {routing.locales.map((loc) => {
            const isActive = loc === locale;
            return (
              <li key={loc}>
                <button
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  onClick={() => {
                    setOpen(false);
                    if (!isActive) router.replace(pathname, { locale: loc });
                  }}
                  className={cn(
                    'w-full flex items-center gap-2.5 px-3 py-2 text-left text-[13px] transition',
                    isActive ? 'bg-ink/5 text-ink' : 'text-ink/80 hover:bg-ink/5'
                  )}
                >
                  <span aria-hidden>{LABELS[loc].flag}</span>
                  <span className="font-medium">{LABELS[loc].full}</span>
                  <span className="ml-auto font-mono text-[10px] tracking-widest text-ink-soft">
                    {LABELS[loc].name}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
