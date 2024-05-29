import { type ReactNode } from 'react';

export type IGlobalProps = {
  readonly className?: string;
  readonly children?: ReactNode;
};

export type IChildren = {
  readonly children?: ReactNode;
};

export type IParamsLocale = {
  readonly params: {
    readonly locale: string;
  };
};
