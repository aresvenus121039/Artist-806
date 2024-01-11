import React from 'react';
import { Box } from '@mui/material';

import RealEstateHeadingSection from '@/components/controls/RealEstateHeadingSection';
import RealEstateWhySection from '@/components/controls/RealEstateWhySection';
import RealEstateWallSection from '@/components/controls/RealEstateWallSection';
import RealEstateCanvasSection from '@/components/controls/RealEstateCanvasSection';
import RealEstateCostSection from '@/components/controls/RealEstateCostSection';
import RealEstateAnalyticsSection from '@/components/controls/RealEstateAnalyticsSection';
import RealEstateServiceSection from '@/components/controls/RealEstateServiceSection';
import RealEstateVandalismSection from '@/components/controls/RealEstateVandalismSection';
import { Helmet } from 'react-helmet';

const RealEstate = () => {
  return (
    <>
      <Helmet>
        <title>Real Estate | WXLLSPACE</title>

        <meta name="title" content="Real Estate | WXLLSPACE" />
        <meta
          name="description"
          content="Connect with Creatives for Murals & Street Art in 2021."
        />
        <meta property="og:url" content="https://wxllspace.com/real-estate" />
        <meta property="og:title" content="Real Estate | WXLLSPACE" />
        <meta
          property="og:description"
          content="Connect with Creatives for Murals & Street Art in 2021."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/meta/real-estate-OG.png`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="wxllspace.com" />
        <meta property="twitter:title" content="Real Estate | WXLLSPACE" />
        <meta
          property="twitter:description"
          content="Connect with Creatives for Murals & Street Art in 2021."
        />
        <meta
          property="twitter:url"
          content="https://wxllspace.com/real-estate"
        />
        <meta
          name="twitter:image"
          content={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/meta/real-estate-OG.png`}
        />
      </Helmet>
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          overflowX: 'hidden',
        }}
      >
        <RealEstateHeadingSection />
      </Box>

      <Box
        sx={{
          marginTop: '90px',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            width: '268px',
            height: '268px',
            backgroundColor: '#5D1DF1',
            filter: 'blur(240px)',
            position: 'absolute',
            left: '60%',
            top: '-100px',
            zIndex: 1,
            display: {
              xs: 'none',
              sm: 'block',
            },
          }}
        />
        <RealEstateWhySection />
      </Box>

      <Box
        sx={{
          marginTop: '160px',
          overflowX: 'hidden',
        }}
      >
        <RealEstateWallSection />
      </Box>

      <Box
        sx={{
          marginTop: '160px',
          overflowX: 'hidden',
        }}
      >
        <RealEstateCanvasSection />
      </Box>

      <Box
        sx={{
          marginTop: '160px',
          overflowX: 'hidden',
        }}
      >
        <RealEstateCostSection />
      </Box>

      <Box
        sx={{
          marginTop: '160px',
          overflowX: 'hidden',
        }}
      >
        <RealEstateAnalyticsSection />
      </Box>

      <Box
        sx={{
          marginTop: '120px',
          overflowX: 'hidden',
        }}
      >
        <RealEstateServiceSection />
      </Box>

      <Box
        sx={{
          marginTop: '113px',
          marginBottom: '113px',
          overflowX: 'hidden',
        }}
      >
        <RealEstateVandalismSection />
      </Box>
    </>
  );
};

export default RealEstate;
