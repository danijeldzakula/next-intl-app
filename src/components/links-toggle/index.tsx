'use client';

import React, { useCallback, useState } from 'react';

import clsx from 'clsx';

import ArrowIcon from '@/icons/arrow';
import { type TGlobalProps } from '@/types';

type TProps = TGlobalProps & {
  show?: boolean;
  title: string;
};

export default function LinksToggle({ show = false, title, children }: TProps) {
  const [isVisible, setIsVisible] = useState(show);

  const handleOpen = useCallback(() => {
    setIsVisible((p) => !p);
  }, []);

  return (
    <div>
      <button
        type="button"
        className={clsx(
          "after:gradient--indigo relative mb-5 flex w-full items-center justify-between text-left text-[20px] text-black after:absolute after:-bottom-2.5 after:left-0 after:clear-both after:h-[2px] after:w-16 after:transition-[width] after:duration-200 after:content-[''] md:hidden dark:text-white",
          isVisible ? 'after:w-32' : ''
        )}
        onClick={handleOpen}
      >
        <span>{title}</span>
        <span
          className={clsx(
            'flex h-4 w-4 -rotate-90 items-center justify-center transition-transform duration-200 md:hidden',
            !isVisible ? 'rotate-90' : ''
          )}
        >
          <ArrowIcon width={16} height={16} />
        </span>
      </button>

      <h3 className="after:gradient--indigo relative mb-5 hidden w-full items-center justify-between text-left text-[20px] text-black after:absolute after:-bottom-2.5 after:left-0 after:clear-both after:h-[2px] after:w-16 after:content-[''] md:flex dark:text-white">
        <span>{title}</span>
      </h3>

      <ul
        className={clsx(
          'grid gap-2 [&>li>a]:block [&>li>a]:py-1 [&>li]:text-zinc-600 [&>li]:dark:text-zinc-400',
          !isVisible ? 'hidden md:grid' : ''
        )}
      >
        {children}
      </ul>
    </div>
  );
}
