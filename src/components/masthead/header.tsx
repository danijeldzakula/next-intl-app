import dynamic from 'next/dynamic';
import React from 'react';

import { type TGlobalProps } from '@/types';

import { Container } from '../layouts';
import NavLink from '../nav-link';
import NavBar from './navbar';

const ThemeToggle = dynamic(() => import('@/components/theme-toggle'), {
  ssr: false,
  suspense: true,
  loading: () => (
    <div className="h-7 w-16 animate-pulse rounded-full bg-white dark:bg-zinc-800" />
  ),
});

type TProps = TGlobalProps & {
  open?: boolean;
  onToggle: () => void;
  onClose: () => void;
};

export default function Header({ open, onToggle, onClose }: TProps) {
  return (
    <header className="gradient--indigo fixed left-0 right-0 top-0 z-10 grid h-16 w-full items-center lg:h-20">
      <Container>
        <div className="flex items-center justify-between">
          <div className="grid grid-cols-[40px_auto] items-center gap-4">
            <button
              aria-pressed={open}
              className="relative grid h-10 w-10 items-center justify-center text-white lg:hidden"
              onClick={onToggle}
              type="button"
            >
              <div className="relative grid h-8 w-8 items-center">
                <span className="absolute top-2.5 block h-[1px] w-full bg-white" />
                <span className="absolute bottom-2.5 block h-[1px] w-full bg-white" />
              </div>

              <span className="sr-only">Menu</span>
            </button>

            <NavLink
              href="/"
              onClick={onClose}
              className="inline-flex !px-0 py-0 text-2xl text-white hover:text-white dark:text-white hover:dark:text-white"
            >
              <span>Creative</span>
            </NavLink>
          </div>

          <NavBar open={open} className="hidden lg:block" onClose={onClose} />

          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
