import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

type IProps = {
  params: { locale: string };
};

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
