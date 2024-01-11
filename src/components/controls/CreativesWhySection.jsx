import React from 'react';
import { Box, CardMedia, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { SvgTickIcon } from '../icons';
import { cloudflareImage } from '@/utility/images';

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

const CreativesWhySection = () => {
  const classes = useStyles();

  return (
    <Box
      sx={{
        maxWidth: '1202px',
        width: '100%',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        flexDirection: {
          xs: 'column',
          sm: 'row',
        },
        flexWrap: 'nowrap',
        alignItems: 'center',
      }}
    >
      {/* image */}
      <Box
        sx={{
          maxWidth: {
            xs: '100%',
            sm: '300px',
            md: '530px',
          },
          width: '100%',
          flex: '0 1 auto',
          paddingRight: {
            xs: 0,
            sm: '30px',
            md: '112px',
          },
          paddingBottom: {
            xs: '40px',
            sm: '0',
          },
          display: {
            xs: 'none',
            sm: 'block',
          },
        }}
      >
        <CardMedia
          loading="lazy"
          component="img"
          image={cloudflareImage(
            'https://cdn.animaapp.com/projects/6183b51d6b5cbed22d564e6f/releases/61908a8ca708f10314918870/img/mvi-0772-00-05-39-42-2@1x.png'
          )}
          sx={{
            borderRadius: '25px',
            width: '100%',
            height: {
              xs: '450px',
              sm: '790px',
            },
          }}
        />
      </Box>

      {/* content */}
      <Box
        sx={{
          maxWidth: {
            xs: '100%',
            sm: '902px',
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
          Why WXLLSPACE?
        </Typography>

        {/* title */}
        <Typography
          className={classes.sectionHeading}
          sx={{
            display: 'inline-block',
            maxWidth: '591px',
            width: '100%',
            marginBottom: '24px',
          }}
        >
          Focus More On Your Art & Less On Logistics
        </Typography>

        {/* description */}
        <Typography
          component="p"
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
          When you’re looking for space to paint just because you need to paint,
          we’ve got you covered. We make it easy for muralists to connect with
          the people who control the wall space. We take care of the legwork, so
          you can spend more time creating.
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
              Browse Walls
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
              When you’re looking for space to paint just because you need to
              paint, we’ve got you covered. We make it easy for muralists to
              connect with the people who control the wall space. We take care
              of the legwork, so you can spend more time creating.
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
              Save Time
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
              No need to apply for permits, insurance, and so on. We’ll handle
              all of that, and you won’t ever need to worry — just get to work.
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
              Make Art That Speaks to The Community
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
              Connect with real estate owners to design a wall that connects the
              community, brings light and life to the neighborhood, and gets
              eyes on your work.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CreativesWhySection;
