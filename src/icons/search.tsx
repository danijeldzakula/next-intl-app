import { type SVGAttributes } from 'react';

type TProps = SVGAttributes<SVGElement> & {
  className?: string;
};

export default function SearchIcon({ className, ...rest }: TProps) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      <path
        d="M20.0215 20.8574L15.5355 16.3634M18.0215 10.3574C18.0215 12.6118 17.126 14.7738 15.5319 16.3678C13.9378 17.9619 11.7758 18.8574 9.52148 18.8574C7.26714 18.8574 5.10514 17.9619 3.51108 16.3678C1.91702 14.7738 1.02148 12.6118 1.02148 10.3574C1.02148 8.10308 1.91702 5.94107 3.51108 4.34701C5.10514 2.75296 7.26714 1.85742 9.52148 1.85742C11.7758 1.85742 13.9378 2.75296 15.5319 4.34701C17.126 5.94107 18.0215 8.10308 18.0215 10.3574V10.3574Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
