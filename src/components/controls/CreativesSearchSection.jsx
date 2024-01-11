import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { SvgTickIcon } from '../icons';
import { ImageThree } from '../svg/images';

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

const CreativesSearchSection = () => {
  const classes = useStyles();

  return (
    <Box
      sx={{
        maxWidth: '1222px',
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
            fontWeight: '700',
            color: '#6AB3DF',
            fontSize: '24px',
            letterSpacing: 0,
            lineHeight: '1.2',
            marginBottom: '12px',
          }}
        >
          Find your wall - Near or Far
        </Typography>

        {/* title */}
        <Typography
          component="h2"
          className={classes.sectionHeading}
          sx={{
            marginBottom: '20px',
          }}
        >
          Search for your next project
        </Typography>

        {/* description */}
        <Typography
          component="p"
          sx={{
            color: '#FFFFFF',
            fontWeight: '400',
            lineHeight: '2.4',
            fontSize: '16px',
            fontFamily: 'var(--font-family-montserrat)',
            marginBottom: '36px',
          }}
        >
          Stop wasting precious time and energy pounding the streets. Browse the
          latest new mural commissions before they hit the open market. Connect
          directly with owners and decision-makers who control the space.
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
          <SvgTickIcon />

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
              Search for projects by city and state or country
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
              Stay local, drive a few hours, or travel across the country or
              world - the choice is yours.
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
          <SvgTickIcon />

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
              Search for projects by type
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
              Whether it’s a specific design or message, or the building just
              needs your creative spark — you can find the right project at the
              right time.
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
          <SvgTickIcon />

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
              Apply and reserve your space
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
              Browse mood boards, get ideas, submit them and once the budget and
              design are approved, get painting.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* image */}
      <Box
        sx={{
          maxWidth: {
            xs: '100%',
            md: '550px',
          },
          width: '100%',
          flex: '0 1 auto',
          padding: {
            xs: '0 0 40px 0',
            md: '0 0 0 56px',
          },
          position: 'relative',
        }}
      >
        <Box
          sx={{
            width: '268px',
            height: '268px',
            backgroundColor: '#6AB3DF',
            filter: 'blur(76px) opacity(0.5);',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
          }}
        />

        <ImageThree />
      </Box>
    </Box>
  );
};

export default CreativesSearchSection;
