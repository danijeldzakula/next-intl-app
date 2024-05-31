import { getTranslations } from 'next-intl/server';

import BackButton from '@/components/back-button';
import { Container, Layout, Section, SeoTitle } from '@/components/layouts';

import ArrowIcon from '@/icons/arrow';
import { type TParamsLocale } from '@/types';

type TProps = TParamsLocale & {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { locale } }: TProps) {
  const t = await getTranslations({ locale, namespace: 'IndexPage' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function SingleBlogPage({ params: { slug } }: TProps) {
  function textNormalize(title: string): string {
    return title.replaceAll('-', ' ');
  }

  return (
    <Layout>
      <Section>
        <Container>
          <div className="flex">
            <BackButton className="relative bg-transparent px-4 py-2">
              <ArrowIcon className="h-5 w-5 rotate-180" />
              <span className="sr-only">Back</span>
            </BackButton>
            <SeoTitle className="capitalize">{textNormalize(slug)}</SeoTitle>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}
