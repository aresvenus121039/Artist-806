import * as React from 'react';

const StatusIcon = (props) => {
  return (
    <svg
      width={12}
      height={13}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx={6}
        cy={6.366}
        r={6}
        fill="url(#prefix__paint0_linear_2316:60)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear_2316:60"
          x1={6}
          y1={0.366}
          x2={6}
          y2={12.366}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#65F56B" />
          <stop offset={1} stopColor="#0A840F" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default StatusIcon;
