import { getTranslations } from 'next-intl/server';
import React from 'react';

import BackButton from '@/components/back-button';
import { Container, Layout, Section, SeoTitle } from '@/components/layouts';

import ArrowIcon from '@/icons/arrow';
import { images } from '@/shared/images-data';

import Card from '../(components)/card';

type IProps = {
  params: {
    id: string;
    locale: string;
  };
};

export async function generateMetadata({ params: { locale } }: IProps) {
  const t = await getTranslations({ locale, namespace: 'IndexPage' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function GalleryItem({ params: { id } }: IProps) {
  const findImage = images.find((image) => image.id === id)!;

  return (
    <Layout>
      <Section>
        <Container>
          <div className="flex justify-between">
            <BackButton className="relative grid h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg dark:bg-black">
              <ArrowIcon className="rotate-180" width={20} height={20} />
              <span className="sr-only">Back</span>
            </BackButton>

            <SeoTitle>{findImage?.alt}</SeoTitle>
          </div>

          <div className="mt-16 grid">
            {findImage && <Card item={findImage} showLink={false} />}
          </div>
        </Container>
      </Section>
    </Layout>
  );
}
