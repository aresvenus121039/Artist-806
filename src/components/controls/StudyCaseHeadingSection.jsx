import React from 'react';
import { Box, Typography, CardMedia } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { cloudflareImage } from '@/utility/images';

const useStyles = makeStyles((theme) => ({
  sectionHeading: {
    [theme.breakpoints.only('xs')]: {
      fontSize: '32px',
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
      textAlign: 'left',
      textTransform: 'capitalize',
    },
    [theme.breakpoints.only('md')]: {
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
      textAlign: 'left',
      textTransform: 'capitalize',
    },
    [theme.breakpoints.only('lg')]: {
      fontSize: '65px',
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
      textAlign: 'left',
      textTransform: 'capitalize',
    },
    [theme.breakpoints.only('xl')]: {
      fontSize: '65px',
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
      textAlign: 'left',
      textTransform: 'capitalize',
    },
  },
}));

const StudyCaseHeadingSection = (props) => {
  const {
    title,
    subtitle,
    backgroundImageSrc,
    organization1ImageSrc,
    organization2ImageSrc,
  } = props;
  const classes = useStyles();

  return (
    <Box
      sx={{
        backgroundImage: `url('${cloudflareImage(backgroundImageSrc)}')`,
        height: '100vh',
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        margin: '0 auto',
      }}
    >
      <CardMedia
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 2,
        }}
        component="img"
        image={cloudflareImage(
          'https://cdn.animaapp.com/projects/6183b51d6b5cbed22d564e6f/releases/618fab30a6d4b744c33eb00c/img/rectangle-63@1x.svg'
        )}
      />

      {/* blur */}
      <Box
        sx={{
          width: '268px',
          height: '268px',
          backgroundColor: '#00C8C8',
          filter: 'blur(100px)',
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1,
          display: {
            xs: 'none',
            sm: 'block',
          },
        }}
      ></Box>

      {/* content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          justifyContent: 'end',
        }}
      >
        <Box
          sx={{
            backdropFilter: {
              sm: 'blur(15px)',
            },
            maxWidth: {
              sm: '500px',
              md: '705px',
            },
            width: '100%',
            height: '100vh',
            backgroundColor: {
              sm: 'rgba(53, 53, 53, 0.36)',
            },
            position: 'relative',
            zIndex: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <Box
            sx={{
              maxWidth: '449px',
              width: '100%',
            }}
          >
            {/* subtitle */}
            <Typography
              sx={{
                fontFamily: 'var(--font-family-montserrat)',
                fontWeight: '700',
                color: 'var(--aqua-pearl)',
                fontSize: {
                  xs: '16px',
                  sm: '24px',
                },
                letterSpacing: 0,
                marginBottom: {
                  xs: '0',
                  sm: '10px',
                },
              }}
            >
              {subtitle}
            </Typography>

            {/* title */}
            <Typography className={classes.sectionHeading}>{title}</Typography>

            {/* logo */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  maxWidth: {
                    xs: '130px',
                    md: '180px',
                  },
                  paddingTop: '30px',
                  paddingRight: '30px',
                }}
              >
                <CardMedia
                  component="img"
                  image={cloudflareImage(organization1ImageSrc)}
                  sx={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </Box>

              <Box
                sx={{
                  maxWidth: {
                    xs: '130px',
                    md: '180px',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={cloudflareImage(organization2ImageSrc)}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    marginTop: '30px',
                    opacity: '0.35',
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StudyCaseHeadingSection;
