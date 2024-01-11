import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Link from 'next/link';
import { SvgArtPrimoLogo, SvgSprayLogo } from '../icons';

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
      fontSize: '50px',
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
      fontSize: '55px',
      fontWeight: 900,
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      lineHeight: '90px',
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
      fontSize: '60px',
      fontWeight: 900,
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      lineHeight: '90px',
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
      fontSize: '60px',
      fontWeight: 900,
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      lineHeight: '90px',
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

const CreativesHeadingSection = () => {
  const classes = useStyles();

  return (
    <>
      <Box
        sx={{
          backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.062), #06102b), url('${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/creatives/creatives-header.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '865.67px',
          width: '100%',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          padding: {
            xs: '20px',
            md: '0',
          },
          overflow: 'hidden',
        }}
      >
        {/* background video */}
        <Box
          sx={{
            display: {
              xs: 'block',
              sm: 'none',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1,
            },
          }}
        >
          <video
            loading="lazy"
            autoPlay
            muted
            loop
            style={{
              height: '865.67px',
              minWidth: '100%',
            }}
          >
            <source
              src={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/creatives/creatives-heading-video.mp4`}
              type="video/mp4"
            />
          </video>
        </Box>

        {/* blur */}
        <Box
          sx={{
            width: '268px',
            height: '268px',
            backgroundColor: '#6AB3DF',
            filter: 'blur(80px)',
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 3,
          }}
        />

        {/* blur */}
        <Box
          sx={{
            width: '268px',
            height: '268px',
            backgroundColor: '#00C8C8',
            filter: 'blur(130px)',
            position: 'absolute',
            right: 0,
            top: '60%',
            transform: 'translateY(-60%)',
            zIndex: 3,
          }}
        />

        {/* content */}
        <Box
          sx={{
            maxWidth: '1016px',
            width: '100%',
            margin: 'auto auto',
            position: 'relative',
            zIndex: 4,
            textAlign: 'center',
          }}
        >
          {/* title */}
          <Typography className={classes.sectionHeading} sx={{}}>
            Connecting you to more commissioned murals
          </Typography>

          {/* subtitle */}
          <Typography
            component="p"
            sx={{
              fontFamily: 'var(--font-family-montserrat)',
              fontWeight: '600',
              color: 'var(--white)',
              fontSize: {
                xs: '18px',
                md: '24px',
              },
              lineHeight: '1.75',
              textAlign: 'center',
              marginBottom: '24px',
            }}
          >
            If you’re a creative, join 300 other artists who are expanding their
            reach
          </Typography>

          {/* button */}
          <Link
            to="/signup?form-type=sign-up"
            style={{ textDecoration: 'none' }}
          >
            <Button
              sx={{
                padding: '22.9px 30.4px',
                backgroundColor: '#a945f7',
                borderRadius: '1000px',
                boxShadow: '12px 12px 27px #a845f77d',
                color: 'var(--white)',
                fontFamily: 'var(--font-family-montserrat)',
                fontSize: '14px',
                fontWeight: '600',
                fontStyle: 'normal',
                lineHeight: '1.4',
                marginBottom: '24px',
                '&:hover': {
                  backgroundColor: '#a945f7',
                },
              }}
            >
              Create your landing page
            </Button>
          </Link>

          {/* bottom text */}
          <Typography
            component="p"
            sx={{
              fontFamily: 'var(--font-family-montserrat)',
              fontWeight: '600',
              color: 'var(--white)',
              fontSize: {
                xs: '14px',
                md: '16px',
              },
              lineHeight: '1.75',
              textAlign: 'center',
              marginBottom: '24px',
            }}
          >
            and start sending your proposals today!
          </Typography>
        </Box>
      </Box>

      {/* logo */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 6,
          marginTop: '-40px',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'var(--font-family-montserrat)',
            fontWeight: 700,
            color: 'var(--white)',
            fontSize: '20px',
            textAlign: 'center',
            letterSpacing: '6.4px',
            lineHeight: '1.75',
            padding: '0 20px',
          }}
        >
          Exclusive Paint Suppliers
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            padding: '10px 20px',
          }}
        >
          <Box>
            <SvgSprayLogo />
          </Box>
          <Box>
            <SvgArtPrimoLogo />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CreativesHeadingSection;
