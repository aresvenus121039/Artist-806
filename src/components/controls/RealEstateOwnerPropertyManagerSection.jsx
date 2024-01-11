import React from 'react';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from '@mui/styles';
import { Box, Container, Grid, Typography } from '@mui/material';
import TickIcon from '../icons/TickIcon';
import { VerifyIcon } from '../icons';

const useStyles = makeStyles((theme) => ({
  container: {},
  stepContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '32px',
    padding: '2.75rem',
    display: 'flex',
    maxWidth: '418px',
    minHeight: '356.62px',
    height: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
  },
  listDescription: {
    [theme.breakpoints.only('xs')]: {
      fontFamily: 'var(--font-family-montserrat)',
      fontSize: '12px',
      lineHeight: '29px',
    },
    [theme.breakpoints.only('sm')]: {
      fontFamily: 'var(--font-family-montserrat)',
      fontSize: '12px',
      lineHeight: '29px',
    },
    [theme.breakpoints.up('sm')]: {
      fontFamily: 'var(--font-family-montserrat)',
      fontSize: '14px',
      lineHeight: '31px',
    },
  },
  lead: {
    [theme.breakpoints.only('xs')]: {
      fontSize: '14px',
      fontWeight: 700,
      fontStyle: 'bold',
      fontFamily: 'var(--font-family-montserrat)',
      lineHeight: '31px',
      color: '#d8d8d8',
      marginBottom: '0.5rem',
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: '14px',
      fontWeight: 700,
      fontStyle: 'bold',
      fontFamily: 'var(--font-family-montserrat)',
      lineHeight: '31px',
      color: '#d8d8d8',
      marginBottom: '0.5rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '18px',
      fontWeight: 700,
      fontStyle: 'bold',
      fontFamily: 'var(--font-family-montserrat)',
      lineHeight: '22px',
      color: '#d8d8d8',
      marginBottom: '0.5rem',
    },
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
      textAlign: 'left',
      textTransform: 'capitalize',
      lineHeight: '1.5',
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
      textAlign: 'left',
      textTransform: 'capitalize',
      lineHeight: '1.6',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '827.86px',
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
  sectionTitle: {
    [theme.breakpoints.only('xs')]: {
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 'var(--font-size-s2)',
      lineHeight: '22px',
      textAlign: 'left',
      color: '#6ab3df',
    },
    [theme.breakpoints.only('sm')]: {
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 'var(--font-size-s2)',
      lineHeight: '22px',
      textAlign: 'center',
      color: '#6ab3df',
    },
    [theme.breakpoints.up('sm')]: {
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 'var(--font-size-xl)',
      lineHeight: '21.94px',
      textAlign: 'left',
      color: '#6ab3df',
    },
  },
}));

