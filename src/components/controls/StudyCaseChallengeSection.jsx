import React from 'react';
import { Box, Typography, CardMedia } from '@mui/material';
import { makeStyles } from '@mui/styles';
import LocationMapContainer from './LocationMapContainer';
import { LocationMarkerNoPhoto } from './LocationMarker';
import { cloudflareImage } from '@/utility/images';

const useStyles = makeStyles((theme) => ({
  sectionHeading: {
    [theme.breakpoints.only('xs')]: {
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
      fontSize: '40px',
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
      fontSize: '40px',
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

const locationData = (coordinates) => ({
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates,
      },
      properties: {
        title: 'Wall Location',
        description: 'Wall Location',
        image:
          'https://cdn.animaapp.com/projects/6183b51d6b5cbed22d564e6f/releases/61850ffff59ce59ffa02723a/img/rectangle-77@2x.png',
        entity: 'locationNoPhoto',
      },
    },
  ],
});

const StudyCaseChallengeSection = (props) => {
  const classes = useStyles();
  const {
    challengeDescription,
    outcomeDescription,
    developerDescription,
    developerThumbnail,
    longitude,
    latitude,
  } = props;

  return (
    <Box
      sx={{
        maxWidth: '1150px',
        width: '100%',
        position: 'relative',
        margin: '0 auto',
      }}
    >
      <Box
        sx={{
          width: '268px',
          height: '268px',
          backgroundColor: '#00C8C8',
          filter: 'blur(220px)',
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1,
        }}
      ></Box>

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
          flexWrap: 'nowrap',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* challenge */}
        <Box
          sx={{
            flex: '0 1 auto',
            maxWidth: {
              xs: '100%',
              md: '478px',
            },
            width: '100%',
            paddingBottom: {
              xs: '40px',
              md: '0',
            },
          }}
        >
          <Typography className={classes.sectionHeading}>
            The Challenge
          </Typography>

          <Typography
            component={'p'}
            sx={{
              fontFamily: 'var(--font-family-montserrat)',
              fontWeight: '400',
              color: 'var(--white)',
              fontSize: {
                xs: '14px',
                md: '16px',
              },
              lineHeight: {
                xs: '33.6px',
                md: '38.4px',
              },
            }}
          >
            {challengeDescription}
          </Typography>
        </Box>

        {/* arrow */}
        <Box
          sx={{
            maxWidth: '210px',
          }}
        >
          <CardMedia
            component="img"
            image={cloudflareImage(
              'https://cdn.animaapp.com/projects/6183b51d6b5cbed22d564e6f/releases/618fb703a708f1031491850f/img/vector-3@2x.svg'
            )}
            sx={{
              maxWidth: '210px',
              height: 'auto',
            }}
          />
        </Box>

        {/* outcome */}
        <Box
          sx={{
            flex: '0 1 auto',
            maxWidth: {
              xs: '100%',
              md: '478px',
            },
            width: '100%',
            paddingTop: {
              xs: '40px',
              md: '80px',
            },
          }}
        >
          <Typography className={classes.sectionHeading}>
            The Outcome
          </Typography>

          <Typography
            component={'p'}
            sx={{
              fontFamily: 'var(--font-family-montserrat)',
              fontWeight: '400',
              color: 'var(--white)',
              fontSize: {
                xs: '14px',
                md: '16px',
              },
              lineHeight: {
                xs: '33.6px',
                md: '38.4px',
              },
            }}
          >
            {outcomeDescription}
          </Typography>
        </Box>
      </Box>

      {/* map */}
      {longitude && latitude && (
        <Box
          sx={{
            wdith: '100%',
            marginTop: '30px',
          }}
        >
          <Box
            sx={{
              display: 'inline-block',
            }}
          >
            <Typography className={classes.sectionHeading}>Location</Typography>
          </Box>
          <LocationMapContainer
            longitude={longitude}
            latitude={latitude}
            width="100%"
            height="400px"
            isRounded={true}
            markerData={locationData([longitude, latitude])}
            pitch={0}
            zoom={14}
          />
        </Box>
      )}

      {/* developer */}
      <Box
        sx={{
          marginTop: '61.87px',
          maxWidth: '1150px',
          width: '100%',
          display: 'flex',
          flexDirection: {
            xs: 'column-reverse',
            md: 'row',
          },
          flexWrap: 'nowrap',
        }}
      >
        {/* content */}
        <Box
          sx={{
            maxWidth: {
              xs: '100%',
              md: developerThumbnail ? '607px' : '100%',
            },
            width: '100%',
            flex: '0 1 auto',
          }}
        >
          <Typography
            className={classes.sectionHeading}
            sx={{
              display: 'inline-block',
            }}
          >
            Developer
          </Typography>

          <Typography
            component={'p'}
            sx={{
              fontFamily: 'var(--font-family-montserrat)',
              fontWeight: '400',
              color: 'var(--white)',
              fontSize: {
                xs: '14px',
                md: '16px',
              },
              lineHeight: {
                xs: '33.6px',
                md: '38.4px',
              },
            }}
          >
            {developerDescription}
          </Typography>
        </Box>

        {/* developerThumbnail */}
        {developerThumbnail && (
          <Box
            sx={{
              maxWidth: {
                xs: '100%',
                md: '543px',
              },
              width: '100%',
              flex: '0 1 auto',
              paddingLeft: {
                md: '74px',
              },
              paddingBottom: {
                xs: '30px',
                md: 0,
              },
            }}
          >
            <CardMedia
              component="img"
              image={cloudflareImage(
                `${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/case-study/rectangle-119-2x.svg`
              )}
              sx={{
                width: '100%',
                height: '80.54px',
                marginBottom: '-75.54px',
                position: 'relative',
                filter: 'blur(15px)',
                zIndex: 2,
              }}
            />

            {/* thumbnail */}

            <CardMedia
              component="img"
              src={cloudflareImage(developerThumbnail)}
              sx={{
                width: '100%',
                borderRadius: '8px',
              }}
            />

            <CardMedia
              component="img"
              image={cloudflareImage(
                `${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/case-study/rectangle-118-1-2x.svg`
              )}
              sx={{
                width: '100%',
                height: '80.54px',
                marginTop: '-75.54px',
                position: 'relative',
                filter: 'blur(15px)',
                zIndex: 2,
              }}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default StudyCaseChallengeSection;
