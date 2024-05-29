'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

import clsx from 'clsx';

import { Container, Section, SeoTitle } from '@/components/layouts';

import { type IGlobalProps } from '@/types';

type IProps = IGlobalProps;

export default function Hero({ className }: IProps) {
  const t = useTranslations('IndexPage');

  return (
    <Section className={clsx('pb-0', className)}>
      <Container>
        <SeoTitle className="mb-4">{t('title')}</SeoTitle>
      </Container>
    </Section>
  );
}
