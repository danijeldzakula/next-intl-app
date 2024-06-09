'use client';

import React, { useCallback, useEffect, useRef } from 'react';

import clsx from 'clsx';

import SearchIcon from '@/icons/search';
import { type TGlobalProps } from '@/types';

type TProps = TGlobalProps;

export default function Search({ className }: TProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const onKeyPressCombine = useCallback(
    (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 'k') {
        event.preventDefault();
        inputRef.current?.focus();
      }

      if (event.key === 'Escape') {
        inputRef.current?.blur();
      }
    },
    [inputRef]
  );

  useEffect(() => {
    document.addEventListener('keydown', onKeyPressCombine);

    return () => {
      document.removeEventListener('keydown', onKeyPressCombine);
    };
  }, [onKeyPressCombine]);

  return (
    <form
      className={clsx(
        'relative rounded-[3px] bg-white shadow-lg dark:bg-neutral-800',
        className
      )}
    >
      <label
        htmlFor="search-term"
        className="absolute left-0 top-0 grid h-12 w-12 items-center justify-center"
      >
        <SearchIcon
          width={20}
          height={20}
          className="text-neutral-400 dark:text-neutral-300"
        />
      </label>

      <input
        ref={inputRef}
        type="text"
        id="search-term"
        name="search-term"
        placeholder="Search"
        className="h-12 w-full rounded-[3px] bg-transparent pl-12 pr-4 sm:pr-20"
      />

      <div className="pointer-events-none absolute right-0 top-0 hidden h-12 w-20 select-none items-center justify-center gap-1 sm:grid">
        <div className="flex gap-1 font-medium">
          <kbd className="pointer-events-none inline-flex items-center justify-center rounded-[3px] bg-neutral-200 p-1 text-[12px] dark:bg-neutral-900">
            Ctrl
          </kbd>
          <kbd className="pointer-events-none inline-flex items-center justify-center rounded-[3px] bg-neutral-200 p-1 text-[12px] dark:bg-neutral-900">
            K
          </kbd>
        </div>
      </div>
    </form>
  );
}
