import React from 'react';
import { Box } from '@mui/material';

import CreativesHeadingSection from '../../components/controls/CreativesHeadingSection';
import CreativesLevelingSection from '../../components/controls/CreativesLevelingSection';
import CreativesWhySection from '../../components/controls/CreativesWhySection';
import CreativesSearchSection from '../../components/controls/CreativesSearchSection';
import CreativesProposalSection from '../../components/controls/CreativesProposalSection';
import CreativesMuralsSection from '../../components/controls/CreativesMuralsSection';
import Head from 'next/head';

const Creatives = () => {
  return (
    <>
      <Head>
        <title>Creatives | WXLLSPACE</title>
        <meta name="title" content="Creatives | WXLLSPACE" />
        <meta
          name="description"
          content="The first marketplace connecting 
          real estate developers and artists. 
          Sign up now and get access to our network of creative talent from around the world."
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/meta/creatives-OG.png`}
        />
        <meta property="og:url" content="https://wxllspace.com/creatives" />
        <meta property="og:title" content="Creatives | WXLLSPACE" />
        <meta
          property="og:description"
          content="The first marketplace connecting 
          real estate developers and artists. 
          Sign up now and get access to our network of creative talent from around the world."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="\OGimages\Wall-Listing.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="wxllspace.com" />
        <meta property="twitter:title" content="Creatives | WXLLSPACE" />
        <meta
          property="twitter:description"
          content="The first marketplace connecting 
          real estate developers and artists. 
          Sign up now and get access to our network of creative talent from around the world."
        />
        <meta
          property="twitter:url"
          content="https://wxllspace.com/creatives"
        />
        <meta
          name="twitter:image"
          content={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/meta/creatives-OG.png`}
        />
      </Head>
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        <CreativesHeadingSection />
      </Box>

      <Box
        sx={{
          marginTop: '97px',
        }}
      >
        <CreativesLevelingSection />
      </Box>

      <Box
        sx={{
          marginTop: '120px',
        }}
      >
        <CreativesWhySection />
      </Box>

      <Box
        sx={{
          marginTop: '120px',
        }}
      >
        <CreativesSearchSection />
      </Box>

      <Box
        sx={{
          marginTop: '120px',
        }}
      >
        <CreativesProposalSection />
      </Box>

      <Box
        sx={{
          marginTop: '120px',
          marginBottom: '120px',
        }}
      >
        <CreativesMuralsSection />
      </Box>
    </>
  );
};

export default Creatives;
