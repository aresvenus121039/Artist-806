import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Button, Box, Container, Typography } from '@mui/material';
import { ErrorBoundary } from 'react-error-boundary';
import Link from 'next/link';

import { FeaturedArtistCarousel } from './FeaturedArtistCarousel';

const useStyles = makeStyles((theme) => ({
  bannerHeading: {
    [theme.breakpoints.only('xs')]: {
      fontSize: '36px',
      fontWeight: 900,
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      letterSpacing: '-0.05em',
      backgroundImage:
        'linear-gradient(94.83deg, #FFFFFF 26.58%, #A984FF 44.93%, #64E1DC 54.77%, #6FC2FF 64.82%, #FFFFFF 78.91%) !important',
      backgroundSize: '100%',
      marginTop: '80px',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    [theme.breakpoints.only('sm')]: {
      fontWeight: 900,
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      letterSpacing: '-0.05em',
      backgroundImage:
        'linear-gradient(94.83deg, #FFFFFF 26.58%, #A984FF 44.93%, #64E1DC 54.77%, #6FC2FF 64.82%, #FFFFFF 78.91%) !important',
      backgroundSize: '100%',
      marginTop: '80px',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    [theme.breakpoints.only('md')]: {
      fontSize: '60px',
      fontWeight: 900,
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      lineHeight: '90px',
      letterSpacing: '-0.05em',
      backgroundImage:
        'linear-gradient(94.83deg, #FFFFFF 26.58%, #A984FF 44.93%, #64E1DC 54.77%, #6FC2FF 64.82%, #FFFFFF 78.91%) !important',
      backgroundSize: '100%',
      marginTop: '100px',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    [theme.breakpoints.only('lg')]: {
      fontSize: '60px',
      fontWeight: 900,
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      lineHeight: '90px',
      letterSpacing: '-0.05em',
      backgroundImage:
        'linear-gradient(94.83deg, #FFFFFF 26.58%, #A984FF 44.93%, #64E1DC 54.77%, #6FC2FF 64.82%, #FFFFFF 78.91%) !important',
      backgroundSize: '100%',
      marginTop: '108px',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      maxWidth: '1016px',
    },
    [theme.breakpoints.only('xl')]: {
      fontSize: '60px',
      fontWeight: 900,
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      lineHeight: '90px',
      letterSpacing: '-0.05em',
      backgroundImage:
        'linear-gradient(94.83deg, #FFFFFF 26.58%, #A984FF 44.93%, #64E1DC 54.77%, #6FC2FF 64.82%, #FFFFFF 78.91%) !important',
      backgroundSize: '100%',
      marginTop: '120px',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      maxWidth: '1016px',
    },
  },
  sectionTitle: {
    [theme.breakpoints.up('xs')]: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '12px',
      lineHeight: '1.5',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      color: 'var(--aqua-pearl)',
    },
    [theme.breakpoints.up('sm')]: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '18px',
      lineHeight: '1.5',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      color: 'var(--aqua-pearl)',
    },
    [theme.breakpoints.up('md')]: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '18px',
      lineHeight: '1.5',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      color: 'var(--aqua-pearl)',
    },
    [theme.breakpoints.up('lg')]: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '18px',
      lineHeight: '1.5',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      color: 'var(--aqua-pearl)',
    },
    [theme.breakpoints.up('xl')]: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '18px',
      lineHeight: '1.5',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      color: 'var(--aqua-pearl)',
    },
  },
  searchMoreButton: {
    height: '62px',
    display: 'flex',
    width: '168px',
    padding: '0 26px',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--white-52)',
    borderRadius: '100px',
    backdropFilter: 'blur(40px) brightness(100%)',
    webkitBackdropFilter: 'blur(40px) brightness(100%)',
    color: '#f8fafc',
    fontFamily: 'var(--font-family-montserrat)',
    fontWeight: 600,
    fontSize: 'var(--font-size-xl)',
    textAlign: 'center',
    letterSpacing: 0,
    lineHeight: '22px',
    whiteSpace: 'nowrap',
    textTransform: 'capitalize',
  },
}));

function ErrorFallback({ error, resetErrorBoundary }) {
  return null;
}

export const FeaturedArtistsSection = (props) => {
  const { loading, results } = props;
  const classes = useStyles();
  const [error, setHasError] = useState(null);

  const handleError = (err) => {
    setHasError(true);
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={handleError}>
      <Box sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            mx: 'auto',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Typography
            className={classes.bannerHeading}
            component="h2"
            variant="h2"
            align="center"
            sx={{
              marginBottom: {
                xs: 2,
              },
            }}
          >
            Putting up a mural?
          </Typography>
        </Box>
        <Box
          sx={{
            mx: 'auto',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Typography
            className={classes.sectionTitle}
            component="h3"
            variant="h3"
            align="center"
          >
            Can’t find an artist that’s available or within budget?
          </Typography>
        </Box>

        <Container
          maxWidth="md"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 5,
            background:
              'linear-gradient(#121c36, #121c36) padding-box, linear-gradient(144deg, rgba(0,200,200,1) 0%, rgba(18,28,54,1) 34%, rgba(18,28,54,1) 70%, rgba(85,126,252,1) 100%) border-box',
            borderRadius: '32px',
            border: '1px solid transparent',
          }}
        >
          <Box
            sx={{
              padding: {
                xs: '2rem',
                sm: '4rem',
              },
            }}
          >
            <Box
              sx={{
                mx: 'auto',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Typography
                component="h3"
                variant="h3"
                align="center"
                sx={{
                  fontFamily: 'Montserrat',
                  fontStyle: 'normal',
                  fontWeight: 800,
                  fontSize: {
                    xs: '18px',
                    md: '34px',
                  },
                  lineHeight: '41px',
                  display: 'flex',
                  alignItems: 'center',
                  textAlign: 'center',
                  color: '#d8d8d8',
                }}
              >
                Meet WXLLSPACE Artist Today!
              </Typography>
            </Box>
            <Box
              sx={{
                mx: 'auto',
                display: 'flex',
                justifyContent: 'center',
                maxWidth: '788px',
              }}
            >
              <Typography
                component="p"
                variant="p"
                align="center"
                sx={{
                  fontFamily: 'Montserrat',
                  fontStyle: 'normal',
                  fontWeight: 'normal',
                  fontSize: '14px',
                  lineHeight: '220%',
                  display: 'flex',
                  alignItems: 'center',
                  textAlign: 'center',
                  color: '#d8d8d8',
                }}
              >
                Long gone are the days where you search on Facebook and
                Instagram for an artist you love who you can finally get in
                touch with, only to find out they are booked for months or
                completely out of budget. With WXLLSPACE all of your mural needs
                are a few clicks away. It’s free to request quotes from
                established local artists within your community, as well as
                international artists who will come right to your home or
                office!
              </Typography>
            </Box>
          </Box>
        </Container>

        <Box
          sx={{
            marginTop: '5rem',
          }}
        >
          <FeaturedArtistCarousel
            loading={loading}
            artists={results?.artists}
          />
          <Box
            sx={{
              mx: 'auto',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button
              LinkComponent={Link}
              to="/artist-search"
              className={classes.searchMoreButton}
            >
              search more
            </Button>
          </Box>
        </Box>
      </Box>
    </ErrorBoundary>
  );
};
