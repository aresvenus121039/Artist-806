import * as React from 'react';
import { Box } from '@mui/material';
import AboutFounderSection from '@/components/controls/AboutFounderSection';
import AboutSubcribeSection from '@/components/controls/AboutSubcribeSection';
import Head from 'next/head';

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>Our Mission | WXLLSPACE</title>

        <meta name="title" content="Our Mission | WXLLSPACE" />
        <meta
          name="description"
          content="Our mission is to support the emerging Urban Art ecosystem by connecting artists, brands, investors and influencers through a single online marketplace."
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/meta/about-us-OG.png`}
        />
        <meta property="og:url" content="https://wxllspace.com/about-us" />
        <meta property="og:title" content="Our Mission | WXLLSPACE" />
        <meta
          property="og:description"
          content="Our mission is to support the emerging Urban Art ecosystem by connecting artists, brands, investors and influencers through a single online marketplace."
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="wxllspace.com" />
        <meta property="twitter:title" content="Our Mission | WXLLSPACE" />
        <meta
          property="twitter:description"
          content="Our mission is to support the emerging Urban Art ecosystem by connecting artists, brands, investors and influencers through a single online marketplace."
        />
        <meta property="twitter:url" content="https://wxllspace.com/about-us" />
        <meta
          name="twitter:image"
          content={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/meta/about-us-OG.png`}
        />
      </Head>
      <Box
        sx={{
          paddingTop: '213.8px',
        }}
      >
        <AboutFounderSection />
      </Box>

      <Box
        sx={{
          marginTop: '80px',
          marginBottom: '80px',
        }}
      >
        <AboutSubcribeSection />
      </Box>
    </>
  );
};

export default About;
