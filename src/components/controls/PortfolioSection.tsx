import { Box, Typography, Container } from '@mui/material';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
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
  artist_name: {
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

interface PortfolioSectionProps {
  gallery?: GalleryImage[];
  artistName?: string;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  gallery = [],
  artistName = '',
}) => {
  const classes = useStyles();

  if (gallery === undefined || gallery.length === 0) {
    return null;
  }

  return (
    <Container
      maxWidth={false}
      sx={{
        position: 'relative',
        padding: '0px 150px !important'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          ease: 'easeOut',
          duration: 0.5,
          delay: 0.2,
        }}
        viewport={{ once: true, amount: 0 }}
      >
        <Typography
          sx={{
            marginBottom: '16px',
            fontFamily: 'Roboto',
            fontWeight: '400',
            fontStyle: 'normal',
            fontSize: '22px',
            textTransform: 'lowercase',
            lineHeight: '26px',
          }}
        >
          portfolio
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          ease: 'easeOut',
          duration: 0.5,
          delay: 0.8,
        }}
        viewport={{ once: true, amount: 0 }}
      >
        <Typography
          variant="h2"
          className={classes.sectionHeading}
          sx={{
            marginBottom: '60px',
          }}
        >
          {artistName}'s murals
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          ease: 'easeOut',
          duration: 0.5,
          delay: 0.8,
        }}
        viewport={{ once: true, amount: 0 }}
      >
        <Box>
          <MuralsSlider murals={gallery} />
        </Box>
      </motion.div>
      {/* <Box>
        <Masonry
            breakpointCols={{
              default: 2,
              1140: 3,
              912: 2,
              768: 1,
            }}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
          {gallery.map((image, index) => (
            <Box key={index}>
              <Box sx={{ position: 'relative' }} className={classes.wrapGrid}>
                <img
                  src={cloudflareImage(image.location)}
                  alt={image.title}
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                  }}
                />
                {(image.title || image.address) && (
                  <Group3316>
                    {image.title && (
                      <Typography className={classes.artist_name}>
                        {image.title}
                      </Typography>
                    )}
                    {image.address && (
                      <Location>
                        <Typography className={classes.artistLocation}>
                          {image.address}
                        </Typography>
                      </Location>
                    )}
                  </Group3316>
                )}
              </Box>
            </Box>
          ))}
        </Masonry>
      </Box> */}

      {/* blur */}
      
    </Container>
  );
};

export default PortfolioSection;

PortfolioSection.propTypes = {
  gallery: PropTypes.array,
};

PortfolioSection.defaultProps = {
  gallery: [],
};

const Group3316 = styled.div`
  opacity: 0;
  position: absolute;
  bottom: 20px;
  right: 20px;
  left: 20px;
  padding: 15.5px 20px;
  background-color: #00000069;
  backdrop-filter: blur(40px) brightness(100%);
  -webkit-backdrop-filter: blur(40px) brightness(100%);
  text-align: left;
  border-radius: 10px;
  transition: opacity 0.5s;
  text-overflow: ellipsis;
  max-height: 200px;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const Location = styled.div`
  ${ValignTextMiddle}
  ${MontserratBoldWhite16px}
  letter-spacing: 0;
  line-height: 90px;
  white-space: normal;
`;
