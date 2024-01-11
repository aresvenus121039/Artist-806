import React from 'react';
import { Box, CardMedia, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
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

const CreativesLevelingSection = () => {
  const classes = useStyles();

  return (
    <Box
      sx={{
        maxWidth: '1090px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        flexDirection: {
          xs: 'column',
          sm: 'row',
        },
        flexWrap: 'nowrap',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          width: '268px',
          height: '268px',
          backgroundColor: '#5D1DF1',
          filter: 'blur(88px) opacity(0.5);;',
          position: 'absolute',
          left: '50%',
          top: '-30px',
          transform: 'translateX(-50%)',
          zIndex: 1,
        }}
      />

      {/* content */}
      <Box
        sx={{
          maxWidth: '593px',
          width: '100%',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* title */}
        <Typography
          className={classes.sectionHeading}
          sx={{
            display: 'inline-block',
            maxWidth: '508px',
            width: '100%',
            marginBottom: '30px',
          }}
        >
          We’re leveling the playing field
        </Typography>

        {/* description 1 */}
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
            marginBottom: '35px',
          }}
        >
          Sometimes, artists get taken advantage of. Sometimes you feel like you
          have to spend so much time on legalities, contracts, and more, that by
          the time you’re actually creating you feel like maybe you didn’t get
          the best deal. (All the same, the reverse happens to buyers and real
          estate owners, too.)
        </Typography>

        {/* description 2 */}
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
            marginBottom: '35px',
          }}
        >
          By creating connections and facilitating all aspects of the project on
          behalf of both the artist and the real estate owner, our entire
          mission thrives around leveling the playing field. We provide an
          all-encompassing platform where all parties feel safe and supported,
          plus, we take care of legalities, insurance, equipment, logistics and
          more.
        </Typography>

        {/* description 3 */}
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
          }}
        >
          All you need to do is connect to make your vision a reality, and get
          to work.
        </Typography>
      </Box>

      {/* image */}
      <Box
        sx={{
          maxWidth: '497px',
          width: '100%',
          paddingLeft: {
            xs: '0',
            sm: '61px',
            md: '81px',
          },
          paddingTop: {
            xs: '40px',
            sm: '0',
            md: '0',
          },
          position: 'relative',
          zIndex: 2,
        }}
      >
        <CardMedia
          loading="lazy"
          component="image"
          image={cloudflareImage(
            'https://cdn.animaapp.com/projects/6183b51d6b5cbed22d564e6f/releases/61907bef527cd8832279ae73/img/img-0984-3-2@1x.png'
          )}
          sx={{
            borderRadius: '15px',
            width: '100%',
            height: {
              xs: '450px',
              sm: '705px',
            },
            objectFit: 'cover',
          }}
        />
      </Box>
    </Box>
  );
};

export default CreativesLevelingSection;
