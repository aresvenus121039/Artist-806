import { Reducer } from 'redux';
import { REQUEST_STATUS } from '@/constants/requestStatusConstants';
import {
  SUBMIT_SUBSCRIPTION_REQUEST,
  SUBMIT_SUBSCRIPTION_SUCCESS,
  SUBMIT_SUBSCRIPTION_ERROR,
} from '@/constants/subscriptionConstants';

interface SubscriptionState {
  status: string;
  error?: any;
  data?: any;
}

interface Action {
  type: string;
  payload?: any;
}

const initialState: SubscriptionState = {
  status: REQUEST_STATUS.IDLE,
  error: null,
  data: {},
};

export const submitSubscriptionReducer: Reducer<SubscriptionState, Action> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SUBMIT_SUBSCRIPTION_REQUEST:
      return { status: REQUEST_STATUS.LOADING };
    case SUBMIT_SUBSCRIPTION_SUCCESS:
      return {
        status: REQUEST_STATUS.SUCCEEDED,
        data: action.payload,
      };
    case SUBMIT_SUBSCRIPTION_ERROR:
      return { status: REQUEST_STATUS.FAILED, error: action.payload };
    default:
      return state;
  }
};

export const selectSubscriptionDetails = (state: {
  submitSubscription: SubscriptionState;
}) => {
  return state.submitSubscription;
};

export const requestStatus = (state: {
  submitSubscription: SubscriptionState;
}) => {
  return state.submitSubscription.status;
};
