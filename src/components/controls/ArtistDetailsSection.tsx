import React, { useState } from 'react';
import { motion } from 'framer-motion';
import _ from 'lodash';
import styled, { css } from 'styled-components';
import { makeStyles } from '@mui/styles';
import { Box, CardMedia, Typography, Container } from '@mui/material';
import Grid from '@mui/material/Grid';

import { cloudflareImage } from '@/utility/images';
import OptimizedImage from '@/components/OptimizedImage';
import ArtistVerifiedName from './ArtistVerifiedName';
import ArtistBio from './ArtistBio';
import ArtistArtStyle from './ArtistArtStyle';
import useWindowSize from '@/utility/useWindowSize';

interface ArtistDetailsSectionProps {
  artist: any; // Update the type of artist as per your requirements
}

const useStyles = makeStyles((theme: any) => ({
  heroImage: {
    objectFit: 'cover',
    borderRadius: '15px',
    width: '100%',
    [theme.breakpoints.only('xl')]: {
      height: '840px',
      marginBottom: '140px',
    },
    [theme.breakpoints.only('lg')]: {
      height: '720px',
      marginBottom: '120px',
    },
    [theme.breakpoints.only('md')]: {
      height: '640px',
      marginBottom: '100px',
    },
    [theme.breakpoints.only('sm')]: {
      height: '450px',
      marginBottom: '90px',
    },
    [theme.breakpoints.only('xs')]: {
      height: '450px',
      marginBottom: '80px',
    },
  },
  bio: {
    height: '580px',
    display: 'flex',
    gap: '28px',
    [theme.breakpoints.only('xl')]: {
      height: '580px',
    },
    [theme.breakpoints.only('lg')]: {
      height: '580px',
    },
    [theme.breakpoints.only('md')]: {
      height: 'auto',
      flexDirection: 'column',
    },
    [theme.breakpoints.only('sm')]: {
      height: 'auto',
      flexDirection: 'column',
    },
    [theme.breakpoints.only('xs')]: {
      height: 'auto',
      flexDirection: 'column',
    },
  },
  artStyle: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    width: '100%',
  },
}));

const ArtistDetailsSection: React.FC<ArtistDetailsSectionProps> = (props) => {
  const { artist } = props;
  const classes = useStyles();
  const size = useWindowSize();
  const width = size?.width || 0;

  const artistImageCollection = _.get(artist, 'artist_image', []) || [];
  const [artist_image] = artistImageCollection.filter(
    (image: { fieldname: any; location: any }) =>
      image.fieldname && image.location
  );
  const artistImageLocation = _.get(artist_image, 'location', '') || '';

  return (
    <>
      <Container maxWidth={false}>
        {/* artist name with verified badge */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            fade: 'fadeIn',
            duration: 0.3,
            delay: 0.2,
          }}
          viewport={{ once: true, amount: 0 }}
        >
          <ArtistVerifiedName verified={artist.is_verified}>
            {artist.artist_name}
          </ArtistVerifiedName>
        </motion.div>

        {/* artist hero image */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            fade: 'fadeIn',
            duration: 0.3,
            delay: 0.5,
          }}
          viewport={{ once: true, amount: 0 }}
        >
          {/* verified icon */}
          <Box
            sx={{
              position: 'absolute',
              top: '18px',
              right: '20px',
              display: {
                xs: 'block',
                sm: 'none', // hide on dekstop, move it to right
              },
            }}
          >
            <ArtistVerifiedName
              verified={width < 600 ? artist.is_verified : false}
            >
              {artist.name}
            </ArtistVerifiedName>
          </Box>
          <OptimizedImage
            alt={`${artist.name}`}
            title={`${artist.name}`}
            fill
            className={classes.heroImage}
            src={
              artistImageLocation ||
              'https://wxllspace-app.s3.us-east-2.amazonaws.com/assets/404/Astro.png'
            }
          />
        </motion.div>
      </Container>
      <Container maxWidth={false}>
        <Box className={classes.bio} sx={{ margin: '0px 100px' }}>
          <Grid container spacing={2}>
            <Grid item md={5} xs={6}>
              {/* profile picture */}
              <motion.div
                initial={{ opacity: 0, y: 50, height: '100%' }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  fade: 'fadeIn',
                  duration: 0.3,
                  delay: 0.7,
                }}
                viewport={{ once: true, amount: 0 }}
              >
                <CardMedia
                  component="img"
                  image={cloudflareImage(artistImageLocation)}
                  sx={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '24px',
                  }}
                />
              </motion.div>
            </Grid>

            <Grid item md={7} xs={6}>
              <Box
                sx={{
                  flex: '1 1 auto',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    fade: 'fadeIn',
                    duration: 0.3,
                    delay: 0.2,
                  }}
                  viewport={{ once: true, amount: 0 }}
                >
                  <Typography
                    component="h2"
                    sx={{
                      color: '#F1F0F0',
                      fontFamily: 'var(--font-family-formula-condensed)',
                      fontWeight: '700',
                      fontStyle: 'normal',
                      fontSize: '40px',
                      letterSpacing: '1.6px',
                      textTransform: 'capitalize',
                      lineHeight: '48px',
                    }}
                  >
                    Biography
                  </Typography>
                  <motion.div viewport={{ once: true, amount: 0 }}>
                    <ArtistBio>{artist.about}</ArtistBio>
                  </motion.div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    fade: 'fadeIn',
                    duration: 0.5,
                    delay: 0.9,
                  }}
                  viewport={{ once: true, amount: 0 }}
                >
                  <Box
                    className={classes.artStyle}
                    sx={{
                      flex: '0 1 auto',
                    }}
                  >
                    {artist.art_types && (
                      <Box>
                        <Typography
                          sx={{
                            color: '#F1F0F0',
                            fontFamily: 'var(--font-family-formula-condensed)',
                            fontWeight: '700',
                            fontStyle: 'normal',
                            fontSize: '22px',
                            marginBottom: '30px',
                            marginTop: '30px',
                            lineHeight: '26px',
                            letterSpacing: '0.88px',
                          }}
                        >
                          Art Style
                        </Typography>
                        <ArtistArtStyle artStyles={artist.art_types} />
                      </Box>
                    )}
                  </Box>
                </motion.div>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default ArtistDetailsSection;
