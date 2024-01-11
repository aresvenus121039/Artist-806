import React, { useContext, useState, useEffect, FC } from 'react';
import { Avatar, Box } from '@mui/material';
import styled, { CSSProperties, css } from 'styled-components';
import { MapContext } from 'react-map-gl';
import { cloudflareImage } from '@/utility/images';

interface LocationProps {
  markerImageSrc?: string;
  locationText?: string;
  longitude: number;
  latitude: number;
  zoom: number;
  isUsePhoto?: boolean;
}

interface MarkerImageProps {
  src: string;
}

interface Frame1Props {
  children?: React.ReactNode;
}

const getMarkerStyle = (
  x: number | string,
  y: number | string,
  markerSize: number
): CSSProperties => {
  return {
    zIndex: 9,
    position: 'absolute',
    left: x,
    top: y,
    transform: `translate(-50%, -50%) scale(${markerSize}, ${markerSize})`,
  };
};

const useMarkerSizeAndStyle = (
  longitude: number,
  latitude: number,
  zoom: number
) => {
  const [markerSize, setMarkerSize] = useState(0.4);
  const context = useContext(MapContext);
  const [x, y] = context.viewport?.project([longitude || 0, latitude || 0]) || [
    '50%',
    '50%',
  ];

  useEffect(() => {
    if (zoom >= 1) setMarkerSize(0.5);
    if (zoom >= 10) setMarkerSize(0.8);
  }, [zoom]);

  const markerStyle = getMarkerStyle(x, y, markerSize);
  return { markerSize, markerStyle };
};

const LocationMarker: FC<LocationProps> = (props) => {
  const {
    markerImageSrc,
    locationText,
    longitude,
    latitude,
    zoom,
    isUsePhoto = true,
  } = props;
  const { markerStyle } = useMarkerSizeAndStyle(longitude, latitude, zoom);

  return (
    <Group2925 style={markerStyle}>
      <OverlapGroup>
        <Group2730>
          <Ellipse110></Ellipse110>
        </Group2730>
        <Frame2730>
          <Frame1>
            <Place>{locationText}</Place>
          </Frame1>
          {/* TODO uplooad the polygon asset to S3 */}
          <Polygon1
            src={cloudflareImage(
              'https://cdn.animaapp.com/projects/6183b51d6b5cbed22d564e6f/releases/61850ffff59ce59ffa02723a/img/polygon-1@2x.svg'
            )}
          />
          {isUsePhoto && (
            <MarkerImageWrap>
              <MarkerImage src={markerImageSrc || ''} />
            </MarkerImageWrap>
          )}
        </Frame2730>
      </OverlapGroup>
    </Group2925>
  );
};

export default LocationMarker;

const MarkerImageWrap = styled.div`
  position: relative;
`;

// make this because on location map container cant add props isUsePhoto
export const LocationMarkerNoPhoto: FC<LocationProps> = (props) => {
  const { locationText, longitude, latitude, zoom } = props;
  const { markerStyle } = useMarkerSizeAndStyle(longitude, latitude, zoom);

  return (
    <Group2925 style={markerStyle}>
      <OverlapGroupNoPhoto>
        <Group2730>
          <Ellipse110></Ellipse110>
        </Group2730>
      </OverlapGroupNoPhoto>
    </Group2925>
  );
};

export const LocationMarkerNoCity: FC<LocationProps> = (props) => {
  const {
    markerImageSrc,
    locationText,
    longitude,
    latitude,
    zoom,
    isUsePhoto = true,
  } = props;
  const { markerStyle } = useMarkerSizeAndStyle(longitude, latitude, zoom);

  return (
    <Group2925 style={markerStyle}>
      <OverlapGroup>
        <Group2730>
          <Ellipse110>
            <Frame2730>
              {isUsePhoto && (
                <MarkerImageWrap>
                  <MarkerImage src={markerImageSrc || ''} />
                </MarkerImageWrap>
              )}
            </Frame2730>
          </Ellipse110>
        </Group2730>
      </OverlapGroup>
    </Group2925>
  );
};

const MarkerImage: FC<MarkerImageProps> = (props) => {
  return (
    <Avatar
      sx={{
        width: {
          xs: '79.13px',
          lg: '79.13px',
          xl: '79.13px',
        },
        height: {
          xs: '79.13px',
          lg: '79.13px',
          xl: '79.13px',
        },
        marginTop: {
          xs: '5px',
          lg: '5px',
          xl: '5px',
        },
      }}
      src={props.src}
    />
  );
};

const Group2925 = styled.div`
  display: flex;
  align-items: flex-end;
  min-width: 0;
`;

const OverlapGroup = styled.div`
  width: 167px;
  height: 210px;
  position: relative;
  margin-bottom: 0;
`;

const OverlapGroupNoPhoto = styled.div`
  width: 167px;
  height: 250px;
  position: relative;
  margin-bottom: 0;
`;

const Group2730 = styled.div`
  position: absolute;
  top: 75px;
  left: 16px;
  display: flex;
  padding: 39.3px 39.3px;
  align-items: flex-end;
  min-width: 135px;
  background-color: #66a6ff33;
  border-radius: 67.73px;
`;

const Ellipse110 = styled.div`
  width: 57px;
  height: 57px;
  border-radius: 28.47px;
`;

const Frame2730 = styled.div`
  position: absolute;
  width: 167px;
  top: 50%;
  left: -18px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100px;
  padding-top: 5px;
`;

const Frame1: FC<Frame1Props> = ({ children }) => {
  return (
    <Box
      sx={{
        height: {
          xs: '69.45px',
          sm: '69.45px',
          md: '77px',
          lg: '77px',
          xl: '77px',
        },
        display: 'flex',
        padding: {
          xs: '22.6px',
          sm: '22.6px',
          md: '23.6px',
          lg: '23.6px',
          xl: '23.6px',
        },
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        minWidth: '167px',
        backgroundColor: 'var(--white)',
        borderRadius: '15.71px',
        boxShadow: '0px 39.26446533203125px 98.16116333007812px #0000004c',
      }}
    >
      {children}
    </Box>
  );
};

export const ValignTextMiddle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Place = styled.div`
  ${ValignTextMiddle}
  width: 120px;
  height: 29px;
  font-family: var(--font-family-montserrat);
  font-weight: 700;
  color: var(--black);
  font-size: var(--font-size-m);
  text-align: center;
  letter-spacing: 0;
`;

const Polygon1 = styled.img`
  width: 19px;
  height: 17px;
  margin-top: 3px;
  margin-right: 0;
`;
