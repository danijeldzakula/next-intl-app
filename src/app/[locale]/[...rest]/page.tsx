import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { type IParamsLocale } from '@/types';

type IProps = IParamsLocale;

export async function generateMetadata({ params: { locale } }: IProps) {
  const t = await getTranslations({ locale, namespace: 'NotFoundPage' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function CatchAllPage() {
  notFound();
}
