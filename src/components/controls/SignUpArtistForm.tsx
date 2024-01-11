import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Grid, Typography } from '@mui/material';
import * as Yup from 'yup';
import { Field, FieldArray, Form, Formik, FormikHelpers } from 'formik';
import { styled as muiStyledSystem, width } from '@mui/system';
import styled from 'styled-components';

import StepperCustom from './StepperCustom';
import InputLabel from './InputLabel';
import ControlledInputPhoneNumber from './ControlledInputPhoneNumber';
import ControlledInputTextField from './ControlledInputTextField';
import ControlledInputAddress from './ControlledInputAddress';
import ControlledInputMultiSelect from './ControlledInputMultiSelect';
import ControlledInputUpload from './ControlledInputUpload';
import { submitArtistInfo } from '@/store/actions/artistActions';
import { selectSignedInUser } from '@/store/reducers/userReducers';
import { getUserDetails } from '@/store/actions/userActions';
import ControlledInputCheckbox from './ControlledInputCheckbox';

import {
  ARTIST_SUBMIT_INFO_FAIL,
  ARTIST_SUBMIT_INFO_LOADING,
  styleList,
} from '../../constants/artistConstants';
import ScrollToErrorFormik from './ScrollToErrorFormik';
import {
  requestStatus,
  selectSubmitArtistDetails,
} from '@/store/reducers/submitArtistInfoReducers';
import { titleCase } from '@/utility';
import { basicArtistSchema } from '../../validations/artist-schema';
import { Gallery, User } from '@/types';
import { useRouter } from 'next/router';
import { useAppDispatch } from '@/store';
import ControlledDropzoneInput, {
  CustomButtonRoot,
} from './ControlledDropZone';
import GalleryDropzone from './GalleryDropZone';
import { getNumberWord, pathToIndex } from '@/utility/numberWords';
import { ButtonUnstyled } from '@mui/core';
import { AddressTest } from '@/validations/validate-address';

interface FormValues {
  id?: string;
  artist_name?: string;
  name?: string;
  email?: string;
  address: string;
  phone?: string;
  instagram_handle?: string;
  art_types?: Array<string>;
  first_name?: string;
  last_name?: string;
  phoneNumber?: string;
  fullAddress?: string;
  promotion_acceptance?: boolean;
  instagram?: string;
  website: string;
  about: string;
  artStyle?: Array<{ value: string }>;
  artist_image: Array<{ file: string }>;
  profilePhoto?: Array<{ file: string }>;
  portfolio: Array<{ file: string }>;
  logo: Array<{ file: string }>;
  brand: Array<{ file: string }>;
  gallery?: Gallery;
  color_palette: Array<{ file: string }>;
}

interface ArtistInfoValues
  extends Omit<
    FormValues,
    | 'logo'
    | 'artist_image'
    | 'portfolio'
    | 'brand'
    | 'color_palette'
    | 'gallery'
  > {
  logo?: string | null;
  artist_image?: string | null;
  portfolio?: string | null;
  brand?: string | null;
  color_palette?: string | null;
  gallery?: Gallery;
}

export const validationSchema = [
  Yup.object().shape(basicArtistSchema),
  Yup.object().shape({
    profilePhoto: Yup.array().nullable(),
    portfolio: Yup.array().nullable(),
    artStyle: Yup.array().nullable(),
    logo: Yup.array(),
    brand: Yup.array(),
    artist_image: Yup.mixed().required(),
    color_palette: Yup.array(),
    gallery: Yup.array()
      .of(
        Yup.object().shape({
          file: Yup.mixed(),
          dataURL: Yup.string(),
          Title: Yup.string().required(
            ({ path }) =>
              `The Title of the photo ${pathToIndex(path)} is required`
          ),
          Address: Yup.string()
            .required(
              ({ path }) =>
                `The Address of the photo ${pathToIndex(path)} is required`
            )
            .test('is-valid-address', 'Invalid address format.', AddressTest),
        })
      )
      .max(16, 'You cannot add more than 16 photos'),
  }),
];

