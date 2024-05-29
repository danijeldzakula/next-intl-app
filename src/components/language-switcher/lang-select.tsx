'use client';

import { type ChangeEvent, useCallback, useTransition } from 'react';

import clsx from 'clsx';

import { usePathname, useRouter } from '@/navigation';
import { type IChildren } from '@/types';

type IProps = IChildren & {
  label: string;
  defaultValue: string;
};

export default function LangSelect({ children, label, defaultValue }: IProps) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();

  const onSelectChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const currentLocale = event.target.value;

      startTransition(() => {
        return void router.push(pathname, { locale: currentLocale });
      });
    },
    [router, pathname]
  );

  return (
    <label
      className={clsx(
        'relative',
        isPending && 'transition-opacity [&:disabled]:opacity-30'
      )}
    >
      <p className="sr-only">{label}</p>

      <select
        className="inline-flex h-10 w-full items-center overflow-hidden rounded-sm bg-zinc-900 px-2 text-white outline-none"
        data-testid="locale-switcher-select"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
    </label>
  );
}
