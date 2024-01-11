import React, { useState, useEffect, FC, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import { ArtistMarker } from '@/components/controls/ArtistMarker';
import { WallMarker } from '@/components/controls/WallMarker';
import LocationMarker, {
  LocationMarkerNoPhoto,
  LocationMarkerNoCity,
} from '@/components/controls/LocationMarker';
import { LocationMarkerData } from '@/types';

interface LocationMapContainer2Props {
  longitude: number;
  latitude: number;
  zoom?: number;
  width: string;
  height: string;
  isUsePhoto?: boolean;
  dragPan?: boolean;
  dragRotate?: boolean;
  scrollZoom?: boolean;
  touchPitch?: boolean;
  touchZoomRotate?: boolean;
  doubleClickZoom?: boolean;
  keyboard?: boolean;
  pitch?: number;
  bearing?: number;
  mapStyle?: string;
  markerData: LocationMarkerData;
}

export const LocationMapContainer2: FC<LocationMapContainer2Props> = (
  props
) => {
  const {
    longitude,
    latitude,
    zoom,
    width,
    height,
    dragPan,
    dragRotate,
    scrollZoom,
    touchPitch,
    touchZoomRotate,
    doubleClickZoom,
    keyboard,
    pitch,
    bearing,
    mapStyle,
    markerData,
  } = props;

  const markers: { [key: string]: React.FC<any> } = {
    artist: ArtistMarker,
    wall: WallMarker,
    location: LocationMarker,
    locationNoPhoto: LocationMarkerNoPhoto,
    locationNoCity: LocationMarkerNoCity,
  };

  const generateMarkersData = (geoJSONData: LocationMarkerData) => {
    const markersData: any[] = [];
    for (const feature of geoJSONData.features) {
      markersData.push({
        latitude: feature.geometry.coordinates[1],
        longitude: feature.geometry.coordinates[0],
        image: feature.properties.image,
        title: feature.properties.title,
        name: feature.properties.name,
        info: feature.properties.info,
        address: feature.properties.address,
        isReady: feature.properties.isReady,
        marker: markers[feature.properties.entity],
        entity: feature.properties.entity,
        slug: feature.properties.slug,
      });
    }

    return markersData;
  };

  const renderMarkers = () => {
    return generateMarkersData(markerData).map((data, index) => {
      const Marker = data.marker;
      return (
        <Marker
          zoom={zoom || 0}
          longitude={data.longitude}
          latitude={data.latitude}
          offsetLeft={-20}
          offsetTop={-10}
          locationText={data.title}
          markerImageSrc={data.image}
          key={index}
          index={index}
        />
      );
    });
  };

  const mapContainer = useRef<HTMLDivElement | null>(null);

  const getMapStyle = () => {
    return mapStyle === 'light-v10'
      ? process.env.NEXT_PUBLIC_REACT_APP_MAPBOX_STYLE_LIGHT ||
          `mapbox://styles/mapbox/${mapStyle}`
      : process.env.NEXT_PUBLIC_REACT_APP_MAPBOX_STYLE_DARK ||
          `mapbox://styles/mapbox/${mapStyle}`;
  };

  useEffect(() => {
    if (mapContainer.current) {
      // Set your Mapbox access token here
      mapboxgl.accessToken =
        process.env.NEXT_PUBLIC_REACT_APP_MAPBOX_ACCESS_TOKEN || '';

      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: getMapStyle(),
        center: [longitude, latitude],
        zoom: zoom,
        bearing: bearing,
        pitch: pitch,
        dragPan: dragPan,
        dragRotate: dragRotate,
        scrollZoom: scrollZoom,
        touchPitch: touchPitch,
        touchZoomRotate: touchZoomRotate,
        doubleClickZoom: doubleClickZoom,
        keyboard: keyboard,
      });

      const rotateCamera = (timestamp: number) => {
        map.rotateTo((timestamp / 100) % 360, { duration: 0 });
        requestAnimationFrame(rotateCamera);
      };

      map.on('load', () => {
        rotateCamera(0);

        const layers = map.getStyle().layers;
        for (const layer of layers) {
          if (
            layer.type === 'symbol' &&
            layer.layout &&
            layer.layout['text-field']
          ) {
            map.removeLayer(layer.id);
          }
        }

        map.addLayer({
          id: '3d-buildings',
          source: 'composite',
          'source-layer': 'building',
          filter: ['==', 'extrude', 'true'],
          type: 'fill-extrusion',
          minzoom: 15,
          paint: {
            'fill-extrusion-color': '#aaa',
            'fill-extrusion-height': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'height'],
            ],
            'fill-extrusion-base': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'min_height'],
            ],
            'fill-extrusion-opacity': 0.6,
          },
        });
      });
    }
  }, []);

  return (
    <div ref={mapContainer} style={{ width: width, height: height }}>
      {renderMarkers()}
    </div>
  );
};

LocationMapContainer2.defaultProps = {
  dragPan: false,
  dragRotate: false,
  scrollZoom: false,
  touchPitch: false,
  touchZoomRotate: false,
  doubleClickZoom: false,
  keyboard: false,
  pitch: 128,
  bearing: 0,
  zoom: 18,
  mapStyle: 'dark-v10',
};

export default LocationMapContainer2;
