import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ImageSeven } from '../svg/images';
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

const RealEstateAnalyticsSection = () => {
  const classes = useStyles();

  return (
    <Box
      sx={{
        maxWidth: '1314px',
        width: '100%',
        padding: '0 20px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
        flexWrap: 'nowrap',
        alignItems: 'center',
      }}
    >
      {/* analytics */}
      <Box
        sx={{
          maxWidth: {
            xs: '100%',
            lg: '642px',
          },
          width: '100%',
          padding: {
            xs: '0 0 40px 0',
            lg: '0 82px 0 0',
          },
        }}
      >
        {/* list color information */}
        <Box
          sx={{
            padding: '0',
            position: 'relative',
            marginBottom: '20px',
            height: '75px',
            width: '100%',
          }}
        >
          <Box
            sx={{
              padding: {
                xs: '0 0 0 30px',
                sm: '0 0 0 0',
              },
              position: {
                sm: 'absolute',
              },
              left: {
                sm: '50%',
              },
              transform: {
                sm: 'translateX(-50%)',
              },
            }}
          >
            {/* color text */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                marginBottom: '5px',
              }}
            >
              <Box
                sx={{
                  width: '12px',
                  height: '12px',
                  backgroundColor: '#e164a7',
                  borderRadius: '6px',
                }}
              ></Box>

              <Typography
                sx={{
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-family-montserrat)',
                  fontSize: '14px',
                  fontWeight: '700',
                  fontStyle: 'normal',
                  paddingLeft: '11px',
                }}
              >
                Property Value
              </Typography>
            </Box>

            {/* color text */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                marginBottom: '5px',
              }}
            >
              <Box
                sx={{
                  width: '12px',
                  height: '12px',
                  backgroundColor: '#C31FE6',
                  borderRadius: '6px',
                }}
              ></Box>

              <Typography
                sx={{
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-family-montserrat)',
                  fontSize: '14px',
                  fontWeight: '700',
                  fontStyle: 'normal',
                  paddingLeft: '11px',
                }}
              >
                Vacancy Rate
              </Typography>
            </Box>

            {/* color text */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                marginBottom: '5px',
                minWidth: '100%',
              }}
            >
              <Box
                sx={{
                  flex: '0 1 auto',
                  width: '12px',
                  height: '12px',
                  backgroundColor: '#64E1DC',
                  borderRadius: '6px',
                }}
              ></Box>

              <Typography
                sx={{
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-family-montserrat)',
                  fontSize: '14px',
                  fontWeight: '700',
                  fontStyle: 'normal',
                  paddingLeft: '11px',
                }}
              >
                Views / Visits to Mural/property
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* analytics image */}
        <Box
          sx={{
            p: '30px',
            maxWidth: {
              xs: '100%',
              md: '500px',
              lg: '560px',
            },
            width: '100%',
            background:
              'linear-gradient(#121c36, #121c36) padding-box, linear-gradient(144deg, rgba(0,200,200,1) 0%, rgba(18,28,54,1) 34%, rgba(18,28,54,1) 70%, rgba(85,126,252,1) 100%) border-box',
            borderRadius: '32px',
            border: '1px solid transparent',
          }}
        >
          <ImageSeven />
        </Box>
      </Box>

      {/* content */}
      <Box
        sx={{
          maxWidth: {
            xs: '100%',
            md: '472px',
            lg: '672px',
          },
          width: '100%',
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
          }}
        >
          It Starts with Your Property
        </Typography>

        {/* title */}
        <Typography
          className={classes.sectionHeading}
          sx={{
            marginBottom: '20px',
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
            fontSize: {
              xs: '14px',
              md: '16px',
            },
            lineHeight: '2.4',
            marginBottom: '32px',
          }}
        >
          With our real-time analytics, the public is able to easily find your
          location and murals you host, but it provides both the real estate
          owner and the artist with insight on how murals are working in your
          location.
        </Typography>

        {/* text checked */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            alignItems: 'center',
            marginBottom: '24px',
          }}
        >
          <TickIcon />

          <Typography
            component="h5"
            sx={{
              fontFamily: 'var(--font-family-montserrat)',
              fontWeight: '700',
              color: 'var(--white)',
              fontSize: '14px',
              lineHeight: '2',
              paddingLeft: '20px',
            }}
          >
            Foot traffic heat maps
          </Typography>
        </Box>

        {/* text checked */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            alignItems: 'center',
            marginBottom: '24px',
          }}
        >
          <TickIcon />

          <Typography
            component="h5"
            sx={{
              fontFamily: 'var(--font-family-montserrat)',
              fontWeight: '700',
              color: 'var(--white)',
              fontSize: '14px',
              lineHeight: '2',
              paddingLeft: '20px',
            }}
          >
            Monthly KPIs for measuring public interaction
          </Typography>
        </Box>

        {/* text checked */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            alignItems: 'center',
          }}
        >
          <TickIcon />

          <Typography
            component="h5"
            sx={{
              fontFamily: 'var(--font-family-montserrat)',
              fontWeight: '700',
              color: 'var(--white)',
              fontSize: '14px',
              lineHeight: '2',
              paddingLeft: '20px',
            }}
          >
            Prove effectiveness of community campaigns like scavenger hunts and
            murral festivals
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default RealEstateAnalyticsSection;
