import clsx from 'clsx';

import { type IGlobalProps } from '@/types';

type IProps = IGlobalProps;

export function Layout({ className, children }: IProps) {
  return (
    <main
      className={clsx(
        'relative [&>section]:pt-20 last:[&>section]:pb-20',
        className
      )}
    >
      {children}
    </main>
  );
}

export function Container({ className, children }: IProps) {
  return <div className={clsx('container', className)}>{children}</div>;
}

export function Section({ className, children }: IProps) {
  return <section className={clsx(className)}>{children}</section>;
}

export function Article({ className, children }: IProps) {
  return <article className={clsx(className)}>{children}</article>;
}

export function Aside({ className, children }: IProps) {
  return <aside className={clsx(className)}>{children}</aside>;
}

export function Figure({ className, children }: IProps) {
  return <figure className={clsx(className)}>{children}</figure>;
}

export function SeoTitle({ className, children }: IProps) {
  return (
    <h1 className={clsx('text-3xl font-normal', className)}>{children}</h1>
  );
}
