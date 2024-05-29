'use client';

import { useTheme } from 'next-themes';
import { useCallback } from 'react';

import clsx from 'clsx';

import { type IGlobalProps } from '@/types';

type IProps = IGlobalProps;

export default function ThemeToggle({ className }: IProps) {
  const { theme, systemTheme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const checked = currentTheme === 'dark';

  const handleClick = useCallback(() => {
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
  }, [currentTheme, setTheme]);

  return (
    <div className={clsx('relative h-7 w-16', className)}>
      <label className="absolute h-full w-full cursor-pointer rounded-[50px] bg-white shadow-md transition-colors duration-[0.4s] ease-in-out dark:bg-zinc-800">
        <input
          aria-checked={checked}
          checked={checked}
          onChange={() => handleClick()}
          type="checkbox"
          className="toggle__theme--checkbox absolute hidden"
        />
        <span className="toogle__theme--slider" />
      </label>
    </div>
  );
}
