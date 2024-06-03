import React from 'react';

import { Container, Section, SeoTitle } from '@/components/layouts';

import { type TGlobalProps } from '@/types';

type TProps = TGlobalProps;

export default function Hero({ className }: TProps) {
  return (
    <Section className={className}>
      <Container>
        <SeoTitle className="mb-4 uppercase">Blog</SeoTitle>
      </Container>
    </Section>
  );
}
