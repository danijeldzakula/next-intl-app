import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import clsx from 'clsx';

import { Container, Section } from '@/components/layouts';

import { galleries } from '@/shared/galleries-data';
import { type TGlobalProps } from '@/types';

type TProps = TGlobalProps;

export default function Gallery({ className }: TProps) {
  return (
    <Section className={className}>
      <Container>
        <div className="h-full">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 xl:gap-8">
            {galleries.map((gallery) => {
              const {
                id,
                style,
                title,
                images: { src, alt, width, height },
              } = gallery;

              return (
                <Link
                  href="/"
                  key={id}
                  className={clsx(
                    'group relative flex h-56 items-end overflow-hidden rounded-sm shadow-lg md:h-80',
                    style ?? ''
                  )}
                >
                  <Image
                    alt={alt}
                    src={src}
                    width={width}
                    height={height}
                    quality={60}
                    priority={true}
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-300 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />

                  <div className="group relative w-full p-4">
                    <span className="relative inline-block text-base text-white md:text-xl">
                      {title}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
