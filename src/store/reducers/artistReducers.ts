import {
  ARTIST_GET_DETAILS_FAIL,
  ARTIST_GET_DETAILS_IDLE,
  ARTIST_GET_DETAILS_LOADING,
  ARTIST_GET_DETAILS_SUCCESS,
  ARTIST_GET_OTHERS_SUCCESS,
} from '@/constants/artistConstants';

interface State {
  status: string;
  error: any;
  data: any;
  slug: string;
  others: any;
}

interface Action {
  type: string;
  payload: any;
}

const initialState: State = {
  status: ARTIST_GET_DETAILS_IDLE,
  error: null,
  data: {},
  slug: '',
  others: {},
};

export const artistDetailsReducer = (
  state: State = initialState,
  action: Action
): State => {
  switch (action.type) {
    case ARTIST_GET_DETAILS_LOADING:
      return {
        ...state,
        status: ARTIST_GET_DETAILS_LOADING,
        data: {},
        slug: action.payload,
      };
    case ARTIST_GET_DETAILS_IDLE:
      return { ...state, status: ARTIST_GET_DETAILS_IDLE };
    case ARTIST_GET_DETAILS_SUCCESS:
      return {
        ...state,
        status: ARTIST_GET_DETAILS_SUCCESS,
        data: action.payload,
      };
    case ARTIST_GET_DETAILS_FAIL:
      return {
        ...state,
        status: ARTIST_GET_DETAILS_FAIL,
        error: action.payload,
      };
    case ARTIST_GET_OTHERS_SUCCESS:
      return {
        ...state,
        status: ARTIST_GET_OTHERS_SUCCESS,
        others: action.payload,
      };
    default:
      return state;
  }
};

export const selectArtistDetails = (state: { artistDetails: State }): State => {
  return state.artistDetails;
};

export const requestStatus = (state: { artistDetails: State }): string => {
  return state.artistDetails.status;
};
