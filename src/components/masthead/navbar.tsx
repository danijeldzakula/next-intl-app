import { useTranslations } from 'next-intl';
import React from 'react';

import clsx from 'clsx';

import { type IGlobalProps } from '@/types';

import NavLink from '../nav-link';

type IProps = IGlobalProps & {
  open?: boolean;
  onClose?: () => void;
};

export default function NavBar({ className, onClose }: IProps) {
  const t = useTranslations('Navigation');

  return (
    <nav
      className={clsx(
        'bg-white py-6 lg:bg-transparent lg:py-0 landscape:py-12 lg:landscape:py-0 dark:bg-zinc-900 lg:dark:bg-transparent',
        className
      )}
    >
      <ul className="container flex flex-col gap-4 divide-y divide-zinc-300 lg:flex-row lg:gap-2 lg:divide-y-0 dark:divide-zinc-700 [&>li:not(:first-child)>a]:mt-4 [&>li:not(:first-child)>a]:lg:mt-0">
        <li>
          <NavLink onClick={onClose} className="" href="/">
            {t('home')}
          </NavLink>
        </li>

        <li>
          <NavLink onClick={onClose} href="/contact">
            {t('contact')}
          </NavLink>
        </li>

        <li>
          <NavLink onClick={onClose} href="/blog">
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
