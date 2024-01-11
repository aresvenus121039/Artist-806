import { Box, Typography, Container } from '@mui/material';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import React from 'react';
import PortfolioCard from './PortfolioCard';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';
import { cloudflareImage } from '@/utility/images';
import { ValignTextMiddle, MontserratBoldWhite16px } from './ArtistCard';
import MuralsSlider from './MuralsSlider';

const useStyles = makeStyles((theme: any) => ({
  sectionHeading: {
    fontSize: '50px',
    fontWeight: 700,
    fontFamily: 'var(--font-family-formula-condensed)',
    fontStyle: 'normal',
    letterSpacing: '2px',
    textTransform: 'uppercase',
  },
  artistName: {
    [theme.breakpoints.down('md')]: {
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      fontWeight: 900,
      fontSize: 'var(--font-size-l)',
      color: 'var(--white)',
      letterSpacing: 0,
      whiteSpace: 'wrap',
      wordBreak: 'break-word',
    },
    [theme.breakpoints.up('md')]: {
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      fontWeight: 900,
      fontSize: 'var(--font-size-xxxl)',
      color: 'var(--white)',
      letterSpacing: 0,
      whiteSpace: 'wrap',
      wordBreak: 'break-word',
    },
  },
  artistLocation: {
    [theme.breakpoints.down('md')]: {
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: 'var(--font-size-xs)',
      color: 'var(--white-42)',
      letterSpacing: 0,
      whiteSpace: 'normal',
      textTransform: 'uppercase',
    },
    [theme.breakpoints.up('md')]: {
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: 'var(--font-size-l)',
      color: 'var(--white-42)',
      letterSpacing: 0,
      whiteSpace: 'normal',
      textTransform: 'uppercase',
    },
  },
  wrapGrid: {
    '&:hover div': {
      opacity: 1,
    },
  },
}));

interface GalleryImage {
  title?: string;
  location: string;
  address?: string;
}

interface OtherArtistsSectionProps {
  gallery?: GalleryImage[];
  artistName?: string;
}

const OtherArtistsSection: React.FC<OtherArtistsSectionProps> = ({
  gallery = [],
  artistName = '',
}) => {
  const classes = useStyles();

  if (gallery === undefined || gallery.length === 0) {
    return null;
  }

  return (
    <Container
      maxWidth="xl"
      sx={{
        position: 'relative',
        mx: 'auto',
      }}
    >
      <Typography
        sx={{
          marginBottom: '16px',
          fontFamily: 'var(--font-family-montserrat)',
          fontWeight: '400',
          fontStyle: 'normal',
          fontSize: '22px',
          textTransform: 'lowercase',
        }}
      >
        artists
      </Typography>

      <Typography
        variant="h2"
        className={classes.sectionHeading}
        sx={{
          marginBottom: '60px',
        }}
      >
        artists you might like
      </Typography>

      <Box>
        <MuralsSlider murals={gallery} />
      </Box>

      {/* blur */}
      <Box
        sx={{
          width: '268px',
          height: '268px',
          backgroundColor: '#6AB3DF',
          filter: 'blur(60px) opacity(0.5);',
          position: 'absolute',
          right: 0,
          bottom: 0,
          zIndex: -10,
        }}
      ></Box>
    </Container>
  );
};

export default OtherArtistsSection;

OtherArtistsSection.propTypes = {
  gallery: PropTypes.array,
};

OtherArtistsSection.defaultProps = {
  gallery: [],
};
