import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';
import { makeStyles } from '@mui/styles';
import { Box, Container, Grid } from '@mui/material';
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from '@mui/core/ButtonUnstyled';
import { styled } from '@mui/system';
import { LoveEmoji } from './LoveEmoji';
import { MoneyEmoji } from './MoneyEmoji';
import gtag from 'ga-gtag';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '32px',
    padding: '2rem',
  },
  containerXs: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '32px',
    padding: '2rem',
  },
  sectionHeading: {
    [theme.breakpoints.only('xs')]: {
      fontSize: '36px',
      fontWeight: 900,
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      letterSpacing: '-0.05em',
      backgroundImage:
        'linear-gradient(94.83deg, #FFFFFF 26.58%, #A984FF 44.93%, #64E1DC 54.77%, #6FC2FF 64.82%, #FFFFFF 78.91%) !important',
      backgroundSize: '100%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'center',
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: '36px',
      fontWeight: 900,
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      letterSpacing: '-0.05em',
      backgroundImage:
        'linear-gradient(94.83deg, #FFFFFF 26.58%, #A984FF 44.93%, #64E1DC 54.77%, #6FC2FF 64.82%, #FFFFFF 78.91%) !important',
      backgroundSize: '100%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'center',
    },
    [theme.breakpoints.only('md')]: {
      fontSize: '55px',
      fontWeight: 900,
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      lineHeight: '90px',
      letterSpacing: '-0.05em',
      backgroundImage:
        'linear-gradient(94.83deg, #FFFFFF 26.58%, #A984FF 44.93%, #64E1DC 54.77%, #6FC2FF 64.82%, #FFFFFF 78.91%) !important',
      backgroundSize: '100%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'center',
    },
    [theme.breakpoints.only('lg')]: {
      fontSize: '55px',
      fontWeight: 900,
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      lineHeight: '90px',
      letterSpacing: '-0.05em',
      backgroundImage:
        'linear-gradient(94.83deg, #FFFFFF 26.58%, #A984FF 44.93%, #64E1DC 54.77%, #6FC2FF 64.82%, #FFFFFF 78.91%) !important',
      backgroundSize: '100%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      maxWidth: '1016px',
      textAlign: 'center',
    },
    [theme.breakpoints.only('xl')]: {
      fontSize: '55px',
      fontWeight: 900,
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      lineHeight: '90px',
      letterSpacing: '-0.05em',
      backgroundImage:
        'linear-gradient(94.83deg, #FFFFFF 26.58%, #A984FF 44.93%, #64E1DC 54.77%, #6FC2FF 64.82%, #FFFFFF 78.91%) !important',
      backgroundSize: '100%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      maxWidth: '1016px',
      textAlign: 'center',
    },
  },
  paidUnderlines: {
    background: `url(${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/home/underlines.svg) repeat-x 100% 100%`,
    paddingBottom: '1rem',
    whiteSpace: 'nowrap',
  },
  findWallButton: {
    width: '168px',
    color: '#f8fafc',
    fontFamily: 'var(--font-family-montserrat)',
    fontWeight: 600,
    fontSize: 'var(--font-size-m)',
    letterSpacing: 0,
    lineHeight: '22px',
    whiteSpace: 'nowrap',
    textTransform: 'capitalize',
    height: '74px',
    minWidth: '201px',
    backgroundColor: 'var(--purple-plum)',
    borderRadius: '1000px',
    boxShadow: '12px 12px 27px #a845f77d',
  },
}));

const CustomButtonRoot = styled('button')(`
  width: 168px;
  color: #f8fafc;
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
  text-transform: capitalize;
  height: 74px;
  min-width: 201px;
  background-color: rgba(169, 69, 247, 1);
  border-radius: 1000px;
  box-shadow: 12px 12px 27px #a845f77d;
  transition: all 200ms ease;
  cursor: pointer;
  border: none;
  transition: all 200ms ease;

  &:hover {
    background-color: rgba(169, 69, 247, 0.5);
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
  }
`);

function ProxyMyComponent() {
  const classes = useStyles();
  const theme = useTheme();
  const betweenSmAndXlScreen = useMediaQuery(theme.breakpoints.up('sm'));
  const extraSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

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
          <Grid item xl={12} lg={12} md={12} xs={12}>
            <Box sx={{ display: 'flex' }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  paddingTop: '80px',
                }}
              >
                <LoveEmoji />
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: {
                    lg: '605.39px',
                  },
                }}
              >
                <p className={classes.sectionHeading}>
                  Showcase your art & get{' '}
                  <span className={classes.paidUnderlines}>PAID</span>
                </p>

                <Box
                  sx={{
                    marginTop: '2rem',
                  }}
                >
                  <Link
                    to={{
                      pathname: '/marketplace',
                      search: '?search-type=walls',
                    }}
                    className={classes.footerLink}
                  >
                    <ButtonUnstyled component={CustomButtonRoot}>
                      find a wall
                    </ButtonUnstyled>
                  </Link>
                </Box>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                  paddingBottom: '1rem',
                }}
              >
                <MoneyEmoji />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
  }

  if (extraSmallScreen) {
    return (
      <Container maxWidth="xs" className={classes.containerXs}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={2}>
            <LoveEmoji />
          </Grid>
          <Grid item xs={2}>
            <MoneyEmoji />
          </Grid>
        </Grid>

        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Box
              sx={{
                marginTop: '2rem',
              }}
            >
              <p className={classes.sectionHeading}>
                {' '}
                Showcase your art & get{' '}
                <span className={classes.paidUnderlines}>PAID</span>
              </p>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                marginTop: '2rem',
              }}
            >
              <ButtonUnstyled to="wxlls" component={CustomButtonRoot}>
                find a wall
              </ButtonUnstyled>
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
  }

  return null;
}

export const FindAWallSection = () => {
  return <ProxyMyComponent />;
};
