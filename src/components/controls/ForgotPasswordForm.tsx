import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';
import { makeStyles } from '@mui/styles';
import { styled as muiStyledSystem } from '@mui/system';
import { useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { LoadingButton } from '@mui/lab';

import ControlledInputTextField from '@/components/controls/ControlledInputTextField';

import {
  selectUserSignInStatus,
  REQUEST_STATUS,
} from '@/store/reducers/userReducers';

import { forgotPassword } from '@/store/actions/userActions';

import {
  INVALID_EMAIL_ADDRESS,
  EMAIL_REQUIRED,
} from '@/constants/errorMessage';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from '@/store';

interface FormValues {
  email: string | null;
  password: string | null;
}

interface ApiResponse {
  status: string;
  error: string;
  data: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email(INVALID_EMAIL_ADDRESS)
    .nullable()
    .required(EMAIL_REQUIRED),
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

export const ForgotPasswordForm: React.FC = () => {
  const [isLinkedSend, setIsLinkedSend] = useState(false);
  const styles = useFormLabelStyles();
  const dispatch = useAppDispatch();
  const response = useSelector(selectUserSignInStatus);

  const onSubmit = (values: FormValues, { setSubmitting }: any) => {
    dispatch(
      forgotPassword(values.email || '', () => {
        setSubmitting(false);
      })
    );
    if (response.status !== REQUEST_STATUS.FAILED) {
      setIsLinkedSend(true);
    }
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
        height: '100vh',
        justifyContent: 'center',
      }}
    >
      {isLinkedSend ? (
        <h1>
          Your password reset request has been sent. Please check your email
          inbox for further instructions.
        </h1>
      ) : (
        <>
          <Title>Reset Password</Title>
          <Formik
            initialValues={{
              email: null,
              password: null,
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ handleSubmit }) => (
              <Form>
                <Field
                  component={ControlledInputTextField}
                  textLabel="Email Address"
                  placeholder="Email Address"
                  name="email"
                  typeInput="email"
                  style={{ marginBottom: 10 }}
                />
                {response.status === REQUEST_STATUS.FAILED && (
                  <Typography
                    sx={{
                      color: 'red',
                      fontSize: 13,
                      marginBottom: '5px',
                    }}
                  >
                    {response.error}
                  </Typography>
                )}
                <LoadingButton
                  className={styles.submitButton}
                  loading={response.status === REQUEST_STATUS.LOADING}
                  disabled={response.status === REQUEST_STATUS.LOADING}
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                    handleSubmit(
                      e as unknown as React.FormEvent<HTMLFormElement>
                    )
                  }
                >
                  <Box sx={{ textAlign: 'center', width: '100%' }}>Submit</Box>
                </LoadingButton>
              </Form>
            )}
          </Formik>
        </>
      )}
    </Box>
  );
};

const Title = styled.h1`
  font-family: var(--font-family-montserrat);
  font-weight: 800;
  color: var(--white);
  font-size: var(--font-size-xxxl);
  letter-spacing: 0;
`;
