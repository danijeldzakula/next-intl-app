import createMiddleware from 'next-intl/middleware';

import { defaultLocale, localePrefix, locales, pathnames } from '@/config';

export default createMiddleware({
  defaultLocale,
  locales,
  pathnames,
  localePrefix,
});

export const config = {
  matcher: ['/', '/(en|de)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
};
