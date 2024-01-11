import * as React from 'react';
import { Box, CardMedia, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { cloudflareImage } from '@/utility/images';

import { AboutUsLogo } from '../icons';

const useStyles = makeStyles((theme: any) => ({
  sectionHeading: {
    [theme.breakpoints.only('xs')]: {
      fontSize: '28px',
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
      fontSize: '60px',
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
      fontSize: '80px',
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
      fontSize: '80px',
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
      fontSize: '80px',
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

const AboutFounderSection: React.FC = () => {
  const classes = useStyles();

  return (
    <Box
      sx={{
        maxWidth: '1090px',
        width: '100%',
        padding: '0 20px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          width: '268px',
          height: '268px',
          backgroundColor: '#00C8C8',
          filter: 'blur(80px) opacity(0.5);',
          position: 'absolute',
          left: '50%',
          top: '30%',
          transform: 'translate(-30%, -50%)',
          zIndex: -100,
        }}
      />

      <Box
        sx={{
          width: '268px',
          height: '268px',
          backgroundColor: '#5D1DF1',
          filter: 'blur(80px) opacity(0.5);',
          position: 'absolute',
          right: 0,
          top: '30%',
          transform: 'translateY(-30%)',
          zIndex: -100,
        }}
      />

      {/* heading */}
      <Box
        sx={{
          maxWidth: '1043px',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          alignItems: 'center',
          marginBottom: '50px',
        }}
      >
        {/* title */}
        <Box
          sx={{
            flex: '1 1 auto',
            padding: '0 20px 0 0',
            position: 'relative',
          }}
        >
          <Typography
            className={classes.sectionHeading}
            sx={{
              marginBottom: '40px',
              display: 'inline-block',
            }}
          >
            Meet the founder
          </Typography>

          <Typography
            sx={{
              fontFamily: 'var(--font-family-montserrat)',
              fontWeight: 700,
              color: '#FFFFFF',
              fontSize: {
                xs: '18px',
                sm: '40px',
              },
              letterSpacing: 0,
            }}
          >
            WXLLANDER
          </Typography>
        </Box>

        {/* logo */}
        <Box sx={{ position: 'absolute', right: '15px', top: '0' }}>
          <AboutUsLogo />
        </Box>
      </Box>

      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* description 1 */}
        <Typography
          component="p"
          sx={{
            color: '#FFFFFF',
            fontFamily: 'var(--font-family-montserrat)',
            fontSize: 'var(--font-size-m2)',
            fontWeight: 400,
            fontStyle: 'normal',
            lineHeight: 2.4,
            marginBottom: '40px',
          }}
        >
          Hey there. My name is Jordan, I am the founder of WXLLSPACE. 👋
        </Typography>

        {/* description 2 */}
        <Typography
          component="p"
          sx={{
            color: '#FFFFFF',
            fontFamily: 'var(--font-family-montserrat)',
            fontSize: 'var(--font-size-m2)',
            fontWeight: 400,
            fontStyle: 'normal',
            lineHeight: 2.4,
            marginBottom: '40px',
          }}
        >
          WXLLSPACE exists because I want to support the all the talented street
          artists who are looking for opportunities to paint and increase their
          market value.
        </Typography>

        {/* description 3 */}
        <Typography
          sx={{
            color: '#FFFFFF',
            fontFamily: 'var(--font-family-montserrat)',
            fontSize: 'var(--font-size-m2)',
            fontWeight: 400,
            fontStyle: 'normal',
            lineHeight: 2.4,
            marginBottom: '70px',
          }}
        >
          I’ve been in real estate development for most of my career and have
          managed projects from blueprints to building. I’ve always been a
          creative and want to give back and help make it easier to commission
          murals across the globe.
        </Typography>

        {/* photo */}
        <CardMedia
          image={
            cloudflareImage(
              process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL +
                '/assets/about/wxllspace-founder.png'
            ) as string
          }
          sx={{
            width: '100%',
          }}
        />
      </Box>
    </Box>
  );
};

export default AboutFounderSection;
