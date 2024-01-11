import React from 'react';
import PropTypes from 'prop-types';
import { styled, Button } from '@mui/material';

export const SignupButton = (props: any) => {
  return <MuiButton onClick={props.onClick}>sign up</MuiButton>;
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
  color: 'var(--main-dark)',
  fontSize: 'var(--font-size-l)',
  fontWeight: 400,
  fontStyle: 'normal',
  textAlign: 'center',
  padding: '12px 24px',
  borderRadius: 'var(--radius-full)',
  lineHeight: '16px',
  fontFamily: theme.typography.fontFamily,
  background: 'var(--white)',
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
