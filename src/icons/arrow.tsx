import { type SVGAttributes } from 'react';

type IProps = SVGAttributes<SVGElement>;

export default function ArrowIcon({ ...rest }: IProps) {
  return (
    <svg
      width="8"
      height="13"
      viewBox="0 0 8 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M1 1L7 6.5L1 12" stroke="currentColor" />
    </svg>
  );
}
