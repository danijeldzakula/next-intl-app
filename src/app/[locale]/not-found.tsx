import { useTranslations } from 'next-intl';

import { Container, Layout, Section } from '@/components/layouts';

export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage');

  return (
    <Layout>
      <Section>
        <Container>
          <h1 className="mb-4 text-2xl font-normal">{t('title')}</h1>
          <p>{t('description')}</p>
        </Container>
      </Section>
    </Layout>
  );
}
