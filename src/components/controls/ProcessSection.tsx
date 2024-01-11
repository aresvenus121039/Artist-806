import React from 'react';
import { Container, Box, Grid, Typography, CardMedia } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ProcessTextIcon from './ProcessTextIcon';
import { cloudflareImage } from '@/utility/images';

const useStyles = makeStyles((theme: any) => ({
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
      textAlign: 'left',
      textTransform: 'capitalize',
    },
    [theme.breakpoints.only('lg')]: {
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
      textAlign: 'left',
      textTransform: 'capitalize',
    },
    [theme.breakpoints.only('xl')]: {
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
      textAlign: 'left',
      textTransform: 'capitalize',
    },
  },
}));

interface ProcessSectionProps {
  processImageSrc: string;
  subtitle: string;
  title: string;
  description: string;
}

const ProcessSection: React.FC<ProcessSectionProps> = (props) => {
  const classes = useStyles();
  const { processImageSrc, subtitle, title, description } = props;

  return (
    <Container
      maxWidth="xl"
      sx={{
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          alignItems: 'center',
        }}
      >
        {/* thumbnail */}
        <Grid
          item
          xs={12}
          sx={{
            display: {
              xs: 'block',
              sm: 'none',
            },
          }}
        >
          <Box
            sx={{
              padding: {
                xs: '0 0 50px 0',
                sm: '0 0 0 0',
              },
            }}
          >
            <CardMedia
              loading="lazy"
              component="img"
              image={cloudflareImage(processImageSrc)}
              sx={{
                borderRadius: '20px',
                objectFit: 'cover',
                height: {
                  xs: '494px',
                  md: '632px',
                },
              }}
            />
          </Box>
        </Grid>

        {/* content */}
        <Grid item xs={12} sm={7} lg={8}>
          <Box
            sx={{
              padding: {
                xs: '0 0 0 0',
                sm: '0 30px 0 0',
                lg: '0 112px 0 0',
              },
            }}
          >
            {/* subtitle */}
            <Box
              sx={{
                fontFamily: 'var(--font-family-montserrat)',
                fontWeight: '700',
                color: 'var(--aqua-pearl)',
                fontSize: {
                  xs: '16px',
                  sm: '24px',
                },
                letterSpacing: 0,
              }}
            >
              {subtitle}
            </Box>

            {/* title */}
            <Box
              className={classes.sectionHeading}
              sx={{
                marginBottom: '10px',
              }}
            >
              {title}
            </Box>

            {/* description */}
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
                letterSpacing: '0',
                lineHeight: {
                  xs: '33.6px',
                  md: '38.4px',
                },
                marginBottom: {
                  xs: '40px',
                  md: '56.94px',
                },
                display: 'inline-block',
              }}
            >
              {description}
            </Typography>

            <Grid container spacing={{ xs: 3, sm: 6 }}>
              <Grid
                item
                xs={12}
                sm={6}
                md={5}
                sx={{
                  marginBottom: {
                    xs: '0',
                    md: '60px',
                  },
                }}
              >
                <ProcessTextIcon
                  iconImageSrc={cloudflareImage(
                    'https://anima-uploads.s3.amazonaws.com/projects/6183b51d6b5cbed22d564e6f/releases/6188834677e5a840e6864d1a/img/frame-3@2x.svg?v=1636337334455'
                  )}
                  title="Insurance"
                  description="Must have coverage that protects you from unforeseen circumstances and provides peace of mind knowing your assets are secure, no matter what happens!"
                />
              </Grid>

              <Grid
                item
                xs={12}
                sm={6}
                md={5}
                sx={{
                  marginBottom: {
                    xs: '20px',
                    sm: '0',
                  },
                }}
              >
                <ProcessTextIcon
                  iconImageSrc={cloudflareImage(
                    'https://anima-uploads.s3.amazonaws.com/projects/6183b51d6b5cbed22d564e6f/releases/6188834677e5a840e6864d1a/img/frame@2x.svg?v=1636337334453'
                  )}
                  title="Media"
                  description="Producing captivating, action-packed footage for all your social media content."
                />
              </Grid>
            </Grid>

            <Grid container spacing={{ xs: 3, sm: 6 }}>
              <Grid item xs={12} sm={6} md={5}>
                <ProcessTextIcon
                  iconImageSrc={cloudflareImage(
                    'https://anima-uploads.s3.amazonaws.com/projects/6183b51d6b5cbed22d564e6f/releases/6188834677e5a840e6864d1a/img/frame-2@2x.svg?v=1636337334455'
                  )}
                  title="Legal Documents"
                  description="Protecting your intellectual property and time. All smart contracts on the blockchain."
                />
              </Grid>

              <Grid item xs={12} sm={6} md={5}>
                <ProcessTextIcon
                  iconImageSrc={cloudflareImage(
                    'https://anima-uploads.s3.amazonaws.com/projects/6183b51d6b5cbed22d564e6f/releases/6188834677e5a840e6864d1a/img/frame-1@2x.svg?v=1636337334454'
                  )}
                  title="Time Saving"
                  description="RFQ’s are endless and time consuming. Fill out a proposal in 60 seconds or less."
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/* thumbnail */}
        <Grid
          item
          xs={12}
          sm={5}
          lg={4}
          sx={{
            display: {
              xs: 'none',
              sm: 'block',
            },
          }}
        >
          <Box
            sx={{
              padding: {
                xs: '50px 0 0 0',
                sm: '0 0 0 0',
              },
            }}
          >
            <CardMedia
              component="img"
              image={processImageSrc}
              sx={{
                borderRadius: '20px',
                objectFit: 'cover',
                height: {
                  xs: '494px',
                  sm: '562px',
                  md: '632px',
                },
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProcessSection;
