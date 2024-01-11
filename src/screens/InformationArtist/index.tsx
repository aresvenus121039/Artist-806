import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import Head from 'next/head';
import SignUpArtistForm from '@/components/controls/SignUpArtistForm';
import { isAuthenticated } from '@/utility/auth';
import { useRouter } from 'next/router';
import { USER_TYPE } from '@/constants/userConstants';

const InformationArtist: React.FC = () => {
  const { isAuth, user } = isAuthenticated();
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      if (!isAuth || !user) {
        await router.push('/login');
      }

      if (user.role !== USER_TYPE.ARTIST || user.slug) {
        await router.push(`/artist/${user.slug}/edit`);
      }
    };
    checkAuth();
  }, []);
  return (
    <Box
      sx={{
        maxWidth: '900px',
        width: '100%',
        margin: '0 auto',
        padding: '160px 20px 140px 20px',
      }}
    >
      <Head>
        <title>Artist Sign Up | WXLLSPACE</title>

        <meta name="title" content="Artist Sign Up | WXLLSPACE" />
        {/* <meta
          name="description"
          content="Search for creatives or commissioned mural opportunities across the US."
        /> */}
        <meta
          property="og:url"
          content="https://wxllspace.com/artist-sign-up"
        />
        <meta property="og:title" content="Artist Sign Up | WXLLSPACE" />
        {/* <meta
          property="og:description"
          content="Search for creatives or commissioned mural opportunities across the US."
        /> */}
        <meta property="og:type" content="website" />
        {/* <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/meta/marketplace-OG.png`}
        /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="wxllspace.com" />
        <meta property="twitter:title" content="Artist Sign Up | WXLLSPACE" />
        {/* <meta
          property="twitter:description"
          content="Search for creatives or commissioned mural opportunities across the US."
        /> */}
        <meta
          property="twitter:url"
          content="https://wxllspace.com/artist-sign-up"
        />
        {/* <meta
          name="twitter:image"
          content={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/meta/marketplace-OG.png`}
        /> */}
      </Head>
      <Box
        sx={{
          padding: '40px',
          width: '100%',
          background:
            'linear-gradient(#121c36, #121c36) padding-box, linear-gradient(144deg, rgba(0,200,200,1) 0%, rgba(18,28,54,1) 34%, rgba(18,28,54,1) 70%, rgba(85,126,252,1) 100%) border-box',
          borderRadius: '32px',
          border: '1px solid transparent',
        }}
      >
        <SignUpArtistForm />
      </Box>
    </Box>
  );
};

export default InformationArtist;
