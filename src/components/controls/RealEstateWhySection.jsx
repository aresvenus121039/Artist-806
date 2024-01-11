import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  sectionHeading: {
    [theme.breakpoints.only('xs')]: {
      fontSize: '34px',
      fontWeight: 900,
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      letterSpacing: '-0.05em',
      backgroundImage:
        'linear-gradient(94.83deg, #FFFFFF 26.58%, #A984FF 44.93%, #64E1DC 54.77%, #6FC2FF 64.82%, #FFFFFF 78.91%) !important',
      backgroundSize: '100%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'center',
      textTransform: 'capitalize',
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: '40px',
      fontWeight: 900,
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      letterSpacing: '-0.05em',
      backgroundImage:
        'linear-gradient(94.83deg, #FFFFFF 26.58%, #A984FF 44.93%, #64E1DC 54.77%, #6FC2FF 64.82%, #FFFFFF 78.91%) !important',
      backgroundSize: '100%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'center',
      textTransform: 'capitalize',
    },
    [theme.breakpoints.only('md')]: {
      fontSize: '40px',
      fontWeight: 900,
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      lineHeight: '1.6',
      letterSpacing: '-0.05em',
      backgroundImage:
        'linear-gradient(94.83deg, #FFFFFF 26.58%, #A984FF 44.93%, #64E1DC 54.77%, #6FC2FF 64.82%, #FFFFFF 78.91%) !important',
      backgroundSize: '100%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'center',
      textTransform: 'capitalize',
    },
    [theme.breakpoints.only('lg')]: {
      fontSize: '40px',
      fontWeight: 900,
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      lineHeight: '1.6',
      letterSpacing: '-0.05em',
      backgroundImage:
        'linear-gradient(94.83deg, #FFFFFF 26.58%, #A984FF 44.93%, #64E1DC 54.77%, #6FC2FF 64.82%, #FFFFFF 78.91%) !important',
      backgroundSize: '100%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'center',
      textTransform: 'capitalize',
    },
    [theme.breakpoints.only('xl')]: {
      fontSize: '40px',
      fontWeight: 900,
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      lineHeight: '1.6',
      letterSpacing: '-0.05em',
      backgroundImage:
        'linear-gradient(94.83deg, #FFFFFF 26.58%, #A984FF 44.93%, #64E1DC 54.77%, #6FC2FF 64.82%, #FFFFFF 78.91%) !important',
      backgroundSize: '100%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'center',
      textTransform: 'capitalize',
    },
  },
}));

const RealEstateWhySection = () => {
  const classes = useStyles();

  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <Box
        sx={{
          maxWidth: '672px',
          width: '100%',
          padding: '0 20px',
          margin: '0 auto',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          {/* subtitle */}
          <Typography
            sx={{
              fontFamily: 'var(--font-family-montserrat)',
              lineHeight: '1.2',
              fontSize: '24px',
              fontWeight: '700',
              letterSpacing: 0,
              color: '#6AB3DF',
              marginBottom: '16px',
              textAlign: 'center',
            }}
          >
            Why WXLLSPACE?
          </Typography>

          {/* title */}
          <Typography
            className={classes.sectionHeading}
            sx={{
              marginBottom: '23px',
            }}
          >
            Create & Innovative
          </Typography>

          {/* description 1 */}
          <Typography
            sx={{
              fontFamily: 'var(--font-family-montserrat)',
              fontWeight: '400',
              color: 'var(--white)',
              fontSize: {
                xs: '14px',
                md: '16px',
              },
              lineHeight: '2.4',
              marginBottom: '35px',
              textAlign: 'center',
            }}
          >
            Turn your once “marginal spaces” into creative art installations
            with our modernized and streamlined process.
          </Typography>

          {/* description 2 */}
          <Typography
            sx={{
              fontFamily: 'var(--font-family-montserrat)',
              fontWeight: '400',
              color: 'var(--white)',
              fontSize: {
                xs: '14px',
                md: '16px',
              },
              lineHeight: '2.4',
              textAlign: 'center',
            }}
          >
            WXLLSPACE is on a mission to help real estate owners create a sense
            of beauty and bring street art to communities in a way that captures
            the eye, uplifts the spirits, and turns blight into bright.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default RealEstateWhySection;
