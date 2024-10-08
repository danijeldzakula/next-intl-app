'use client';

import { useTheme } from 'next-themes';
import { useCallback } from 'react';

import clsx from 'clsx';

import { type TGlobalProps } from '@/types';

type TProps = TGlobalProps;

export default function ThemeToggle({ className }: TProps) {
  const { theme, systemTheme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const checked = currentTheme === 'dark';

  const handleClick = useCallback(() => {
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
  }, [currentTheme, setTheme]);

  return (
    <div className={clsx('relative h-7 w-16', className)}>
      <label
        htmlFor="toggle-theme"
        className="absolute h-full w-full cursor-pointer rounded-[50px] bg-white shadow-md transition-colors duration-300 ease-in-out dark:bg-zinc-800"
      >
        <input
          name="themes"
          id="toggle-theme"
          aria-label={`Use ${currentTheme} Mode`}
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
