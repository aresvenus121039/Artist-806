import * as React from 'react';
import { useMediaQuery } from '@mui/material';

function SvgArtPrimoLogo(props) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <svg
      width={isMobile ? '130' : '244'}
      height="39"
      viewBox="0 0 244 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="244" height="39" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#Art" transform="scale(0.00409836 0.025641)" />
        </pattern>
        <image
          id="Art"
          width="244"
          height="39"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

export default SvgArtPrimoLogo;
