import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';

import StepperCustom from '../../components/controls/StepperCustom';
import SignUpOwnerForm from '../../components/controls/SignUpOwnerForm';
import SetupWallListingForm from '../../components/controls/SetupWallListingForm';
import { getUserDetails } from '@/store/actions/userActions';
import { submitListing } from '@/store/actions/listingActions';
import { FormikHelpers } from 'formik';
import { User, IDropdownOption } from '../../types';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useAppDispatch } from '@/store';
import { isAuthenticated } from '@/utility/auth';
import { USER_TYPE } from '@/constants/userConstants';

interface AboutCompanyValues {
  companyName: string | null;
  companyInstagram: string | null;
  companyWebsite: string | null;
  phoneNumber: string | null;
  budget: number | null;
  crypto: string;
  address: string | null;
  undecidedBudget: Array<string>;
}
interface ListingValues {
  endDate: Date | null;
  description: string | null;
  wallMade: string | null;
  height: number | null;
  width: number | null;
  propertyType: string | null;
  location: string | null;
  condition: string | null;
  propertyPhoto: FileList | null;
  direction: string | null;
  color_palette: string[] | null;
  artStyle: IDropdownOption[] | null;
  availability: IDropdownOption[] | null;
  requiredLift?: boolean;
}

const InformationOwner: React.FC = () => {
  const dispatch = useAppDispatch();
  const history = useRouter();
  const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
  const [step, setStep] = useState<number>(0);
  const [aboutCompanyInitialValues, setAboutCompanyInitialValues] =
    useState<AboutCompanyValues>({
      companyName: null,
      companyInstagram: null,
      companyWebsite: null,
      phoneNumber: null,
      budget: null,
      crypto: 'no',
      address: null,
      undecidedBudget: [], // or whatever default value you want
    });

  const [listingInitialValues, setListingInitialValues] =
    useState<ListingValues>({
      endDate: null,
      description: null,
      wallMade: 'Brick',
      height: null,
      width: null,
      propertyType: 'Industrial',
      location: 'Indoor',
      availability: [],
      condition: 'Brand new development',
      direction: null,
      artStyle: [],
      color_palette: null,
      propertyPhoto: null,
      requiredLift: false,
    });

  const { isAuth, user } = isAuthenticated();
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      if (!isAuth || !user) {
        await router.push('/login');
      }

      if (user.role !== USER_TYPE.WXLLOWNER || user.wall_slug) {
        await router.push(`/wall/${user.wall_slug}`);
      }
    };
    checkAuth();
  }, []);

  const fileListToArray = (fileList: FileList | null) =>
    fileList ? Array.from(fileList) : [];

  const onSubmit = (
    val: ListingValues,
    { setSubmitting }: FormikHelpers<ListingValues>
  ) => {
    const newValues = { ...aboutCompanyInitialValues, ...val };
    const {
      companyName,
      phoneNumber,
      budget = 0,
      endDate,
      description,
      wallMade,
      height = 0,
      width = 0,
      propertyType,
      location,
      availability,
      condition,
      direction,
      artStyle,
      propertyPhoto = newValues.propertyPhoto,
      address,
      crypto,
      undecidedBudget = [],
    } = newValues;

    const info = {
      listing_type: 'comissioned', // TODO: Missing UI
      wall_type: wallMade, // TODO: Duplicate with construction
      offered:
        undecidedBudget.length && undecidedBudget[0] === 'yes' ? 0 : budget,
      art_styles: artStyle ? artStyle.map((item) => item.value) : [],
      wxllowner_name: companyName,
      wxllowner_email: userInfo.email,
      wxllowner_phone: phoneNumber,
      description,
      location_of_wall: location,
      size: ((width || 0) * (height || 0)).toString(),
      height,
      width,
      direction_face: direction,
      start_end_date: endDate,
      condition,
      construction: wallMade,
      property_type: propertyType,
      crypto: crypto === 'yes',
      undecided_offered: undecidedBudget.length && undecidedBudget[0] === 'yes',
      dimension: `${height}H X ${width}L`,
    };

    const fileArray = fileListToArray(propertyPhoto);
    const images = !fileArray
      ? []
      : fileArray
          .filter((item, index) => index !== 0)
          .map((item: any) => item.file);

    const feature_image: any = fileArray[0];

    const details = {
      info,
      address: address || '',
      images,
      feature_image: feature_image.file,
      amenities: availability ? availability.map((item) => item.label) : [],
      color_scheme: null,
    };

    dispatch(
      submitListing(details, (success: boolean) => {
        setSubmitting(success);
        if (success) {
          dispatch(
            getUserDetails((success: boolean, userData: User) => {
              if (success) {
                history.push(`/wall/${userData.wall_slug}`);
              }
            })
          );
        }
      })
    );
  };

  return (
    <Box
      sx={{
        maxWidth: '900px',
        width: '100%',
        margin: '0 auto',
        padding: '160px 20px 140px 20px',
      }}
    >
      <Head>
        <title>Owner Sign Up | WXLLSPACE</title>

        <meta name="title" content="Owner Sign Up | WXLLSPACE" />
        {/* <meta
          name="description"
          content="Search for creatives or commissioned mural opportunities across the US."
        /> */}
        <meta
          property="og:url"
          content="https://explore.wxllspace.com/owner-sign-up"
        />
        <meta property="og:title" content="Owner Sign Up | WXLLSPACE" />
        {/* <meta
          property="og:description"
          content="Search for creatives or commissioned mural opportunities across the US."
        /> */}
        <meta property="og:type" content="website" />
        {/* <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/meta/marketplace-OG.png`}
        /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="explore.wxllspace.com" />
        <meta property="twitter:title" content="Owner Sign Up | WXLLSPACE" />
        {/* <meta
          property="twitter:description"
          content="Search for creatives or commissioned mural opportunities across the US."
        /> */}
        <meta
          property="twitter:url"
          content="https://explore.wxllspace.com/owner-sign-up"
        />
        {/* <meta
          name="twitter:image"
          content={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/meta/marketplace-OG.png`}
        /> */}
      </Head>
      <Box
        sx={{
          padding: '40px',
          width: '100%',
          background:
            'linear-gradient(#121c36, #121c36) padding-box, linear-gradient(144deg, rgba(0,200,200,1) 0%, rgba(18,28,54,1) 34%, rgba(18,28,54,1) 70%, rgba(85,126,252,1) 100%) border-box',
          borderRadius: '32px',
          border: '1px solid transparent',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <StepperCustom
              listText={['about your company', 'set up your wall listing']}
              activeStep={step}
            />
          </Grid>
          {step === 0 ? (
            <SignUpOwnerForm
              initialValues={aboutCompanyInitialValues}
              onSubmit={(val) => {
                setStep(1);
                setAboutCompanyInitialValues({
                  ...aboutCompanyInitialValues,
                  ...val,
                });
              }}
            />
          ) : (
            <SetupWallListingForm
              initialValues={listingInitialValues}
              onBack={(val) => {
                setStep(0);
                setListingInitialValues({ ...listingInitialValues, ...val });
              }}
              onSubmit={(val: ListingValues, setSubmitting) =>
                onSubmit(val, setSubmitting)
              }
            />
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default InformationOwner;
