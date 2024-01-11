import React, { useState, useEffect, FC, ReactElement } from 'react';
import {
  FlyToInterpolator,
  NavigationControl,
  Popup,
  ViewState,
} from 'react-map-gl';
import ReactMapGL from 'react-map-gl';
import { ArtistSummaryPopUp } from '@/components/controls/ArtistSummaryPopUp';
import { WallSummaryPopup } from '@/components/controls/WallSummaryPopup';
import { ArtistMarker } from '@/components/controls/ArtistMarker';
import { WallMarker } from '@/components/controls/WallMarker';
import LocationMarker, {
  LocationMarkerNoPhoto,
  LocationMarkerNoCity,
} from '@/components/controls/LocationMarker';
import { cloudflareImage } from '@/utility/images';
import { LocationMarkerData } from '@/types';

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
  markerData: LocationMarkerData;
  isMapNavControl?: boolean;
  navigationStyle?: { top: number; right: number };
  onWheel?: () => boolean;
}

export const LocationMapContainer: FC<LocationMapContainerProps> = (props) => {
  const {
    longitude,
    latitude,
    zoom,
    width,
    height,
    dragPan,
    dragRotate,
    scrollZoom,
    touchZoom,
    touchRotate,
    doubleClickZoom,
    keyboard,
    pitch,
    bearing,
    mapStyle,
    markerData,
    isMapNavControl = false,
    navigationStyle = { top: 20, right: 10 },
    onWheel = () => true,
  } = props;

  const [viewport, setViewport] = useState<ViewState>({
    latitude: latitude,
    longitude: longitude,
    zoom: zoom || 0,
  });

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const markers: { [key: string]: React.FC<any> } = {
    artist: ArtistMarker,
    wall: WallMarker,
    location: LocationMarker,
    locationNoPhoto: LocationMarkerNoPhoto,
    locationNoCity: LocationMarkerNoCity,
  };

  const generateMarkersData = (geoJSONData: LocationMarkerData) => {
    const markersData: any[] = [];
    console.log('Marker data:', props.markerData);
    for (const feature of geoJSONData.features) {
      markersData.push({
        latitude: feature.geometry.coordinates[1],
        longitude: feature.geometry.coordinates[0],
        image: feature.properties.image,
        title: feature.properties.title,
        name: feature.properties.name,
        info: feature.properties.info,
        address: feature.properties.address,
        is_ready: feature.properties.is_ready,
        marker: markers[feature.properties.entity],
        entity: feature.properties.entity,
        slug: feature.properties.slug,
      });
    }

    return markersData;
  };

  const setSelectedMarker = (index: number | null) => {
    setSelectedIndex(index);
  };

  const closePopup = () => {
    setSelectedMarker(null);
  };

  const openPopup = (index: number) => {
    setSelectedMarker(index);
  };

  const CustomPopup: React.FC<{
    index: number;
    markers: any[];
    closePopup: () => void;
  }> = ({ index, markers, closePopup }) => {
    return (
      <Popup
        latitude={markers[index].latitude}
        longitude={markers[index].longitude}
        onClose={closePopup}
        closeButton={true}
        closeOnClick={false}
        offsetTop={-45}
      >
        {markers[index].entity === 'artist' && (
          <ArtistSummaryPopUp
            imgURL={cloudflareImage(markers[index].image)}
            userName={markers[index].name}
            city={markers[index].address?.city}
            state={markers[index].address?.state}
            approved={markers[index].is_ready}
          />
        )}

        {markers[index].entity === 'wall' && (
          <WallSummaryPopup
            wallImage={cloudflareImage(markers[index].image)}
            title={markers[index].info?.title}
            city={markers[index].address?.city}
            state={markers[index].address?.state}
            dimension={markers[index].info?.dimension}
            locationOfWall={markers[index].info?.locationOfWall}
            slug={markers[index].slug}
          />
        )}
      </Popup>
    );
  };

  const renderMarkers = () => {
    return generateMarkersData(markerData).map((data, index) => {
      const Marker = data.marker;
      return (
        <Marker
          zoom={viewport.zoom || 0}
          longitude={data.longitude}
          latitude={data.latitude}
          offsetLeft={-20}
          offsetTop={-10}
          locationText={data.title}
          markerImageSrc={data.image}
          key={index}
          index={index}
          onClick={openPopup}
        />
      );
    });
  };

  useEffect(() => {
    setViewport((prevViewport) => ({
      ...prevViewport,
      transitionInterpolator: new FlyToInterpolator({ speed: 0 }),
      transitionDuration: 0,
      latitude,
      longitude,
      zoom: zoom || 0,
      bearing,
      pitch,
    }));
  }, [bearing, pitch, latitude, longitude, zoom]);

  return (
    <ReactMapGL
      {...viewport}
      onWheel={onWheel}
      dragPan={dragPan}
      dragRotate={dragRotate}
      scrollZoom={scrollZoom}
      touchZoom={touchZoom}
      touchRotate={touchRotate}
      doubleClickZoom={doubleClickZoom}
      keyboard={keyboard}
      width={width}
      height={height}
      onViewportChange={setViewport}
      mapboxApiAccessToken={
        process.env.NEXT_PUBLIC_REACT_APP_MAPBOX_ACCESS_TOKEN || ''
      }
      mapOptions={{
        style:
          mapStyle === 'light-v10'
            ? process.env.NEXT_PUBLIC_REACT_APP_MAPBOX_STYLE_LIGHT ||
              `mapbox://styles/mapbox/${mapStyle}`
            : process.env.NEXT_PUBLIC_REACT_APP_MAPBOX_STYLE_DARK ||
              `mapbox://styles/mapbox/${mapStyle}`,
      }}
      pitch={pitch}
      bearing={bearing}
    >
      {renderMarkers()}
      {selectedIndex !== null && (
        <CustomPopup
          index={selectedIndex}
          markers={generateMarkersData(markerData)}
          closePopup={closePopup}
        />
      )}
      {isMapNavControl && <NavigationControl style={navigationStyle} />}
    </ReactMapGL>
  );
};

LocationMapContainer.defaultProps = {
  dragPan: false,
  dragRotate: false,
  scrollZoom: false,
  touchZoom: false,
  touchRotate: false,
  doubleClickZoom: false,
  keyboard: false,
  pitch: 65,
  bearing: 0,
  zoom: 12,
  mapStyle: 'dark-v10',
};

export default LocationMapContainer;
