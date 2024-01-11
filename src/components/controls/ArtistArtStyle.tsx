import { Chip } from '@mui/material';
import * as React from 'react';
import { FC } from 'react';
import styled, { css } from 'styled-components';

const Root = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 270px;
  width: 100%;
  gap: 10px;
  flex-wrap: wrap;
  maxheight: 180px;
`;

interface ArtistArtStyleProps {
  artStyles?: string[];
}

const ArtistArtStyle: FC<ArtistArtStyleProps> = ({ artStyles = [] }) => {
  return (
    <Root>
      {artStyles.map((styleName, index) => (
        <Chip
          label={styleName}
          key={index}
          sx={{
            fontFamily: 'Roboto',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: '900',
            lineHeight: '22px',
            fontVariant: 'all-small-caps',
            letterSpacing: '2.56px',
            borderRadius: '8px',
            padding: '12px 9px',
            border: '1px solid rgba(255, 255, 255, 0.10)',
            backgroundColor: 'rgba(255, 255, 255, 0.10)',
            backdropFilter: 'blur(60px) brightness(100%)',
            WebkitBackdropFilter: 'blur(60px) brightness(100%)',
          }}
        />
      ))}
    </Root>
  );
};

export default ArtistArtStyle;
