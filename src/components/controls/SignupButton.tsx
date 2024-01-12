import React from 'react';
import PropTypes from 'prop-types';
import { styled, Button } from '@mui/material';

export const SignupButton = (props: any) => {
  return <MuiButton onClick={props.onClick}>SIGN UP</MuiButton>;
};

SignupButton.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
};

SignupButton.propTypes = {
  backgroundColor: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

function MuiButton(props: any) {
  const { children } = props;

  return <MuiBtn>{children}</MuiBtn>;
}

const MuiBtn = styled(Button)(({ theme }) => ({
  boxShadow: 'none',
  textTransform: 'none',
  minWidth: '97px',
  color: '#06112B',
  fontSize: 'var(--font-size-m)',
  fontWeight: 600,
  fontStyle: 'normal',
  textAlign: 'center',
  padding: '12px 24px',
  borderRadius: 'var(--radius-full)',
  lineHeight: 'normal',
  fontFamily: 'Roboto',
  background: 'var(--white)',
  letterSpacing: '2.24px',
  border: '1px solid var(--white)',
  '&:hover': {
    background: 'var(--main-pink)',
    color: 'var(--white)',
    boxShadow: '0px 0px 25px 0px rgba(255, 255, 255, 0.25)',
    border: '1px solid var(--opacity-white-white-35))',
  },
  '&:active': {
    background: 'var(--main-pink)',
    color: 'var(--white)',
    boxShadow: '0px 0px 25px 0px rgba(255, 255, 255, 0.25)',
    border: '1px solid var(--opacity-white-white-35))',
  },
}));
