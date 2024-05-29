'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import React from 'react';

import { Container, Section, SeoTitle } from '@/components/layouts';

export default function Hero() {
  const locale = useLocale();

  return (
    <Section>
      <Container>
        <SeoTitle>Blog</SeoTitle>

        <ul className="my-8 grid gap-4">
          <li>
            <Link href={`/${locale}/blog/verfication-your-account`}>
              Verfication your account
            </Link>
          </li>
          <li>
            <Link href={`/${locale}/blog/middleware-in-your-application`}>
              Middleware in your Application
            </Link>
          </li>
          <li>
            <Link href={`/${locale}/blog/ai-in-industry`}>AI in industry</Link>
          </li>
        </ul>
      </Container>
    </Section>
  );
}
