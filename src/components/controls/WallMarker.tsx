import React, { useContext, useState, useEffect } from 'react';
import { MapContext } from 'react-map-gl';
import { makeStyles } from '@mui/styles';
import styled from 'styled-components';

export type WallMarkerProps = {
  markerImageSrc: string;
  longitude: number;
  latitude: number;
  zoom: number;
  onClick: (index: number) => void;
  index: number;
};

const useStyles = makeStyles((theme: any) => ({
  markerContainer: {
    [theme.breakpoints.down('sm')]: {
      width: '92px',
      minHeight: '71px',
      padding: '6.2px 7.7px',
    },
  },
  markerImage: {
    [theme.breakpoints.down('sm')]: {
      width: '76px',
      height: '45px',
    },
  },
  markerArrow: {
    [theme.breakpoints.down('sm')]: {
      width: '14px',
      height: '10px',
      bottom: '5px',
      right: '39px',
    },
  },
}));

export const WallMarker: React.FC<WallMarkerProps> = ({
  markerImageSrc,
  longitude,
  latitude,
  zoom,
  onClick,
  index,
}) => {
  const [markerSize, setMarkerSize] = useState(0.4);
  const context = useContext(MapContext);
  const [x, y] = context?.viewport?.project([longitude, latitude]) || [];

  const classes = useStyles();

  useEffect(() => {
    if (zoom >= 1) setMarkerSize(0.5);
    if (zoom >= 10) setMarkerSize(0.8);
  }, [zoom]);

  const markerStyle: React.CSSProperties = {
    position: 'absolute',
    left: x,
    top: y,
    transform: `translate(-50%, -50%) scale(${markerSize}, ${markerSize})`,
  };

  const handleClick = () => {
    onClick(index);
  };

  return (
    <WallPin
      className={classes.markerContainer}
      style={markerStyle}
      onClick={handleClick}
    >
      <UserImage
        src={markerImageSrc}
        className={classes.markerImage}
        onClick={handleClick}
      />
      <DownArrow className={classes.markerArrow} />
    </WallPin>
  );
};

const WallPin = styled.div`
  position: relative;
  width: 145px;
  min-height: 112px;
  margin-top: 1em;
  padding: 9.4px 10.9px;
  background-image: url('${process.env
    .NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/wall-marker-pin.svg');
  background-size: contain;
`;

const UserImage = styled.img`
  width: 123px;
  height: 72px;
  object-fit: cover;
`;

const DownArrow = styled.div`
  position: absolute;
  bottom: 10px;
  right: 62px;
  width: 22px;
  height: 14px;
  align-self: center;
  background-image: url('${process.env
    .NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/wall-marker-down-arrow.svg');
  background-size: contain;
  background-repeat: no-repeat;
`;
