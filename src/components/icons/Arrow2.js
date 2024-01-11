import * as React from 'react';

function SvgArrow2(props) {
  return (
    <svg
      width={69}
      height={51}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M68.35 11.61a1.5 1.5 0 00-.116-2.118L58.179.482a1.5 1.5 0 10-2.002 2.235l8.938 8.008-8.008 8.937a1.5 1.5 0 002.234 2.002L68.35 11.61zM3.559 50.185c7.22-14.252 14.325-23.197 23.916-28.875 9.624-5.698 21.94-8.222 39.84-9.203L67.15 9.11c-18.034.99-30.944 3.543-41.203 9.617C15.657 24.821 8.223 34.34.883 48.83l2.676 1.356z"
        fill="url(#arrow-2_svg__paint0_linear_201:606)"
      />
      <defs>
        <linearGradient
          id="arrow-2_svg__paint0_linear_201:606"
          x1={9.019}
          y1={46.58}
          x2={20.868}
          y2={-13.491}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5700FF" />
          <stop offset={1} stopColor="#64E1DC" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgArrow2;
