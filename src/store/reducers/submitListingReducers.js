import {
  SUBMIT_LISTING_REQUEST,
  SUBMIT_LISTING_SUCCESS,
  SUBMIT_LISTING_ERROR,
} from '@/constants/listingConstants';

export const REQUEST_STATUS = {
  IDLE: 'IDLE',
  LOADING: 'LOADING',
  SUCCEEDED: 'SUCCEEDED',
  FAILED: 'FAILED',
};

const initialState = {
  status: REQUEST_STATUS.IDLE,
  error: null,
  data: {},
};

export const submitListingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_LISTING_REQUEST:
      return { status: REQUEST_STATUS.LOADING };
    case SUBMIT_LISTING_SUCCESS:
      return {
        status: REQUEST_STATUS.SUCCEEDED,
        data: action.payload,
      };
    case SUBMIT_LISTING_ERROR:
      return { status: REQUEST_STATUS.FAILED, error: action.payload };
    default:
      return state;
  }
};

export const selectListingDetails = (state) => {
  return state.submitListing;
};

export const requestStatus = (state) => {
  return state.submitListing.status;
};