function ProxyComponent() {
  const classes = useStyles();
  const theme = useTheme();
  const betweenSmAndXlScreen = useMediaQuery(theme.breakpoints.up('sm'));
  const extraSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const onlySm = useMediaQuery(theme.breakpoints.only('sm'));

  if (extraSmallScreen || onlySm) {
    return (
      <Container>
        <Grid container justifyContent="center" spacing={2} direction="column">
          <Grid item xs={12}>
            <Typography
              className={classes.sectionTitle}
              component="h3"
              variant="h3"
            >
              Real Estate Owners & Property Managers
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Box className={classes.sectionHeading}>
              You’re safe with our system, artists, and processes. We guarantee
              it.
            </Box>
          </Grid>

          <Grid item xs={12}>
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
                  textAlign: 'left',
                  color: '#d8d8d8',
                }}
              >
                You get what you pay for. And we can prove it. We have created
                the system, vetted the artists, and all you need to do is pick
                your wall. Leave the rest to us.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: '1rem',
              }}
            >
              <Box>
                <TickIcon />
              </Box>

              <Box
                sx={{
                  marginLeft: '0.5rem',
                }}
              >
                <Typography className={classes.lead}>
                  All agreements are smart contracts on the blockchain
                </Typography>

                <Typography className={classes.listDescription}>
                  Smart contracts on blockchain means that any stipulations
                  required to satisfy your wishes must be met before the task is
                  considered "complete". Which means your money is safe until
                  the job’s done.
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: '1rem',
              }}
            >
              <Box>
                <TickIcon />
              </Box>

              <Box
                sx={{
                  marginLeft: '0.5rem',
                }}
              >
                <Typography className={classes.lead}>
                  Insurance & Legalities
                </Typography>

                <Typography className={classes.listDescription}>
                  We take care of all legal agreements, local permitting,
                  liability insurance, artist safety requirements, work site
                  scaffolding and lifts, wall prep, etc. Permission, research
                  and due diligence for a fast and easy user experience.
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: '1rem',
              }}
            >
              <Box>
                <TickIcon />
              </Box>

              <Box
                sx={{
                  marginLeft: '0.5rem',
                }}
              >
                <Typography className={classes.lead}>
                  Easy setup, vetted artists, and a smooth, managed process{' '}
                </Typography>

                <Typography className={classes.listDescription}>
                  We take care of all legal agreements, local permitting,
                  liability insurance, artist safety requirements, work site
                  scaffolding and lifts, wall prep, etc. Permission, research
                  and due diligence for a fast and easy user experience.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
  }
  if (betweenSmAndXlScreen) {
    return (
      <Container maxWidth="xl">
        <Grid container spacing={2} direction="row">
          <Grid item md={12} xl={12} lg={12}>
            <Typography
              className={classes.sectionTitle}
              component="h3"
              variant="h3"
            >
              Real Estate Owners & Property Managers
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2} direction="row">
          <Grid item md={8} lg={8} xl={8}>
            <Box className={classes.sectionHeading} sx={{}}>
              You’re safe with our system, artists, and processes. We guarantee
              it.
            </Box>

            <Box
              sx={{
                maxWidth: '827.86px',
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
                  textAlign: 'left',
                  color: '#d8d8d8',
                }}
              >
                You get what you pay for. And we can prove it. We have created
                the system, vetted the artists, and all you need to do is pick
                your wall. Leave the rest to us.
              </Typography>
            </Box>

            <Box
              sx={{
                maxWidth: '827.86px',
              }}
            >
              <Grid container justifyContent="center" direction="column">
                <Grid item md={12} lg={12} xl={12}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      marginTop: '2rem',
                    }}
                  >
                    <Box>
                      <TickIcon />
                    </Box>

                    <Box
                      sx={{
                        marginLeft: '0.5rem',
                      }}
                    >
                      <Typography className={classes.lead}>
                        All agreements are smart contracts on the blockchain{' '}
                      </Typography>

                      <Typography className={classes.listDescription}>
                        Smart contracts on blockchain means that any
                        stipulations required to satisfy your wishes must be met
                        before the task is considered "complete". Which means
                        your money is safe until the job’s done.
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      marginTop: '2rem',
                    }}
                  >
                    <Box>
                      <TickIcon />
                    </Box>

                    <Box
                      sx={{
                        marginLeft: '0.5rem',
                      }}
                    >
                      <Typography className={classes.lead}>
                        Insurance & Legalities{' '}
                      </Typography>

                      <Typography className={classes.listDescription}>
                        We take care of all legal agreements, local permitting,
                        liability insurance, artist safety requirements, work
                        site scaffolding and lifts, wall prep, etc. Permission,
                        research and due diligence for a fast and easy user
                        experience.
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      marginTop: '2rem',
                    }}
                  >
                    <Box>
                      <TickIcon />
                    </Box>

                    <Box
                      sx={{
                        marginLeft: '0.5rem',
                      }}
                    >
                      <Typography className={classes.lead}>
                        Easy setup, vetted artists, and a smooth, managed
                        process{' '}
                      </Typography>

                      <Typography className={classes.listDescription}>
                        We take care of all legal agreements, local permitting,
                        liability insurance, artist safety requirements, work
                        site scaffolding and lifts, wall prep, etc. Permission,
                        research and due diligence for a fast and easy user
                        experience.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item md={4} lg={4} xl={4}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '3rem',
              }}
            >
              <VerifyIcon />
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
  }

  return null;
}

export const RealEstateOwnerPropertyManagerSection = () => {
  return <ProxyComponent />;
};
