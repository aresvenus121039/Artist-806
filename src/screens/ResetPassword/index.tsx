import React from 'react';
import { Box } from '@mui/material';
import styled from 'styled-components';
import { makeStyles } from '@mui/styles';

import { Theme } from '@mui/system';
import { SignInForm } from '@/components/controls/SignInForm';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import { ResetPasswordForm } from '@/components/controls/ResetPasswordForm';

const useStyles = makeStyles((theme: Theme) => ({
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
      justifyContent: 'end',
    },
    [theme.breakpoints.only('xl')]: {
      justifyContent: 'end',
    },
  },
  wallImage: {
    minHeight: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom 30% center',
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
    [theme.breakpoints.only('lg')]: {
      width: '60%',
    },
    [theme.breakpoints.only('xl')]: {
      width: '100%',
    },
  },
  loginContainer: {
    position: 'relative',
    backgroundColor: 'var(--black-pearl)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
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
  image: {
    width: '58px',
    height: '52px',
    objectFit: 'cover',
  },
}));

const ResetPassword: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.loginContainer}>
        <ResetPasswordForm />
        <Background />
      </Box>
      <Box className={classes.wallImage} />
    </Box>
  );
};

export default ResetPassword;

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
