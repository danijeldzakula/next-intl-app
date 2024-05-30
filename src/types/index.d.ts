import { type ReactNode } from 'react';

export type TGlobalProps = {
  readonly className?: string;
  readonly children?: ReactNode;
};

export type TChildren = {
  readonly children?: ReactNode;
};

export type TParamsLocale = {
  readonly params: {
    readonly locale: string;
  };
};
