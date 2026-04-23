'use client';

import { useLocale } from 'next-intl';

export function CalEmbed() {
  const locale = useLocale();
  const username = process.env.NEXT_PUBLIC_CAL_USERNAME || 'maaike';
  const event = process.env.NEXT_PUBLIC_CAL_EVENT || 'discovery-60min';

  const src = `https://cal.com/${username}/${event}?embed=true&theme=light&hideEventTypeDetails=false&layout=month_view`;

  return (
    <div className="relative w-full overflow-hidden rounded-xs border border-ink-faint/60 bg-bone-light">
      <iframe
        src={src}
        title="Book a session"
        className="w-full min-h-[720px] border-0"
        loading="lazy"
        allow="payment"
        data-locale={locale}
      />
      <div className="absolute bottom-2 right-3 font-mono text-[9px] tracking-[0.22em] uppercase text-ink-faint">
        powered by cal.com
      </div>
    </div>
  );
}
