import { getTranslations } from 'next-intl/server';

import { Layout } from '@/components/layouts';

import { blogs } from '@/shared/blogs-data';
import { type TParamsLocale } from '@/types';

import BlogBlock from './(sections)/blog-block';
import Hero from './(sections)/hero';

type TProps = TParamsLocale;

export async function generateMetadata({ params: { locale } }: TProps) {
  const t = await getTranslations({ locale, namespace: 'IndexPage' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function BlogPage({ params: { locale } }: TProps) {
  return (
    <Layout>
      <Hero />

      <BlogBlock data={blogs} locale={locale} />
    </Layout>
  );
}
