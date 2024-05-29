import { useLocale, useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import React from 'react';

import clsx from 'clsx';
import { type Locale } from 'node_modules/next/dist/compiled/@vercel/og/satori';

import { Container, Section, SeoTitle } from '@/components/layouts';

import { type IGlobalProps } from '@/types';

type IProps = IGlobalProps;

export default function Hero({ className }: IProps) {
  const locale = useLocale() as Locale;
  unstable_setRequestLocale(locale);
  const t = useTranslations('ContactPage');

  return (
    <Section className={clsx('pb-0', className)}>
      <Container>
        <SeoTitle className="mb-4">{t('title')}</SeoTitle>
      </Container>
    </Section>
  );
}
