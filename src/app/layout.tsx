import { type IChildren } from '@/types';

import './globals.css';

type IProps = IChildren;

export default function RootLayout({ children }: IProps) {
  return children;
}
