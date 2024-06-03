import { type SVGAttributes } from 'react';

type TProps = SVGAttributes<SVGElement>;

export default function TimesIcon({ ...rest }: TProps) {
  return (
    <svg
      width="46"
      height="35"
      viewBox="0 0 46 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <rect
        x="8.63965"
        y="1.38281"
        width="45"
        height="2"
        rx="1"
        transform="rotate(45 8.63965 1.38281)"
        fill="currentColor"
      />
      <rect
        x="7.2251"
        y="33.2031"
        width="45"
        height="2"
        rx="1"
        transform="rotate(-45 7.2251 33.2031)"
        fill="currentColor"
      />
    </svg>
  );
}
