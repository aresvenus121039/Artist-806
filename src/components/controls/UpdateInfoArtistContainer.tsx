import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Box,
  styled,
  Tab,
  Tabs,
  TabScrollButton,
  Typography,
} from '@mui/material';
import {
  ArtistUpdateSelfForm,
  ArtistUpdateLandingPageForm,
} from './ArtistUpdateInfoForm';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectArtistDetails } from '@/store/reducers/artistReducers';
import { submitArtistInfo } from '@/store/actions/artistActions';
import { selectSignedInUser } from '@/store/reducers/userReducers';
import { getUserDetails } from '@/store/actions/userActions';
import {
  ARTIST_SUBMIT_INFO_FAIL,
  ARTIST_SUBMIT_INFO_LOADING,
} from '../../constants/artistConstants';
import {
  requestStatus,
  selectSubmitArtistDetails,
} from '@/store/reducers/submitArtistInfoReducers';
import { get, isArray, split, toArray, toPlainObject, trim } from 'lodash';
import ScrollToErrorFormik from './ScrollToErrorFormik';
import { basicArtistSchema } from '../../validations/artist-schema';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';
import { Artist, User } from '@/types';
import { validationObject } from '@/validations/photos-validation';

type Gallery = {
  photo: Array<any>;
  title: string;
  address: string;
};

