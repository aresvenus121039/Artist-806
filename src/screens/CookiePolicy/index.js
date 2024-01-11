import React from 'react';
import { Box } from '@mui/material';
import Head from 'next/head';

const CookiePolicy = (props) => {
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
        <title>Cookies Policy | WXLLSPACE</title>

        <meta name="title" content="Cookies Policy | WXLLSPACE" />
        <meta
          name="description"
          content="We are committed to protecting your personal data and information we collect and your right to privacy."
        />
        <meta
          property="og:url"
          content="https://wxllspace.com/cookies-policy"
        />
        <meta property="og:title" content="Cookies Policy | WXLLSPACE" />
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
        <meta property="twitter:title" content="Cookies Policy | WXLLSPACE" />
        <meta
          property="twitter:description"
          content="We are committed to protecting your personal data and information we collect and your right to privacy."
        />
        <meta
          property="twitter:url"
          content="https://wxllspace.com/cookies-policy"
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
        data-id="4df5509c-4c6c-4a06-9ce8-1fc8b893533a"
        data-type="iframe"
      ></Box>
    </>
  );
};

export default CookiePolicy;
