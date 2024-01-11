import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {
  ConstructionIcon,
  HotelIcon,
  MultifamilyResidentialIcon,
  OfficeIcon,
  ParkingGaragesIcon,
  RetailIcon,
  SchoolsIcon,
  WarehouseIcon,
} from '../icons';

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

const RealEstateCanvasSection = () => {
  const classes = useStyles();

  return (
    <Box
      sx={{
        backgroundColor: '#101A36',
        padding: '150px 0',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          width: '268px',
          height: '268px',
          backgroundColor: '#B14EFF',
          filter: 'blur(200px)',
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 2,
        }}
      ></Box>

      <Box
        sx={{
          width: '268px',
          height: '268px',
          backgroundColor: '#6AB3DF',
          filter: 'blur(200px)',
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 2,
        }}
      ></Box>

      <Box
        sx={{
          maxWidth: '1241.77px',
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
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* content */}
        <Box
          sx={{
            flex: '0 1 auto',
            maxWidth: {
              xs: '100%',
              md: '542.78px',
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
            Murals Fit in Anywhere
          </Typography>

          {/* title */}
          <Typography
            className={classes.sectionHeading}
            sx={{
              maxWidth: {
                xs: ' 100%',
                md: '486px',
                marginBottom: '24px',
              },
            }}
          >
            Got a blank wall? That’s a canvas
          </Typography>

          {/* description 1 */}
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
            }}
          >
            There are plenty of opportunities for mural placement that will
            inspire, uplift, and generate a greater sense of community.
          </Typography>

          {/* description 2 */}
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
            }}
          >
            You’re certainly not limited by wall or size, so think outside the
            box!
          </Typography>
        </Box>

        {/* canvas */}
        <Box
          sx={{
            flex: '0 1 auto',
            maxWidth: {
              xs: '100%',
              md: '698.99px',
            },
            width: '100%',
            padding: {
              xs: '40px 0 0 0',
              md: '0 0 0 20px',
            },
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          {/* item */}
          <Box
            sx={{
              flex: '0 1 auto',
              maxWidth: {
                xs: '50%',
                sm: '25%',
              },
              width: '100%',
              padding: {
                xs: '0 20px 20px 0',
                md: '0 36px 36px 0',
              },
            }}
          >
            {/* icon */}
            <Box
              sx={{
                height: '120px',
                display: 'flex',
                padding: '28px',
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: '100%',
                width: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                borderRadius: '12px',
              }}
            >
              <HotelIcon />
            </Box>

            {/* title */}
            <Typography
              sx={{
                color: '#FFFFFF',
                fontFamily: 'var(--font-family-montserrat)',
                fontSize: '14px',
                fontWeight: '600',
                fontStyle: 'normal',
                marginTop: '16px',
                textAlign: 'center',
              }}
            >
              Hotels
            </Typography>
          </Box>

          {/* item */}
          <Box
            sx={{
              flex: '0 1 auto',
              maxWidth: {
                xs: '50%',
                sm: '25%',
              },
              width: '100%',
              padding: {
                xs: '0 20px 20px 0',
                md: '0 36px 36px 0',
              },
            }}
          >
            {/* icon */}
            <Box
              sx={{
                height: '120px',
                display: 'flex',
                padding: '28px',
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: '100%',
                width: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                borderRadius: '12px',
              }}
            >
              <ConstructionIcon />
            </Box>

            {/* title */}
            <Typography
              sx={{
                color: '#FFFFFF',
                fontFamily: 'var(--font-family-montserrat)',
                fontSize: '14px',
                fontWeight: '600',
                fontStyle: 'normal',
                marginTop: '16px',
                textAlign: 'center',
              }}
            >
              Construction
            </Typography>
          </Box>

          {/* item */}
          <Box
            sx={{
              flex: '0 1 auto',
              maxWidth: {
                xs: '50%',
                sm: '25%',
              },
              width: '100%',
              padding: {
                xs: '0 20px 20px 0',
                md: '0 36px 36px 0',
              },
            }}
          >
            {/* icon */}
            <Box
              sx={{
                height: '120px',
                display: 'flex',
                padding: '28px',
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: '100%',
                width: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                borderRadius: '12px',
              }}
            >
              <OfficeIcon />
            </Box>

            {/* title */}
            <Typography
              sx={{
                color: '#FFFFFF',
                fontFamily: 'var(--font-family-montserrat)',
                fontSize: '14px',
                fontWeight: '600',
                fontStyle: 'normal',
                marginTop: '16px',
                textAlign: 'center',
              }}
            >
              Office
            </Typography>
          </Box>

          {/* item */}
          <Box
            sx={{
              flex: '0 1 auto',
              maxWidth: {
                xs: '50%',
                sm: '25%',
              },
              width: '100%',
              padding: {
                xs: '0 20px 20px 0',
                md: '0 36px 36px 0',
              },
            }}
          >
            {/* icon */}
            <Box
              sx={{
                height: '120px',
                display: 'flex',
                padding: '28px',
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: '100%',
                width: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                borderRadius: '12px',
              }}
            >
              <WarehouseIcon />
            </Box>

            {/* title */}
            <Typography
              sx={{
                color: '#FFFFFF',
                fontFamily: 'var(--font-family-montserrat)',
                fontSize: '14px',
                fontWeight: '600',
                fontStyle: 'normal',
                marginTop: '16px',
                textAlign: 'center',
              }}
            >
              Warehouse
            </Typography>
          </Box>

          {/* item */}
          <Box
            sx={{
              flex: '0 1 auto',
              maxWidth: {
                xs: '50%',
                sm: '25%',
              },
              width: '100%',
              padding: {
                xs: '0 20px 20px 0',
                md: '0 36px 36px 0',
              },
            }}
          >
            {/* icon */}
            <Box
              sx={{
                height: '120px',
                display: 'flex',
                padding: '28px',
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: '100%',
                width: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                borderRadius: '12px',
              }}
            >
              <MultifamilyResidentialIcon />
            </Box>

            {/* title */}
            <Typography
              sx={{
                color: '#FFFFFF',
                fontFamily: 'var(--font-family-montserrat)',
                fontSize: '14px',
                fontWeight: '600',
                fontStyle: 'normal',
                marginTop: '16px',
                textAlign: 'center',
              }}
            >
              Multifamily Residential
            </Typography>
          </Box>

          {/* item */}
          <Box
            sx={{
              flex: '0 1 auto',
              maxWidth: {
                xs: '50%',
                sm: '25%',
              },
              width: '100%',
              padding: {
                xs: '0 20px 20px 0',
                md: '0 36px 36px 0',
              },
            }}
          >
            {/* icon */}
            <Box
              sx={{
                height: '120px',
                display: 'flex',
                padding: '28px',
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: '100%',
                width: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                borderRadius: '12px',
              }}
            >
              <ParkingGaragesIcon />
            </Box>

            {/* title */}
            <Typography
              sx={{
                color: '#FFFFFF',
                fontFamily: 'var(--font-family-montserrat)',
                fontSize: '14px',
                fontWeight: '600',
                fontStyle: 'normal',
                marginTop: '16px',
                textAlign: 'center',
              }}
            >
              Parking Garages
            </Typography>
          </Box>

          {/* item */}
          <Box
            sx={{
              flex: '0 1 auto',
              maxWidth: {
                xs: '50%',
                sm: '25%',
              },
              width: '100%',
              padding: {
                xs: '0 20px 20px 0',
                md: '0 36px 36px 0',
              },
            }}
          >
            {/* icon */}
            <Box
              sx={{
                height: '120px',
                display: 'flex',
                padding: '28px',
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: '100%',
                width: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                borderRadius: '12px',
              }}
            >
              <RetailIcon />
            </Box>

            {/* title */}
            <Typography
              sx={{
                color: '#FFFFFF',
                fontFamily: 'var(--font-family-montserrat)',
                fontSize: '14px',
                fontWeight: '600',
                fontStyle: 'normal',
                marginTop: '16px',
                textAlign: 'center',
              }}
            >
              Retail & Restaurant
            </Typography>
          </Box>

          {/* item */}
          <Box
            sx={{
              flex: '0 1 auto',
              maxWidth: {
                xs: '50%',
                sm: '25%',
              },
              width: '100%',
              padding: {
                xs: '0 20px 20px 0',
                md: '0 36px 36px 0',
              },
            }}
          >
            {/* icon */}
            <Box
              sx={{
                height: '120px',
                display: 'flex',
                padding: '28px',
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: '100%',
                width: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                borderRadius: '12px',
              }}
            >
              <SchoolsIcon />
            </Box>

            {/* title */}
            <Typography
              sx={{
                color: '#FFFFFF',
                fontFamily: 'var(--font-family-montserrat)',
                fontSize: '14px',
                fontWeight: '600',
                fontStyle: 'normal',
                marginTop: '16px',
                textAlign: 'center',
              }}
            >
              Schools & Universities
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RealEstateCanvasSection;
