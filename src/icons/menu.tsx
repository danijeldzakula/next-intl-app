import { type SVGAttributes } from 'react';

type TProps = SVGAttributes<SVGElement>;

export default function MenuIcon({ ...rest }: TProps) {
  return (
    <svg
      width="45"
      height="43"
      viewBox="0 0 45 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <rect y="14.5" width="45" height="2" rx="1" fill="currentColor" />
      <rect y="26.5" width="45" height="2" rx="1" fill="currentColor" />
    </svg>
  );
}
