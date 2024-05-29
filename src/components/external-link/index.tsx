import Link from 'next/link';

import { type IChildren } from '@/types';

type IProps = IChildren & {
  href: string;
};

export default function ExternalLink({ href, children }: IProps) {
  return (
    <Link href={href} rel="noreferrer" target="_blank">
      {children}
    </Link>
  );
}
