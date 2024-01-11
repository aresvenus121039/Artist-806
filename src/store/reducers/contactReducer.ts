import {
  SUBMIT_CONTACT_US_REQUEST,
  SUBMIT_CONTACT_US_SUCCESS,
  SUBMIT_CONTACT_US_ERROR,
} from '@/constants/contactConstants';

export enum REQUEST_STATUS {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCEEDED = 'SUCCEEDED',
  FAILED = 'FAILED',
}

interface State {
  status: REQUEST_STATUS;
  error: string | null;
  data: Record<string, unknown>;
}

interface Action {
  type: string;
  payload?: any;
}

const initialState: State = {
  status: REQUEST_STATUS.IDLE,
  error: null,
  data: {},
};

export const submitContactUsReducer = (
  state: State = initialState,
  action: Action
): State => {
  switch (action.type) {
    case SUBMIT_CONTACT_US_REQUEST:
      return { ...state, status: REQUEST_STATUS.LOADING };
    case SUBMIT_CONTACT_US_SUCCESS:
      return {
        ...state,
        status: REQUEST_STATUS.SUCCEEDED,
        data: action.payload,
      };
    case SUBMIT_CONTACT_US_ERROR:
      return { ...state, status: REQUEST_STATUS.FAILED, error: action.payload };
    default:
      return state;
  }
};

export const selectContactUsDetails = (state: {
  submitContactUs: State;
}): State => {
  return state.submitContactUs;
};

export const requestStatus = (state: {
  submitContactUs: State;
}): REQUEST_STATUS => {
  return state.submitContactUs.status;
};
