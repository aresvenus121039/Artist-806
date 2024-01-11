import React, { createContext, useState } from 'react';
import { WebMercatorViewport } from 'react-map-gl';
import bbox from '@turf/bbox-polygon';
import { useSelector, useDispatch } from 'react-redux';
import booleanPointInPolygon from '@turf/boolean-point-in-polygon';
import { point } from '@turf/helpers';
import useWindowSize from '@/utility/useWindowSize';

import {
  selectArtistMarkers,
  selectWxllMarkers,
  selectArtistFilters,
} from '@/store/reducers/marketplaceReducer';
import {
  updateArtistAvailabilityFilter,
  updateArtistVerificationStatusFilter,
  updateArtistRisingTalentFilter,
  getArtistCardsDetails,
} from '@/store/actions/marketplaceActions';

import USAstate from '@/utility/usa-states.json';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';

const MarketplaceMapContext = createContext();

const MarketplaceMapProvider = ({ children }) => {
  const query = useSearchParams();
  const history = useRouter();
  const dispatch = useDispatch();
  const stateQuery = query.get('state');
  const searchTypeQuery = query.get('search-type');
  const defaultCenterCoord = USAstate.find(
    (i) => i.name.toLowerCase() === 'new york'
  );
  const windowSize = useWindowSize();
  const artistFilter = useSelector(selectArtistFilters);

  const [map, setMap] = useState(null);
  const [startRender, setStartRender] = useState(false);
  const [visibleMarkers, setVisibleMarkers] = useState([]);
  const [viewport, setViewport] = useState({
    latitude: defaultCenterCoord.latitude,
    longitude: defaultCenterCoord.longitude,
    zoom: 8.0,
    width: window.innerWidth,
    height: window.innerHeight,
    bearing: 0,
    // minZoom: 5.03,
    // maxZoom: 15.03,
    // pitch: 55,
  });

  const handleUnmount = () => {
    setStartRender(false);
    setViewport({
      ...viewport,
      latitude: defaultCenterCoord.latitude,
      longitude: defaultCenterCoord.longitude,
    });
  };

  const getState = () => {
    return stateQuery;
  };

  const getSearchType = () => {
    return searchTypeQuery || 'artists';
  };

  const setSearchType = (newtype, clearOtherParams = false) => {
    const state = getState();
    let string = `/marketplace?search-type=${newtype}`;
    if (!clearOtherParams && state) {
      string = string + `&state=${state}`;
    }
    history.replace(string);
  };

  const setState = (newState) => {
    const searchType = getSearchType();
    history.replace(`/marketplace?search-type=${searchType}&state=${newState}`);
  };

  const handleSetViewport = (newViewport) => {
    setViewport({
      ...newViewport,
      // closest=24 highest=0.8
      zoom: newViewport.zoom < 15.03 ? newViewport.zoom : 15.03,
    });
  };

  const searchType = getSearchType();
  const markerCoordinates = useSelector(
    searchType === 'walls' ? selectWxllMarkers : selectArtistMarkers
  );

  const getVisibleMarker = () => {
    const newViewpoint = new WebMercatorViewport(viewport);
    const boundsTopLeftCoord = newViewpoint.unproject([
      windowSize.width > 900 ? 400 : 0,
      172,
    ]);
    const boundsBottomRightCoord = newViewpoint.unproject([
      window.innerWidth,
      window.innerHeight,
    ]);
    const currentBounds = [boundsTopLeftCoord, boundsBottomRightCoord];
    const applyToArray = (func, array) => func.apply(Math, array);
    const pointsLong = currentBounds.map((point) => point[0]);
    const pointsLat = currentBounds.map((point) => point[1]);
    var poly = bbox([
      applyToArray(Math.min, pointsLong),
      applyToArray(Math.min, pointsLat),
      applyToArray(Math.max, pointsLong),
      applyToArray(Math.max, pointsLat),
    ]);
    const newVisibleMarkers = markerCoordinates.filter((item) => {
      // Check if item and item.coordinates are defined, and item.coordinates is an array with at least 2 elements
      if (item && item.coordinates && item.coordinates.length >= 2) {
        return booleanPointInPolygon(
          point([item.coordinates[0], item.coordinates[1]]),
          poly
        );
      } else {
        // Return false for this iteration if the above conditions aren't met
        return false;
      }
    });
    const artistMarkersIds = newVisibleMarkers.map((item) => item.id);
    return artistMarkersIds;
  };

  const handleAvailabilityChangeFilter = (value) => {
    const artistMarkersIds = getVisibleMarker();
    setVisibleMarkers(artistMarkersIds);
    dispatch(
      updateArtistAvailabilityFilter(value, () => {
        dispatch(
          getArtistCardsDetails({
            ids: artistMarkersIds.join(),
            type: searchType,
            filters: {
              ...artistFilter,
              is_ready: value,
            },
          })
        );
      })
    );
  };

  const handleVerificationStatusChangeFilter = (value) => {
    const artistMarkersIds = getVisibleMarker();
    setVisibleMarkers(artistMarkersIds);
    dispatch(
      updateArtistVerificationStatusFilter(value, () => {
        dispatch(
          getArtistCardsDetails({
            ids: artistMarkersIds.join(),
            type: searchType,
            filters: {
              ...artistFilter,
              is_verified: value,
            },
          })
        );
      })
    );
  };

  const handleRisingTalentChangeFilter = (value) => {
    const artistMarkersIds = getVisibleMarker();
    setVisibleMarkers(artistMarkersIds);
    dispatch(
      updateArtistRisingTalentFilter(value, () => {
        dispatch(
          getArtistCardsDetails({
            ids: artistMarkersIds.join(),
            type: searchType,
            filters: {
              ...artistFilter,
              is_rising_talent: value,
            },
          })
        );
      })
    );
  };

  return (
    <MarketplaceMapContext.Provider
      value={{
        viewport,
        setViewport: handleSetViewport,
        visibleMarkers,
        setVisibleMarkers,
        getState,
        setState,
        getSearchType,
        setSearchType,
        startRender,
        setStartRender,
        handleUnmount,
        map,
        setMap,
        getVisibleMarker,
        handleAvailabilityChangeFilter,
        handleVerificationStatusChangeFilter,
        handleRisingTalentChangeFilter,
      }}
    >
      {children}
    </MarketplaceMapContext.Provider>
  );
};

export { MarketplaceMapContext, MarketplaceMapProvider };
