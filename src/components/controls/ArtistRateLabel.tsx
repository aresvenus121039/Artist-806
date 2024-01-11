import * as React from 'react';
import styled, { css } from 'styled-components';

export const ValignTextMiddle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MontserratBoldViking12px = css`
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-s2);
  font-weight: 700;
  font-style: normal;
`;

const Label = styled.div`
  ${ValignTextMiddle}
  ${MontserratBoldViking12px}
  width: 88px;
  height: 17px;
  text-align: center;
  letter-spacing: 0;
  line-height: 1;
  white-space: nowrap;
  color: #64e1dc;
`;

const Root = styled.div`
  height: 41px;
  display: flex;
  padding: 0 12px;
  align-items: center;
  background: rgba(100, 225, 220, 0.06);
  backdrop-filter: blur(60px);
  -webkit-backdrop-filter: blur(60px);
  border-radius: 100px;
  margin: 0 8px;
`;

interface ArtistRateLabelProps {
  rate?: number;
}

export const ArtistRateLabel: React.FC<ArtistRateLabelProps> = (props) => {
  if (props.rate === undefined) {
    return (
      <Root>
        <Label>$NA per sqft</Label>
      </Root>
    );
  }

  return (
    <Root>
      <Label>${`${props.rate}`} per sqft</Label>
    </Root>
  );
};
