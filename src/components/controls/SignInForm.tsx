import React, { useEffect } from 'react';
import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material';
import styled from 'styled-components';
import { makeStyles } from '@mui/styles';
import { styled as muiStyledSystem } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { LoadingButton } from '@mui/lab';

import { FacebookLoginIcon, GoogleLoginIcon } from '../../components/icons';
import ControlledInputTextField from './ControlledInputTextField';

import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  REQUEST_STATUS,
  selectUserSignInStatus,
} from '@/store/reducers/userReducers';
import { signIn } from '@/store/actions/userActions';
import {
  INVALID_EMAIL_ADDRESS,
  EMAIL_REQUIRED,
  PASSWORD_REQUIRED,
} from '@/constants/errorMessage';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { User } from '@/types';
import { USER_TYPE } from '../../constants/userConstants';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email(INVALID_EMAIL_ADDRESS)
    .nullable()
    .required(EMAIL_REQUIRED),
  password: Yup.string().nullable().required(PASSWORD_REQUIRED),
});

const useFormLabelStyles = makeStyles({
  label: {
    fontSize: '12px',
    borderRadius: '8px',
    color: '#64E1DC',
    fontWeight: '600',
    height: '52px',
    fontFamily: 'var(--font-family-montserrat)',
  },
  submitButton: {
    fontFamily: 'var(--font-family-montserrat)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    border: 'none',
    backgroundColor: 'transparent',
    padding: '0',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '34px',
    letterSpacing: '0em',
    textAlign: 'center',
    width: '100%',
    height: '70px',
    background:
      'linear-gradient(91.35deg, #86FFFF 1.34%, #33F7F7 19.62%, #2CDEDE 38.09%, #0AC5C5 65.12%, #04A9A9 97.99%)',
    borderRadius: '8px',
  },
});

interface FormState {
  email: string | null;
  password: string | null;
}

export const SignInForm: React.FC = () => {
  const styles = useFormLabelStyles();
  const dispatch = useDispatch();
  const router = useRouter();
  const { status, error } = useSelector(selectUserSignInStatus);

  const getRedirectPath = (userInfo: User, from: string) => {
    const defaultPages = ['/', '/login', '/signup'];
    const redirectToPreviousPage = !defaultPages.includes(from);

    if (userInfo.role === USER_TYPE.ARTIST) {
      const slug = userInfo.slug;
      if (redirectToPreviousPage && slug) {
        return from;
      }
      return slug ? `/artist/${slug}` : '/new-artist';
    }

    if (userInfo.role === USER_TYPE.WXLLOWNER) {
      if (redirectToPreviousPage) {
        return from;
      }
      return '/wall/' + userInfo.wall_slug;
    }

    if (redirectToPreviousPage) {
      return from;
    }
    return '/';
  };

  const onSubmit = (values: FormState, helpers: FormikHelpers<FormState>) => {
    dispatch(
      signIn(values.email || '', values.password || '', (redirect: boolean) => {
        helpers.setSubmitting(false);
        const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
        if (!userInfo) return;

        const from = (router.query.from && router.query.from.toString()) || '/';
        const pathToRedirect = getRedirectPath(userInfo, from);

        redirect && router.push(pathToRedirect);
      })
    );
  };

  const initialValues: FormState = {
    email: null,
    password: null,
  };

  useEffect(() => {
    dispatch({ type: 'USER_SIGNIN_RESET' });
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        zIndex: 1000,
      }}
    >
      <Title>Welcome back</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => (
          <Form>
            <Field
              component={ControlledInputTextField}
              textLabel="Email Address"
              placeholder="hello@wxllspace.com"
              name="email"
              typeInput="email"
            />
            <Field
              component={ControlledInputTextField}
              textLabel="Password"
              placeholder="Password"
              name="password"
              typeInput="password"
            />
            {/* TODO: Fix and make it a controlled component. */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <FormControlLabel
                className={styles.label}
                disableTypography
                label="Remember me for 30 days"
                control={
                  <Checkbox
                    icon={<CheckboxIcon />}
                    checkedIcon={<CheckboxCheckedIcon />}
                  />
                }
              />
              <div style={{ zIndex: 1 }}>
                <Link href="/forgot-password" className={styles.label}>
                  Forgot password
                </Link>
              </div>
            </div>
            {status === REQUEST_STATUS.FAILED && (
              <Typography
                sx={{
                  color: 'red',
                  fontSize: 13,
                  marginBottom: '5px',
                }}
              >
                {error}
              </Typography>
            )}
            <LoadingButton
              className={styles.submitButton}
              loading={status === REQUEST_STATUS.LOADING}
              disabled={status === REQUEST_STATUS.LOADING}
              type="submit"
            >
              <Box sx={{ textAlign: 'center', width: '100%' }}>Submit</Box>
            </LoadingButton>
          </Form>
        )}
      </Formik>
      {false && (
        <>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Line />
            <Or>OR</Or>
            <Line />
          </Box>
          <SocialLoginButton onClick={() => {}}>
            <Box>
              <FacebookLoginIcon />
              <LoginWithText>Login with Facebook</LoginWithText>
            </Box>
          </SocialLoginButton>
          <SocialLoginButton onClick={() => {}}>
            <Box>
              <GoogleLoginIcon />
              <LoginWithText>Login with Google</LoginWithText>
            </Box>
          </SocialLoginButton>
        </>
      )}
    </Box>
  );
};

const CheckboxIcon = styled.span`
  border-radius: 3px;
  width: 18px;
  height: 18px;
  box-shadow: 0 0 0 1px rgb(16 22 26 / 40%);
  background-color: #394b59;
  background-image: linear-gradient(
    180deg,
    hsla(0, 0%, 100%, 0.05),
    hsla(0, 0%, 100%, 0)
  );
`;

const CheckboxCheckedIcon = styled.span`
  border-radius: 3px;
  width: 18px;
  height: 18px;
  box-shadow: 0 0 0 1px rgb(16 22 26 / 40%);
  background-color: #137cbd;
  background-image: linear-gradient(
    180deg,
    hsla(0, 0%, 100%, 0.1),
    hsla(0, 0%, 100%, 0)
  );
  &:before {
    display: block;
    width: 18px;
    height: 18px;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E");
    content: '';
  }
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
  width: 154px;
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

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`);
const Title = styled.h1`
  font-family: var(--font-family-montserrat);
  font-weight: 800;
  color: var(--white);
  font-size: var(--font-size-xxxl);
  letter-spacing: 0;
`;
