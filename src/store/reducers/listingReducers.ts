import {
  WALL_GET_DETAILS_LOADING,
  WALL_GET_DETAILS_SUCCESS,
  WALL_GET_DETAILS_FAIL,
  WALL_GET_DETAILS_IDLE,
} from '@/constants/listingConstants';

interface State {
  status: string;
  error: any;
  data: any;
  slug: string;
}

interface Action {
  type: string;
  payload: any;
}

export const initialState: State = {
  status: WALL_GET_DETAILS_IDLE,
  error: null,
  data: {},
  slug: '',
};

export const listingReducer = (
  state: State = initialState,
  action: Action
): State => {
  switch (action.type) {
    case WALL_GET_DETAILS_LOADING:
      return {
        ...state,
        status: WALL_GET_DETAILS_LOADING,
        data: {},
        slug: action.payload,
      };
    case WALL_GET_DETAILS_SUCCESS:
      return {
        ...state,
        status: WALL_GET_DETAILS_SUCCESS,
        data: action.payload,
      };
    case WALL_GET_DETAILS_FAIL:
      return {
        ...state,
        status: WALL_GET_DETAILS_FAIL,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const selectListingDetails = (state: {
  listingDetails: State;
}): State => {
  return state.listingDetails;
};

export const requestStatus = (state: { listingDetails: State }): string => {
  return state.listingDetails.status;
};
