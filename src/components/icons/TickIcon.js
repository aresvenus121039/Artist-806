import React from 'react';

const TickIcon = ({ props }) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13 0C5.8318 0 0 5.8318 0 13C0 20.1682 5.8318 26 13 26C20.1682 26 26 20.1682 26 13C26 5.8318 20.1682 0 13 0ZM18.0274 12.456L12.456 18.0274C12.0935 18.39 11.6182 18.5714 11.1429 18.5714C10.6676 18.5714 10.1922 18.3902 9.82973 18.0274L7.97259 16.1703C7.24731 15.445 7.24731 14.2692 7.97259 13.5439C8.69774 12.8186 9.87369 12.8186 10.599 13.5439L11.143 14.0878L15.4013 9.82961C16.1264 9.10433 17.3024 9.10433 18.0277 9.82961C18.7528 10.5549 18.7528 11.7307 18.0274 12.456V12.456Z"
        fill="url(#paint0_linear_Tick_Icon)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_Tick_Icon"
          x1="2.51783"
          y1="27.9995"
          x2="32.8376"
          y2="22.3513"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#5700FF" />
          <stop offset="1" stop-color="#64E1DC" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default TickIcon;
