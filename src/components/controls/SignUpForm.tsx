import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import styled from 'styled-components';
import { styled as muiStyledSystem } from '@mui/system';
import { FacebookLoginIcon, GoogleLoginIcon } from '../../components/icons';
import SignUpArtistFormFirst from './SignUpArtistFormFirst';
import InputSelectLabel from './InputSelectLabel';
import SignUpOwnerFormFirst from './SignUpOwnerFormFirst';
import { useSearchParams } from 'next/navigation';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

const SignUpForm = () => {
  const query = useSearchParams();
  const [registerAs, setRegisterAs] = React.useState(
    query.get('sign-type') ? query.get('sign-type') : 'artist'
  ); // default is "artist"

  const [signUpName, setSignUpName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');

  useEffect(() => {
    (query.get('sign-type') === 'artist' ||
      query.get('sign-type') === 'owner') &&
      setRegisterAs(query.get('sign-type'));
  }, [query.get('sign-type')]);

  return (
    <Box sx={{ position: 'relative', zIndex: 1000 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Title>Welcome to WXLLSPACE!</Title>
          <Typography>Let’s get you set up with a landing page.</Typography>
        </Grid>

        {/* register as */}
        <Grid item xs={6}>
          <InputSelectLabel
            label="Artist"
            onClick={(e) => setRegisterAs('artist')}
            checked={registerAs === 'artist'}
          />
        </Grid>

        <Grid item xs={6}>
          <InputSelectLabel
            label="owner"
            onClick={(e) => setRegisterAs('owner')}
            checked={registerAs === 'owner'}
          />
        </Grid>

        {/* form artist */}
        <Grid item xs={12}>
          {registerAs === 'artist' && (
            <SignUpArtistFormFirst
              signUpName={signUpName}
              setSignUpName={setSignUpName}
              signUpEmail={signUpEmail}
              setSignUpEmail={setSignUpEmail}
            />
          )}
          {registerAs === 'owner' && (
            <SignUpOwnerFormFirst
              signUpName={signUpName}
              setSignUpName={setSignUpName}
              signUpEmail={signUpEmail}
              setSignUpEmail={setSignUpEmail}
            />
          )}
        </Grid>

        {false && (
          <>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Line />
                <Or>OR</Or>
                <Line />
              </Box>
            </Grid>

            {/* connect to facebook */}
            <Grid item xs={12}>
              <SocialLoginButton onClick={() => {}}>
                <Box>
                  <FacebookLoginIcon />
                  <LoginWithText>Sign Up with Facebook</LoginWithText>
                </Box>
              </SocialLoginButton>
            </Grid>

            {/* connect to google */}
            <Grid item xs={12}>
              <SocialLoginButton onClick={() => {}}>
                <Box>
                  <GoogleLoginIcon />
                  <LoginWithText>Sign Up with Google</LoginWithText>
                </Box>
              </SocialLoginButton>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};

export default SignUpForm;

const Title = styled.h1`
  font-family: var(--font-family-montserrat);
  font-weight: 800;
  color: var(--white);
  font-size: var(--font-size-xxxl);
  letter-spacing: 0;
  margin-bottom: 12px;
`;

const Or = styled.div`
  margin: 0 10px;
  font-family: var(--font-family-montserrat);
  font-weight: 600;
  color: var(--white-2);
  font-size: 14px;
  letter-spacing: 0;
  line-height: 33.6px;
`;

const Line = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 2px;
`;

const LoginWithText = styled.div`
  margin-left: 10px;
  text-align: left;
  width: 170px;
`;

const SocialLoginButton = muiStyledSystem('button')(`
  font-family: var(--font-family-montserrat);
  color: white;
  display: flex;
  align-items: center;
  background-color: transparent;
  padding: 0;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 34px;
  letter-spacing: 0em;
  text-align: center;
  width: 100%;
  height: 70px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #FFFFFF;
  border-radius: 8px;
  cursor: pointer;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`);
