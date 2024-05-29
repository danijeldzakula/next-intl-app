import { getTranslations } from 'next-intl/server';

import { dehydrate } from '@tanstack/react-query';

import { ReactQueryHydrate } from '@/components/query/query-hydrate';

import getQueryClient from '@/utils/query-client';

import { getPosts } from '@/services/post-services';
import { type IChildren } from '@/types';

type IProps = IChildren & {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: IProps) {
  const t = await getTranslations({ locale, namespace: 'IndexPage' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function QueryLayout({ children }: IChildren) {
  const queryClient = getQueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
    initialPageParam: 1,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <ReactQueryHydrate state={dehydratedState}>{children}</ReactQueryHydrate>
  );
}
