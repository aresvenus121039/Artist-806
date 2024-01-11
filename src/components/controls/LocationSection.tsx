import React, { useEffect } from 'react';
import _ from 'lodash';
import { motion } from 'framer-motion';
import { Box, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import LocationMapContainer2 from './LocationMapContainer2';
import { getStateAbbr } from '@/utility/usaStateAbbr';
import { Theme } from '@mui/system';
import { Artist, LocationMarkerData } from '../../types';

interface LocationSectionProps {
  artist: Artist;
}

const useStyles = makeStyles((theme: Theme) => ({
  sectionHeading: {
    color: '#F1F0F0',
    fontSize: '50px',
    fontWeight: 700,
    fontFamily: 'var(--font-family-formula-condensed)',
    fontStyle: 'normal',
    letterSpacing: '2px',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  subHeading: {
    color: '#F1F0F0',
    fontStyle: 'normal',
    fontFamily: 'var(--font-family-montserrat)',
    fontWeight: 300,
    whiteSpace: 'normal',
    textAlign: 'center',
    marginTop: '16px',
    marginBottom: '8px',
    [theme.breakpoints.only('xs')]: {
      fontSize: 'var(--font-size-l)',
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: 'var(--font-size-l)',
    },
    [theme.breakpoints.only('md')]: {
      fontSize: 'var(--font-size-l)',
    },
    [theme.breakpoints.only('lg')]: {
      fontSize: 'var(--font-size-l)',
    },
    [theme.breakpoints.only('xl')]: {
      fontSize: '22px',
    },
  },
}));

const LocationSection: React.FC<LocationSectionProps> = ({ artist }) => {
  const classes = useStyles();

  const { address = {} } = artist;
  const artistImageCollection = _.get(artist, 'artist_image', []) || [];
  const [artist_image] = artistImageCollection.filter(
    (image) => image.fieldname && image.location
  );
  const artistImageLocation = _.get(artist_image, 'location', '') || '';
  const artistCoordinates = _.get(artist, 'location.coordinates', []) as [
    number,
    number
  ];
  const artistState = _.get(artist, 'address.state', '') || '';
  const artistCity = _.get(artist, 'address.city', '') || '';
  const stateAbbr = getStateAbbr(artistState);

  const locationData: LocationMarkerData = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: artistCoordinates,
        },
        properties: {
          title: address.city,
          image: artistImageLocation,
          entity: 'locationNoCity',
        },
      },
    ],
  };

  if (address === undefined) return null;

  return (
    <Container maxWidth={false}>
      <Box
        sx={{
          marginBottom: '20px',
        }}
      >
        {/* <Typography className={classes.sectionHeading} variant="h2">
          Location
        </Typography> */}
        {/* <Typography className={classes.subHeading} variant="h4">
            {`${artistCity}, ${stateAbbr ? stateAbbr : artistState}`}
        </Typography> */}
      </Box>
      <Box
        sx={{
          height: {
            xs: '360px',
            sm: '450px',
            lg: '600px',
            xl: '768px',
          },
          width: '100%',
          position: 'relative',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            fade: 'fadeIn',
            duration: 0.5,
            delay: 0.3,
          }}
          viewport={{ once: true, amount: 0 }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              zIndex: 9,
            }}
          >
            <Typography className={classes.subHeading} variant="h4">
              {`${artist.artist_name}'s location`}
            </Typography>
            <Typography className={classes.sectionHeading} variant="h2">
              {`${artistCity}, ${stateAbbr ? stateAbbr : artistState}`}
            </Typography>
          </Box>
        </motion.div>
        <Box
          sx={{
            width: '268px',
            height: '268px',
            backgroundColor: '#B14EFF',
            filter: 'blur(60px) opacity(0.5);',
            position: 'absolute',
            left: 0,
            top: 0,
            zIndex: 0,
          }}
        ></Box>

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
            zIndex: 0,
          }}
        ></Box>

        <Box
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: '24px',
            overflow: 'hidden',
          }}
        >
          <LocationMapContainer2
            latitude={artistCoordinates[1]}
            longitude={artistCoordinates[0]}
            width={'100%'}
            height={'100%'}
            markerData={locationData}
            zoom={15.04}
            bearing={-128.61}
            pitch={55.01}
            mapStyle="dark-v10"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default LocationSection;
