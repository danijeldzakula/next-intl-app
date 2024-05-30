import clsx from 'clsx';

import { type TGlobalProps } from '@/types';

type TProps = TGlobalProps;

export function Layout({ className, children }: TProps) {
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

export function Container({ className, children }: TProps) {
  return <div className={clsx('container', className)}>{children}</div>;
}

export function Section({ className, children }: TProps) {
  return <section className={clsx(className)}>{children}</section>;
}

export function Article({ className, children }: TProps) {
  return <article className={clsx(className)}>{children}</article>;
}

export function Aside({ className, children }: TProps) {
  return <aside className={clsx(className)}>{children}</aside>;
}

export function Figure({ className, children }: TProps) {
  return <figure className={clsx(className)}>{children}</figure>;
}

export function SeoTitle({ className, children }: TProps) {
  return (
    <h1 className={clsx('text-3xl font-normal', className)}>{children}</h1>
  );
}
