import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['it', 'en', 'nl'],
  defaultLocale: 'it',
  localePrefix: 'always',
});

export type Locale = (typeof routing.locales)[number];
