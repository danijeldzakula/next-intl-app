import React from 'react';

import { Container, Section } from '@/components/layouts';
import Search from '@/components/search';

export default function SearchBlock() {
  return (
    <Section className="bg-neutral-200 !py-4 dark:bg-neutral-950">
      <Container>
        <Search className="mx-auto my-6 w-full max-w-xl" />
      </Container>
    </Section>
  );
}
