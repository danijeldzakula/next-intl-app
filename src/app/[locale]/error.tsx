'use client';

import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

import { Container, Layout, Section } from '@/components/layouts';

type IProps = {
  error: Error;
  reset(): void;
};

export default function Error({ error, reset }: IProps) {
  const t = useTranslations('NotFoundPage');

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Layout>
      <Section>
        <Container>
          {t.rich('description', {
            p: (chunks) => <p className="mt-4">{chunks}</p>,
            retry: (chunks) => (
              <button
                className="text-white underline underline-offset-2"
                type="button"
                onClick={reset}
              >
                {chunks}
              </button>
            ),
          })}
        </Container>
      </Section>
    </Layout>
  );
}
