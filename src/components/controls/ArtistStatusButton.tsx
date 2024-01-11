import React from 'react';
import styled, { css } from 'styled-components';
import { cloudflareImage } from '@/utility/images';

export const ValignTextMiddle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MontserratBoldWhite12px = css`
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-s2);
  font-weight: 700;
  font-style: normal;
`;

const Ellipse111 = styled.div`
  height: 12px;
  display: flex;
  align-items: flex-start;
  min-width: 12px;
`;

const Ellipse112 = styled.img`
  width: 12px;
  height: 13px;
  margin-top: -0.5px;
  border-radius: 100%;
`;

const Available = styled.div`
  ${ValignTextMiddle}
  ${MontserratBoldWhite12px}
  width: 59px;
  height: 17px;
  margin-left: 10px;
  letter-spacing: 0;
  line-height: 1;
  white-space: nowrap;
`;

const Frame281 = styled.div`
  height: 41px;
  display: flex;
  padding: 0 12px;
  justify-content: flex-end;
  align-items: center;
  min-width: 105px;
  background-color: var(--alto);
  border-radius: 100px;
  backdrop-filter: blur(60px) brightness(100%);
  -webkit-backdrop-filter: blur(60px) brightness(100%);
  margin: 0 12px;
`;

interface ArtistStatusButtonProps {
  is_ready: boolean;
}

export const ArtistStatusButton: React.FC<ArtistStatusButtonProps> = (
  props
) => {
  const { is_ready } = props;

  if (is_ready) {
    return (
      <Frame281>
        <Ellipse111>
          <Ellipse112
            src={cloudflareImage(
              `${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/available-icon.svg`
            )}
          />
        </Ellipse111>
        <Available>Available</Available>
      </Frame281>
    );
  }

  if (!is_ready) {
    return (
      <Frame281>
        <Ellipse111>
          <Ellipse112
            src={cloudflareImage(
              `${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/busy-icon.svg`
            )}
          />
        </Ellipse111>
        <Available>Busy</Available>
      </Frame281>
    );
  }

  return null;
};
