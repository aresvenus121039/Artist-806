import React from 'react';
import styled, { css } from 'styled-components';

export const CircleStep = (props) => {
  const { children } = props;

  return (
    <Container>
      <Number className="montserrat-bold-iron-32px">{children}</Number>
    </Container>
  );
};

export const ValignTextMiddle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MontserratBoldIron32px = css`
  color: var(--iron);
  font-family: var(--font-family-montserrat);
  font-weight: 700;
  font-style: normal;
`;

const Container = styled.div`
  display: flex;
  width: 64.87px;
  height: 64.87px;
  background: red;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  background: linear-gradient(79.45deg, #5700ff 6.96%, #64e1dc 108.67%);
`;

const Number = styled.div`
  ${ValignTextMiddle}
  ${MontserratBoldIron32px}
  width: 33px;
  font-style: normal;
  font-weight: bold;
  height: 32px;
  text-align: center;
  letter-spacing: -0.05em;
  line-height: 160%;
`;
