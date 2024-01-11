import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Box, Fab, Typography } from '@mui/material';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import { useSelector } from 'react-redux';

import { MARKETPLACE_GET_ARTIST_CARD_DETAILS_SUCCESS } from '../../../constants/marketplaceConstants';
import {
  getArtistsCards,
  getMarketplaceArtistCardStatus,
} from '@/store/reducers/marketplaceReducer';
import { MarketplaceWallCard } from '../blocks/MarketplaceWallCard';

export const WallCardsCarousel = () => {
  const artistCardsDetails = useSelector(getArtistsCards);
  const artistCardFetchStatus = useSelector(getMarketplaceArtistCardStatus);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

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
      {
        breakpoint: 1024,
        settings: {
          centerPadding: '60px',
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 834,
        settings: {
          centerPadding: '35px',
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 820,
        settings: {
          centerPadding: '25px',
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 810,
        settings: {
          centerPadding: '25px',
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: '5px',
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: '60px',
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 428,
        settings: {
          centerPadding: '23px',
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 414,
        settings: {
          centerPadding: '18px',
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 390,
        settings: {
          centerPadding: '6px',
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          centerPadding: '0px',
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
          top: isOpen ? '-365px' : '-50px',
          display: {
            xs: 'flex',
            md: 'none',
          },
          alignItems: 'center',
          transition: 'top 0.8s',
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
            fontWeight: '700 !important',
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
          bottom: isOpen ? 0 : '-310px',
          transition: 'bottom 0.8s',
        }}
      >
        <Slider {...settings}>
          {artistCardsDetails.map((wxll) => {
            const imageCollection = _.get(wxll, 'feature_image', []) || [];
            const imageLocation =
              _.get(imageCollection, '[0].location', '') || '';

            return (
              <MarketplaceWallCard
                key={wxll.id}
                wallImageSrc={imageLocation}
                status={wxll.status}
                budget={wxll.offered}
                location={wxll.title}
                state={`${wxll.city}, ${wxll.state}`}
                area={wxll.area}
                dimension={wxll.dimension}
                slug={wxll.slug}
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
