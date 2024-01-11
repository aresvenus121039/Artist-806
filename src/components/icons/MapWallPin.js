import React from 'react';

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="65"
      fill="none"
      viewBox="0 0 25 65"
      {...props}
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="5.536"
        d="M12.621 15.112L12.621 61.389"
      ></path>
      <circle
        cx="12.316"
        cy="12.316"
        r="12.316"
        fill="url(#paint0_linear_229_52)"
      ></circle>
      <path
        stroke="#A576FF"
        strokeLinecap="round"
        strokeWidth="2.768"
        d="M4.309 10.763c.424-2.35 3.634-5.504 5.561-5.992"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_229_52"
          x1="9.632"
          x2="17.769"
          y1="1.384"
          y2="23.083"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.261" stopColor="#7E3AFF"></stop>
          <stop offset="1" stopColor="#5700FF"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Icon;
