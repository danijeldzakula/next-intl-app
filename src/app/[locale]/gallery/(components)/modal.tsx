'use client';

import { type ReactNode, useEffect } from 'react';

import useBack from '@/hooks/useBack';

import ArrowIcon from '@/icons/arrow';

import BackButton from '../[id]/(components)/back-button';

const HAS_WINDOW: boolean = typeof window !== 'undefined';

export default function Modal({ children }: { children: ReactNode }) {
  const { handleClose } = useBack();

  useEffect(() => {
    if (!HAS_WINDOW) {
      return;
    }

    const HTML_ELEMENT = document.documentElement;
    HTML_ELEMENT.classList.add('overflow-y-clip');

    return () => {
      HTML_ELEMENT.classList.remove('overflow-y-clip');
    };
  }, []);

  return (
    <div>
      <aside className="fixed inset-0 z-50 grid min-h-[100svh] w-full items-center bg-zinc-300/50 backdrop-blur-md dark:bg-zinc-800/50">
        <div
          onClick={handleClose}
          className="absolute inset-0 z-[1] h-full w-full"
        />

        <div className="container relative z-[51] grid w-full gap-4">
          <div className="relative z-[5]">
            <BackButton className="absolute -left-5 -top-5 z-[5] grid h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg dark:bg-black">
              <ArrowIcon className="rotate-180" width={20} height={20} />
              <span className="sr-only">Back</span>
            </BackButton>

            {children}
          </div>
        </div>
      </aside>
    </div>
  );
}
