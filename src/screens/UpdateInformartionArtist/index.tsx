import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import UpdateInfoArtistContainer from '../../components/controls/UpdateInfoArtistContainer';
import { Artist } from '@/types';
import { isAuthenticated } from '@/utility/auth';
import { useRouter } from 'next/router';

const UpdateInformationArtist = ({
  artistDetails,
}: {
  artistDetails: Artist;
}) => {
  const { isAuth, user } = isAuthenticated();
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    const checkAuth = async () => {
      if (!isAuth) {
        await router.push('/login');
      }
      if (user.slug !== slug) {
        await router.push('/login');
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
      <UpdateInfoArtistContainer artistDetails={artistDetails} />
    </Box>
  );
};

export default UpdateInformationArtist;
