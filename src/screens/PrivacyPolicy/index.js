import React from 'react';
import { Box } from '@mui/material';
import Head from 'next/head';

const PrivacyPolicy = (props) => {
  React.useEffect(() => {
    if (window && document) {
      const script = document.createElement('script');
      const body = document.getElementsByTagName('body')[0];
      script.src = 'https://app.termly.io/embed-policy.min.js';
      body.appendChild(script);
      script.addEventListener('load', () => {});
    }
  }, []);

  return (
    <>
      <Head>
        <title>Privacy Policy | WXLLSPACE</title>

        <meta name="title" content="Privacy Policy | WXLLSPACE" />
        <meta
          name="description"
          content="We are committed to protecting your personal data and information we collect and your right to privacy."
        />
        <meta
          property="og:url"
          content="https://wxllspace.com/privacy-policy"
        />
        <meta property="og:title" content="Privacy Policy | WXLLSPACE" />
        <meta
          property="og:description"
          content="We are committed to protecting your personal data and information we collect and your right to privacy."
        />
        <meta property="og:type" content="website" />
        {/* <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/meta/home-OG.png`}
        /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="wxllspace.com" />
        <meta property="twitter:title" content="Privacy Policy | WXLLSPACE" />
        <meta
          property="twitter:description"
          content="We are committed to protecting your personal data and information we collect and your right to privacy."
        />
        <meta
          property="twitter:url"
          content="https://wxllspace.com/privacy-policy"
        />
        {/* <meta
          name="twitter:image"
          content={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/meta/home-OG.png`}
        /> */}
      </Head>

      <Box
        sx={{
          maxWidth: '1150px',
          width: '100%',
          color: '#FFF',
          mx: 'auto',
          pt: '120px',
          px: '20px',
        }}
        name="termly-embed"
        data-id="8f82c96e-0a5e-46be-8142-64c6830ff219"
        data-type="iframe"
      ></Box>
    </>
  );
};

export default PrivacyPolicy;
