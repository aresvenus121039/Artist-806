import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { LoadingButton } from '@mui/lab';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { submitContactUs } from '@/store/actions/contactActions';
import {
  selectContactUsDetails,
  REQUEST_STATUS,
} from '@/store/reducers/contactReducer';
import ControlledInputTextField from '@/components/controls/ControlledInputTextField';

const useStyles = makeStyles((theme) => ({
  sectionHeading: {
    [theme.breakpoints.only('xs')]: {
      fontSize: '34px',
      fontWeight: 900,
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      letterSpacing: '-0.05em',
      backgroundImage:
        'linear-gradient(94.83deg, #FFFFFF 26.58%, #A984FF 44.93%, #64E1DC 54.77%, #6FC2FF 64.82%, #FFFFFF 78.91%) !important',
      backgroundSize: '100%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'center',
      textTransform: 'capitalize',
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: '70px',
      fontWeight: 900,
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      letterSpacing: '-0.05em',
      backgroundImage:
        'linear-gradient(94.83deg, #FFFFFF 26.58%, #A984FF 44.93%, #64E1DC 54.77%, #6FC2FF 64.82%, #FFFFFF 78.91%) !important',
      backgroundSize: '100%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'center',
      textTransform: 'capitalize',
    },
    [theme.breakpoints.only('md')]: {
      fontSize: '120px',
      fontWeight: 900,
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      lineHeight: '1.6',
      letterSpacing: '-0.05em',
      backgroundImage:
        'linear-gradient(94.83deg, #FFFFFF 26.58%, #A984FF 44.93%, #64E1DC 54.77%, #6FC2FF 64.82%, #FFFFFF 78.91%) !important',
      backgroundSize: '100%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'center',
      textTransform: 'capitalize',
    },
    [theme.breakpoints.only('lg')]: {
      fontSize: '120px',
      fontWeight: 900,
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      lineHeight: '1.6',
      letterSpacing: '-0.05em',
      backgroundImage:
        'linear-gradient(94.83deg, #FFFFFF 26.58%, #A984FF 44.93%, #64E1DC 54.77%, #6FC2FF 64.82%, #FFFFFF 78.91%) !important',
      backgroundSize: '100%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'center',
      textTransform: 'capitalize',
    },
    [theme.breakpoints.only('xl')]: {
      fontSize: '120px',
      fontWeight: 900,
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      lineHeight: '1.6',
      letterSpacing: '-0.05em',
      backgroundImage:
        'linear-gradient(94.83deg, #FFFFFF 26.58%, #A984FF 44.93%, #64E1DC 54.77%, #6FC2FF 64.82%, #FFFFFF 78.91%) !important',
      backgroundSize: '100%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'center',
      textTransform: 'capitalize',
    },
  },
}));

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required field.').nullable(),
  email: Yup.string().required('Email is required field').nullable(),
  message: Yup.string().required('Message is required field').nullable(),
});

const ContactSection = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const contactUsDetails = useSelector(selectContactUsDetails);

  const onSubmit = (values, { setSubmitting }) => {
    const { name, email, message } = values;

    dispatch(
      submitContactUs(
        {
          name,
          email,
          message,
        },
        () => setSubmitting(false)
      )
    );
  };

  return (
    <Box
      sx={{
        maxWidth: '743px',
        width: '100%',
        padding: '0 20px',
        margin: '0 auto',
      }}
    >
      {/* title */}
      <Typography
        className={classes.sectionHeading}
        varient="h1"
        component="h1"
        sx={{
          marginBottom: '20px',
        }}
      >
        Contact Us
      </Typography>

      {/* description */}
      <Typography
        component="p"
        sx={{
          fontFamily: 'var(--font-family-montserrat)',
          fontWeight: '400',
          color: '#D8D8D8',
          fontSize: '16px',
          lineHeight: '2.4',
          textAlign: 'center',
          marginBottom: '35px',
        }}
      >
        If you have any feedback or would like to drop a message on something
        you wish to see or how we can create a better product, please do not
        hesitate. We are looking for ideas that help you connect to communities
        through art.
      </Typography>

      {/* contact */}
      <Box
        sx={{
          background:
            'linear-gradient(#121c36, #121c36) padding-box, linear-gradient(144deg, rgba(0,200,200,1) 0%, rgba(18,28,54,1) 34%, rgba(18,28,54,1) 70%, rgba(85,126,252,1) 100%) border-box',
          borderRadius: '32px',
          border: '1px solid transparent',
          maxWidth: '661px',
          width: '100%',
          padding: {
            xs: '26px',
            sm: '54px',
          },
          margin: '0 auto',
        }}
      >
        <Formik
          initialValues={{
            name: null,
            email: null,
            message: null,
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ handleSubmit, values }) => {
            return (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Field
                    component={ControlledInputTextField}
                    textLabel="Full name"
                    name="name"
                    typeInput="text"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    component={ControlledInputTextField}
                    textLabel="Email"
                    name="email"
                    typeInput="text"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={ControlledInputTextField}
                    textLabel="Message"
                    name="message"
                    multiline
                    inputProps={{
                      minRows: 8,
                      maxRows: 8,
                    }}
                    typeInput="textarea"
                  />
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                  <LoadingButton
                    loading={contactUsDetails.status === REQUEST_STATUS.LOADING}
                    disabled={
                      contactUsDetails.status === REQUEST_STATUS.LOADING
                    }
                    onClick={handleSubmit}
                    sx={{
                      padding: '15px 40.4px',
                      backgroundColor: '#a945f7',
                      borderRadius: '1000px',
                      boxShadow: '12px 12px 27px #a845f77d',
                      color: 'var(--white)',
                      fontFamily: 'var(--font-family-montserrat)',
                      fontSize: '14px',
                      fontWeight: '600',
                      fontStyle: 'normal',
                      lineHeight: '1.4',
                      marginBottom: '24px',
                      '&:hover': {
                        backgroundColor: '#a945f7',
                      },
                      textTransform: 'capitalize',
                    }}
                  >
                    Send
                  </LoadingButton>
                  {contactUsDetails.status === REQUEST_STATUS.FAILED && (
                    <Typography sx={{ color: 'red', marginBottom: '5px' }}>
                      {contactUsDetails.error}
                    </Typography>
                  )}
                  {contactUsDetails.status === REQUEST_STATUS.SUCCEEDED && (
                    <Typography sx={{ color: 'green', marginBottom: '5px' }}>
                      Your message is submitted.
                    </Typography>
                  )}
                </Grid>
              </Grid>
            );
          }}
        </Formik>
      </Box>
    </Box>
  );
};

export default ContactSection;
