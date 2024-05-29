import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { locales } from '@/config';

export type Locale = (typeof locales)[number];

type IProps = {
  locale: string;
};

export default getRequestConfig(async ({ locale }: IProps) => {
  if (!locales.includes(locale as Locale)) notFound();

  return {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    messages: (await import(`/messages/${locale}.json`)).default,
  };
});
