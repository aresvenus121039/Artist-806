import React from 'react';
import { Box, CardMedia, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { cloudflareImage } from '@/utility/images';

const useStyles = makeStyles((theme) => ({
  sectionHeading: {
    [theme.breakpoints.only('xs')]: {
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
      lineHeight: '90px',
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
      lineHeight: '90px',
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
      lineHeight: '90px',
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

const StudyCaseOpenDateSection = (props) => {
  const { thumbnailImageSrc, description, title, textDate } = props;
  const classes = useStyles();

  return (
    <Box
      sx={{
        maxWidth: '1150px',
        width: '100%',
        margin: '0 auto',
      }}
    >
      <Typography
        className={classes.sectionHeading}
        sx={{
          display: 'inline-block',
          marginBottom: '35px',
        }}
      >
        {textDate}
      </Typography>

      {/* thumbnail */}

      <CardMedia
        component="img"
        image={cloudflareImage(thumbnailImageSrc)}
        sx={{
          height: '523.49px',
          width: '100%',
          objectFit: 'cover',
        }}
      />

      <CardMedia
        component="img"
        image={cloudflareImage(
          'https://cdn.animaapp.com/projects/6183b51d6b5cbed22d564e6f/releases/618fc109a708f1031491853e/img/rectangle-118@1x.svg'
        )}
        sx={{
          width: '100%',
          height: '414px',
          marginTop: '-410px',
        }}
      />

      <Box
        sx={{
          position: 'relative',
          maxWidth: '818.99px',
          width: '100%',
          paddingLeft: '41px',
          borderLeft: '1.5px solid #FFFFFF',
          margin: '-40px auto 0 auto',
        }}
      >
        <Box
          sx={{
            height: '4px',
            width: '4px',
            backgroundColor: '#FFFFFF',
            position: 'absolute',
            bottom: '0',
            left: '0',
            transform: 'translateX(-2px) rotate(60deg)',
          }}
        ></Box>

        {/* description */}
        <Typography
          component="h1"
          sx={{
            fontFamily: 'var(--font-family-montserrat)',
            fontWeight: '400',
            color: 'var(--white)',
            fontSize: '28px',
            letterSpacing: '-1.4px',
            lineHeight: '50px',
            marginBottom: '27px',
          }}
        >
          {description}
        </Typography>

        {/* title */}
        <Typography
          sx={{
            fontFamily: 'var(--font-family-montserrat)',
            fontWeight: '400',
            color: 'var(--iron)',
            fontSize: '22PX',
            letterSpacing: '0',
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default StudyCaseOpenDateSection;
