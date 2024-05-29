import { type Viewport } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { ThemeProvider } from 'next-themes';
import { Work_Sans } from 'next/font/google';

import clsx from 'clsx';
import NextTopLoader from 'nextjs-toploader';

import BackToTop from '@/components/back-to-top';
import Footer from '@/components/footer/footer';
import MastHead from '@/components/masthead';
import QueryProvider from '@/components/query/query-provider';

import { locales } from '@/config';
import { type IChildren } from '@/types';

const workSans = Work_Sans({ subsets: ['latin'] });

type IProps = IChildren & {
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: '#412203',
};

export function generateMetadata({ params: { locale } }: IProps) {
  const metadataBase = new URL('https://next-intl-app.vercel.app');

  return {
    manifest: '/manifest.json',
    metadataBase: metadataBase,
    alternates: {
      canonical: '/' + locale,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      images: [
        {
          url: 'opengraph-image-main.jpg',
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: IProps) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html suppressHydrationWarning={true} lang={locale}>
      <body className={clsx(workSans.className)}>
        <QueryProvider>
          <ThemeProvider enableSystem={true} attribute="class">
            <NextIntlClientProvider messages={messages}>
              <NextTopLoader color="white" height={3} showSpinner={false} />

              <div className="__app__">
                <MastHead />
                {children}
                <Footer />
                <BackToTop />
              </div>
            </NextIntlClientProvider>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
