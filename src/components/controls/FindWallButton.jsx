import React from 'react';
import styled, { css } from 'styled-components';

export const FindWallButton = () => {
  return (
    <Group3023>
      <div>
        <OverlapGroup>
          <FindAWall>Find a wall</FindAWall>
        </OverlapGroup>
      </div>
    </Group3023>
  );
};

const Group3023 = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 203px;
`;

const OverlapGroup = styled.div`
  height: 74px;
  display: flex;
  padding: 22.9px 47.3px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 201px;
  background-color: var(--purple-plum);
  border-radius: 1000px;
  box-shadow: 12px 12px 27px #a845f77d;
`;

export const ValignTextMiddle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MontserratSemiBoldWhite14px = css`
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-m);
  font-weight: 600;
  font-style: normal;
`;

const FindAWall = styled.div`
  ${ValignTextMiddle}
  ${MontserratSemiBoldWhite14px}
              width: 107px;
  height: 28px;
  text-align: center;
  letter-spacing: 0;
  line-height: 75px;
  white-space: nowrap;
`;
