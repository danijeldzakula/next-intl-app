'use client';

import React, { type ReactNode } from 'react';

import clsx from 'clsx';

import useBack from '@/hooks/useBack';

type IProps = {
  className?: string;
  rest?: HTMLButtonElement;
  children?: ReactNode;
};

export default function BackButton({ className, ...rest }: IProps) {
  const { handleClose } = useBack();

  return (
    <button
      type="button"
      className={clsx(className)}
      onClick={handleClose}
      {...rest}
    />
  );
}
