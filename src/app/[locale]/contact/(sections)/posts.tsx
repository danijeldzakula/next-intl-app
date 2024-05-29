'use client';

import React, { Fragment } from 'react';

import { useInfiniteQuery } from '@tanstack/react-query';

import { Container, Section } from '@/components/layouts';

import { type PostType } from '@/model/post';
import { getPosts } from '@/services/post-services';

import Card from '../(components)/card';

export default function Posts() {
  const { data, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery<PostType[]>({
      queryKey: ['posts'],
      queryFn: ({ pageParam = 1 }) =>
        getPosts({ pageParam: pageParam as number }),
      initialPageParam: 1,
      getNextPageParam: (_, pages) => pages.length + 1,
    });

  if (!data) {
    return <div>Not found</div>;
  }

  return (
    <Section>
      <Container>
        <div className="grid gap-8">
          <div className="flex flex-wrap gap-x-4 gap-y-8">
            {data.pages.map((group, i) => (
              <Fragment key={i}>
                {group.map((post) => {
                  return <Card key={post.id} post={post} />;
                })}
              </Fragment>
            ))}
          </div>

          {isFetchingNextPage ? (
            <div className="mx-auto min-h-12 w-full max-w-md text-center">
              Loading more...
            </div>
          ) : hasNextPage ? (
            <button
              className="gradient--indigo mx-auto min-h-12 w-full max-w-md rounded-sm text-white"
              onClick={() => fetchNextPage()}
            >
              Load More
            </button>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
