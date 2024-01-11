import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import { VerifiedBadgeIcon } from '@/components/icons';
import useWindowSize from '@/utility/useWindowSize';

const useStyles = makeStyles((theme: any) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.only('xl')]: {
      marginBottom: '100px',
      gap: 30,
    },
    [theme.breakpoints.only('lg')]: {
      marginBottom: '80px',
      gap: 30,
    },
    [theme.breakpoints.only('md')]: {
      marginBottom: '60px',
      gap: 20,
    },
    [theme.breakpoints.only('sm')]: {
      marginBottom: '50px',
      gap: 20,
    },
    [theme.breakpoints.only('xs')]: {
      marginBottom: '40px',
      gap: 20,
    },
  },
  name: {
    fontFamily: 'var(--font-family-formula-condensed)',
    fontStyle: 'normal',
    textTransform: 'uppercase',
    fontWeight: 700,
    lineHeight: '1.1',
    letterSpacing: '4px',
    backgroundClip: 'text',
    leadingTrim: 'both',
    textEdge: 'cap',
    [theme.breakpoints.only('xl')]: {
      fontSize: '100px',
    },
    [theme.breakpoints.only('lg')]: {
      fontSize: '100px',
    },
    [theme.breakpoints.only('md')]: {
      fontSize: '90px',
      textAlign: 'left',
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: '80px',
      textAlign: 'left',
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: '70px',
      textAlign: 'left',
    },
  },
  glowText: {
    backgroundImage:
      '-webkit-linear-gradient(151deg, #D8D8D8 36.81%, #5700FF 115.71%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  verified: {
    backgroundColor: 'var(--alto2)',
    cursor: 'pointer',
    [theme.breakpoints.only('xl')]: {
      width: 45,
      height: 45,
    },
    [theme.breakpoints.only('lg')]: {
      width: 45,
      height: 45,
    },
    [theme.breakpoints.only('md')]: {
      width: 30,
      height: 30,
    },
    [theme.breakpoints.only('sm')]: {
      width: 30,
      height: 30,
    },
    [theme.breakpoints.only('xs')]: {
      width: 30,
      height: 30,
    },
  },
}));

interface ArtistVerifiedNameProps {
  verified: boolean;
  children: React.ReactNode;
}

const ArtistVerifiedName: React.FC<ArtistVerifiedNameProps> = ({
  verified,
  children,
}) => {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);

  const handlePopoverOpen = () => {
    setIsOpen(!isOpen);
  };

  const handlePopoverClose = () => {
    setIsOpen(false);
  };

  return (
    <Box className={classes.root}>
      <Box
        className={classes.name}
        sx={{
          marginBottom: {
            xs: '6px',
            sm: '0',
          },
          // color: 'transparent'
        }}
      >
        <h1 className={classes.glowText}>{children}</h1>
      </Box>

      <Box
        sx={{
          position: 'relative',
        }}
      >
        {/* popover */}
        <Box
          sx={{
            position: 'absolute',
            zIndex: 2,
            left: {
              xs: '-115px',
              md: '-73px',
              lg: '-73px',
              xl: '-73px',
            },
            right: {
              xs: '0',
              sm: '-73px',
              md: '-73px',
              lg: '-73px',
            },
            top: {
              xs: '-43px',
              sm: '-50px',
            },
            opacity: isOpen ? 1 : 0,
            transition: '0.4s',
          }}
        >
          <Box
            sx={{
              backgroundColor: '#FFF',
              p: '8px',
              borderRadius: '4px',
            }}
          >
            <Typography
              sx={{
                color: '#000',
                fontFamily: 'var(--font-family-montserrat)',
                lineHeight: 1.5,
                fontWeight: '600',
                fontStyle: 'normal',
                fontSize: {
                  xs: '8px',
                  sm: '12px',
                },
                textAlign: 'center',
              }}
            >
              This artist has been verified
            </Typography>
          </Box>

          {/* arrow */}
          <Box
            sx={{
              width: 0,
              height: 0,
              borderLeft: '15px solid transparent',
              borderRight: '15px solid transparent',
              borderTop: '15px solid #fff',
              marginTop: {
                xs: '-6px',
                sm: '-4px',
              },
              borderRadius: '6px',
              marginLeft: {
                xs: '95%',
                sm: '50%',
              },
              transform: {
                xs: 'translateX(-90%)',
                sm: 'translateX(-50%)',
              },
            }}
          ></Box>
        </Box>

        {/* icon image */}
        {verified && (
          <Box
            sx={{
              cursor: 'pointer',
              position: 'relative',
              zIndex: 8,
              width: '45px',
              height: '45px',
              marginBottom: '12px',
              marginLeft: '24px',
            }}
            onClick={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <VerifiedBadgeIcon height={45} width={45} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ArtistVerifiedName;
