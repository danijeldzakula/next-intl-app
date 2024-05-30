'use client';

import React, { type ReactNode } from 'react';

import clsx from 'clsx';

import useBack from '@/hooks/useBack';

type TProps = {
  className?: string;
  rest?: HTMLButtonElement;
  children?: ReactNode;
};

export default function BackButton({ className, ...rest }: TProps) {
  const { isPending, handleClose } = useBack();

  return (
    <button
      disabled={isPending}
      type="button"
      className={clsx(className)}
      onClick={handleClose}
      {...rest}
    />
  );
}
