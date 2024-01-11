import React, { useEffect, useContext } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import {
  MARKETPLACE_GET_ARTIST_CARD_DETAILS_IDLE,
  MARKETPLACE_GET_ARTIST_CARD_DETAILS_SUCCESS,
} from '../../../constants/marketplaceConstants';
import {
  getArtistCardsDetails,
  getFeatured,
} from '@/store/actions/marketplaceActions';
import {
  getArtistsCards,
  getMarketplaceArtistCardStatus,
  selectArtistMarkers,
  selectWxllMarkers,
  selectArtistFilters,
  getIsFeatured,
  selectWallFilters,
} from '@/store/reducers/marketplaceReducer';

import { getStateAbbr } from '@/utility/usaStateAbbr';
import { MarketplaceMapContext } from '../../../contexts/MarketplaceMapContext';

import { MarketplaceWallCard } from '../blocks/MarketplaceWallCard';
import { ArtistCardSmall } from '../blocks/ArtistCardSmall';

const useStyles = makeStyles({
  root: {
    '&::-webkit-scrollbar': {
      width: '4.65px',
    },
    '&::-webkit-scrollbar-track': {
      background: 'transparent',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#FFFFFF',
      borderRadius: '100px',
      width: '4.65px',
      height: '49.37px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: '#FFFFFF',
    },
  },
});

interface ArtistListProps {
  list: any[];
  artistCardFetchStatus: string;
}

interface ArtistsListViewSectionProps {
  styleWrap?: React.CSSProperties;
}

const ArtistList = ({ list, artistCardFetchStatus }: ArtistListProps) => {
  const isFeatured = useSelector(getIsFeatured);
  const showFeaturedMessage =
    artistCardFetchStatus === MARKETPLACE_GET_ARTIST_CARD_DETAILS_SUCCESS &&
    isFeatured;

  return (
    <div style={{ width: '100%' }}>
      {showFeaturedMessage && (
        <FeaturedMessage>
          Ahhh...no one here. Check out some other featured artists nearby.
        </FeaturedMessage>
      )}
      {list.map((artist) => {
        const artistImageCollection = _.get(artist, 'artist_image', []) || [];
        const artistImageLocation =
          _.get(artistImageCollection, '[0].location', '') || '';
        const artistState = _.get(artist, 'address.state', '') || '';
        const artistCity = _.get(artist, 'address.city', '') || '';
        const name = _.get(artist, 'name', '') || '';
        const artist_name = _.get(artist, 'artist_name', '') || '';
        const slug = _.get(artist, 'slug', '') || '';
        const stateAbbr = getStateAbbr(artistState);
        const artist_address =
          _.get(artist, 'address.api_address', '') || 'address need to update';

        return (
          <ArtistCardSmall
            key={artist.id}
            slug={slug}
            profileImage={artistImageLocation}
            name={name}
            artist_name={artist_name}
            // location={artist_address}
            location={`${artistCity}, ${stateAbbr ? stateAbbr : artistState}`}
            status={artist.is_ready ? `available` : 'busy'}
            rate={artist.rate_per_square_foot_in_USD}
            verified={artist.is_verified}
            loading={
              artistCardFetchStatus !==
              MARKETPLACE_GET_ARTIST_CARD_DETAILS_SUCCESS
            }
          />
        );
      })}
    </div>
  );
};

const WallList = ({ list, artistCardFetchStatus }: ArtistListProps) => {
  const isFeatured = useSelector(getIsFeatured);
  const showFeaturedMessage =
    artistCardFetchStatus === MARKETPLACE_GET_ARTIST_CARD_DETAILS_SUCCESS &&
    isFeatured;

  return (
    <div style={{ width: '100%' }}>
      {showFeaturedMessage && (
        <FeaturedMessage>
          Ahhh…sorry. No walls in this area. Check out these others nearby.
        </FeaturedMessage>
      )}
      {list.map((wxll) => {
        const imageCollection = _.get(wxll, 'feature_image', []) || [];
        const imageLocation = _.get(imageCollection, '[0].location', '') || '';
        return (
          <MarketplaceWallCard
            key={wxll.id}
            wallImageSrc={imageLocation}
            status={wxll.status}
            budget={wxll.offered}
            location={wxll.title}
            // state={wxll?.api_address ? wxll?.api_address : 'need to update'}
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
    </div>
  );
};

const ArtistsListViewSection = (props: ArtistsListViewSectionProps) => {
  const { styleWrap } = props;
  const { viewport, getVisibleMarker, setVisibleMarkers, getSearchType } =
    useContext(MarketplaceMapContext);
  const searchType = getSearchType();
  const markerCoordinates = useSelector(
    searchType === 'walls' ? selectWxllMarkers : selectArtistMarkers
  );
  const dispatch = useDispatch();
  const artistCardsDetails = useSelector(getArtistsCards);
  const classes = useStyles();
  const timeoutRef: any = React.useRef(null);
  const artistCardFetchStatus = useSelector(getMarketplaceArtistCardStatus);
  const artistFilter = useSelector(selectArtistFilters);
  const wallfilter = useSelector(selectWallFilters);

  const handleGetArtistCardDetails = () => {
    const artistMarkersIds = getVisibleMarker();
    if (artistMarkersIds.length > 0) {
      setVisibleMarkers(artistMarkersIds);
      const filters = searchType === 'artists' ? artistFilter : wallfilter;
      dispatch(
        getArtistCardsDetails({
          ids: artistMarkersIds.join(),
          type: searchType,
          filters: {
            ...filters,
          },
        }) as any
      );
    } else {
      dispatch(getFeatured(searchType) as any);
    }
  };

  useEffect(() => {
    if (markerCoordinates.length > 0) {
      // dispatch({
      //   type: MARKETPLACE_GET_ARTIST_CARD_DETAILS_IDLE,
      //   payload: {
      //     type: searchType,
      //   },
      // });
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(handleGetArtistCardDetails, 1000);
    }
  }, [viewport, markerCoordinates, markerCoordinates.length]);

  return (
    <Box
      sx={{
        ...styleWrap,
        display: 'flex',
        flexDirection: 'column',
        rowGap: '20px',
        alignItems: 'center',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(40px)',
        height: '100vh',
        overflowY: 'scroll',
        width: '100%',
        paddingTop: '1rem',
        paddingBottom: '12rem',
        paddingRight: '20px',
        paddingLeft: '20px',
      }}
      className={classes.root}
    >
      {searchType === 'artists' ? (
        <ArtistList
          artistCardFetchStatus={artistCardFetchStatus}
          list={artistCardsDetails}
        />
      ) : (
        <WallList
          artistCardFetchStatus={artistCardFetchStatus}
          list={artistCardsDetails}
        />
      )}
    </Box>
  );
};

const FeaturedMessage = styled.div`
  margin-bottom: 20px;
  color: #06102b;
  font-size: 13px;
  font-weight: 700;
`;

export default ArtistsListViewSection;

ArtistsListViewSection.propTypes = {
  artists: PropTypes.array.isRequired,
};
ArtistsListViewSection.defaultProps = {
  artists: [],
};
