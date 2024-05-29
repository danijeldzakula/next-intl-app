import { type MetadataRoute } from 'next';

import { defaultLocale, host, type locales, pathnames } from '@/config';
import { getPathname } from '@/navigation';

type changeFrequency =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never';

export default function sitemap(): MetadataRoute.Sitemap {
  const changeFrequency = 'daily' as changeFrequency;
  const keys = Object.keys(pathnames) as Array<keyof typeof pathnames>;

  const getUrl = (
    key: keyof typeof pathnames,
    locale: (typeof locales)[number]
  ) => {
    const pathname = getPathname({ locale, href: key });
    return `${host}/${locale}${pathname === '/' ? '' : pathname}`;
  };

  return keys.map((key) => ({
    url: getUrl(key, defaultLocale),
    lastModified: new Date(),
    changeFrequency,
    priority: 1,
  }));
}
