import React, { useState, useEffect, useContext } from 'react';
import ReactMapGL, {
  Popup,
  NavigationControl,
  WebMercatorViewport,
  FlyToInterpolator,
} from 'react-map-gl';
import { useDispatch, useSelector } from 'react-redux';
import { Marker } from 'react-map-gl';
import { useCookies, Cookies } from 'react-cookie';

import { getArtistDetails } from '@/store/actions/artistActions';
import { ARTIST_GET_DETAILS_SUCCESS } from '../../../constants/artistConstants';
import {
  selectArtistDetails,
  requestStatus,
} from '@/store/reducers/artistReducers';
import {
  selectArtistMarkers,
  selectWxllMarkers,
  getArtistsCards,
} from '@/store/reducers/marketplaceReducer';
import { getListing } from '@/store/actions/listingActions';
import { selectListingDetails } from '@/store/reducers/listingReducers';
import { WALL_GET_DETAILS_SUCCESS } from '../../../constants/listingConstants';
import { MarketplaceMapContext } from '../../../contexts/MarketplaceMapContext';

import USAstate from '@/utility/usa-states.json';
import { getStateAbbr } from '@/utility/usaStateAbbr';
import { MapWallPin } from '../../../components/icons';
import ArtistSummaryPopUp from '../blocks/ArtistSummaryPopUp';
import { WallSummaryPopup } from '../blocks/WallSummaryPopup';
import { GeoJSONData } from '@/types';
import _ from 'lodash';
import { PrivacyPolicyPopUp } from '@/components/controls/PrivacityPolicePopup';

const TIMEOUT_DURATION = 10000;

interface LocationMapContainerProps {
  longitude: number;
  latitude: number;
  zoom?: number;
  width: string;
  height: string;
  isUsePhoto?: boolean;
  dragPan?: boolean;
  dragRotate?: boolean;
  scrollZoom?: boolean;
  touchZoom?: boolean;
  touchRotate?: boolean;
  doubleClickZoom?: boolean;
  keyboard?: boolean;
  pitch?: number;
  bearing?: number;
  mapStyle?: string;
}

interface MarkerData {
  latitude: number;
  longitude: number;
  id: string;
  state: string;
}

interface IPopup {
  open?: boolean;
  latitude?: number;
  longitude?: number;
  [key: string]: any;
}

type Corner = [number, number];
type Bounds = [Corner, Corner];
type Viewport = {
  latitude: number;
  longitude: number;
  zoom: number;
  [key: string]: any; // This allows for other properties without specifying each one.
};

const generateMarkersData = (geoJSONData: GeoJSONData) => {
  const markersData: MarkerData[] = [];
  for (const feature of geoJSONData.features) {
    if (
      feature &&
      feature.geometry &&
      Array.isArray(feature.geometry.coordinates)
    ) {
      markersData.push({
        latitude: feature.geometry.coordinates[1],
        longitude: feature.geometry.coordinates[0],
        id: feature.properties.id || '',
        state: feature.properties.state || '',
      });
    } else {
      console.error('Invalid feature encountered', feature);
    }
  }
  return markersData;
};

const DEFAULT_ZOOM = 7.5;
const MAPBOX_STYLE_LIGHT =
  process.env.NEXT_PUBLIC_REACT_APP_MAPBOX_STYLE_LIGHT ||
  `mapbox://styles/mapbox/light-v10`;

