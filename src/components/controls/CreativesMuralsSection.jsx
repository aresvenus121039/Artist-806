import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import TickIcon from '../icons/TickIcon';
import { ImageFive } from '../svg/images';

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
    [theme.breakpoints.only('xl')]: {
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
}));

const CreativesMuralsSection = () => {
  const classes = useStyles();

  return (
    <Box
      sx={{
        maxWidth: '1272px',
        width: '100%',
        padding: '0 20px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: {
          xs: 'column-reverse',
          md: 'row',
        },
        flexWrap: 'nowrap',
        alignItems: 'center',
      }}
    >
      {/* content */}
      <Box
        sx={{
          maxWidth: {
            xs: '100%',
            md: '672px',
          },
          width: '100%',
          flex: '0 1 auto',
        }}
      >
        {/* subtitle */}
        <Typography
          sx={{
            fontFamily: 'var(--font-family-montserrat)',
            lineHeight: '1.2',
            fontSize: '24px',
            fontWeight: '700',
            letterSpacing: 0,
            color: '#6AB3DF',
            marginBottom: '12px',
          }}
        >
          Be seen by many. Expand more
        </Typography>

        {/* title */}
        <Typography
          className={classes.sectionHeading}
          sx={{
            marginBottom: '24px',
            maxWidth: '591px',
            width: '100%',
          }}
        >
          Murals are more than something to look
        </Typography>

        {/* description */}
        <Typography
          sx={{
            fontFamily: 'var(--font-family-montserrat)',
            fontWeight: '400',
            color: 'var(--white)',
            fontSize: {
              xs: '14px',
              md: '16px',
            },
            lineHeight: '2.4',
            marginBottom: '36px',
          }}
        >
          Our mission is to generate positive energy in our local communities,
          increase the overall vibe of neighborhoods, and especially to get more
          artists in front of more walls.
        </Typography>

        {/* list checked 1 */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            marginBottom: '30px',
          }}
        >
          <TickIcon />

          <Box
            sx={{
              flex: '1 1 auto',
              padding: '0 0 0 24px',
            }}
          >
            {/* title */}
            <Typography
              component="h5"
              sx={{
                fontFamily: 'var(--font-family-montserrat)',
                fontWeight: '700',
                color: '#D8D8D8',
                fontSize: '18px',
                lineHeight: '1.2',
                marginBottom: '12px',
              }}
            >
              Art can send a message
            </Typography>

            {/* description */}
            <Typography
              component="p"
              sx={{
                fontFamily: 'var(--font-family-montserrat)',
                fontWeight: '400',
                color: '#D8D8D8',
                fontSize: '14px',
                lineHeight: '2.2',
              }}
            >
              Every neighborhood needs to have its voice heard, and be uplifted.
              Giant murals on giant walls can speak for the community on their
              behalf, uniting them in a common message.
            </Typography>
          </Box>
        </Box>

        {/* list checked 2 */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            marginBottom: '30px',
          }}
        >
          <TickIcon />

          <Box
            sx={{
              flex: '1 1 auto',
              padding: '0 0 0 24px',
            }}
          >
            {/* title */}
            <Typography
              component="h5"
              sx={{
                fontFamily: 'var(--font-family-montserrat)',
                fontWeight: '700',
                color: '#D8D8D8',
                fontSize: '18px',
                lineHeight: '1.2',
                marginBottom: '12px',
              }}
            >
              Art can draw attention
            </Typography>

            {/* description */}
            <Typography
              component="p"
              sx={{
                fontFamily: 'var(--font-family-montserrat)',
                fontWeight: '400',
                color: '#D8D8D8',
                fontSize: '14px',
                lineHeight: '2.2',
              }}
            >
              If museums attract visitors with their “tiny” artworks, what does
              a 40-foot tall side of a building do? People will come from all
              over just to see your work. Gain attention, gain followers, gain
              more work.
            </Typography>
          </Box>
        </Box>

        {/* list checked 3 */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
          }}
        >
          <TickIcon />

          <Box
            sx={{
              flex: '1 1 auto',
              padding: '0 0 0 24px',
            }}
          >
            {/* title */}
            <Typography
              component="h5"
              sx={{
                fontFamily: 'var(--font-family-montserrat)',
                fontWeight: '700',
                color: '#D8D8D8',
                fontSize: '18px',
                lineHeight: '1.2',
                marginBottom: '12px',
              }}
            >
              Art can create fun
            </Typography>

            {/* description */}
            <Typography
              component="p"
              sx={{
                fontFamily: 'var(--font-family-montserrat)',
                fontWeight: '400',
                color: '#D8D8D8',
                fontSize: '14px',
                lineHeight: '2.2',
              }}
            >
              Who needs an “art walk” when people literally have to walk (or
              dance, or pose for Insta-worthy pics) right in front of your
              entire piece? Grow your following with special hashtags that
              promote you and a sense of fun, and then watch that foot traffic
              go up.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* image */}
      <Box
        sx={{
          maxWidth: {
            xs: '100%',
            md: '600px',
          },
          width: '100%',
          padding: {
            xs: '0 0 40px 0',
            md: '0 0 0 40px',
          },
          position: 'relative',
        }}
      >
        <Box
          sx={{
            width: '268px',
            height: '268px',
            backgroundColor: '#64E1DC',
            filter: 'blur(76px) opacity(0.5);',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
          }}
        ></Box>

        <ImageFive />
      </Box>
    </Box>
  );
};

export default CreativesMuralsSection;
