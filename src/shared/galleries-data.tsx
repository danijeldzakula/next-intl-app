import galleryOne from '@public/images/gallery_1.jpeg';
import galleryTwo from '@public/images/gallery_2.avif';
import galleryThree from '@public/images/gallery_3.avif';
import galleryFour from '@public/images/seo/opengraph-image.jpg';

export type TGalleryImages = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type TGalleries = {
  id: string;
  href: string;
  title: string;
  style: string | null;
  images: TGalleryImages;
}[];

export const galleries: TGalleries = [
  {
    id: '1',
    href: '/',
    images: {
      src: galleryOne.src,
      width: 406,
      height: 320,
      alt: 'Photo by VR',
    },
    title: 'VR',
    style: null,
  },
  {
    id: '2',
    href: '/',
    images: {
      src: galleryTwo.src,
      width: 843,
      height: 320,
      alt: 'Photo by Tech',
    },
    title: 'Tech',
    style: 'md:col-span-2',
  },
  {
    id: '3',
    href: '/',
    images: {
      src: galleryThree.src,
      width: 843,
      height: 320,
      alt: 'Photo by Dev',
    },
    title: 'Dev',
    style: 'md:col-span-2',
  },
  {
    id: '4',
    href: '/',
    images: {
      src: galleryFour.src,
      width: 406,
      height: 320,
      alt: 'Photo by Retro',
    },
    title: 'Retro',
    style: null,
  },
];
