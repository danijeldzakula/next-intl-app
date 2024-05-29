import { getTranslations } from 'next-intl/server';

import { images } from '@/shared/images-data';

import Card from '../../../(components)/card';
import Modal from '../../../(components)/modal';

type IProps = {
  params: {
    id: string;
    locale: string;
  };
};

export async function generateMetadata({ params: { locale } }: IProps) {
  const t = await getTranslations({ locale, namespace: 'IndexPage' });

  return {
    title: 'Value' + t('title'),
    description: t('description'),
  };
}

export default function PhotoModal({ params: { id } }: IProps) {
  const findImage = images.find((image) => image.id === id)!;

  return (
    <Modal>
      <Card item={findImage} showLink={false} />
    </Modal>
  );
}
