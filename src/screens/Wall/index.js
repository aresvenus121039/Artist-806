import { useEffect } from 'react';
import { Container, Grid, Skeleton } from '@mui/material';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import gtag from 'ga-gtag';

import FeaturedImagesSection from '@/components/controls/FeaturedImagesSection';
import WallDetailsSection from '@/components/controls/WallDetailsSection';
import WallCitySection from '@/components/controls/WallCitySection';
import ProcessSection from '@/components/controls/ProcessSection';
import SubmitProposalDesktop from '@/components/controls/SubmitProposalDesktop';
import { formatDate } from '@/utility';
import {
  WALL_GET_DETAILS_LOADING,
  WALL_GET_DETAILS_SUCCESS,
  WALL_GET_DETAILS_FAIL,
  WALL_GET_DETAILS_IDLE,
} from '@/constants/listingConstants';

import {
  selectListingDetails,
  requestStatus,
} from '@/store/reducers/listingReducers';

import { getListing } from '@/store/actions/listingActions';
import SubmitProposalPopup from '@/components/controls/SubmitProposalPopup';
import { useRouter } from 'next/router';
import { isAuthenticated } from '@/utility/auth';
import useMobile from '@/hooks/useMobile';

const Wall = (props) => {
  const { listingDetails } = props;
  const {
    color_scheme,
    amenities,
    subtitle,
    heading,
    paragraph,
    createdAt,
    approved,
    updatedAt,
  } = listingDetails || {};

  const coordinates = _.get(listingDetails, 'location.coordinates', []) || [];
  const info = _.get(listingDetails, 'info', {}) || {};
  const address = _.get(listingDetails, 'address', {}) || {};
  const wallImages = _.get(listingDetails, 'images', []) || [];
  const featuredImageLocation =
    _.get(listingDetails, 'feature_image', []) || [];
  const carousalImages = [...featuredImageLocation, ...wallImages];
  const title = listingDetails.info.title.replace(
    /(^\w{1})|(\s+\w{1})/g,
    (letter) => letter.toUpperCase()
  );

  const isMobile = useMobile();

  useEffect(() => {
    gtag('event', 'wall_view_per_visit', {
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [listingDetails]);

  return (
    <Box
      sx={{
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      {/* blur */}
      <Box
        sx={{
          width: '200px',
          height: '200px',
          backgroundColor: '#00C8C8',
          filter: 'blur(160px)',
          position: 'absolute',
          left: '50%',
          top: '1400px',
          zIndex: -100,
        }}
      />

      {/* blur */}
      <Box
        sx={{
          width: '268px',
          height: '268px',
          backgroundColor: '#B14EFF',
          filter: 'blur(160px)',
          position: 'absolute',
          right: '50%',
          top: '450px',
          zIndex: -100,
        }}
      />

      <Container
        maxWidth="xl"
        sx={{
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 2 }}
        >
          {/* Featured Images Section */}
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <Box sx={{ paddingTop: '8rem' }}>
              <FeaturedImagesSection
                feature_image={carousalImages}
                coordinates={coordinates}
                createdAt={createdAt}
              />
            </Box>
          </Grid>

          {/* Wall Details Section */}
          <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
            <Box sx={{ paddingTop: '2rem' }}>
              <WallDetailsSection
                dateDueDate={formatDate(info.start_end_date)}
                title={info.title}
                status={listingDetails.status}
                // location={
                //   address.api_address ? address.api_address : 'need to update'
                // }
                location={address.city + ', ' + address.state}
                dateListed={formatDate(createdAt)}
                surfaceArea={info.size + ' sqft'}
                totalProposal={null}
                wallArea={`${info.height}H x ${info.width}L`}
                brick={info.construction}
                scope={info.location_of_wall}
                direction={info.direction_face}
                categoryBuilding={info.property_type}
                color_scheme={color_scheme}
                textDescription={info.description}
                crypto={info.crypto}
                amenities={amenities}
                condition={info.condition}
                coordinates={coordinates}
                textAdditionalInfo={info.additional_info}
                wallType={info.wall_type}
                artStyles={info.art_styles}
                createdAt={createdAt}
                markerData={{
                  type: 'FeatureCollection',
                  features: [
                    {
                      type: 'Feature',
                      geometry: {
                        type: 'Point',
                        coordinates: coordinates,
                      },
                      properties: {
                        title: address.city,
                        image: null,
                      },
                    },
                  ],
                }}
              />
            </Box>
          </Grid>
          {/* Submit Proposal Form Section */}
          {
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              {!isMobile ? (
                <Box
                  sx={{
                    marginTop: '40px',
                  }}
                >
                  <SubmitProposalDesktop />
                </Box>
              ) : (
                <Box>
                  <SubmitProposalPopup />
                </Box>
              )}
            </Grid>
          }
        </Grid>
      </Container>

      {/* Wall City and Process Section */}
      <Box
        sx={{
          marginTop: {
            xs: '40px',
            md: '60px',
          },
          backgroundColor: '#101a36',
          padding: {
            xl: '5rem',
            lg: '24px',
            md: '24px',
            sm: '24px',
            xs: '24px',
          },
          overflowX: 'hidden',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* wall city section */}
        {subtitle && heading && paragraph && (
          <Box
            sx={{
              paddingTop: {
                xs: '5rem',
                sm: '5rem',
                md: '8rem',
                xl: '8rem',
                lg: '8rem',
              },
            }}
          >
            {/* TODO replace dummy data */}
            <WallCitySection
              wallImageSrc="https://cdn.animaapp.com/projects/6183b51d6b5cbed22d564e6f/releases/6187defd7b61585064796bb4/img/image-77639@1x.png"
              subtitle={subtitle}
              title={heading}
              description={paragraph}
            />
          </Box>
        )}

        {/* process section */}
        <Box
          sx={{
            marginTop: '8rem',
            paddingBottom: {
              xs: '5rem',
              sm: '5rem',
              md: '8rem',
              xl: '8rem',
              lg: '8rem',
              position: 'relative',
            },
          }}
        >
          {/* blur */}
          <Box
            sx={{
              width: '268px',
              height: '268px',
              backgroundColor: '#B14EFF',
              filter: 'blur(230px)',
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: -100,
            }}
          />

          {/* blur */}
          <Box
            sx={{
              width: '268px',
              height: '268px',
              backgroundColor: '#00C8C8',
              filter: 'blur(180px)',
              position: 'absolute',
              right: 0,
              top: 0,
              zIndex: -100,
            }}
          />

          <ProcessSection
            processImageSrc={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/mural+completed.svg`}
            subtitle="Streamline The Process"
            title="Why WXLLSPACE"
            description="Stop wasting precious time and energy pounding the streets. Browse the latest new mural commissions before they hit the open market. Connect directly with owners and decision-makers who control the space."
          />
        </Box>
      </Box>
    </Box>
  );
};

const ConnectedWallScreen = (props) => {
  const { listingDetails } = props;

  localStorage.setItem('listingDetails', JSON.stringify(listingDetails));
  const dispatch = useDispatch();

  dispatch({
    type: WALL_GET_DETAILS_SUCCESS,
    payload: listingDetails,
  });

  return <Wall listingDetails={listingDetails} />;
};

export default ConnectedWallScreen;
