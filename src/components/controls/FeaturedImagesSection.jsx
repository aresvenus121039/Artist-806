import React, { useState } from 'react';
import { Box, Container, Grid, Modal } from '@mui/material';
import _ from 'lodash';

import FeaturedSliderCard from './FeaturedSliderCard';
import StreetViewContainer from './StreetViewContainer';
import LocationMapContainer from './LocationMapContainer';
import { cloudflareImage } from '@/utility/images';

const locationData = (coordinates) => ({
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates,
      },
      properties: {
        title: 'Wall Location',
        description: 'Wall Location',
        image: cloudflareImage(
          'https://cdn.animaapp.com/projects/6183b51d6b5cbed22d564e6f/releases/61850ffff59ce59ffa02723a/img/rectangle-77@2x.png'
        ),
        entity: 'locationNoPhoto',
      },
    },
  ],
});

const MapModalContainer = (props) => {
  const { isOpen = false, handleClose, children } = props;

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box
        sx={{
          position: 'fixed',
          zIndex: 3,
          top: '50%',
          left: '50%',
          top: {
            xs: '80px',
            sm: '100px',
          },
          left: {
            xs: '50px',
            sm: '100px',
          },
          right: {
            xs: '50px',
            sm: '100px',
          },
          bottom: {
            xs: '80px',
            sm: '100px',
          },
          backgroundColor: '#FFFFFF',
        }}
      >
        {children}
      </Box>
    </Modal>
  );
};

const FeaturedImagesSection = ({
  feature_image,
  createdAt,
  coordinates = [],
}) => {
  const [isMapModal, setIsMapModal] = useState(false);
  const longitude = _.get(coordinates, [0], 0) || 0;
  const latitude = _.get(coordinates, [1], 0) || 0;
  return (
    <Container maxWidth="xl">
      <Grid container spacing={{ xs: 10, sm: 3, md: 4, lg: 4, xl: 4 }}>
        <Grid item xs={12} sm={12} md={8}>
          <FeaturedSliderCard image={feature_image} createdAt={createdAt} />
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          sx={{
            margin: { xs: '-60px auto auto auto', sm: '0px auto auto auto' },
          }}
        >
          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
            <Grid item xs={6} md={12}>
              <Box
                sx={{
                  width: '100%',
                  height: {
                    xs: '130px',
                    sm: '215px',
                  },
                }}
              >
                <Box
                  onClick={() => setIsMapModal(true)}
                  sx={{
                    width: '100%',
                    height: '100%',
                    borderRadius: {
                      xs: '8px 0 0 8px',
                      sm: '8px 0 0 8px',
                      md: '0 8px 8px 0',
                      lg: '0 8px 8px 0',
                      xl: '0 8px 8px 0',
                    },
                    overflow: 'hidden',
                  }}
                >
                  <LocationMapContainer
                    longitude={longitude}
                    latitude={latitude}
                    width="100%"
                    height="100%"
                    isRounded={false}
                    markerData={locationData([longitude, latitude])}
                    pitch={54.0}
                    zoom={15.01}
                    bearing={0.0}
                    mapStyle="dark-v10"
                  />
                </Box>
                <MapModalContainer
                  isOpen={isMapModal}
                  handleClose={() => setIsMapModal(false)}
                >
                  <LocationMapContainer
                    longitude={longitude}
                    latitude={latitude}
                    width="100%"
                    height="100%"
                    isRounded={false}
                    markerData={locationData([longitude, latitude])}
                    pitch={0}
                    zoom={11}
                  />
                </MapModalContainer>
              </Box>
            </Grid>

            <Grid item xs={6} md={12}>
              <StreetViewContainer
                lat={latitude}
                long={longitude}
                styleWrap={{
                  width: '100%',
                  height: {
                    xs: '130px',
                    sm: '215px',
                  },
                  borderRadius: {
                    xl: '0 8px 8px 0',
                    lg: '0 8px 8px 0',
                    md: '0 8px 8px 0',
                    sm: '0 8px 8px 0',
                    xs: '0 8px 8px 0',
                  },
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FeaturedImagesSection;
