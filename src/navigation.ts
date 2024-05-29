import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';

import { localePrefix, locales, pathnames } from '@/config';

/**
 * ! Important: To use <Link /> or other Components from @/navigation, you must include 'use client'.
 * TODO: show this error message after run build application 'pnpm run build'
 * Error: Usage of next-intl APIs in Server Components currently opts into dynamic rendering.
 * This limitation will eventually be lifted, but as a stopgap solution,
 * you can use the `unstable_setRequestLocale` API to enable static rendering
 */

export const {
  Link,
  getPathname,
  redirect,
  usePathname,
  useRouter,
  permanentRedirect,
} = createLocalizedPathnamesNavigation({
  locales,
  pathnames,
  localePrefix,
});