const StyledTabs = styled(Tabs, {
  shouldForwardProp: (prop) => prop !== 'scrollButtons',
})(({ theme }) => ({
  '& .MuiTabs-indicator': {
    display: 'none',
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(1),
  borderRadius: '8px',
  color: 'rgba(255, 255, 255, 0.7)',
  fontFamily: 'var(--font-family-montserrat)',
  fontSize: '14px',
  '&.Mui-selected': {
    color: '#fff',
    background:
      'linear-gradient(79.45deg, #64E1DC 6.96%, #5700FF 108.67%)!important',
  },
  '&.Mui-focusVisible': {
    backgroundColor: 'rgba(100, 95, 228, 0.32)',
  },
}));

const validationSchema = [
  Yup.object().shape({
    artist_name: Yup.string()
      .required('Artist name is a required field.')
      .min(3),
    email: Yup.string().required('Email is a required field.').email(),
    artStyle: Yup.array().nullable(),
    ...basicArtistSchema,
  }),
  Yup.object().shape({
    price_per_square_foot: Yup.number(),
    pay_split_preference: Yup.string().required(),
    accept_crypto_payment: Yup.boolean(),
    artStyle: Yup.array().nullable(),
  }),
  Yup.object().shape({
    artist_image: Yup.mixed().required(),
    portfolio: Yup.mixed(),
    logo: Yup.mixed(),
    gallery: Yup.array()
      .of(
        Yup.object().shape({
          photo: validationObject.photo,
          title: validationObject.title,
          address: validationObject.address,
        })
      )
      .max(16, 'You cannot add more than 16 photos'),
  }),
];

const UpdateInfoArtistContainer = ({ artistDetails }: any) => {
  const history = useRouter();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { data } = artistDetails;
  const signedInUser = useSelector(selectSignedInUser);
  const submitArtistStatus = useSelector(requestStatus);
  const selectSubmitArtist = useSelector(selectSubmitArtistDetails);

  const [tabPosition, setTabPosition] = useState(0);

  const getArtStyle = useMemo<() => any>(() => {
    if (!(isArray(data?.art_types) && data?.art_types.length)) return [];
    return data?.art_types
      .filter((value: string) => value)
      .map((value: string) => ({ label: value, value: value }));
  }, [data?.art_types]);

  const gallery: Gallery[] = data.gallery.map((value: any) => {
    return {
      photo: [value],
      title: value.title,
      address: value.address,
    };
  });

  const initialValues = {
    artist_name: data?.artist_name,
    first_name: data?.name,
    last_name: data?.last_name,
    email: data?.email,
    phoneNumber: data?.phone,
    instagram: data?.instagram_handle,
    website: data?.website,
    about: data?.about,
    // fullAddress: data?.address?.api_address ? data?.address.api_address : '',
    fullAddress: data?.address?.full,
    price_per_square_foot: data?.price_per_square_foot,
    pay_split_preference: data?.pay_split_preference,
    accept_crypto_payment: data?.accept_crypto_payment === true ? 'yes' : 'no',
    experience_level: '',
    completed_murals: '',
    artStyle: toArray(getArtStyle),
    artist_image:
      isArray(data?.artist_image) && data?.artist_image.length
        ? toArray(data?.artist_image)
        : null,
    profilePhoto: [],
    portfolio: toArray(data?.portfolio),
    logo: toArray(data?.logo),
    exhibitions: data?.exhibitions,
    brand: toArray(data?.brand),
    color_palette: toArray(data?.color_palette || data?.colorPalette),
    gallery,
  };

  const onSubmitArtistInfo = async (values: any, actions: any) => {
    let galleryHelper: any = {};

    values.gallery?.map((el: Gallery, i: number) => {
      galleryHelper[`photo${i + 1}`] = el.photo;
      galleryHelper[`photo${i + 1}Title`] = el.title;
      galleryHelper[`photo${i + 1}Address`] = el.address;
    });

    const artistInfo = {
      id: signedInUser.id,
      artist_name: values.artist_name,
      name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      address: values.fullAddress,
      phone: values.phoneNumber,
      instagram_handle: values.instagram,
      website: values.website,
      about: values.about,
      price_per_square_foot: values.price_per_square_foot,
      pay_split_preference: values.pay_split_preference,
      accept_crypto_payment: values.accept_crypto_payment === 'yes',
      art_types: values.artStyle.map((style: any) => style.value),
      artist_image: values.artist_image,
      portfolio: values.portfolio,
      logo: values.logo,
      exhibitions: values.exhibitions,
      brand: values.brand,
      color_palette: values.color_palette,
      ...galleryHelper,
    };

    await dispatch(submitArtistInfo(artistInfo));
    enqueueSnackbar('Your changes were saved.', {
      variant: 'success',
      autoHideDuration: 2000,
    });
    await dispatch(
      getUserDetails((success: boolean, userData: any) => {
        if (success && userData.slug !== signedInUser.slug) {
          history.push(`/artist/${userData.slug}/edit`);
        }
      })
    );
    actions.setTouched({});
    actions.setSubmitting(false);
  };

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabPosition(newValue);
  };

  return (
    <Box
      sx={{
        padding: {
          xs: '20px',
          sm: '40px',
        },
        width: '100%',
        background:
          'linear-gradient(#121c36, #121c36) padding-box, linear-gradient(144deg, rgba(0,200,200,1) 0%, rgba(18,28,54,1) 34%, rgba(18,28,54,1) 70%, rgba(85,126,252,1) 100%) border-box',
        borderRadius: '32px',
        border: '1px solid transparent',
      }}
    >
      <StyledTabs
        value={tabPosition}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        ScrollButtonComponent={TabScrollButton}
        allowScrollButtonsMobile={true}
      >
        <StyledTab label="Basic Info" />
        <StyledTab label="Landing Page" />
        {/* <StyledTab label="Experience" /> */}
      </StyledTabs>

      <Box
        sx={{
          mt: '15px',
        }}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema[tabPosition]}
          onSubmit={onSubmitArtistInfo}
        >
          {({
            handleSubmit,
            isSubmitting,
            values,
            errors,
            initialValues,
            setValues,
          }) => {
            const isIdle =
              isSubmitting || submitArtistStatus === ARTIST_SUBMIT_INFO_LOADING;
            return (
              <Form onSubmit={handleSubmit}>
                {tabPosition === 0 && <ArtistUpdateSelfForm isIdle={isIdle} />}
                {tabPosition === 1 && (
                  <ArtistUpdateLandingPageForm
                    isIdle={isIdle}
                    values={values}
                    errors={errors}
                    initValues={initialValues}
                    setValues={setValues}
                  />
                )}
                {/* {tabPosition === 2 && <ArtistUpdateExperienceForm isIdle={isIdle} />} */}
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
      </Box>
    </Box>
  );
};

export default UpdateInfoArtistContainer;
