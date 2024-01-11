import React, { FormEvent } from 'react';
import { Grid, Typography, Box, Link } from '@mui/material';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingButton } from '@mui/lab';
import { makeStyles } from '@mui/styles';

import ControlledInputTextField from './ControlledInputTextField';
import ControlledInputSelect from './ControlledInputSelect';
import ControlledInputCheckbox from './ControlledInputCheckbox';

import {
  selectUserSignInStatus,
  REQUEST_STATUS,
} from '@/store/reducers/userReducers';
import { USER_TYPE } from '@/constants/userConstants';
import { signUp } from '@/store/actions/userActions';
import { useRouter } from 'next/router';

interface SignUpOwnerFormFirstProps {
  signUpName: string;
  signUpEmail: string;
  setSignUpName: (value: string) => void;
  setSignUpEmail: (value: string) => void;
}

interface FormValues {
  name: string;
  email: string;
  password: string;
  password2: string;
  terms: string;
  termsOfServiceAcceptance: boolean;
}

export const validationSchema = Yup.object().shape({
  name: Yup.string().nullable().required('Name is required.'),
  email: Yup.string().email().nullable().required('Email is required.'),
  password: Yup.string().nullable().required('Password is required'),
  password2: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match.')
    .nullable()
    .required('Confirm password is required.'),
  termsOfServiceAcceptance: Yup.boolean().oneOf(
    [true],
    'You need to agree Terms & Conditions.'
  ),
});

export const useFormLabelStyles = makeStyles({
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
    cursor: 'pointer',
  },
});

const SignUpOwnerFormFirst: React.FC<SignUpOwnerFormFirstProps> = ({
  signUpName,
  signUpEmail,
  setSignUpName,
  setSignUpEmail,
}) => {
  const styles = useFormLabelStyles();
  const dispatch = useDispatch();
  const history = useRouter();
  const { status, error } = useSelector(selectUserSignInStatus);

  const onSubmit = (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    const { name, email, password } = values;
    dispatch(
      signUp(
        name,
        email,
        password,
        USER_TYPE.WXLLOWNER,
        (redirect: boolean) => {
          setSubmitting(false);
          redirect && history.push('/new-owner');
        }
      )
    );
  };

  const onBlurSignUpName = (e: FormEvent<HTMLInputElement>) => {
    setSignUpName(e.currentTarget.value);
  };

  const onBlurSignUpEmail = (e: FormEvent<HTMLInputElement>) => {
    setSignUpEmail(e.currentTarget.value);
  };

  const initialValues: FormValues = {
    name: signUpName,
    email: signUpEmail,
    password: '',
    password2: '',
    terms: '',
    termsOfServiceAcceptance: false,
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => (
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Field
                component={ControlledInputTextField}
                textLabel="Owner Name"
                placeholder="Elon Musk"
                name="name"
                typeInput="text"
                onBlur={onBlurSignUpName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                component={ControlledInputTextField}
                textLabel="Email Address"
                placeholder="hello@wxllspace.com"
                name="email"
                typeInput="email"
                onBlur={onBlurSignUpEmail}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                component={ControlledInputTextField}
                textLabel="Password"
                placeholder="password"
                name="password"
                typeInput="password"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                component={ControlledInputTextField}
                textLabel="Confirm Password"
                placeholder="confirm password"
                name="password2"
                typeInput="password"
              />
            </Grid>
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

export default SignUpOwnerFormFirst;

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
