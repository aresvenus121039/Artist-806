import React from 'react';
import { Box, Typography, CardMedia } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { TickBigIcon } from '../icons';

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

const RealEstateServiceSection = () => {
  const classes = useStyles();

  return (
    <Box
      sx={{
        backgroundColor: '#101A36',
        padding: '151px 0',
      }}
    >
      <Box
        sx={{
          maxWidth: '1314px',
          padding: '0 20px',
          margin: '0 auto',
        }}
      >
        {/* title */}
        <Typography
          className={classes.sectionHeading}
          sx={{
            marginBottom: '24px',
            display: 'inline-block',
          }}
        >
          Full Service Details
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
            marginBottom: '70px',
          }}
        >
          Beyond our specialization in complex and ambitious art installation
          projects, we also provide an excellent range of special services
          designed to improve the exeprience for propery owners.
        </Typography>

        {/* list checked */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          {/* item checked */}
          <Box
            sx={{
              flex: '0 1 auto',
              width: {
                xs: '100%',
                sm: '33.33%',
                md: '25%',
              },
              padding: '0 30px 50px 0',
            }}
          >
            <BigTickIcons />

            {/* title */}
            <Typography
              sx={{
                fontFamily: 'var(--font-family-montserrat)',
                fontWeight: '700',
                color: 'var(--white)',
                fontSize: '24px',
                lineHeight: '1.2',
                marginBottom: '24px',
              }}
            >
              Screening
            </Typography>

            {/* description */}
            <Typography
              sx={{
                fontFamily: 'var(--font-family-montserrat)',
                fontWeight: '400',
                color: 'var(--white)',
                fontSize: '14px',
                lineHeight: '2.4',
              }}
            >
              We pre-filter artists for you, connecting you with those who are
              talented, professional, and proactive. This ensures effective
              communication and smooth operations throughout your project.
            </Typography>
          </Box>

          {/* item checked */}
          <Box
            sx={{
              flex: '0 1 auto',
              width: {
                xs: '100%',
                sm: '33.33%',
                md: '25%',
              },
              padding: '0 30px 50px 0',
            }}
          >
            <BigTickIcons />

            {/* title */}
            <Typography
              sx={{
                fontFamily: 'var(--font-family-montserrat)',
                fontWeight: '700',
                color: 'var(--white)',
                fontSize: '24px',
                lineHeight: '1.2',
                marginBottom: '24px',
              }}
            >
              Administration
            </Typography>

            {/* description */}
            <Typography
              sx={{
                fontFamily: 'var(--font-family-montserrat)',
                fontWeight: '400',
                color: 'var(--white)',
                fontSize: '14px',
                lineHeight: '2.4',
              }}
            >
              From providing artist bios and official quotes to invoicing and
              filling your supplier forms, we're organizational pros who
              complete tasks quickly and professionally.
            </Typography>
          </Box>

          {/* item checked */}
          <Box
            sx={{
              flex: '0 1 auto',
              width: {
                xs: '100%',
                sm: '33.33%',
                md: '25%',
              },
              padding: '0 30px 50px 0',
            }}
          >
            <BigTickIcons />

            {/* title */}
            <Typography
              sx={{
                fontFamily: 'var(--font-family-montserrat)',
                fontWeight: '700',
                color: 'var(--white)',
                fontSize: '24px',
                lineHeight: '1.2',
                marginBottom: '24px',
              }}
            >
              Project Management
            </Typography>

            {/* description */}
            <Typography
              sx={{
                fontFamily: 'var(--font-family-montserrat)',
                fontWeight: '400',
                color: 'var(--white)',
                fontSize: '14px',
                lineHeight: '2.4',
              }}
            >
              From the initial sketches to the production and execution, we
              provide full project management.
            </Typography>
          </Box>

          {/* item checked */}
          <Box
            sx={{
              flex: '0 1 auto',
              width: {
                xs: '100%',
                sm: '33.33%',
                md: '25%',
              },
              padding: '0 30px 50px 0',
            }}
          >
            <BigTickIcons />

            {/* title */}
            <Typography
              sx={{
                fontFamily: 'var(--font-family-montserrat)',
                fontWeight: '700',
                color: 'var(--white)',
                fontSize: '24px',
                lineHeight: '1.2',
                marginBottom: '24px',
              }}
            >
              Communication
            </Typography>

            {/* description */}
            <Typography
              sx={{
                fontFamily: 'var(--font-family-montserrat)',
                fontWeight: '400',
                color: 'var(--white)',
                fontSize: '14px',
                lineHeight: '2.4',
              }}
            >
              For a smooth course of action, we keep on top of the conversation
              and ensure both you and the artist are in touch and up-to-date.
            </Typography>
          </Box>

          {/* item checked */}
          <Box
            sx={{
              flex: '0 1 auto',
              width: {
                xs: '100%',
                sm: '33.33%',
                md: '25%',
              },
              padding: '0 30px 50px 0',
            }}
          >
            <BigTickIcons />

            {/* title */}
            <Typography
              sx={{
                fontFamily: 'var(--font-family-montserrat)',
                fontWeight: '700',
                color: 'var(--white)',
                fontSize: '24px',
                lineHeight: '1.2',
                marginBottom: '24px',
              }}
            >
              Real Time Analytics
            </Typography>

            {/* description */}
            <Typography
              sx={{
                fontFamily: 'var(--font-family-montserrat)',
                fontWeight: '400',
                color: 'var(--white)',
                fontSize: '14px',
                lineHeight: '2.4',
              }}
            >
              Get on demand information about foot traffic heat maps, which help
              establish and build proof of the effectiveness of your
              installation. Check out how many views your wall has received.
            </Typography>
          </Box>

          {/* item checked */}
          <Box
            sx={{
              flex: '0 1 auto',
              width: {
                xs: '100%',
                sm: '33.33%',
                md: '25%',
              },
              padding: '0 30px 50px 0',
            }}
          >
            <BigTickIcons />

            {/* title */}
            <Typography
              sx={{
                fontFamily: 'var(--font-family-montserrat)',
                fontWeight: '700',
                color: 'var(--white)',
                fontSize: '24px',
                lineHeight: '1.2',
                marginBottom: '24px',
              }}
            >
              Post Production
            </Typography>

            {/* description */}
            <Typography
              sx={{
                fontFamily: 'var(--font-family-montserrat)',
                fontWeight: '400',
                color: 'var(--white)',
                fontSize: '14px',
                lineHeight: '2.4',
              }}
            >
              We use Mural Shield and other anti-graffiti products to keep your
              new artwork safe from vandalism and damage from UV rays.
            </Typography>
          </Box>

          {/* item checked */}
          <Box
            sx={{
              flex: '0 1 auto',
              width: {
                xs: '100%',
                sm: '33.33%',
                md: '25%',
              },
              padding: '0 30px 50px 0',
            }}
          >
            <BigTickIcons />

            {/* title */}
            <Typography
              sx={{
                fontFamily: 'var(--font-family-montserrat)',
                fontWeight: '700',
                color: 'var(--white)',
                fontSize: '24px',
                lineHeight: '1.2',
                marginBottom: '24px',
              }}
            >
              Images & Media Assets
            </Typography>

            {/* description */}
            <Typography
              sx={{
                fontFamily: 'var(--font-family-montserrat)',
                fontWeight: '400',
                color: 'var(--white)',
                fontSize: '14px',
                lineHeight: '2.4',
              }}
            >
              Get all the images and assets you need to promote your wall on all
              your social media channels. Create custom hashtags for Instagram
              and create a following online and off.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const BigTickIcons = () => {
  return (
    <Box marginBottom="26.34px">
      <TickBigIcon />
    </Box>
  );
};

export default RealEstateServiceSection;
