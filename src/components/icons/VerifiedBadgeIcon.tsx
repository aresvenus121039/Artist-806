import React, { FC } from 'react';

interface IconProps {
  width?: number;
  height?: number;
}

const Icon: FC<IconProps> = ({ width = 60, height = 60 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        borderRadius: '1000px',
        border: '2px solid #8461fd',
        backgroundColor: '#52409b',
      }}
    >
      <rect
        width="59.0309"
        height="59.0309"
        rx="29.5155"
        fill="white"
        fillOpacity="0.06"
      />
      <path
        d="M44.0343 21.134L39.7877 19.245L37.897 14.9967L33.2755 15.4793L29.5156 12.7527L25.7536 15.4793L21.1343 14.9967L19.2449 19.243L14.9967 21.134L15.4796 25.7555L12.7529 29.5154L15.4796 33.2774L14.9967 37.8967L19.2433 39.7858L21.1343 44.034L25.7557 43.5514L29.5156 46.278L33.2777 43.5514L37.897 44.034L39.786 39.7874L44.0343 37.8967L43.5514 33.2752L46.2783 29.5154L43.5514 25.7533L44.0343 21.134ZM26.1631 36.2204L21.4191 31.4765L23.0004 29.9009L26.1631 33.0578L35.645 23.5759L37.2263 25.1569L26.1631 36.2204Z"
        fill="#d6d5fb"
      />
      <defs>
        <filter
          id="filter0_b_88_28"
          x="-95.6459"
          y="-95.6459"
          width="250.323"
          height="250.323"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation="47.8229" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_88_28"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_88_28"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_88_28"
          x1="29.5156"
          y1="12.7527"
          x2="29.5156"
          y2="46.278"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#557EFC" />
          <stop offset="1" stopColor="#557EFC" stopOpacity="0.75" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Icon;