const LocationMapContainer: React.FC<LocationMapContainerProps> = (props) => {
  const {
    viewport,
    setViewport,
    getState,
    getSearchType,
    setSearchType,
    startRender,
    setMap,
  } = useContext(MarketplaceMapContext);
  const [cookies] = useCookies(['userLocation']);
  const state = getState();
  const searchType = getSearchType();
  const [isMapRender, setIsMapRender] = useState(false);
  const dispatch = useDispatch();
  const artistCardsDetails = useSelector(getArtistsCards);
  const artistDetails = useSelector(selectArtistDetails);
  const listingDetails = useSelector(selectListingDetails);
  const getArtistDetailsRequestStatus = useSelector(requestStatus);
  const [popup, setPopup] = useState<IPopup>({});
  const [isLoading, setIsLoading] = useState(true);
  const [privacyPolicyOpen, setPrivacyPolicyOpen] = useState(false);
  const markerCoordinates = useSelector(
    searchType === 'walls' ? selectWxllMarkers : selectArtistMarkers
  );

  useEffect(() => {
    const hasUserLocationCookie: Boolean =
      cookies['userLocation'] !== undefined;
    setPrivacyPolicyOpen(!hasUserLocationCookie);
  }, [cookies]);

  useEffect(() => {
    const getUserLocation = async () => {
      try {
        const position = (await getCurrentPosition()) as any;
        const { latitude, longitude } = position.coords;
        setViewport({ ...viewport, latitude, longitude });
        const cookies = new Cookies();
        cookies.set(
          'userLocation',
          { latitude, longitude },
          { path: '/marketplace' }
        );
      } catch (error) {
        console.error('Error obtaining location:', error);
      } finally {
        setIsLoading(false);
      }
    };

    getUserLocation();

    const timeoutId = setTimeout(() => {
      if (isLoading) {
        console.warn('Request timed out. Using default location.');
        setIsLoading(false);
        setViewport({ ...viewport });
      }
    }, TIMEOUT_DURATION);

    return () => clearTimeout(timeoutId);
  }, [isLoading]);

  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  useEffect(() => {
    if (popup) {
      setPopup({});
    }
  }, [searchType, state, viewport]);

  useEffect(() => {
    const stateAbbr = state && getStateAbbr(state);
    if (markerCoordinates.length > 0 && stateAbbr) {
      const markerByState = markerCoordinates.filter((item) => {
        return (
          item.state.toLowerCase() === stateAbbr.toLowerCase() ||
          item.state.toLowerCase() === state.toLowerCase()
        );
      });

      if (markerByState.length > 1) {
        const newMapBounds = markerByState.map((item) => [
          item.coordinates[0],
          item.coordinates[1],
        ]);
        const applyToArray = (
          func: (...numbers: number[]) => number,
          array: number[]
        ): number => {
          return func.apply(Math, array);
        };

        const pointsLong = newMapBounds.map((point) => point[0]);
        const pointsLat = newMapBounds.map((point) => point[1]);
        const cornersLongLat: Bounds = [
          [
            applyToArray(Math.min, pointsLong),
            applyToArray(Math.min, pointsLat),
          ],
          [
            applyToArray(Math.max, pointsLong),
            applyToArray(Math.max, pointsLat),
          ],
        ];

        const newViewpoint = new WebMercatorViewport(viewport);
        const fitBounds = newViewpoint.fitBounds(cornersLongLat, {
          padding: {
            top: 40,
            left: 440,
            right: 40,
            bottom: 212,
          },
        });
        setViewport({
          ...viewport,
          latitude: fitBounds.latitude,
          longitude: fitBounds.longitude,
          zoom: fitBounds.zoom,
        });
      } else if (markerByState.length === 1) {
        setViewport({
          ...viewport,
          longitude: markerByState[0].coordinates[0],
          latitude: markerByState[0].coordinates[1],
          zoom: DEFAULT_ZOOM,
        });
      } else {
        const stateCenterCoordinates = USAstate.find(
          (i) => i.name.toLowerCase() === state.toLowerCase()
        );
        setViewport({
          ...viewport,
          longitude: stateCenterCoordinates?.longitude || 0,
          latitude: stateCenterCoordinates?.latitude || 0,
          zoom: DEFAULT_ZOOM,
        });
      }
    }
  }, [markerCoordinates, markerCoordinates.length, state]);

  const handleAcceptPrivacyPolicy = () => {
    setPrivacyPolicyOpen(false);
  };

  const mappedArtistMarker = markerCoordinates.map((marker) => {
    return {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: marker.coordinates,
      },
      properties: {
        state: marker.state,
        id: marker.id,
        entity: 'artist',
      },
    };
  });

  const artistMarkers = {
    type: 'FeatureCollection',
    features: [...mappedArtistMarker],
  };

  const CustomPopup = () => {
    return (
      <Popup
        latitude={popup?.latitude || 0}
        longitude={popup?.longitude || 0}
        onClose={() => setPopup({})}
        closeButton={true}
        closeOnClick={false}
        offsetTop={searchType === 'artists' ? -44 : -32}
        offsetLeft={0}
      >
        {searchType === 'artists' ? (
          <ArtistSummaryPopUp
            imgURL={artistDetails.data.artist_image?.[0]?.location}
            userName={artistDetails.data.artist_name}
            city={artistDetails.data.address?.city}
            state={artistDetails.data.address?.state}
            approved={artistDetails.data.is_verified}
            loading={
              getArtistDetailsRequestStatus !== ARTIST_GET_DETAILS_SUCCESS
            }
          />
        ) : (
          <WallSummaryPopup
            {...listingDetails.data}
            loading={listingDetails.status !== WALL_GET_DETAILS_SUCCESS}
          />
        )}
      </Popup>
    );
  };

  const handleGetArtistDetails = (id: string) => {
    if (searchType === 'artists') {
      dispatch(getArtistDetails(id));
    } else {
      dispatch(getListing(id));
    }
  };

  const renderMarkers = React.useMemo(() => {
    const newArr = generateMarkersData(artistMarkers);
    const artistCardIds = artistCardsDetails.map((item) => item.id);
    const selectedMarkers = newArr.filter((item) =>
      artistCardIds.includes(item.id)
    );

    return selectedMarkers.map((data) => (
      <Marker
        key={data.id}
        latitude={data.latitude}
        longitude={data.longitude}
        offsetTop={-40}
        offsetLeft={-12.5}
      >
        <div
          onClick={() => {
            handleGetArtistDetails(data.id);
            setPopup({
              open: true,
              latitude: data.latitude,
              longitude: data.longitude,
            });
          }}
        >
          <MapWallPin height={40} width={25} />
        </div>
      </Marker>
    ));
  }, [artistMarkers, artistCardsDetails, handleGetArtistDetails]);

  const throttledOnViewportChange = _.throttle((val) => {
    if (isMapRender && state) {
      setSearchType(searchType, true);
    }
    setViewport({ ...viewport, ...val });
  }, 1);

  return startRender ? (
    <>
      {/* <PrivacyPolicyPopUp
        open={privacyPolicyOpen}
        onClose={handleAcceptPrivacyPolicy}
      /> */}
      <ReactMapGL
        zoom={viewport.zoom || 0}
        latitude={viewport?.latitude || 0}
        longitude={viewport?.longitude || 0}
        altitude={1.5}
        bearing={viewport.bearing || 0}
        pitch={viewport.pitch || 0}
        transitionInterpolator={new FlyToInterpolator({ speed: 0 })}
        transitionDuration={0}
        width={'100vw'}
        height={'100vh'}
        onLoad={() => setIsMapRender(true)}
        onWheel={() => true}
        ref={(ref) => ref && setMap(ref.getMap())}
        dragPan={true}
        dragRotate={true}
        scrollZoom={true}
        touchZoom={false}
        touchRotate={true}
        doubleClickZoom={false}
        keyboard={true}
        onViewportChange={throttledOnViewportChange}
        mapboxApiAccessToken={
          process.env.NEXT_PUBLIC_REACT_APP_MAPBOX_ACCESS_TOKEN
        }
        mapOptions={{
          style: MAPBOX_STYLE_LIGHT,
        }}
      >
        {renderMarkers}
        {popup.open && <CustomPopup />}
        <NavigationControl style={{ top: 192, right: 10 }} />
      </ReactMapGL>
    </>
  ) : (
    <></>
  );
};
export default LocationMapContainer;
