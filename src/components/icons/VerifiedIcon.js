import * as React from 'react';

function VerifiedIcon(props) {
  return (
    <svg
      width={26}
      height={27}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 26 27"
      {...props}
    >
      <path
        d="M13 .702c-7.168 0-13 5.832-13 13 0 7.169 5.832 13 13 13s13-5.831 13-13c0-7.168-5.832-13-13-13zm5.027 12.456l-5.571 5.572a1.851 1.851 0 01-1.313.544 1.85 1.85 0 01-1.313-.544l-1.857-1.857a1.857 1.857 0 112.626-2.627l.544.544 4.258-4.258a1.857 1.857 0 112.626 2.626z"
        fill="url(#verified-icon_svg__paint0_linear_201:711)"
      />
      <defs>
        <linearGradient
          id="verified-icon_svg__paint0_linear_201:711"
          x1={2.518}
          y1={28.702}
          x2={32.838}
          y2={23.054}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5700FF" />
          <stop offset={1} stopColor="#64E1DC" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default VerifiedIcon;
