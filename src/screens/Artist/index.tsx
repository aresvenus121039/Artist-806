import { useEffect } from 'react';
import { Container, Grid, Skeleton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/system';
import _, { get } from 'lodash';

import {
  geocodeArtistLocation,
  getArtistDetails,
  getArtists,
} from '@/store/actions/artistActions';
import {
  ARTIST_GET_DETAILS_IDLE,
  ARTIST_GET_DETAILS_SUCCESS,
  ARTIST_GET_DETAILS_FAIL,
} from '@/constants/artistConstants';
import {
  selectArtistDetails,
  requestStatus,
} from '@/store/reducers/artistReducers';
import LocationSection from './../../components/controls/LocationSection';
import PortfolioSection from './../../components/controls/PortfolioSection';
import ArtistDetailsSection from './../../components/controls/ArtistDetailsSection';
import gtag from 'ga-gtag';
import React from 'react';
import { Artist } from '@/types';
import WhyWxllspaceSection from '@/components/controls/WhyWxllspace';
import ArtistSection from '@/components/controls/ArtistSection';

export const PageSkeleton = () => {
  return (
    <Box
      sx={{
        overflowX: 'hidden',
        position: 'relative',
      }}
    >
      {/* blur */}
      <Box
        sx={{
          width: '268px',
          height: '268px',
          backgroundColor: '#6AB3DF',
          filter: 'blur(60px) opacity(0.5);',
          position: 'absolute',
          left: 0,
          top: {
            xs: '190px',
            sm: '270px',
          },
          zIndex: -100,
        }}
      />

      {/* blur */}
      <Box
        sx={{
          width: '268px',
          height: '268px',
          backgroundColor: '#B14EFF',
          filter: 'blur(60px) opacity(0.5);',
          position: 'absolute',
          right: 0,
          top: {
            xs: '600px',
            sm: '140px',
          },
          zIndex: -100,
        }}
      />

      {/** skeleton */}
      <Container maxWidth="xl">
        <Box
          sx={{
            height: '100vh',
            paddingTop: '8rem',
            paddingBottom: '8rem',
            paddingLeft: {
              xs: '2rem',
              sm: '4rem',
              md: '8rem',
              lg: '8rem',
              xl: '8rem',
            },
            paddingRight: {
              xs: '2rem',
              sm: '4rem',
              md: '8rem',
              lg: '8rem',
              xl: '8rem',
            },
          }}
        >
          <Skeleton
            sx={{ bgcolor: 'grey.900' }}
            variant="text"
            width={'100wh'}
            height={'20px'}
          />
          <Skeleton
            sx={{ bgcolor: 'grey.900' }}
            variant="text"
            width={'100wh'}
            height={'20px'}
          />
          <Skeleton
            sx={{ bgcolor: 'grey.900' }}
            variant="text"
            width={'100wh'}
            height={'20px'}
          />
        </Box>
      </Container>
    </Box>
  );
};

type ArtistScreenProps = {
  artistDetails: {
    data: Artist;
    slug: string;
    error: string;
  };
};

export const ArtistScreen = (props: ArtistScreenProps) => {
  const { artistDetails } = props;

  const dispatch = useDispatch();

  const artTypes = artistDetails.data.art_types.map(String).join(',');

  useEffect(() => {
    gtag('event', 'artist_view_per_visit', {
      page_location: window.location.href,
      page_title: document.title,
    });
    dispatch(getArtists(artTypes));
  }, [artistDetails]);

  const otherArtists = useSelector(selectArtistDetails);

  // TODO check if artist city and state work.

  return (
    <Box
      sx={{
        overflowX: 'hidden',
        overflowY: 'hidden',
        position: 'relative',
        marginBottom: '30rem',
      }}
    >
      {/* blur */}
      <Box
        sx={{
          width: '268px',
          height: '268px',
          backgroundColor: '#6AB3DF',
          filter: 'blur(60px) opacity(0.5);',
          position: 'absolute',
          left: {
            xs: '-240px',
            sm: 0,
          },
          top: {
            xs: '0',
            sm: '270px',
          },
          zIndex: -100,
        }}
      />

      {/* blur */}
      <Box
        sx={{
          width: '268px',
          height: '268px',
          backgroundColor: '#B14EFF',
          filter: 'blur(60px) opacity(0.5);',
          position: 'absolute',
          right: {
            xs: '-240px',
            sm: 0,
          },
          top: {
            xs: '600px',
            sm: '140px',
          },
          zIndex: -100,
        }}
      />

      <Container
        maxWidth={false}
        sx={{
          position: 'relative',
          zIndex: 1,
          overflow: { xs: 'hidden', lg: 'visible' },
          maxWidth: {
            md: '93%',
            xs: '100%',
          },
        }}
      >
        <Grid container spacing={2}>
          {/* Artist Details Section */}
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <Box
              sx={{
                marginTop: {
                  lg: '280px',
                  md: '210px',
                  xs: '140px',
                },
              }}
            >
              <ArtistDetailsSection artist={artistDetails.data} />
            </Box>
          </Grid>

          {/* Artist Location Section */}
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <Box
              sx={{
                marginTop: {
                  lg: '120px',
                  md: '96px',
                  xs: '75px',
                },
              }}
            >
              <LocationSection artist={artistDetails.data} />
            </Box>
          </Grid>

          {/* Artist Portfolio Section */}
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <Box
              sx={{
                marginTop: {
                  lg: '200px',
                  md: '140px',
                  xs: '80px',
                },
              }}
            >
              <PortfolioSection
                gallery={artistDetails.data.gallery}
                artistName={artistDetails.data.artist_name}
              />
            </Box>
          </Grid>

          {/* Why WXLLSPACE Section */}
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <Box
              sx={{
                marginTop: {
                  lg: '400px',
                  md: '250px',
                  xs: '100px',
                },
                marginBottom: {
                  lg: '140px',
                  md: '120px',
                  xs: '100px',
                },
              }}
            >
              <WhyWxllspaceSection />
            </Box>
          </Grid>

          {/* Artists Section */}
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <Box
              sx={{
                marginTop: {
                  lg: '200px',
                  md: '140px',
                  xs: '80px',
                },
              }}
            >
              <ArtistSection gallery={otherArtists.others} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const ConnectedArtistScreen = (props: any) => {
  const { artistDetails } = props;

  const dispatch = useDispatch();

  geocodeArtistLocation(artistDetails.data.address)
    .then((result) => {
      const payload = {
        ...artistDetails.data,
        ...{
          address: {
            ...artistDetails.data.address,
            ...{ longAndLat: get(result, 'features[0].center') },
          },
        },
      };

      dispatch({
        type: ARTIST_GET_DETAILS_SUCCESS,
        payload,
      });
    })
    .catch((err) => {
      console.log(err);
    });

  return <ArtistScreen artistDetails={artistDetails} />;
};

export default ConnectedArtistScreen;
