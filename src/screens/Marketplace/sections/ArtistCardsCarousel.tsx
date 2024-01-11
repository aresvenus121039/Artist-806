import React, { useState } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { Box, Fab, Typography } from '@mui/material';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';

import { MARKETPLACE_GET_ARTIST_CARD_DETAILS_SUCCESS } from '@/constants/marketplaceConstants';
import {
  getArtistsCards,
  getMarketplaceArtistCardStatus,
} from '@/store/reducers/marketplaceReducer';

import { getStateAbbr } from '@/utility/usaStateAbbr';

import { ArtistCardSmall } from '../blocks/ArtistCardSmall';

interface Artist {
  id: number;
  artist_image: Array<{
    location: string;
  }>;
  address: {
    state: string;
    city: string;
  };
  name: string;
  artist_name: string;
  slug: string;
  is_ready: boolean;
  rate_per_square_foot_in_USD: number;
  is_verified: boolean;
}

interface ArtistCardsCarouselProps {
  artists?: Artist[];
}

export const ArtistCardsCarousel: React.FC<ArtistCardsCarouselProps> = ({
  artists = [],
}) => {
  const artistCardsDetails = useSelector(getArtistsCards);
  const artistCardFetchStatus = useSelector(getMarketplaceArtistCardStatus);

  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '30px',
    centerMode: true,
    className: 'center',
    responsive: [
      // ... rest of the settings ...
    ],
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <Fab
        sx={{
          background:
            'linear-gradient(79.45deg, #5700FF 6.96%, #64E1DC 108.67%) !important',
          color: '#FFFFFF',
          position: 'absolute',
          zIndex: 9,
          left: '20px',
          top: isOpen ? '-180px' : '-50px',
          display: {
            xs: 'flex',
            md: 'none',
          },
          alignItems: 'center',
          transition: 'top 0.6s',
        }}
        variant="extended"
        onClick={() => setIsOpen(!isOpen)}
        size="small"
      >
        <ArtTrackIcon sx={{ mr: '8px' }} />
        <Typography
          sx={{
            fontFamily: 'var(--font-family-montserrat)',
            fontSize: '12px !important',
            fontWeight: 700,
            fontStyle: 'normal',
            textTransform: 'capitalize',
          }}
        >
          Show List
        </Typography>
      </Fab>

      <Box
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: isOpen ? 0 : '-200px',
          transition: 'bottom 0.6s',
        }}
      >
        <Slider {...settings}>
          {artists.map((artist) => {
            const artistImageCollection = artist.artist_image || [];
            const artistImageLocation =
              artistImageCollection[0]?.location || '';
            const artistState = artist.address.state || '';
            const artistCity = artist.address.city || '';
            const name = artist.name || '';
            const artist_name = artist.artist_name || '';
            const slug = artist.slug || '';
            const stateAbbr = getStateAbbr(artistState);

            return (
              <ArtistCardSmall
                key={artist.id}
                slug={slug}
                profileImage={artistImageLocation}
                name={name}
                artist_name={artist_name}
                location={`${artistCity}, ${
                  stateAbbr ? stateAbbr : artistState
                }`}
                status={artist.is_ready ? 'available' : 'busy'}
                rate={artist.rate_per_square_foot_in_USD}
                verified={artist.is_verified}
                loading={
                  artistCardFetchStatus !==
                  MARKETPLACE_GET_ARTIST_CARD_DETAILS_SUCCESS
                }
              />
            );
          })}
        </Slider>
      </Box>
    </Box>
  );
};

export default ArtistCardsCarousel;
