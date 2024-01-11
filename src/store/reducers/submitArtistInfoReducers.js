import {
  ARTIST_SUBMIT_INFO_FAIL,
  ARTIST_SUBMIT_INFO_IDLE,
  ARTIST_SUBMIT_INFO_LOADING,
  ARTIST_SUBMIT_INFO_SUCCESS,
} from '@/constants/artistConstants';

const initialState = {
  status: ARTIST_SUBMIT_INFO_IDLE,
  error: null,
  data: {},
  slug: '',
};

export const submitArtistInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ARTIST_SUBMIT_INFO_LOADING:
      return {
        ...state,
        status: ARTIST_SUBMIT_INFO_LOADING,
        data: {},
        slug: action.payload,
      };
    case ARTIST_SUBMIT_INFO_IDLE:
      return { ...state, status: ARTIST_SUBMIT_INFO_IDLE };
    case ARTIST_SUBMIT_INFO_SUCCESS:
      return {
        ...state,
        status: ARTIST_SUBMIT_INFO_SUCCESS,
        data: action.payload,
      };
    case ARTIST_SUBMIT_INFO_FAIL:
      return {
        ...state,
        status: ARTIST_SUBMIT_INFO_FAIL,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const selectSubmitArtistDetails = (state) => {
  return state.submitArtistInfo;
};

export const requestStatus = (state) => {
  return state.submitArtistInfo.status;
};
