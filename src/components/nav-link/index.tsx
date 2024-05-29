'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import { type ComponentProps } from 'react';

import clsx from 'clsx';

import type { AppPathnames } from '@/config';
import { Link } from '@/navigation';

export default function NavLink<Pathname extends AppPathnames>({
  href,
  className,
  ...rest
}: ComponentProps<typeof Link<Pathname>>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={clsx(
        'inline-block w-full py-1.5 transition-colors lg:w-auto lg:px-4 lg:text-gray-300',
        className,
        isActive
          ? 'text-black lg:text-white dark:text-white dark:lg:text-white'
          : 'text-gray-600 hover:text-black lg:hover:text-white dark:text-gray-300 dark:hover:text-white dark:lg:hover:text-white'
      )}
      href={href}
      {...rest}
    />
  );
}
