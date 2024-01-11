import React from 'react';

function Icon(props) {
  const { height, width } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 60}
      height={height || 60}
      fill="none"
      viewBox={`0 0 60 60`}
    >
      <rect
        width="59.506"
        height="59.506"
        fill="#DCDCDC"
        fillOpacity="0.06"
        rx="29.753"
      ></rect>
      <g clipPath="url(#clip0_88_40)">
        <path
          fill="#5C6BC0"
          d="M48.022 34.31C45.506 44.4 35.286 50.54 25.195 48.023 15.108 45.508 8.966 35.288 11.483 25.198c2.515-10.09 12.734-16.232 22.823-13.717 10.09 2.516 16.23 12.737 13.715 22.828z"
        ></path>
        <path
          fill="#D5DAF4"
          d="M21.831 29.164l7.897-12.41 7.897 12.41-7.897 4.512-7.897-4.512z"
        ></path>
        <path
          fill="#A7B4F6"
          d="M29.728 16.755l7.897 12.409-7.897 4.512V16.754z"
        ></path>
        <path
          fill="#BDC4ED"
          d="M21.831 30.856l7.897 4.513 7.897-4.513-7.897 10.717-7.897-10.717z"
        ></path>
        <path
          fill="#EFF1FC"
          d="M29.728 35.369l7.897-4.513-7.897 10.717V35.37zm-7.897-6.205l7.897-3.384 7.897 3.384-7.897 4.512-7.897-4.512z"
        ></path>
        <path
          fill="#BFC9FF"
          d="M29.728 25.78l7.897 3.384-7.897 4.512V25.78z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_b_88_40"
          width="223.275"
          height="223.276"
          x="-81.885"
          y="-81.885"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feGaussianBlur
            in="BackgroundImage"
            stdDeviation="40.943"
          ></feGaussianBlur>
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_88_40"
          ></feComposite>
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_88_40"
            result="shape"
          ></feBlend>
        </filter>
        <clipPath id="clip0_88_40">
          <path
            fill="#fff"
            d="M0 0H37.67V37.67H0z"
            transform="translate(10.918 10.918)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icon;
