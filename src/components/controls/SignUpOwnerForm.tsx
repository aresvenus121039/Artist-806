import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import * as Yup from 'yup';
import { Formik, Field, FormikProps, Form } from 'formik';

import ControlledInputTextField from '@/components/controls/ControlledInputTextField';
import ControlledInputPhoneNumber from '@/components/controls/ControlledInputPhoneNumber';
import ControlledInputRadioGroup from '@/components/controls/ControlledInputRadioGroup';
import ControlledInputAddress from './ControlledInputAddress';

import { styled as muiStyledSystem } from '@mui/system';
import InputLabel from './InputLabel';
import { AddressTest } from '@/validations/validate-address';

interface SignUpOwnerFormProps {
  initialValues: {
    companyName: string | null;
    companyWebsite: string | null;
    phoneNumber: string | null;
    budget: number | null;
    address: string | null;
    undecidedBudget?: Array<string>;
    crypto?: string;
  };
  onSubmit: (values: {
    companyName: string | null;
    companyWebsite: string | null;
    phoneNumber: string | null;
    budget: number | null;
    address: string | null;
    undecidedBudget?: Array<string>;
    crypto?: string;
  }) => void;
}

const validationSchema = Yup.object().shape({
  companyName: Yup.string()
    .nullable()
    .required('Company name is required field.'),
  companyWebsite: Yup.string().nullable(),
  phoneNumber: Yup.string()
    .nullable()
    .required('Phone number is required field.'),
  budget: Yup.number().nullable(),
  address: Yup.string()
    .required('Address is required field.')
    .nullable()
    .test('is-valid-address', 'Invalid address format.', AddressTest),
});

const SignUpOwnerForm: React.FC<SignUpOwnerFormProps> = (props: any) => {
  return (
    <Formik
      initialValues={props.initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => props.onSubmit(values)}
    >
      {(formikProps: FormikProps<any>) => {
        return (
          <Grid item xs={12}>
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    component={ControlledInputTextField}
                    textLabel="What is your company name?"
                    placeholder="WXLLSPACE"
                    name="companyName"
                    typeInput="text"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={ControlledInputTextField}
                    textLabel="What is your company website?"
                    placeholder="https://wxllspace.com"
                    name="companyWebsite"
                    typeInput="text"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={ControlledInputPhoneNumber}
                    textLabel="What is the best number to reach you at?"
                    placeholder="(808)808-0808"
                    name="phoneNumber"
                    typeInput="text"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="address"
                    typeInput="text"
                    component={ControlledInputAddress}
                    textLabel="Please provide the address in which you are looking to place a mural on:"
                    placeholder="1 Rocket Road, Cape Canaveral , FL"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={ControlledInputTextField}
                    textLabel="What is your proposed budget for this project?"
                    placeholder="10,000"
                    name="budget"
                    disabled={
                      formikProps.values.undecidedBudget &&
                      formikProps.values.undecidedBudget.length
                    }
                    typeInput="number"
                    inputProps={{ min: 0 }}
                    prefix={<Typography sx={{ color: 'white' }}>$</Typography>}
                  />
                  <label>
                    <Field value="yes" type="checkbox" name="undecidedBudget" />
                    <InputLabel styleWrap={{ display: 'inline-block' }}>
                      I haven't decided my budget.
                    </InputLabel>
                  </label>
                </Grid>
                <Grid item xs={12} sx={{ display: 'none' }}>
                  <Field
                    component={ControlledInputRadioGroup}
                    textLabel="Do you provide crypto as payment?"
                    name="crypto"
                    items={[
                      { value: 'yes', label: 'Yes' },
                      { value: 'no', label: 'No' },
                    ]}
                  />
                </Grid>
                <Grid item xs={12}>
                  <SubmitButton
                    type="submit"
                    onClick={() => formikProps.handleSubmit()}
                  >
                    <Box sx={{ textAlign: 'center', width: '100%' }}>
                      Next Step
                    </Box>
                  </SubmitButton>
                </Grid>
              </Grid>
            </Form>
          </Grid>
        );
      }}
    </Formik>
  );
};

export default SignUpOwnerForm;

const SubmitButton = muiStyledSystem('button')(`
  font-family: var(--font-family-montserrat);
  color: white;
  display: flex;
  align-items: center;
  border: none;
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
  background: linear-gradient(91.35deg, #86FFFF 1.34%, #33F7F7 19.62%, #2CDEDE 38.09%, #0AC5C5 65.12%, #04A9A9 97.99%);
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
`);
