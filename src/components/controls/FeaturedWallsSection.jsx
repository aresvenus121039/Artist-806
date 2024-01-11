import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Container, Typography } from '@mui/material';
import { ErrorBoundary } from 'react-error-boundary';

import { FeaturedWallsCarousel } from './FeaturedWallsCarousel';

const useStyles = makeStyles((theme) => ({
  sectionTitle: {
    [theme.breakpoints.up('xs')]: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '12px',
      lineHeight: '1.5',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      color: 'var(--aqua-pearl)',
      textTransform: 'capitalize',
    },
    [theme.breakpoints.up('sm')]: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '18px',
      lineHeight: '1.5',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      color: 'var(--aqua-pearl)',
      textTransform: 'capitalize',
    },
    [theme.breakpoints.up('md')]: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '18px',
      lineHeight: '1.5',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      color: 'var(--aqua-pearl)',
      textTransform: 'capitalize',
    },
    [theme.breakpoints.up('lg')]: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '18px',
      lineHeight: '1.5',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      color: 'var(--aqua-pearl)',
      textTransform: 'capitalize',
    },
    [theme.breakpoints.up('xl')]: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '18px',
      lineHeight: '1.5',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      color: 'var(--aqua-pearl)',
      textTransform: 'capitalize',
    },
  },
}));

function ErrorFallback({ error, resetErrorBoundary }) {
  return null;
}

export const FeaturedWallsSection = (props) => {
  const classes = useStyles();
  const [error, setHasError] = useState(null);

  const handleError = (err) => {
    setHasError(true);
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={handleError}>
      <Box sx={{ flexGrow: 1 }}>
        <Container maxWidth="788px">
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
              sx={{
                marginTop: '10rem',
              }}
            >
              featured walls
            </Typography>
          </Box>
        </Container>

        <Container maxWidth="xl">
          <Box
            sx={{
              mx: 'auto',
              display: 'flex',
              justifyContent: 'center',
              marginTop: '1rem',
            }}
          >
            <Typography
              component="h2"
              variant="h2"
              align="center"
              sx={{
                fontSize: '36px',
                fontWeight: 900,
                fontFamily: 'Montserrat',
                fontStyle: 'normal',
                letterSpacing: '-0.05em',
                backgroundImage:
                  'linear-gradient(94.83deg, #FFFFFF 26.58%, #A984FF 44.93%, #64E1DC 54.77%, #6FC2FF 64.82%, #FFFFFF 78.91%) !important',
                backgroundSize: '100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textTransform: 'uppercase',
              }}
            >
              find a wall to paint!
            </Typography>
          </Box>
        </Container>

        <Container maxWidth="xl">
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
                fontFamily: 'var(--font-family-montserrat)',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '14px',
                lineHeight: '31px',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                color: '#d8d8d8',
              }}
            >
              Stop wasting your time whether you are looking for a wall or an
              artist, browse the latest new mural opportunities or the newest
              talent hitting the streets.
            </Typography>
          </Box>
        </Container>

        <Box>
          <FeaturedWallsCarousel wxlls={props.wxlls} />
        </Box>
      </Box>
    </ErrorBoundary>
  );
};
