import { getTranslations } from 'next-intl/server';

import { Layout } from '@/components/layouts';

import Posts from './(sections)/posts';

type IProps = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: IProps) {
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
