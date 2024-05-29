'use client';

import Image from 'next/image';
import React from 'react';

import galleryOne from '@public/assets/images/gallery_1.jpeg';
import galleryTwo from '@public/assets/images/gallery_2.avif';
import galleryThree from '@public/assets/images/gallery_3.avif';

import { Container, Section } from '@/components/layouts';

import { Link } from '@/navigation';

export default function Gallery() {
  return (
    <Section>
      <Container>
        <div className="h-full">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 xl:gap-8">
            <Link
              href="/"
              className="group relative flex h-56 items-end overflow-hidden rounded-sm shadow-lg md:h-80"
            >
              <Image
                priority
                width={406}
                height={320}
                quality={70}
                src={galleryOne.src}
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-300 group-hover:scale-110"
                alt="Photo by Minh Pham"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />

              <div className="group relative w-full p-4">
                <span className="relative inline-block text-base text-white md:text-xl">
                  VR
                </span>
              </div>
            </Link>

            <Link
              href="/"
              className="group relative flex h-56 items-end overflow-hidden rounded-sm shadow-lg md:col-span-2 md:h-80"
            >
              <Image
                priority
                width={843}
                height={320}
                quality={70}
                src={galleryTwo.src}
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-300 group-hover:scale-110"
                alt="Photo by Minh Pham"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />

              <div className="group relative w-full p-4">
                <span className="relative inline-block text-base text-white md:text-xl">
                  Tech
                </span>
              </div>
            </Link>

            <Link
              href="/"
              className="group relative flex h-56 items-end overflow-hidden rounded-sm shadow-lg md:col-span-2 md:h-80"
            >
              <Image
                priority
                width={843}
                height={320}
                quality={70}
                src={galleryTwo.src}
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-300 group-hover:scale-110"
                alt="Photo by Minh Pham"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />

              <div className="group relative w-full p-4">
                <span className="relative inline-block text-base text-white md:text-xl">
                  Dev
                </span>
              </div>
            </Link>

            <Link
              href="/"
              className="group relative flex h-56 items-end overflow-hidden rounded-sm shadow-lg md:h-80"
            >
              <Image
                priority
                width={406}
                height={320}
                quality={70}
                src={galleryThree.src}
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-300 group-hover:scale-110"
                alt="Photo by Minh Pham"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />

              <div className="group relative w-full p-4">
                <span className="relative inline-block text-base text-white md:text-xl">
                  Retro
                </span>
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
