'use client';

import { useLocale } from 'next-intl';
import React, { useCallback, useTransition } from 'react';

import clsx from 'clsx';

import { locales } from '@/config';
import { usePathname, useRouter } from '@/navigation';

export default function LangSwitch() {
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const pathname = usePathname();
  const router = useRouter();

  const handleClick = useCallback(
    (currentLocale: string) => {
      startTransition(() => {
        router.replace(pathname, { locale: currentLocale });
      });
    },
    [pathname, router]
  );

  return (
    <div className="flex gap-2">
      {locales.map((loc) => {
        return (
          <button
            key={loc}
            type="button"
            disabled={isPending}
            onClick={() => handleClick(loc)}
            className={clsx(
              'p-2 uppercase text-white',
              locale === loc ? 'font-bold' : ''
            )}
          >
            {loc}
          </button>
        );
      })}
    </div>
  );
}
