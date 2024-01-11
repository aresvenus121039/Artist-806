import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ImageFour } from '../svg/images';
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

const CreativesProposalSection = () => {
  const classes = useStyles();

  return (
    <Box
      sx={{
        maxWidth: '1289px',
        width: '100%',
        padding: '0 20px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
        alignItems: 'center',
      }}
    >
      {/* image */}
      <Box
        sx={{
          maxWidth: {
            xs: '100%',
            md: '617px',
          },
          width: '100%',
          position: 'relative',
          padding: {
            xs: '0 0 40px 0',
            md: '0 61px 0 0',
          },
        }}
      >
        <Box
          sx={{
            width: '268px',
            height: '268px',
            backgroundColor: '#B14EFF',
            filter: 'blur(76px) opacity(0.5);',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
          }}
        ></Box>

        <ImageFour />
      </Box>

      {/* content */}
      <Box
        sx={{
          maxWidth: {
            xs: '100%',
            md: '672px',
          },
          width: '100%',
        }}
      >
        {/* subtitle */}
        <Typography
          sx={{
            fontFamily: 'var(--font-family-montserrat)',
            color: '#6AB3DF',
            fontWeight: '700',
            fontSize: '24px',
            lineHeight: '1.2',
            letterSpacing: 0,
            marginBottom: '12px',
          }}
        >
          Find your wall - Near or Far
        </Typography>

        {/* title */}
        <Typography
          className={classes.sectionHeading}
          sx={{
            marginBottom: '36px',
          }}
        >
          Send a proposal in just a few clicks
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
              Submit calculated proposals
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
              Real estate owners submit property details, mood boards, and
              images that help you visualize the potential of the project. Our
              estimate calculator makes it simple to propose a quality estimate
              with fair and balanced costs.
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
              Apply for one wall, or apply for a dozen. It’s so quick and simple
              with our estimation calculator that you’ll wonder how you ever did
              it before. Cold calls and dragging your portfolio door to door are
              a thing of the past with WXLLSPACE.
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
              We provide all the media assets necessary for you to create an
              infinite number of social media campaigns that help promote your
              art, your message, and art tourism. Be the change and be seen!
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CreativesProposalSection;
