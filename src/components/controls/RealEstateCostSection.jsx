import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ImageSix } from '../svg/images';

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
      textAlign: 'left',
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
      textAlign: 'left',
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
      textAlign: 'left',
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
      textAlign: 'left',
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
      textAlign: 'left',
      textTransform: 'capitalize',
    },
  },
}));

const RealEstateCostSection = () => {
  const classes = useStyles();

  return (
    <Box
      sx={{
        maxWidth: '1314px',
        padding: '0 20px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
        flexWrap: 'nowrap',
        alignItems: 'center',
      }}
    >
      {/* content */}
      <Box
        sx={{
          flex: '0 1 auto',
          maxWidth: {
            xs: '100%',
            md: '629px',
          },
          width: '100%',
          padding: {
            xs: '0 0 38px',
            md: '0 38px 0 0',
          },
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
            marginBottom: '24px',
          }}
        >
          Cost effective, hassle free mural installation
        </Typography>

        {/* title */}
        <Typography
          className={classes.sectionHeading}
          sx={{
            maxWidth: {
              xs: '100%',
              md: '605px',
            },
            marginBottom: '24px',
          }}
        >
          What does it cost to put up a mural?
        </Typography>

        {/* description */}
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
            maxWidth: {
              xs: '100%',
              md: '542px',
            },
            width: '100%',
          }}
        >
          We are your one stop shop for all things mural. We take care of
          everything from start to finish, so you can focus on other aspects of
          your business. Our goal is to make sure that you have the best
          experience possible with us and we promise to do our very best to make
          sure that happens. So what are you waiting for? Get out there and
          start spreading some color!
        </Typography>
      </Box>

      {/* pricing */}
      <Box
        sx={{
          flex: '0 1 auto',
          maxWidth: {
            xs: '100%',
            md: '650px',
          },
          width: '100%',
        }}
      >
        {/* cost table with image */}
        <Box
          sx={{
            maxWidth: {
              xs: '100%',
              md: '649px',
            },
          }}
        >
          <ImageSix />
        </Box>
      </Box>
    </Box>
  );
};

export default RealEstateCostSection;
