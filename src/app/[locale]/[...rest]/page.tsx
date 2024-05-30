import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { type TParamsLocale } from '@/types';

type TProps = TParamsLocale;

export async function generateMetadata({ params: { locale } }: TProps) {
  const t = await getTranslations({ locale, namespace: 'NotFoundPage' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function CatchAllPage() {
  notFound();
}
