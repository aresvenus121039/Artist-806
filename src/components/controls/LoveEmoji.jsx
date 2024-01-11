import React from 'react';
import styled, { css } from 'styled-components';

export const LoveEmoji = (props) => {
  return (
    <Container>
      <Emoji>😍</Emoji>
    </Container>
  );
};

export const ValignTextMiddle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  width: 64.87px;
  height: 64.87px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  transform: rotate(-7.45deg);
`;

const Emoji = styled.div`
  ${ValignTextMiddle}
  width: 43.32px;
  height: 43.32px;
  font-size: 32px;
  text-align: center;
`;
