import { type TChildren } from '@/types';

import './globals.css';

type TProps = TChildren;

export default function RootLayout({ children }: TProps) {
  return children;
}
