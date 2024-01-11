import * as React from 'react';
import { Box, Typography, Input, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Theme } from '@material-ui/core';
import { PostBoxIcon, PostLetterIcon, SendArrowFrame } from '../icons';
import Link from 'next/link';

declare module '@mui/styles' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

const useStyles = makeStyles((theme: Theme) => ({
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
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: '45px',
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
    },
    [theme.breakpoints.only('md')]: {
      fontSize: '45px',
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
      textAlign: 'center',
    },
    [theme.breakpoints.only('lg')]: {
      fontSize: '45px',
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
      textAlign: 'center',
    },
    [theme.breakpoints.only('xl')]: {
      fontSize: '45px',
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
      textAlign: 'center',
    },
  },
  textLink: {
    color: '#557EFC',
    fontWeight: '500 !important',
  },
  textLinkPrivacy: {
    color: '#FFFFFF',
    textDecoration: 'none',
    fontWeight: 600,
  },
}));

const AboutSubcribeSection: React.FC = () => {
  const classes = useStyles();

  return (
    <Box
      sx={{
        maxWidth: '1314px',
        width: '100%',
        margin: '0 auto',
        padding: '0 20px',
        position: 'relative',
      }}
    >
      {/* glassmorphism effect */}
      <Box
        sx={{
          width: '268px',
          height: '268px',
          backgroundColor: '#64E1DC',
          filter: 'blur(230px)',
          position: 'absolute',
          left: 0,
          top: '30%',
          transform: 'translateY(-30%)',
          zIndex: -100,
        }}
      />
      {/* glassmorphism effect */}
      <Box
        sx={{
          width: '268px',
          height: '268px',
          backgroundColor: '#557EFC',
          filter: 'blur(96px) opacity(0.5);',
          position: 'absolute',
          right: 0,
          top: '30%',
          transform: 'translateY(-30%)',
          zIndex: -100,
        }}
      />

      {/* block subcribe */}
      {/* TODO make this Box container can see what's behind them (the glassmorphism effect), see how the top navigation bar or the Search form container at Home page */}
      <Box
        sx={{
          background:
            'linear-gradient(#121c36, #121c36) padding-box, linear-gradient(144deg, rgba(0,200,200,1) 0%, rgba(18,28,54,1) 34%, rgba(18,28,54,1) 70%, rgba(85,126,252,1) 100%) border-box',
          borderRadius: '32px',
          border: '1px solid transparent',
          padding: '83px 20px',
          position: 'relative',
        }}
      >
        {/* icon */}
        <Box
          sx={{
            width: '75px',
            position: 'absolute',
            zIndex: 2,
            top: {
              xs: '10px',
              md: '87px',
            },
            left: {
              xs: '10px',
              sm: '20px',
              md: '158px',
            },
          }}
        >
          <PostLetterIcon />
        </Box>
        <Box
          sx={{
            width: '75px',
            position: 'absolute',
            zIndex: 2,
            bottom: {
              xs: '10px',
              sm: '15px',
              md: '66.7px',
            },
            right: {
              xs: '10px',
              sm: '20px',
              md: '95.69px',
            },
          }}
        >
          <PostBoxIcon />
        </Box>

        {/* content */}
        <Box
          sx={{
            maxWidth: '736px',
            width: '100%',
            margin: '0 auto',
            position: 'relative',
            zIndex: 3,
          }}
        >
          {/* title */}
          <Typography component="h2" className={classes.sectionHeading}>
            Want to stay in the loop?
          </Typography>

          {/* description */}
          <Typography
            component="p"
            sx={{
              fontFamily: 'var(--font-family-montserrat)',
              fontWeight: 500,
              color: '#FFFFFF',
              fontSize: '20px',
              textAlign: 'center',
              letterSpacing: 0,
              lineHeight: 1.5,
              marginBottom: '30px',
              marginTop: '20px',
            }}
          >
            Subscribe and receive news and updates.
          </Typography>

          {/* input subcribe */}
          <Box
            sx={{
              maxWidth: '642px',
              width: '100%',
              position: 'relative',
              margin: '0 auto',
            }}
          >
            <Input
              disableUnderline={true}
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                padding: '28px 90px 28px 28px',
                height: '84px',
                width: '100%',
                borderRadius: '10000px',
                fontFamily: 'var(--font-family-montserrat)',
                fontWeight: 500,
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: '16px',
                textAlign: 'center',
                letterSpacing: 0,
                lineHeight: '38.4px',
                whiteSpace: 'nowrap',
              }}
              placeholder="Input your email here"
            />

            {/* button */}
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                right: '16.36px',
                transform: 'translateY(-50%)',
              }}
            >
              <Button
                sx={{
                  background:
                    'linear-gradient(79.45deg, #5700FF 6.96%, #64E1DC 108.67%) !important',
                  minHeight: '56.29px',
                  minWidth: '56.29px',
                  height: '56.29px',
                  width: '56.29px',
                  borderRadius: '100%',
                  position: 'relative',
                  boxShadow: '12px 12px 27px rgba(85, 126, 252, 0.4)',
                }}
              >
                <SendArrowFrame />
              </Button>
            </Box>
          </Box>

          {/* privacy & policy */}
          <Typography
            component="p"
            sx={{
              color: '#FFFFFF',
              fontFamily: 'var(--font-family-montserrat)',
              fontSize: '14px',
              fontWeight: 400,
              fontStyle: 'normal',
              lineHeight: 2.4,
              textAlign: 'center',
              marginTop: '28px',
            }}
          >
            We care about protecting your data. Here’s our{' '}
            <Link href="/privacy-policy" className={classes.textLinkPrivacy}>
              Privacy Policy
            </Link>{' '}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSubcribeSection;
