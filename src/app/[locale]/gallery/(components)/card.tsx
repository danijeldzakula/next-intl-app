'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import React from 'react';

import { pathnames } from '@/config';
import { type IImages } from '@/types/gallery';

type IProps = {
  item: IImages;
  showLink?: boolean;
};

type IGalleryPath = {
  en: string;
  de: string;
};

export default function Card({ item, showLink = true }: IProps) {
  const locale = useLocale();

  const galleryPathname = pathnames['/gallery'];
  const href = `/${locale}${galleryPathname[locale as keyof IGalleryPath]}/${item.id}`;

  return (
    <article className="card__item relative">
      {showLink ? (
        <Link
          scroll={false}
          href={href}
          className="absolute inset-0 z-[3] h-full w-full"
        >
          <span className="sr-only">{item.author}</span>
        </Link>
      ) : null}

      <figure className="h-[96px] w-full bg-black/15 dark:bg-white/15" />

      <div className="p-4">
        <h2>Author: {item.author}</h2>
        <p>Date: {item.date}</p>
      </div>
    </article>
  );
}
