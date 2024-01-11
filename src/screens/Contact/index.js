import React from 'react';
import { Box } from '@mui/material';
import ContactSection from '@/components/controls/ContactSection';
import Head from 'next/head';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us | WXLLSPACE</title>

        <meta name="title" content="Contact Us | WXLLSPACE" />
        <meta
          name="description"
          content="Want to connect with a creative for a mural? Are you an artist searching for walls? Reach out today and let's connect to get you connected."
        />
        <meta property="og:url" content="https://wxllspace.com/contact-us" />
        <meta property="og:title" content="Contact Us | WXLLSPACE" />
        <meta
          property="og:description"
          content="Want to connect with a creative for a mural? Are you an artist searching for walls? Reach out today and let's connect to get you connected."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/meta/contact-us-OG.png`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="wxllspace.com" />
        <meta property="twitter:title" content="Contact Us | WXLLSPACE" />
        <meta
          property="twitter:description"
          content="Want to connect with a creative for a mural? Are you an artist searching for walls? Reach out today and let's connect to get you connected."
        />
        <meta
          property="twitter:url"
          content="https://wxllspace.com/contact-us"
        />
        <meta
          name="twitter:image"
          content={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/meta/contact-us-OG.png`}
        />
      </Head>
      <Box
        sx={{
          padding: '254px 0 110px 0',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            width: '268px',
            height: '268px',
            backgroundColor: '#6AB3DF',
            filter: 'blur(200px)',
            position: 'absolute',
            left: 0,
            top: '20%',
            transform: 'translateY(-20%)',
            zIndex: 1,
          }}
        ></Box>

        <Box
          sx={{
            width: '268px',
            height: '268px',
            backgroundColor: '#00C8C8',
            filter: 'blur(200px)',
            position: 'absolute',
            right: 0,
            top: '20%',
            transform: 'translateY(-20%)',
            zIndex: 1,
          }}
        ></Box>

        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
          }}
        >
          <ContactSection />
        </Box>
      </Box>
    </>
  );
};

export default Contact;
