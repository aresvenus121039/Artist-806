import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import TickIcon from '../icons/TickIcon';

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

const RealEstateWallSection = () => {
  const classes = useStyles();

  return (
    <Box
      sx={{
        maxWidth: '1324px',
        width: '100%',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        flexDirection: {
          xs: 'column',
          md: 'row',
          lg: 'row',
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
            marginBottom: '18px',
            textAlign: 'left',
          }}
        >
          It Starts with Your Property
        </Typography>

        {/* title */}
        <Typography
          className={classes.sectionHeading}
          sx={{
            marginBottom: '25px',
          }}
        >
          Bring Your Wall to Life
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
            marginBottom: '35px',
            maxWidth: {
              xs: '100%',
              lg: '672px',
            },
            width: '100%',
          }}
        >
          Property owners are looking to invest in art as a way to attract new
          audiences, customers, and tenants. Mural projects help build community
          through aesthetics, organically enticing hip, younger people to the
          area. This increases exposure to your business, and can increase
          overall property value.
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
              Improve Appearance
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
              Eliminate blight and unappealing graffiti, while improving the
              aesthetics of your property and creating a welcoming vibe.
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
              Create Social Engagement
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
              Get the community talking, sharing, and coming back to your
              business time and again! People gravitate toward art. Use this
              opportunity to turn them into customers and influencers.
            </Typography>
          </Box>
        </Box>

        {/* list checked 3 */}
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
              Raise Overall Value
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
              Your building is an asset that needs protection, both against
              graffiti and in overall property value. Increase your property
              value, increase surrounding property values, and raise the value
              of your investment over the long term. It’s a win-win for the
              whole neighborhood.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* slide image */}
      <Box
        sx={{
          maxWidth: {
            xs: '100%',
            md: '452px',
            lg: '652px',
          },
          width: '100%',
          padding: {
            xs: '40px 0 0 0',
            md: '0 0 0 49px',
            lg: '0 0 0 49px',
          },
        }}
      >
        {/* slider */}
        <BeforeAfterSlider />
      </Box>
    </Box>
  );
};

export default RealEstateWallSection;
