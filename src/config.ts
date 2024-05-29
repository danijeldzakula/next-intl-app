import { type Pathnames } from 'next-intl/navigation';

export const port = process.env.PORT || 3000;
export const locales = ['en', 'de'] as const;
export const defaultLocale = 'en';
export const host = `http://localhost:${port}`;
export const localePrefix = 'always';
export const localeDetection = false;
export const pathnames = {
  '/': '/',
  '/contact': '/contact',
  '/blog': '/blog',
} satisfies Pathnames<typeof locales>;
export type AppPathnames = keyof typeof pathnames;
