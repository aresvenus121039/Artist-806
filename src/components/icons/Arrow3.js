import * as React from 'react';

function SvgArrow3(props) {
  return (
    <svg
      width={69}
      height={51}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M68.13 38.713a1.5 1.5 0 01-.117 2.118L57.959 49.84a1.5 1.5 0 01-2.002-2.235l8.937-8.008-8.008-8.937a1.5 1.5 0 012.234-2.002l9.01 10.055zM3.337.138c7.22 14.251 14.326 23.196 23.917 28.875 9.623 5.697 21.939 8.221 39.84 9.203l-.165 2.995c-18.035-.989-30.945-3.543-41.204-9.617-10.29-6.093-17.723-15.61-25.064-30.1L3.338.137z"
        fill="url(#arrow-3_svg__paint0_linear_201:607)"
      />
      <defs>
        <linearGradient
          id="arrow-3_svg__paint0_linear_201:607"
          x1={8.798}
          y1={3.742}
          x2={20.647}
          y2={63.813}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5700FF" />
          <stop offset={1} stopColor="#64E1DC" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgArrow3;
