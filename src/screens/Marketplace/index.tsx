import React, { useState, useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from '@mui/system';

import {
  getMarkersDetail,
  getRegisteredStates,
} from '@/store/actions/marketplaceActions';
import { MARKETPLACE_GET_ARTIST_CARD_DETAILS_IDLE } from '@/constants/marketplaceConstants';
import { MarketplaceMapContext } from '@/contexts/MarketplaceMapContext';

import Header from '@/components/layout/Header';
import USAstate from '@/utility/usa-states.json';
import { USAState, getStateAbbr } from '@/utility/usaStateAbbr';
import MarketplaceMap from './sections/MarketplaceMap';
import { FilterToolbarSection } from './sections/FilterToolbarSection';
import { FilterToolbarSectionMobile } from './sections/FilterToolbarSectionMobile';
import ArtistsListViewSection from './sections/ArtistsListViewSection';
import { ArtistCardsCarousel } from './sections/ArtistCardsCarousel';
import { WallCardsCarousel } from './sections/WallCardsCarousel';
import gtag from 'ga-gtag';
import Head from 'next/head';

interface StateInfo {
  name: string;
  longitude: number;
  // Add other properties if required
}

interface MarketplaceProps {}

interface MarketplaceMapContextType {
  setStartRender: React.Dispatch<React.SetStateAction<boolean>>;
  startRender: boolean;
  viewport: {
    longitude: number;
    latitude: number;
    zoom: number;
  };
  getState: () => string;
  getSearchType: () => string;
  setSearchType: React.Dispatch<React.SetStateAction<string>>;
  setState: React.Dispatch<React.SetStateAction<string>>;
  handleUnmount: () => void;
  // Add other properties and their types as needed
}

const defaultCenterCoord: StateInfo | undefined = USAstate.find(
  (i: { name: string }) => i.name.toLowerCase() === 'new york'
);

const Marketplace: React.FC<MarketplaceProps> = () => {
  const dispatch = useDispatch();
  const {
    getState,
    getSearchType,
    setSearchType,
    setState,
    handleUnmount,
    viewport,
    startRender,
    setStartRender,
  } = useContext<MarketplaceMapContextType>(MarketplaceMapContext);

  const state = getState();
  const searchType = getSearchType();
  const stateAbbr = state && getStateAbbr(state);
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');

  useEffect(() => {
    if (
      !startRender &&
      (!stateAbbr ||
        stateAbbr === 'NY' ||
        defaultCenterCoord?.longitude !== viewport.longitude)
    ) {
      setStartRender(true);
    }
  }, [setStartRender, startRender, stateAbbr, viewport]);

  useEffect(() => {
    dispatch(getRegisteredStates() as any);
    dispatch(getMarkersDetail() as any);
    return () => {
      handleUnmount();
    };
  }, []);

  const handleChangeViewMode = (mode: 'map' | 'list') => {
    setViewMode(mode);
  };

  const handleChangeListType = (type: 'artists' | 'walls') => {
    if (type === 'walls') {
      gtag('event', 'search_by_owner_marketplace_per_visit', {
        page_location: window.location.href,
        page_title: document.title,
      });
    } else {
      gtag('event', 'search_by_artist_marketplace_per_visit', {
        page_location: window.location.href,
        page_title: document.title,
      });
    }
    setSearchType(type);
    dispatch({
      type: MARKETPLACE_GET_ARTIST_CARD_DETAILS_IDLE,
      payload: {
        type: type,
      },
    });
  };

  const handleChangeLocation = (newState: string) => {
    setState(newState);
  };

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          position: 'fixed',
          top: 0,
          zIndex: 1,
          width: '100%',
          backgroundColor: 'white',
        }}
      >
        <Box
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(40px)',
            position: 'relative',
            zIndex: 4,
          }}
        >
          <Box mt={10}>
            <Header isMarketplaceScreen={true} />
          </Box>

          {/* filter section desktop */}
          <Box
            sx={{
              display: {
                xs: 'none',
                sm: 'none',
                md: 'block',
                lg: 'block',
                xl: 'block',
                position: 'relative',
                zIndex: 3,
              },
            }}
          >
            <FilterToolbarSection
              state={state}
              onChange={handleChangeListType}
              onChangeLocation={handleChangeLocation}
              searchType={searchType}
              stateOnSearch={state}
            />
          </Box>

          {/* filter section mobile */}
          <Box
            sx={{
              display: {
                xs: 'block',
                sm: 'block',
                md: 'none',
                lg: 'none',
                xl: 'none',
                position: 'relative',
                zIndex: 3,
              },
            }}
          >
            <FilterToolbarSectionMobile
              onChangeLocation={handleChangeLocation}
              searchType={searchType}
              viewMode={viewMode === 'map' ? 'list' : 'map'}
              onChangeListType={handleChangeListType}
              onChangeViewMode={handleChangeViewMode}
            />
          </Box>
        </Box>

        {/* map container */}
        <Box
          sx={{
            position: 'absolute',
            zIndex: 1,
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <MarketplaceMap width={''} height={''} longitude={0} latitude={0} />
        </Box>

        {/* large screen */}
        <Box
          sx={{
            maxWidth: '400px',
            width: '100%',
            height: {
              md: `calc(100% - 172px)`,
              lg: `calc(100% - 172px)`,
              xl: `calc(100% - 172px)`,
            },
            position: 'fixed',
            zIndex: 2,
            bottom: '0',
            display: {
              xs: 'none',
              sm: 'none',
              md: 'block',
              lg: 'block',
              xl: 'block',
            },
          }}
        >
          <ArtistsListViewSection />
        </Box>

        {/* small screen */}
        {viewMode === 'list' && (
          <Box
            sx={{
              zIndex: 2,
              width: '100%',
              height: {
                xs: `calc(100% - 168px)`,
                sm: `calc(100% - 168px)`,
              },
              position: 'fixed',
              bottom: '0',
              display: {
                xs: 'flex',
                sm: 'flex',
                md: 'none',
                lg: 'none',
                xl: 'none',
              },
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(40px)',
            }}
          >
            <ArtistsListViewSection />
          </Box>
        )}

        {/* small screen */}
        {viewMode === 'map' && (
          <Box
            sx={{
              width: '100%',
              position: 'fixed',
              zIndex: 2,
              display: {
                xs: 'block',
                sm: 'block',
                md: 'none',
                lg: 'none',
                xl: 'none',
              },
              bottom: '0',
              paddingBottom: '1rem',
            }}
          >
            {searchType === 'artists' && <ArtistCardsCarousel />}
            {searchType === 'walls' && <WallCardsCarousel />}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Marketplace;
