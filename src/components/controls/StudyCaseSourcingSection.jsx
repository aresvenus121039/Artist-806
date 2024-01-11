import React from 'react';
import { Box, Typography, CardMedia } from '@mui/material';
import { makeStyles } from '@mui/styles';
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

const StudyCaseSourcingSection = (props) => {
  const classes = useStyles();
  const {
    sourcingDescription, // ['description 1', 'description 2', ...]
    sourcingThumbnail,
    solutionVideo,
    solutionImage,
  } = props;

  return (
    <Box
      sx={{
        padding: '0 20px',
      }}
    >
      {/* sourcing the artist */}
      <Box
        sx={{
          maxWidth: '1150px',
          width: '100%',
          display: 'flex',
          flexDirection: {
            xs: 'column-reverse',
            sm: 'row',
          },
          flexWrap: 'nowrap',
          margin: '0 auto',
        }}
      >
        {/* content */}
        <Box
          sx={{
            maxWidth: '702px',
            width: '100%',
            flex: '0 1 auto',
          }}
        >
          {/* sourcing */}
          <Box
            sx={{
              marginBottom: '86.54px',
            }}
          >
            {/* title */}
            <Typography
              className={classes.sectionHeading}
              sx={{
                display: 'inline-block',
              }}
            >
              Sourcing the artist
            </Typography>

            {sourcingDescription &&
              sourcingDescription.map((data, i) => (
                <Typography
                  component={'p'}
                  key={i}
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
                    marginBottom: '15px',
                  }}
                >
                  {data}
                </Typography>
              ))}
          </Box>
        </Box>

        {/* thumbnail */}
        <Box
          sx={{
            maxWidth: {
              xs: '100%',
              sm: '442px',
            },
            width: '100%',
            flex: '0 1 auto',
            paddingLeft: {
              sm: '82px',
            },
            paddingBottom: {
              xs: '30px',
              sm: 0,
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
              height: '258px',
              marginBottom: '-258px',
              position: 'relative',
              zIndex: 2,
            }}
          />

          {/* thumbnail */}
          <CardMedia
            component="img"
            image={cloudflareImage(sourcingThumbnail)}
            sx={{
              width: '100%',
              height: 'auto',
              position: 'relative',
              zIndex: 1,
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
              height: '311.54px',
              marginTop: '-311.54px',
              position: 'relative',
              zIndex: 2,
            }}
          />
        </Box>
      </Box>

      {/* solution */}
      <Box
        sx={{
          maxWidth: '1150px',
          width: '100%',
          margin: '0 auto',
        }}
      >
        {/* title */}
        <Box>
          <Typography
            className={classes.sectionHeading}
            sx={{
              display: 'inline-block',
              marginBottom: '15px',
            }}
          >
            Solution
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {solutionVideo && (
            <video
              controls
              style={{
                maxWidth: '751px',
                width: '100%',
                margin: '0 auto',
              }}
            >
              <source src={solutionVideo} type="video/mp4" />
            </video>
          )}

          {solutionImage && (
            <CardMedia
              component="img"
              src={cloudflareImage(solutionImage)}
              style={{
                maxWidth: '751px',
                width: '100%',
                margin: '0 auto',
              }}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default StudyCaseSourcingSection;
