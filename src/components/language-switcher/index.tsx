import { useLocale, useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import React from 'react';

import { type Locale } from 'node_modules/next/dist/compiled/@vercel/og/satori';

import { locales } from '@/config';

import LangSelect from './lang-select';

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  unstable_setRequestLocale(locale);
  const t = useTranslations('LocaleSwitcher');

  return (
    <LangSelect defaultValue={locale} label={t('label')}>
      {locales.map((loc) => (
        <option
          key={loc}
          value={loc}
          data-testid={`locale-switcher-select-${loc}`}
        >
          {t(`locale.${loc}`)}
        </option>
      ))}
    </LangSelect>
  );
}
