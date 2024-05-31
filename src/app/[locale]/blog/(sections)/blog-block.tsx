import Link from 'next/link';
import React, { Suspense } from 'react';

import { Container, Figure, Section } from '@/components/layouts';

import ArrowIcon from '@/icons/arrow';
import { type TBlogs } from '@/shared/blogs-data';

import { Loading } from '../(components)/loading';

type TProps = {
  data: TBlogs[];
  locale: string;
};

export default function BlogBlock({ data, locale }: TProps) {
  return (
    <Section className="!pt-0">
      <Container>
        <div className="flex flex-wrap gap-x-4 gap-y-8">
          <Suspense fallback={<Loading fill={5} />}>
            {data.map((blog) => {
              return (
                <article
                  key={blog.id}
                  className="card__item cursor-default xl:basis-[calc(33.33333%-1rem)]"
                >
                  <Figure className="h-40 w-full bg-black/15 dark:bg-white/15" />

                  <div className="grid gap-4 p-4">
                    <h2 className="text-xl">{blog.title}</h2>
                    <div className="flex justify-start">
                      <Link
                        className="flex items-center gap-4 bg-white px-4 dark:bg-neutral-800"
                        href={`/${locale}/blog/${blog.slug}`}
                      >
                        <span>Read More</span>
                        <span className="block py-4">
                          <ArrowIcon className="h-4 w-4" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </Suspense>
        </div>
      </Container>
    </Section>
  );
}
