'use client';

import { type ReactNode } from 'react';

import clsx from 'clsx';

import { useMastheadStore } from '@/store/useMastheadStore';

type TProps = {
  className?: string;
  rest?: HTMLButtonElement;
  children?: ReactNode;
};

export default function AuthButton({ className, ...rest }: TProps) {
  const { isAuthOpen, handleAuthOpen } = useMastheadStore();

  return (
    <button
      type="button"
      aria-pressed={isAuthOpen}
      onClick={handleAuthOpen}
      className={clsx('', className)}
      {...rest}
    />
  );
}
