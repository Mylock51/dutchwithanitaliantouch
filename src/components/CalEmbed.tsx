'use client';

import { useEffect } from 'react';
import { useLocale } from 'next-intl';
import Cal, { getCalApi } from '@calcom/embed-react';

export function CalEmbed() {
  const locale = useLocale();
  const baseUrl = process.env.NEXT_PUBLIC_CAL_BASE_URL || 'https://cal.com';
  const username = process.env.NEXT_PUBLIC_CAL_USERNAME || 'maaike';
  const event = process.env.NEXT_PUBLIC_CAL_EVENT || 'discovery-60min';
  const calLink = `${username}/${event}`;

  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: 'dwait-booking', embedJsUrl: `${baseUrl}/embed/embed.js` });
      const lightVars = {
        'cal-brand': '#6E1F2A',
        'cal-bg': '#F5EFE8',
        'cal-bg-emphasis': '#EAE1D3',
        'cal-bg-subtle': '#FAF6EF',
        'cal-bg-muted': '#EFE6D5',
        'cal-bg-inverted': '#1F1A17',
        'cal-border': '#B9AD93',
        'cal-border-emphasis': '#7A6F62',
        'cal-border-subtle': '#EAE1D3',
        'cal-border-booker': '#B9AD93',
        'cal-text': '#1F1A17',
        'cal-text-emphasis': '#1F1A17',
        'cal-text-muted': '#7A6F62',
        'cal-text-subtle': '#B9AD93',
        'cal-text-inverted': '#FAF6EF',
      };
      cal('ui', {
        theme: 'light',
        hideEventTypeDetails: false,
        layout: 'month_view',
        cssVarsPerTheme: { light: lightVars, dark: lightVars },
      });
    })();
  }, [baseUrl]);

  return (
    <div className="relative w-full overflow-hidden bg-bone">
      <Cal
        namespace="dwait-booking"
        calLink={calLink}
        calOrigin={baseUrl}
        style={{ width: '100%', height: '100%', minHeight: '720px', overflow: 'scroll' }}
        config={{ layout: 'month_view', theme: 'light' }}
        data-locale={locale}
      />
    </div>
  );
}
