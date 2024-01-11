import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';
import { makeStyles } from '@mui/styles';
import { styled as muiStyledSystem } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { LoadingButton } from '@mui/lab';

import ControlledInputTextField from './ControlledInputTextField';

import { resetPassword } from '@/store/actions/userActions';

import {
  PASSWORD_REQUIRED,
  PASSWORD_CONFIRMATION_REQUIRED,
} from '../../constants/errorMessage';
import {
  REQUEST_STATUS,
  selectUserSignInStatus,
} from '@/store/reducers/userReducers';
import { useSearchParams } from 'next/navigation';
import { useAppDispatch } from '@/store';

interface FormState {
  password: string | null;
  passwordConfirmation: string | null;
}

const validationSchema = Yup.object().shape({
  password: Yup.string().nullable().min(6).required(PASSWORD_REQUIRED),
  passwordConfirmation: Yup.string()
    .nullable()
    .oneOf([Yup.ref('password'), null], PASSWORD_CONFIRMATION_REQUIRED),
});

const useFormLabelStyles = makeStyles({
  label: {
    fontSize: '12px',
    borderRadius: '8px',
    color: '#64E1DC',
    fontWeight: '600',
    height: '52px',
    width: '100%',
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

export const ResetPasswordForm: React.FC = () => {
  const query = useSearchParams();
  const token = query.get('token');
  const [isLinkedSend, setIsLinkedSend] = useState(false);
  const styles = useFormLabelStyles();
  const dispatch = useAppDispatch();
  const { status, error } = useSelector(selectUserSignInStatus);

  useEffect(() => {
    dispatch({ type: 'USER_SIGNIN_RESET' });
  }, []);

  const onSubmit = (values: FormState, helpers: FormikHelpers<FormState>) => {
    dispatch(
      resetPassword(values.password || '', token || '', () => {
        helpers.setSubmitting(false);
      })
    );
    if (status !== REQUEST_STATUS.FAILED) {
      setIsLinkedSend(true);
    }
  };

  const initialValues: FormState = {
    password: null,
    passwordConfirmation: null,
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        height: '100vh',
        justifyContent: 'center',
      }}
    >
      {status === REQUEST_STATUS.SUCCEEDED ? (
        <h1>Password has been reset successfully.</h1>
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ handleSubmit }) => (
            <Form>
              <Field
                component={ControlledInputTextField}
                textLabel="Password"
                placeholder="Password"
                name="password"
                typeInput="password"
                style={{ marginBottom: 10 }}
              />
              <Field
                component={ControlledInputTextField}
                textLabel="Confirm Password"
                placeholder="Confirm Password"
                name="passwordConfirmation"
                typeInput="password"
                style={{ marginBottom: 10 }}
              />
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
                <Box sx={{ textAlign: 'center', width: '100%' }}>
                  Change Password
                </Box>
              </LoadingButton>
            </Form>
          )}
        </Formik>
      )}
    </Box>
  );
};
