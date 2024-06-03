'use client';

import { useTranslations } from 'next-intl';
import React, { useCallback, useEffect } from 'react';

import clsx from 'clsx';

import TimesIcon from '@/icons/times';
import { useMastheadStore } from '@/store/useMastheadStore';
import { type TGlobalProps } from '@/types';

import NavLink from '../nav-link';

type TProps = TGlobalProps & {
  hasMobile?: boolean;
};

export default function NavBar({ hasMobile = false, className }: TProps) {
  const t = useTranslations('Navigation');
  const { isNavbarOpen, handleNavbarClose } = useMastheadStore();

  const handleRouterClose = useCallback(() => {
    setTimeout(() => {
      handleNavbarClose();
    }, 400);
  }, [handleNavbarClose]);

  const handleEscape = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleNavbarClose();
      }
    },
    [handleNavbarClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleEscape, false);

    return () => {
      document.removeEventListener('keydown', handleEscape, false);
    };
  }, [handleEscape]);

  return (
    <nav className={clsx(className)}>
      {hasMobile && (
        <div className="gradient--indigo flex h-16 items-center justify-between px-4">
          <NavLink
            href="/"
            onClick={handleRouterClose}
            className="inline-flex w-max !px-0 py-0 text-2xl text-white"
          >
            <span>Creative</span>
          </NavLink>

          <button
            type="button"
            aria-pressed={!isNavbarOpen}
            className="group relative p-2 text-white"
            onClick={handleNavbarClose}
          >
            <TimesIcon
              width={22}
              height={22}
              className="transition-transform group-hover:rotate-90"
            />
            <span className="sr-only">Close</span>
          </button>
        </div>
      )}

      <ul className="container flex h-[calc(100svh_-_4rem)] content-start items-start gap-4 border-r lg:h-auto lg:border-0 [&>li>a]:text-[17px] [&>li>a]:font-medium">
        <li>
          <NavLink href="/" onClick={handleRouterClose}>
            {t('home')}
          </NavLink>
        </li>
        <li>
          <NavLink href="/contact" onClick={handleRouterClose}>
            {t('contact')}
          </NavLink>
        </li>
        <li>
          <NavLink href="/blog" onClick={handleRouterClose}>
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
