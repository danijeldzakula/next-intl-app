import Link from 'next/link';

import { type TChildren } from '@/types';

type TProps = TChildren & {
  href: string;
};

export default function ExternalLink({ href, children }: TProps) {
  return (
    <Link href={href} rel="noreferrer" target="_blank">
      {children}
    </Link>
  );
}
