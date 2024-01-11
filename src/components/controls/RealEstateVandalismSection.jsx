import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { AntiGraffitiLogo, NanoslicLogo } from '../icons';

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
      textAlign: 'center',
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
      textAlign: 'center',
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
      textAlign: 'center',
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
      textAlign: 'center',
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
      textAlign: 'center',
      textTransform: 'capitalize',
    },
  },
}));

const RealEstateVandalismSection = () => {
  const classes = useStyles();

  return (
    <Box
      sx={{
        maxWidth: '923.58px',
        width: '100%',
        margin: '0 auto',
        padding: '0 20px',
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
          marginBottom: '16px',
          textAlign: 'center',
        }}
      >
        Mural Provisions
      </Typography>

      {/* title */}
      <Typography
        className={classes.sectionHeading}
        sx={{
          marginBottom: '16px',
        }}
      >
        Concerned about vandalism
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
          marginBottom: '40px',
          textAlign: 'center',
          maxWidth: '542px',
          width: '100%',
          margin: '0 auto 40px auto',
        }}
      >
        We offer services that will protect your work from vandalism and UV
        damage.
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            sm: 'row',
          },
          flexWrap: 'nowrap',
          justifyContent: 'center',
        }}
      >
        {/* item */}
        <Box
          sx={{
            flex: '0 1 auto',
            maxWidth: '418px',
            width: '100%',
            marginRight: {
              xs: '0',
              sm: '10px',
              md: '40px',
            },
          }}
        >
          {/* logo */}
          <Box
            sx={{
              width: '65px',
              margin: '0 auto',
              marginBottom: '32px',
            }}
          >
            <AntiGraffitiLogo />
          </Box>

          {/* title */}
          <Typography
            sx={{
              fontFamily: 'var(--font-family-montserrat)',
              fontWeight: '700',
              color: '#D8D8D8',
              fontSize: '24px',
              lineHeight: '1.2',
              marginBottom: '16px',
              textAlign: 'center',
            }}
          >
            Anti-Graffiti Coating
          </Typography>

          {/* description */}
          <Typography
            sx={{
              fontFamily: 'var(--font-family-montserrat)',
              fontWeight: '400',
              color: '#FFFFFF',
              fontSize: '16px',
              lineHeight: '2.4',
              textAlign: 'center',
            }}
          >
            A single-component, non-sacrificial siloxane coating that cures with
            atmospheric moisture and provides excellent graffiti resistance, UV
            resistance, and incredible cleanability in a fast-drying formula.
          </Typography>
        </Box>

        {/* item */}
        <Box
          sx={{
            flex: '0 1 auto',
            maxWidth: '418px',
            width: '100%',
            marginLeft: {
              xs: '0',
              sm: '10px',
              md: '40px',
            },
          }}
        >
          {/* logo */}
          <Box
            sx={{
              width: '210px',
              margin: '0 auto',
              marginTop: '15px',
              marginBottom: {
                xs: '20px',
                md: '60px',
              },
            }}
          >
            <NanoslicLogo />
          </Box>

          {/* title */}
          <Typography
            sx={{
              fontFamily: 'var(--font-family-montserrat)',
              fontWeight: '700',
              color: '#D8D8D8',
              fontSize: '24px',
              lineHeight: '1.2',
              marginBottom: '16px',
              textAlign: 'center',
            }}
          >
            Nanoslic
          </Typography>

          {/* description */}
          <Typography
            sx={{
              fontFamily: 'var(--font-family-montserrat)',
              fontWeight: '400',
              color: '#FFFFFF',
              fontSize: '16px',
              lineHeight: '2.4',
              textAlign: 'center',
            }}
          >
            Due to its hydrophobic and oleophobic properties, Nanoslic helps
            prevent corrosionby repelling water and chemicals that lead to
            corrosion.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default RealEstateVandalismSection;
