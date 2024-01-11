import React, {
  useState,
  useEffect,
  MouseEventHandler,
  FormEvent,
} from 'react';
import { Box, Grid, CardMedia, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingButton } from '@mui/lab';
import { Formik, Field, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { cloudflareImage } from '@/utility/images';

import TotalProposedBudget from './TotalProposedBudget';
import UndecidedProposedBudget from './UndecidedProposedBudget';
import TotalEstimatedCost from './TotalEstimatedCost';
import ControlledInputUpload from '@/components/controls/ControlledInputUpload';
import ControlledInputTextField from '@/components/controls/ControlledInputTextField';

import InputSlider from '@/components/controls/ControlledInputSlider';

import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { selectListingDetails } from '@/store/reducers/listingReducers';
import {
  selectProposalDetails,
  REQUEST_STATUS,
} from '@/store/reducers/proposalReducers';
import { submitProposal } from '@/store/actions/proposalActions';

import {
  PRICE_PER_SQUARE_FEET_REQUIRED,
  DATE_REQUIRED,
  TRAVEL_COSTS,
} from '@/constants/errorMessage';
import {
  DEFAULT_SLIDER_MARKS,
  DEFAULT_SLIDER_MAX_VALUE,
  DEFAULT_SLIDER_MIN_VALUE,
} from '@/constants/commonConstants';
import { USER_TYPE } from '@/constants/userConstants';
import useAuthInfo from '@/hooks/useAuthInfo';
import moment from 'moment';

interface FormValues {
  startDate: Date | null;
  endDate: Date | null;
  requiredLift: boolean | null;
  pricePerSqft: number | null;
  hotelCharges: number | null;
  travel_cost: number | null;
  paintAndMaterialCost: number | null;
  notes: string | null;
  proposal_image: any[];
}

interface SectionHeadingProps {
  children: React.ReactNode;
}

interface ProposalDetails {
  status: string;
  error: string;
}

interface ListingDetails {
  data: {
    info: {
      size: number;
      offered: number;
      undecided_offered?: boolean;
    };
    status: string;
    _id: string;
    // Add any other properties as needed
  };
  // Add any other properties as needed
}

const validationSchema = Yup.object().shape({
  startDate: Yup.date()
    .nullable()
    .default(() => new Date())
    .required('Start date is required'),
  endDate: Yup.date()
    .nullable()
    .min(Yup.ref('startDate'), 'End date must be greater than start date')
    .required('End date is required'),
  requiredLift: Yup.boolean().nullable(),
  pricePerSqft: Yup.number()
    .min(1, 'Price per square foot must be greater than 0')
    .nullable()
    .required(PRICE_PER_SQUARE_FEET_REQUIRED),
  hotelCharges: Yup.number().min(0).nullable(),
  travel_cost: Yup.number().min(0).nullable(),
  paintAndMaterialCost: Yup.number().min(0).nullable(),
  notes: Yup.string().nullable(),
  proposal_image: Yup.array(),
});

const SubmitProposalForm: React.FC<{ styleWrap: any }> = (props) => {
  const [open, setOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState('');
  const dispatch = useDispatch();
  const { userInfo } = useAuthInfo();
  const { styleWrap } = props;
  const listingDetails = useSelector(selectListingDetails) as ListingDetails;
  const proposalDetails = useSelector(selectProposalDetails) as ProposalDetails;
  const { info, status } = listingDetails.data;

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const current = new Date();
    const day = (current.getDate() < 10 ? '0' : '') + current.getDate();
    const date = `${current.getFullYear()}-${(
      '0' +
      (current.getMonth() + 1)
    ).slice(-2)}-${day}`;
    setCurrentDate(date);
  }, []);

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const onSubmitProposal = (
    values: FormValues,
    { setSubmitting, setErrors }: FormikHelpers<FormValues>
  ) => {
    const {
      startDate,
      endDate,
      requiredLift,
      notes,
      pricePerSqft,
      hotelCharges,
      travel_cost,
      paintAndMaterialCost,
      proposal_image,
    } = values;

    const basePrice = pricePerSqft! * Number(info.size);
    const otherCost =
      Number(hotelCharges!) +
      Number(travel_cost!) +
      Number(paintAndMaterialCost!);

    dispatch(
      submitProposal(
        {
          listing_id: listingDetails?.data._id,
          start_date: startDate,
          end_date: endDate,
          lift_required: requiredLift,
          estimated_quote: Number(info.offered),
          artist_proposal: basePrice + otherCost,
          notes_questions: notes,
          price_per_square: pricePerSqft,
          hotel_acommodation: Number(hotelCharges),
          travel_cost: Number(travel_cost),
          paint_material: Number(paintAndMaterialCost),
          proposal_image: proposal_image.map((item) => item.file),
        },
        () => setSubmitting(false)
      ) as any
    );
    setOpen(true);
  };

  const ArchivedStatus: React.FC = () => (
    <Typography
      component="h4"
      sx={{
        color: 'rgba(255, 255, 255, 0.5)',
        fontFamily: 'var(--font-family-montserrat)',
        fontSize: {
          xs: '12px',
          md: '20px',
        },
        fontWeight: '600',
        fontStyle: 'normal',
        flex: '0 1 auto',
        padding: {
          xs: '0 0 0 8px',
          md: '0 0 0 12px',
        },
      }}
    >
      This wall is currently not accepting any proposals.
    </Typography>
  );

  const NormalStatus: React.FC = () => (
    <>
      <SectionHeading>Send Proposal</SectionHeading>
      <Grid container spacing={2}>
        <Formik<FormValues>
          initialValues={{
            startDate: new Date(currentDate),
            endDate: null,
            requiredLift: false,
            pricePerSqft: 0,
            hotelCharges: null,
            travel_cost: null,
            paintAndMaterialCost: null,
            notes: null,
            proposal_image: [],
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmitProposal}
        >
          {({ handleSubmit, values }) => {
            const {
              pricePerSqft,
              hotelCharges,
              travel_cost,
              paintAndMaterialCost,
            } = values;

            const basePrice = Number(pricePerSqft!) * Number(info?.size || 0);
            const otherCost =
              Number(hotelCharges!) +
              Number(travel_cost!) +
              Number(paintAndMaterialCost!);

            return (
              <>
                <Grid item xs={6}>
                  <Field
                    component={ControlledInputTextField}
                    textLabel="Start Date"
                    name="startDate"
                    typeInput="date"
                    inputProps={{ min: currentDate, defaultValue: currentDate }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    component={ControlledInputTextField}
                    textLabel="End Date"
                    name="endDate"
                    typeInput="date"
                    inputProps={
                      values.startDate
                        ? {
                            min: moment(values.startDate)
                              .utc()
                              .format('YYYY-MM-DD'),
                          }
                        : { min: currentDate }
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={InputSlider}
                    name="pricePerSqft"
                    textLabel="Price per Square Foot: $"
                    min={DEFAULT_SLIDER_MIN_VALUE}
                    max={DEFAULT_SLIDER_MAX_VALUE}
                    marks={DEFAULT_SLIDER_MARKS}
                  />
                  <Box
                    sx={{
                      borderBottom: '1px dashed rgba(255, 255, 255, 0.13)',
                      width: '100%',
                      marginTop: '28px',
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={ControlledInputTextField}
                    textLabel="Hotel Accommodations"
                    name="hotelCharges"
                    typeInput="tel"
                    inputProps={{ min: 0 }}
                    prefix={<Typography sx={{ color: 'white' }}>$</Typography>}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={ControlledInputTextField}
                    textLabel="Travel costs - Flights, car rentals, etc"
                    name="travel_cost"
                    typeInput="tel"
                    inputProps={{ min: 1 }}
                    prefix={<Typography sx={{ color: 'white' }}>$</Typography>}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={ControlledInputTextField}
                    textLabel="Paint & Materials"
                    name="paintAndMaterialCost"
                    typeInput="tel"
                    inputProps={{ min: 0 }}
                    prefix={<Typography sx={{ color: 'white' }}>$</Typography>}
                  />
                </Grid>
                {info?.undecided_offered ? (
                  <Grid item xs={12}>
                    <Box sx={{ pt: '12px' }}>
                      <UndecidedProposedBudget styleWrap={{}} totalCost={''} />
                    </Box>
                  </Grid>
                ) : (
                  <Grid item xs={12}>
                    <Box sx={{ pt: '12px' }}>
                      <TotalProposedBudget
                        textTotalBudget={Number(info?.offered) * 0.7}
                        styleWrap={{}}
                      />
                    </Box>
                  </Grid>
                )}
                <Grid item xs={12}>
                  <TotalEstimatedCost
                    styleWrap={{ marginTop: '15px' }}
                    totalCost={basePrice + otherCost}
                  />
                  <Box
                    sx={{
                      borderBottom: '1px dashed rgba(255, 255, 255, 0.13)',
                      width: '100%',
                      marginTop: '28px',
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="proposal_image"
                    component={ControlledInputUpload}
                    textLabel="Would you like to upload a reference image?"
                    textLabelSmall="This does not have to be a site-specific reference, this can be original or previously created work."
                    multiple
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={ControlledInputTextField}
                    textLabel="Please add any notes or questions below"
                    name="notes"
                    multiline
                    inputProps={{
                      minRows: 4,
                      maxRows: 4,
                    }}
                    typeInput="textarea"
                  />
                </Grid>
                <Grid item xs={12}>
                  {proposalDetails.status === REQUEST_STATUS.FAILED ? (
                    <>
                      <Snackbar
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        sx={{
                          top: '90px !important',
                        }}
                        open={open}
                        autoHideDuration={4000}
                        message={proposalDetails.error}
                        onClose={() => setOpen(false)}
                        action={action}
                        key={'top' + 'right'}
                      />
                    </>
                  ) : (
                    ''
                  )}
                  {proposalDetails.status === REQUEST_STATUS.SUCCEEDED ? (
                    <>
                      <Snackbar
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        sx={{
                          top: '90px !important',
                        }}
                        open={open}
                        autoHideDuration={4000}
                        onClose={() => setOpen(false)}
                        message={`Proposal successfully submitted.`}
                        action={action}
                        key={'top' + 'right'}
                      />
                    </>
                  ) : (
                    ''
                  )}
                  <LoadingButton
                    loading={proposalDetails.status === REQUEST_STATUS.LOADING}
                    disabled={
                      proposalDetails.status === REQUEST_STATUS.LOADING ||
                      userInfo?.role !== USER_TYPE.ARTIST ||
                      listingDetails?.data?.status === 'closed'
                    }
                    onClick={handleSubmit as MouseEventHandler<any>}
                    sx={{
                      background:
                        'linear-gradient(90deg, rgba(134,255,255,1) 0%, rgba(51,246,246,1) 17%, rgba(44,222,222,1) 34%, rgba(10,197,197,1) 57%, rgba(4,169,169,1) 100%)',
                      color: '#FFFFFF',
                      fontFamily: 'var(--font-family-montserrat)',
                      fontSize: '14px',
                      fontWeight: '700',
                      fontStyle: 'normal',
                      textTransform: 'capitalize',
                      padding: '30px',
                      width: '100%',
                      display: 'block',
                      textAlign: 'center',
                    }}
                  >
                    {listingDetails?.data?.status === 'closed'
                      ? 'Listing Temporarily Closed'
                      : 'Submit Proposal'}
                  </LoadingButton>
                </Grid>
              </>
            );
          }}
        </Formik>
        <Grid item xs={12}>
          <CardMedia
            component="img"
            image={cloudflareImage(
              'https://cdn.animaapp.com/projects/6183b51d6b5cbed22d564e6f/releases/618d1367229e98d07e66dc49/img/group-1@2x.svg'
            )}
            sx={{
              width: '52.94px',
              height: '70px',
              margin: '20px auto 8px auto',
            }}
          />
          <Typography
            sx={{
              color: '#FFFFFF',
              fontFamily: 'var(--font-family-montserrat)',
              fontSize: '16px',
              fontWeight: '600',
              fontStyle: 'normal',
              textAlign: 'center',
              paddingBottom: '4px',
            }}
          >
            WXLLSPACE EXCLUSIVE
          </Typography>

          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 0.5)',
              fontFamily: 'var(--font-family-montserrat)',
              fontSize: '14px',
              fontWeight: '600',
              fontStyle: 'normal',
              textAlign: 'center',
              paddingBottom: {
                xs: '32px',
                sm: '0',
              },
            }}
          >
            We have been granted exclusive rights to facilitate this mural and
            we're thrilled that the stakeholders have signed on for our
            services.
          </Typography>
        </Grid>
      </Grid>
    </>
  );

  return (
    <Box sx={styleWrap}>
      {status === 'archived' ? <ArchivedStatus /> : <NormalStatus />}
    </Box>
  );
};

const SectionHeading: React.FC<SectionHeadingProps> = ({ children }) => {
  return (
    <Typography
      variant="h2"
      sx={{
        fontWeight: 900,
        fontSize: '32px',
        fontFamily: 'var(--font-family-montserrat)',
        fontStyle: 'normal',
        lineHeight: '1',
        letterSpacing: '-0.05em',
        backgroundImage:
          'linear-gradient(94.83deg, #FFFFFF 26.58%, #A984FF 44.93%, #64E1DC 54.77%, #6FC2FF 64.82%, #FFFFFF 78.91%) !important',
        backgroundSize: '430px',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textAlign: 'center',
        paddingBottom: '30px',
      }}
    >
      {children}
    </Typography>
  );
};

export default SubmitProposalForm;
