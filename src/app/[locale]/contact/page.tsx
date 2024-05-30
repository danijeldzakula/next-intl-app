import { getTranslations } from 'next-intl/server';

import { Layout } from '@/components/layouts';

import { type TParamsLocale } from '@/types';

import Posts from './(sections)/posts';

type TProps = TParamsLocale;

export async function generateMetadata({ params: { locale } }: TProps) {
  const t = await getTranslations({ locale, namespace: 'IndexPage' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function IndexPage() {
  return (
    <Layout>
      <Posts />
    </Layout>
  );
}
