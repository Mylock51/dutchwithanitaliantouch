'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing, type Locale } from '@/i18n/routing';
import { cn } from '@/lib/cn';

const LABELS: Record<Locale, { flag: string; name: string }> = {
  it: { flag: '🇮🇹', name: 'IT' },
  en: { flag: '🇬🇧', name: 'EN' },
  nl: { flag: '🇳🇱', name: 'NL' },
};

export function LangSwitcher({ className }: { className?: string }) {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className={cn('flex items-center gap-2', className)}>
      {routing.locales.map((loc) => {
        const isActive = loc === locale;
        return (
          <button
            key={loc}
            onClick={() => router.replace(pathname, { locale: loc })}
            className={cn(
              'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[11px] font-mono font-medium tracking-wider transition',
              isActive
                ? 'bg-ink text-paper-light border-ink'
                : 'bg-paper text-ink border-ink/60 hover:bg-paper-deep'
            )}
            aria-label={`Switch to ${LABELS[loc].name}`}
          >
            <span>{LABELS[loc].flag}</span>
            <span>{LABELS[loc].name}</span>
          </button>
        );
      })}
    </div>
  );
}
