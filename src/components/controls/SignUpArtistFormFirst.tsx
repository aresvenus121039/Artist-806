import React, { useEffect, FC, FormEvent } from 'react';
import { Grid, Typography, Box, Link } from '@mui/material';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import styled from 'styled-components';
import { signUp } from '@/store/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingButton } from '@mui/lab';
import {
  selectUserSignInStatus,
  REQUEST_STATUS,
} from '@/store/reducers/userReducers';
import { USER_TYPE } from '@/constants/userConstants';

import ControlledInputTextField from './ControlledInputTextField';
import ControlledInputSelect from './ControlledInputSelect';
import ControlledInputCheckbox from './ControlledInputCheckbox';

import { validationSchema, useFormLabelStyles } from './SignUpOwnerFormFirst';
import { useRouter } from 'next/router';

interface SignUpArtistFormFirstProps {
  signUpName: string;
  signUpEmail: string;
  setSignUpName: (name: string) => void;
  setSignUpEmail: (email: string) => void;
}

interface FormValues {
  name: string;
  email: string;
  password: string;
  password2: string;
  terms: string;
  termsOfServiceAcceptance: boolean;
}

const SignUpArtistFormFirst: FC<SignUpArtistFormFirstProps> = ({
  signUpName,
  signUpEmail,
  setSignUpName,
  setSignUpEmail,
}) => {
  const styles = useFormLabelStyles();
  const dispatch = useDispatch();
  const router = useRouter();
  const { status, error } = useSelector(selectUserSignInStatus);

  const onSubmit = (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    const { name, email, password } = values;
    dispatch(
      signUp(name, email, password, USER_TYPE.ARTIST, (redirect: boolean) => {
        setSubmitting(false);
        redirect && router.push('/new-artist');
      })
    );
  };

  const onBlurSignUpName = (e: FormEvent<HTMLInputElement>) => {
    setSignUpName(e.currentTarget.value);
  };

  const onBlurSignUpEmail = (e: FormEvent<HTMLInputElement>) => {
    setSignUpEmail(e.currentTarget.value);
  };

  return (
    <Formik
      initialValues={{
        name: signUpName,
        email: signUpEmail,
        password: '',
        password2: '',
        terms: '',
        termsOfServiceAcceptance: false,
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => (
        <Form>
          <Grid container spacing={2}>
            {/* artist name */}
            <Grid item xs={12} sm={6}>
              <Field
                component={ControlledInputTextField}
                textLabel="Artist Name"
                textLabelSmall="What do you go by? (Full name on next step)"
                placeholder="WXLLLANDER"
                name="name"
                typeInput="text"
                onBlur={onBlurSignUpName}
              />
            </Grid>

            {/* email address */}
            <Grid item xs={12} sm={6}>
              <Field
                component={ControlledInputTextField}
                textLabel="Email Address"
                placeholder="hello@wxllspace.com"
                textLabelSmall="Where can we contact you?"
                typeInput="email"
                name="email"
                onBlur={onBlurSignUpEmail}
              />
            </Grid>

            {/* password */}
            <Grid item xs={12} sm={6}>
              <Field
                textLabel="Password"
                placeholder="shhhh"
                typeInput="password"
                component={ControlledInputTextField}
                name="password"
              />
            </Grid>

            {/* confirm password */}
            <Grid item xs={12} sm={6}>
              <Field
                textLabel="Confirm Password"
                placeholder="confirm password"
                typeInput="password"
                component={ControlledInputTextField}
                name="password2"
              />
            </Grid>

            {/* hear about us */}
            <Grid item xs={12}>
              <Field
                component={ControlledInputSelect}
                textLabel="How did you hear about us?"
                placeholder=""
                name="terms"
                typeInput="terms"
                defaultValue="CEO"
                list={['WOM', 'CEO', 'Instagram', 'Referral', 'Other']}
              />
            </Grid>

            {/* terms of service */}
            <Grid item xs={12}>
              <Typography
                sx={{
                  fontFamily: 'var(--font-family-montserrat)',
                  fontWeight: '400',
                  color: 'var(--white)',
                  fontSize: '12px',
                  lineHeight: '1.5',
                }}
              >
                PLEASE ACCEPT THE WXLLSPACE TERMS OF SERVICE BEFORE CONTINUING
              </Typography>
            </Grid>

            {/* checkbox */}
            <Grid item xs={12}>
              <Field
                component={ControlledInputCheckbox}
                name="termsOfServiceAcceptance"
                icon={<CheckboxIcon />}
                checkedIcon={<CheckboxCheckedIcon />}
                description={
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-family-montserrat)',
                      fontWeight: '400',
                      color: 'var(--white)',
                      fontSize: '12px',
                      lineHeight: '1.5',
                    }}
                  >
                    YES, I UNDERSTAND AND AGREE TO THE WXLLSPACE{' '}
                    <Link
                      sx={{
                        fontWeight: '700',
                        textDecoration: 'none',
                        color: '#64E1DC',
                      }}
                      target="__blank"
                      href="privacy-policy"
                    >
                      PRIVACY POLICY
                    </Link>
                    , INCLUDING THE{' '}
                    <Link
                      sx={{
                        fontWeight: '700',
                        textDecoration: 'none',
                        color: '#64E1DC',
                      }}
                      target="__blank"
                      href="/cookies-policy"
                    >
                      COOKIES POLICY
                    </Link>{' '}
                    AND{' '}
                    <Link
                      sx={{
                        fontWeight: '700',
                        textDecoration: 'none',
                        color: '#64E1DC',
                      }}
                      target="__blank"
                      href="/terms-of-use"
                    >
                      TERMS & CONDITIONS
                    </Link>
                    .
                  </Typography>
                }
              />
            </Grid>

            {/* button next */}
            <Grid item xs={12}>
              <LoadingButton
                className={styles.submitButton}
                loading={status === REQUEST_STATUS.LOADING}
                disabled={status === REQUEST_STATUS.LOADING}
                type="submit"
              >
                <Box sx={{ textAlign: 'center', width: '100%' }}>Submit</Box>
              </LoadingButton>
            </Grid>
            <Grid item xs={12}>
              {status === REQUEST_STATUS.FAILED && (
                <Typography sx={{ color: 'red', marginBottom: '5px' }}>
                  {error}
                </Typography>
              )}
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpArtistFormFirst;

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
