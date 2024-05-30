import { getTranslations } from 'next-intl/server';

import BackButton from '@/components/back-button';
import { Container, Layout, Section, SeoTitle } from '@/components/layouts';

import ArrowIcon from '@/icons/arrow';
import { type TParamsLocale } from '@/types';

type TProps = TParamsLocale;

export async function generateMetadata({ params: { locale } }: TProps) {
  const t = await getTranslations({ locale, namespace: 'IndexPage' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function SingleBlogPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return (
    <Layout>
      <Section>
        <Container>
          <div className="flex gap-4">
            <BackButton className="relative bg-neutral-950 px-4 py-2">
              <ArrowIcon className="rotate-180" />
              <span className="sr-only">Back</span>
            </BackButton>
            <SeoTitle>Single Blog Post: {slug}</SeoTitle>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}
