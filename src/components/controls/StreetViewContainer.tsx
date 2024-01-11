import React, { useEffect, useRef } from 'react';
import { Box, SxProps } from '@mui/system';

interface StreetViewContainerProps {
  lat: number;
  long: number;
  zoom?: number;
  styleWrap?: SxProps;
}

const StreetViewContainer: React.FC<StreetViewContainerProps> = ({
  lat,
  long,
  zoom = 1,
  styleWrap,
}) => {
  const StreetViewID = useRef<HTMLDivElement>(null);

  const getStreetView = async () => {
    await new window.google.maps.StreetViewPanorama(StreetViewID.current!, {
      position: { lat: lat, lng: long },
      pov: { heading: 165, pitch: 0 },
      zoom,
      addressControl: false,
      motionTrackingControl: false,
      linksControl: false,
      zoomControl: false,
      scrollwheel: false,
      clickToGo: false,
    });
  };

  useEffect(() => {
    getStreetView();
  }, [getStreetView, lat, long, zoom]);

  return <Box ref={StreetViewID} sx={styleWrap} />;
};

export default StreetViewContainer;
