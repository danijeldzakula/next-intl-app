import { getTranslations } from 'next-intl/server';
import React, { Suspense } from 'react';

import { Container, Layout, Section, SeoTitle } from '@/components/layouts';

import { images } from '@/shared/images-data';

import Card from './(components)/card';

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

export default function GalleryPage() {
  return (
    <Layout>
      <Section>
        <Container>
          <SeoTitle className="hidden">Gallery List</SeoTitle>

          <div className="flex flex-wrap gap-x-4 gap-y-8">
            <Suspense fallback={<Loading fill={9} />}>
              {images.map((image) => {
                return <Card item={image} key={image.id} />;
              })}
            </Suspense>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}

function Loading({ fill }: { fill: number }) {
  return new Array(fill).fill(null).map((_, idx) => {
    return (
      <div
        key={idx}
        className="card__item flex h-[176px] w-full cursor-default flex-col justify-between hover:shadow-lg"
      >
        <figure className="h-[96px] w-full animate-pulse bg-neutral-300 dark:bg-neutral-600" />

        <div className="flex h-[80px]  w-full flex-col justify-center gap-3 px-4">
          <div className="h-4 w-[45%] animate-pulse rounded-sm bg-neutral-300 delay-150 dark:bg-neutral-600" />
          <div className="h-4 w-[85%] animate-pulse rounded-sm bg-neutral-300 delay-300 dark:bg-neutral-600" />
        </div>
      </div>
    );
  });
}
