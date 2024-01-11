import {
  ARTIST_SUBMIT_INFO_FAIL,
  ARTIST_SUBMIT_INFO_IDLE,
  ARTIST_SUBMIT_INFO_LOADING,
  ARTIST_SUBMIT_INFO_SUCCESS,
} from '@/constants/artistConstants';

export const REQUEST_STATUS = {
  IDLE: 'IDLE',
  LOADING: 'LOADING',
  SUCCEEDED: 'SUCCEEDED',
  FAILED: 'FAILED',
};

const initialState = {
  status: ARTIST_SUBMIT_INFO_IDLE,
  error: null,
  data: {},
};
export const artistInformationFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case ARTIST_SUBMIT_INFO_LOADING:
      return { status: ARTIST_SUBMIT_INFO_LOADING };

    case ARTIST_SUBMIT_INFO_SUCCESS:
      return {
        status: ARTIST_SUBMIT_INFO_SUCCESS,
        data: action.payload,
      };

    case ARTIST_SUBMIT_INFO_FAIL:
      return { status: ARTIST_SUBMIT_INFO_FAIL, error: action.payload };

    default:
      return state;
  }
};

export const selectArtistDetails = (state) => {
  return state.artistInformationForm;
};

export const requestStatus = (state) => {
  return state.artistInformationForm.status;
};