const SignUpArtistForm: React.FC = () => {
  const history = useRouter();
  const dispatch = useAppDispatch();
  const signedInUser = useSelector(selectSignedInUser);
  const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
  const submitArtistStatus = useSelector(requestStatus);
  const selectSubmitArtist = useSelector(selectSubmitArtistDetails);
  const [activeStep, setActiveStep] = useState(0);
  const isLastStep = activeStep === 1;
  const [initialValues, setInitialValues] = useState<
    Omit<FormValues, 'address'>
  >({
    artist_name: userInfo?.artist_name,
    first_name: '',
    last_name: '',
    phoneNumber: '',
    fullAddress: '',
    promotion_acceptance: true,
    instagram: '',
    website: '',
    about: '',
    artStyle: [],
    artist_image: [],
    profilePhoto: [],
    portfolio: [],
    logo: [],
    brand: [],
    color_palette: [],
    gallery: [],
  });

  const onSubmitArtistInfo = async (
    values: Omit<FormValues, 'address'>,
    actions: FormikHelpers<Omit<FormValues, 'address'>>
  ) => {
    const initValues: Omit<FormValues, 'address'> = {
      artist_name: userInfo?.artist_name,
      first_name: titleCase(values.first_name),
      last_name: titleCase(values.last_name),
      phoneNumber: values.phoneNumber,
      fullAddress: values.fullAddress,
      promotion_acceptance: values.promotion_acceptance,
      instagram: values.instagram,
      website: values.website,
      about: values.about,
      // price_per_square_foot: values.price_per_square_foot,
      // pay_split_preference: values.pay_split_preference,
      // accept_crypto_payment: values.accept_crypto_payment,
      // experience_level: values.experience_level,
      // completed_murals: values.completed_murals,
      artStyle: values.artStyle,
      artist_image: values.artist_image,
      profilePhoto: values.profilePhoto,
      portfolio: values.portfolio,
      logo: values.logo,
      brand: values.brand,
      color_palette: values.color_palette,
    };

    setInitialValues({ ...initValues });

    if (!isLastStep) {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
      return;
    }

    const extractFirstFile = (
      arr: Array<{ file: string }> | null
    ): string | null => {
      if (!arr || arr.length === 0) {
        return null;
      }
      return arr[0].file;
    };

    let galleryHelper: any = {};

    values.gallery?.map((el, i) => {
      galleryHelper[`photo${i + 1}`] = el.file;
      galleryHelper[`photo${i + 1}Title`] = el.Title;
      galleryHelper[`photo${i + 1}Address`] = el.Address;
    });

    const artistInfo: ArtistInfoValues = {
      id: signedInUser.id,
      artist_name: userInfo?.artist_name || userInfo?.name,
      name: values.first_name,
      last_name: values.last_name,
      email: signedInUser.email,
      promotion_acceptance: values.promotion_acceptance,
      address: values.fullAddress || '',
      phone: values.phoneNumber,
      instagram_handle: values.instagram,
      website: values.website,
      about: values.about,
      // price_per_square_foot: values.price_per_square_foot,
      // pay_split_preference: values.pay_split_preference,
      // accept_crypto_payment: values.accept_crypto_payment === 'yes',
      // experience_level: values.experience_level,
      // completed_murals: values.completed_murals,
      art_types: values.artStyle?.map((style) => style.value) || [],
      logo: extractFirstFile(values.logo),
      artist_image: extractFirstFile(values.artist_image),
      portfolio: extractFirstFile(values.portfolio),
      brand: extractFirstFile(values.brand),
      color_palette: extractFirstFile(values.color_palette),
      ...galleryHelper,
    };

    dispatch(
      submitArtistInfo(artistInfo, (success: boolean) => {
        if (success) {
          actions.setTouched({});
          actions.setSubmitting(false);
          dispatch(
            getUserDetails((success: boolean, userData: User) => {
              if (success) {
                history.push(`/artist/${userData.slug}`);
              }
            })
          );
        }
      })
    );
  };

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema[activeStep]}
        onSubmit={onSubmitArtistInfo}
      >
        {({ handleSubmit, isSubmitting, values, setFieldValue, errors }) => {
          return (
            <Form>
              <Grid container spacing={2}>
                {/* stepper */}
                <Grid item xs={12}>
                  <StepperCustom
                    listText={[
                      'Introduce Yourself',
                      // 'Payment and Pricing',
                      // 'Experience',
                      'Let’s Build Your Landing Page',
                    ]}
                    activeStep={activeStep}
                  />
                </Grid>

                {/* step 1 */}
                {activeStep === 0 && (
                  <Grid item xs={12}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <Field
                          component={ControlledInputTextField}
                          textLabel="What is your first name?"
                          textLabelSmall="What is your first name?"
                          placeholder="Jordan"
                          name="first_name"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field
                          component={ControlledInputTextField}
                          textLabel="Last name?"
                          textLabelSmall="What is your last name?"
                          placeholder="Giha"
                          name="last_name"
                        />
                      </Grid>
                      {/* phone */}
                      <Grid item xs={12} sm={6}>
                        <Field
                          component={ControlledInputPhoneNumber}
                          textLabel="What is the best number to reach you at?"
                          textLabelSmall="Please share your mobile phone number"
                          placeholder="(808)808-0808"
                          name="phoneNumber"
                        />
                      </Grid>

                      {/* instagram handle */}
                      <Grid item xs={12} sm={6}>
                        <Field
                          component={ControlledInputTextField}
                          textLabel="What is your instagram handle?"
                          textLabelSmall="Where can people find you on Instagram?"
                          placeholder="wxlllander"
                          name="instagram"
                          prefix={
                            <Typography sx={{ color: 'white' }}>@</Typography>
                          }
                        />
                      </Grid>

                      {/* website */}
                      <Grid item xs={12} sm={6}>
                        <Field
                          component={ControlledInputTextField}
                          textLabel="What is your website?"
                          textLabelSmall="Do you have a website or portfolio online?"
                          placeholder="wxllspace.com"
                          name="website"
                          prefix={
                            <Typography sx={{ color: 'white' }}>
                              https://
                            </Typography>
                          }
                        />
                      </Grid>

                      {/* about you */}
                      <Grid item xs={12}>
                        <Field
                          name="about"
                          component={ControlledInputTextField}
                          multiline
                          rows={6}
                          textLabel="Tell us a little about you?"
                          textLabelSmall="Where are you from? What do you like to do?"
                          placeholder="My name is WXLLANDER and I am from WXLLSPACE. I have been sourcing walls to bring back to earth so we can make public art easier to access across the globe. I am also..."
                        ></Field>
                      </Grid>

                      {/* address */}
                      <Grid item xs={12}>
                        <Field
                          name="fullAddress"
                          // typeInput="text"
                          component={ControlledInputAddress}
                          textLabel="What is your studio or work address? "
                          textLabelSmall="Your privacy is protected. This must be added to appear on marketplace. Please allow the address autocomplete to fill out the address."
                          placeholder="342 Westchester Avenue, Port Chester, NY, 10573, USA"
                        />
                      </Grid>

                      {/* Promotion Acceptance */}
                      <Grid item xs={12}>
                        <Field
                          component={ControlledInputCheckbox}
                          name="promotion_acceptance"
                          icon={<CheckboxIcon />}
                          checked={values.promotion_acceptance}
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
                              I agree and allow WXLLSPACE to promote my profile
                              on behalf of me.
                            </Typography>
                          }
                        />
                      </Grid>

                      {/* button next */}
                      <Grid item xs={12}>
                        <SubmitButton
                          type="submit"
                          // onClick={handleSubmit}
                          disabled={isSubmitting}
                        >
                          <Box sx={{ textAlign: 'center', width: '100%' }}>
                            Next Step
                          </Box>
                        </SubmitButton>
                      </Grid>
                    </Grid>
                  </Grid>
                )}

                {/* step 2 */}
                {activeStep === 1 && (
                  <Grid item xs={12}>
                    <Grid container spacing={2}>
                      {/* description */}
                      <Grid item xs={12}>
                        <Typography
                          sx={{
                            fontSize: '14px',
                            fontWeight: 600,
                            color: '#FFFFFF',
                            fontFamily: 'var(--font-family-montserrat)',
                            lineHeight: 2,
                          }}
                        >
                          Thanks for giving us some details. Now let’s build
                          your landing page so we have a summarized page to
                          showcase all your work and accomplishments to the
                          universe.
                        </Typography>
                      </Grid>

                      {/* photo profile */}
                      <Grid item xs={12} sm={6}>
                        <Field
                          component={ControlledDropzoneInput}
                          textLabel="Upload your profile photo"
                          textLabelSmall="Preferably an action or headshot OR gif 🙃."
                          name="artist_image"
                        />
                      </Grid>

                      {/* logo */}
                      <Grid item xs={12} sm={6}>
                        <Field
                          component={ControlledDropzoneInput}
                          textLabel="Do you have a logo?"
                          textLabelSmall="Make sure you upload a white or gray PNG with a transparent background."
                          name="logo"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Field
                          component={ControlledInputMultiSelect}
                          textLabel="Describe the art styles you practice:"
                          name="artStyle"
                          list={styleList}
                        />
                      </Grid>
                      {/* photo */}
                      <Grid item xs={12}>
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <InputLabel text="Time to build your mural portfolio and showcase your favorite pieces." />
                            <Typography
                              sx={{
                                fontSize: '10px',
                                fontWeight: 600,
                                color: '#848381',
                                fontFamily: 'var(--font-family-montserrat)',
                                lineHeight: 2,
                              }}
                            >
                              Here’s the fun part, we’re going to add a title
                              and location for each wall. This is for a very
                              cool feature. If you don’t have the actual address
                              for each piece, any relative area is fine. Please
                              allow the address autocomplete to find the nearest
                              address for you. Also the images have to be
                              different.
                            </Typography>
                          </Grid>

                          {/* DROPZONE */}
                          <Grid item xs={12} marginBottom={2}>
                            <FieldArray name="gallery">
                              {({ push, remove }) => (
                                <div>
                                  <Field
                                    name="gallery"
                                    component={GalleryDropzone}
                                  />
                                  {values.gallery &&
                                    values.gallery.map((photo: any, index) => {
                                      return (
                                        <Grid
                                          container
                                          spacing={1}
                                          sx={{ marginTop: '2px' }}
                                          key={index}
                                        >
                                          {/* IMAGE SHOWCASE */}
                                          <Box
                                            sx={{
                                              marginTop: '40px',
                                              display: 'flex',
                                              gap: '10px',
                                              width: '100%',
                                              justifyContent: 'center',
                                            }}
                                          >
                                            <Box
                                              sx={{
                                                position: 'relative',
                                                width: '70%',
                                                '@media (min-width:960px)': {
                                                  width: '55%',
                                                },
                                              }}
                                            >
                                              <CustomTypography>
                                                Photo {index + 1}
                                              </CustomTypography>
                                              <img
                                                style={{ width: '100%' }}
                                                alt="previewImg"
                                                src={photo.dataURL}
                                              />
                                              <ButtonUnstyled
                                                component={CustomButtonRoot}
                                                onClick={() => {
                                                  remove(index);
                                                  setFieldValue(
                                                    'gallery',
                                                    values.gallery?.filter(
                                                      (_, i) => i !== index
                                                    )
                                                  );
                                                }}
                                                sx={{
                                                  position: 'absolute',
                                                  top: 0,
                                                  right: 0,
                                                }}
                                              >
                                                X
                                              </ButtonUnstyled>
                                            </Box>
                                          </Box>
                                          {/* TITLE */}
                                          <Grid item xs={12}>
                                            <Field
                                              component={
                                                ControlledInputTextField
                                              }
                                              name={`gallery.${index}.Title`}
                                              typeInput="text"
                                              textLabel={`What is the title of the ${getNumberWord(
                                                index
                                              )} mural?`}
                                              textLabelSmall="Does this mural have a name?"
                                              placeholder="“Untitled”"
                                            />
                                            <Typography
                                              sx={{
                                                color: 'red',
                                                fontSize: '13px',
                                              }}
                                            >
                                              {errors.gallery &&
                                                (errors?.gallery![index] as any)
                                                  ?.Title}
                                            </Typography>
                                          </Grid>

                                          {/* LOCATION */}
                                          <Grid item xs={12}>
                                            <Field
                                              name={`gallery.${index}.Address`}
                                              typeInput="text"
                                              component={ControlledInputAddress}
                                              textLabel={`What is the location of the ${getNumberWord(
                                                index
                                              )} mural?`}
                                              textLabelSmall="Allow the autocomplete to store the address."
                                              placeholder="1 Rocket Rd, Hawthorne, CA 90250"
                                            />
                                            <Typography
                                              sx={{
                                                color: 'red',
                                                fontSize: '13px',
                                              }}
                                            >
                                              {errors.gallery &&
                                                (errors?.gallery![index] as any)
                                                  ?.Address}
                                            </Typography>
                                          </Grid>
                                        </Grid>
                                      );
                                    })}
                                </div>
                              )}
                            </FieldArray>
                          </Grid>
                        </Grid>
                      </Grid>

                      {/* color pallete */}
                      {/* <Grid item xs={12}>
                        <Field
                          component={ControlledInputUpload}
                          textLabel="Do you have a favorite color palette?"
                          name="color_palette"
                        />
                      </Grid> */}

                      {/* button back */}
                      <Grid item xs={12} sm={6}>
                        <BackButton onClick={() => setActiveStep(0)}>
                          <Box sx={{ textAlign: 'center', width: '100%' }}>
                            Back
                          </Box>
                        </BackButton>
                      </Grid>

                      {/* button next */}
                      <Grid item xs={12} sm={6}>
                        <SubmitButton
                          type="submit"
                          // onClick={handleSubmit}
                          disabled={isSubmitting}
                        >
                          <Box sx={{ textAlign: 'center', width: '100%' }}>
                            {submitArtistStatus === ARTIST_SUBMIT_INFO_LOADING
                              ? 'Please wait...'
                              : 'Finish'}
                          </Box>
                        </SubmitButton>
                      </Grid>
                    </Grid>
                  </Grid>
                )}
              </Grid>
              <ScrollToErrorFormik />
            </Form>
          );
        }}
      </Formik>
      {submitArtistStatus === ARTIST_SUBMIT_INFO_FAIL && (
        <Typography
          className={'Mui-error'}
          sx={{ color: 'red', fontSize: '13px', marginTop: '10px' }}
        >
          {selectSubmitArtist?.error}
        </Typography>
      )}
    </>
  );
};

export default SignUpArtistForm;

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

const BackButton = muiStyledSystem('button')(`
  font-family: var(--font-family-montserrat);
  color: #33F7F7;
  display: flex;
  align-items: center;
  border: 1px solid #33F7F7;
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
  cursor: pointer;
`);

const CustomTypography = muiStyledSystem(Typography)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  marginLeft: 5,
  marginTop: 6,
  backgroundColor: 'lightgrey',
  color: 'black',
  paddingLeft: 10,
  paddingRight: 10,
  borderRadius: 3,
}));

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
