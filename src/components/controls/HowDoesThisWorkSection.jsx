import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from '@mui/styles';
import { Box, Container, Grid, Typography } from '@mui/material';
import { CircleStep } from './CircleStep';
import { Arrow2, Arrow3 } from './../icons/index';

const useStyles = makeStyles((theme) => ({
  stepContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '32px',
    padding: '2.75rem',
    display: 'flex',
    minHeight: '356.62px',
    height: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
  },
  sectionHeading: {
    [theme.breakpoints.only('xs')]: {
      fontSize: 'var(--font-size-xxxl)',
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
      fontSize: 'var(--font-size-xxxl)',
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
      textAlign: 'center',
      textTransform: 'capitalize',
    },
  },
  sectionTitle: {
    fontFamily: 'var(--font-family-montserrat)',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: '22px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#6ab3df',
  },
  stepTitle: {
    maxWidth: '251px',
    fontFamily: 'var(--font-family-montserrat)',
    fontWeight: 700,
    color: 'var(--iron)',
    fontSize: 'var(--font-size-xxl)',
    textAlign: 'center',
    letterSpacing: '-1px',
    lineHeight: '32px',
    marginTop: '1rem',
    textTransform: 'capitalize',
  },
  stepDescription: {
    maxWidth: '327.67px',
    fontFamily: 'var(--font-family-montserrat)',
    color: 'var(--iron)',
    fontSize: 'var(--font-size-m)',
    lineHeight: '28px',
    textAlign: 'center',
    marginTop: '1rem',
    textTransform: 'capitalize',
  },
}));

export const HowDoesThisWorkStepBox = (props) => {
  const { description, number, title } = props;
  const classes = useStyles();

  return (
    <Container
      className={classes.stepContainer}
      sx={{
        maxWidth: {
          xs: '100%',
          sm: '418px',
        },
        width: '100%',
        background:
          'linear-gradient(#121c36, #121c36) padding-box, linear-gradient(144deg, rgba(0,200,200,1) 0%, rgba(18,28,54,1) 34%, rgba(18,28,54,1) 70%, rgba(85,126,252,1) 100%) border-box',
        border: '1px solid transparent',
      }}
    >
      <Box>
        <CircleStep>{number}</CircleStep>
      </Box>
      <Box className={classes.stepTitle}>
        <h3>{title}</h3>
      </Box>
      <Box className={classes.stepDescription}>
        <p>{description}</p>
      </Box>
    </Container>
  );
};

function ProxyComponent() {
  const classes = useStyles();
  const theme = useTheme();
  const betweenSmAndXlScreen = useMediaQuery(theme.breakpoints.up('sm'));
  const extraSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const onlySm = useMediaQuery(theme.breakpoints.only('sm'));

  if (onlySm || extraSmallScreen) {
    return (
      <Container maxWidth="sm" className={classes.container}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={2}
          direction="column"
        >
          <Grid item sm={12}>
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
                How does this work?
              </Typography>
            </Box>
          </Grid>

          <Grid item sm={12}>
            <Box className={classes.sectionHeading}>
              save you time searching
            </Box>
          </Grid>

          <Grid item sm={12}>
            <Box>
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
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item sm={12}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: '1rem',
              }}
            >
              <Box>
                <HowDoesThisWorkStepBox
                  number={1}
                  description={
                    'Need an artist? Looking for a wall? We have the largest available collection of wall space, ready for artists like you to reserve.'
                  }
                  title={'search for what you are looking for'}
                />
              </Box>
            </Box>
          </Grid>

          <Grid item sm={12}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: '1rem',
              }}
            >
              <Box>
                <HowDoesThisWorkStepBox
                  number={2}
                  description={
                    'Your idea is what you’ll do in the space. Once you select a space, we handle presenting your idea to the property owner for you. You’ll then connect to discuss art direction.'
                  }
                  title={'send your idea'}
                />
              </Box>
            </Box>
          </Grid>

          <Grid item sm={12}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: '1rem',
              }}
            >
              <Box>
                <HowDoesThisWorkStepBox
                  number={3}
                  description={
                    'Once the agreement is in place and funds are transferred, begin planning your project as we watch it come to life.'
                  }
                  title={'Launch Fast'}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
  }
  if (betweenSmAndXlScreen) {
    return (
      <Container maxWidth="xl" className={classes.container}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={2}
          direction="column"
        >
          <Grid item lg={12}>
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
                How does this work?
              </Typography>
            </Box>
          </Grid>

          <Grid item lg={12}>
            <Box className={classes.sectionHeading}>
              save you time searching
            </Box>
          </Grid>

          <Grid item lg={12}>
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
                maxWidth: '793px',
              }}
            >
              Stop wasting your time whether you are looking for a wall or an
              artist, browse the latest new mural opportunities or the newest
              talent hitting the streets.
            </Typography>
          </Grid>

          <Grid item lg={12}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '1rem',
                }}
              >
                <Box
                  sx={{
                    paddingTop: '2rem',
                    alignSelf: 'flex-end',
                  }}
                >
                  <Arrow2 />
                </Box>

                <Box>
                  <HowDoesThisWorkStepBox
                    number={1}
                    description={
                      'Need an artist? Looking for a wall? We have the largest available collection of wall space, ready for artists like you to reserve.'
                    }
                    title={'search for what you are looking for'}
                  />
                </Box>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '1rem',
                }}
              >
                <Box>
                  <HowDoesThisWorkStepBox
                    number={2}
                    description={
                      'Your idea is what you’ll do in the space. Once you select a space, we handle presenting your idea to the property owner for you. You’ll then connect to discuss art direction.'
                    }
                    title={'send your idea'}
                  />
                </Box>
                <Box
                  sx={{
                    paddingTop: '1rem',
                    alignSelf: 'flex-end',
                  }}
                >
                  <Arrow3 />
                </Box>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '1rem',
                }}
              >
                <Box>
                  <Box
                    sx={{
                      paddingTop: '2rem',
                    }}
                  >
                    {/* this arrow is place in the layout on purpose so that we can have consistent baseline */}
                    <Arrow2
                      style={{
                        visibility: 'hidden',
                      }}
                    />
                  </Box>
                  <HowDoesThisWorkStepBox
                    number={3}
                    description={
                      'Once the agreement is in place and funds are transferred, begin planning your project as we watch it come to life.'
                    }
                    title={'Launch Fast'}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
  }

  return null;
}

export const HowDoesThisWorkSection = () => {
  return <ProxyComponent />;
};
