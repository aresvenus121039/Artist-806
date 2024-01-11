import React, { useState } from 'react';
import { Box } from '@mui/material';
import styled from 'styled-components';
import { makeStyles } from '@mui/styles';

import LoginTypeSwitch from '../../components/controls/LoginTypeSwitch';
import { ForgotPasswordForm } from '../../components/controls/ForgotPasswordForm';
import SignUpForm from '@/components/controls/SignUpForm';

import Link from 'next/link';

const useStyles = makeStyles((theme: any) => ({
  root: {
    display: 'flex',
    [theme.breakpoints.only('xs')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.only('sm')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.only('md')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.only('lg')]: {
      justifyContent: 'flex-end',
    },
    [theme.breakpoints.only('xl')]: {
      justifyContent: 'flex-end',
    },
  },
  wallImage: {
    minHeight: '100vh',
    width: '60%',
    backgroundSize: 'cover',
    backgroundImage: `url("${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/login-page-background-image.png")`,
    [theme.breakpoints.only('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.only('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.only('md')]: {
      display: 'none',
    },
  },
  forgotPasswordContainer: {
    position: 'relative',
    backgroundColor: 'var(--black-pearl)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '50px 40px',
    [theme.breakpoints.only('xs')]: {
      width: '100%',
      maxWidth: '700px',
    },
    [theme.breakpoints.only('sm')]: {
      width: '100%',
      maxWidth: '700px',
    },
    [theme.breakpoints.only('md')]: {
      width: '100%',
      maxWidth: '700px',
    },
    [theme.breakpoints.only('lg')]: {
      minWidth: '500px',
      width: '40%',
      maxWidth: '623px',
    },
    [theme.breakpoints.only('xl')]: {
      minWidth: '500px',
      width: '40%',
      maxWidth: '623px',
    },
  },
}));

const ForgotPassword: React.FC = () => {
  const classes = useStyles();
  const [loginType, setloginType] = useState('sign-in');

  return (
    <Box className={classes.root}>
      <Box className={classes.forgotPasswordContainer}>
        <ForgotPasswordForm />
        <Background />
      </Box>
      <Box className={classes.wallImage} />
    </Box>
  );
};

export default ForgotPassword;

const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 268px;
  height: 238px;
  margin-top: 156px;
  background-color: #5d1df1;
  filter: blur(500px); ;
`;

const Logo = styled.img`
  width: 58px;
  height: 52px;
  object-fit: cover;
`;

const Title = styled.h1`
  font-family: var(--font-family-montserrat);
  font-weight: 800;
  color: var(--white);
  font-size: var(--font-size-xxxl);
  letter-spacing: 0;
`;
