import React from 'react';
import styled, { css, CSSObject } from 'styled-components';

export const ValignTextMiddle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MontserratBoldPurplePlum12px = css`
  color: var(--purple-plum);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-s2);
  font-weight: 700;
  font-style: normal;
`;

export const Border1pxPurplePlum = css`
  border: 1px solid var(--purple-plum);
`;

const Frame271 = styled.div<{}>`
  ${(props) => css`
    ${Border1pxPurplePlum}
    height: 41px;
    display: flex;
    padding: 0 12px;
    align-items: center;
    min-width: 92px;
    background-color: var(--viking);
    border-radius: 100px;
    backdrop-filter: blur(60px) brightness(100%);
    -webkit-backdrop-filter: blur(60px) brightness(100%);
  `}
`;

const EditPage = styled.div<{}>`
  ${(props) => css`
    ${ValignTextMiddle}
    ${MontserratBoldPurplePlum12px}
    width: 68px;
    height: 17px;
    text-align: center;
    letter-spacing: 0;
    line-height: 90px;
    white-space: nowrap;
  `}
`;

export const EditArtistPageButton: React.FC<{}> = (props) => {
  return (
    <Frame271>
      <EditPage>Edit Page</EditPage>
    </Frame271>
  );
};
