import { has, get } from 'lodash';
import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNOUT,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_RESET_PASSWORD_FAIL,
  USER_RESET_PASSWORD_SUCCESS,
  GET_USER_DETAILS_SUCCESS,
  USER_SIGNIN_RESET,
} from '@/constants/userConstants';

import { SUBMIT_LISTING_SUCCESS } from '@/constants/listingConstants';

export const REQUEST_STATUS = {
  IDLE: 'IDLE',
  LOADING: 'LOADING',
  SUCCEEDED: 'SUCCEEDED',
  FAILED: 'FAILED',
} as const;

interface InitialStateType {
  status: keyof typeof REQUEST_STATUS;
  error: string | null;
  data: Record<string, any>;
}

export const initialState: InitialStateType = {
  status: REQUEST_STATUS.IDLE,
  error: null,
  data: {},
};

interface ActionType {
  type: string;
  payload?: any;
}

export const userSignInReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case GET_USER_DETAILS_SUCCESS:
      return {
        status: REQUEST_STATUS.SUCCEEDED,
        data: action.payload,
      };
    case USER_SIGNIN_RESET:
      return {
        status: REQUEST_STATUS.IDLE,
      };
    case USER_SIGNIN_REQUEST:
      return {
        status: REQUEST_STATUS.LOADING,
      };
    case USER_SIGNIN_SUCCESS:
      return {
        status: REQUEST_STATUS.SUCCEEDED,
        data: action.payload,
      };
    case USER_RESET_PASSWORD_SUCCESS:
      return {
        status: REQUEST_STATUS.SUCCEEDED,
        data: action.payload,
      };
    case USER_SIGNIN_FAIL:
    case USER_RESET_PASSWORD_FAIL:
      return {
        status: REQUEST_STATUS.FAILED,
        error: action.payload,
      };
    case USER_SIGNUP_REQUEST:
      return {
        status: REQUEST_STATUS.LOADING,
      };
    case USER_SIGNUP_SUCCESS:
      return {
        status: REQUEST_STATUS.SUCCEEDED,
        data: action.payload,
      };
    case USER_SIGNUP_FAIL:
      return {
        status: REQUEST_STATUS.FAILED,
        error: action.payload,
      };
    case USER_SIGNOUT:
      return { ...initialState };
    case SUBMIT_LISTING_SUCCESS:
      return {
        data: {
          ...state.data,
          wall_slug: get(action.payload, 'slug', null),
          wall_name: get(action.payload, 'info.title', null),
        },
      };
    default:
      return state;
  }
};

export const selectIsUserSignedIn = (state: {
  userSignIn: InitialStateType;
}): boolean => has(state.userSignIn.data, 'name');

export const selectSignedInUser = (state: {
  userSignIn: InitialStateType;
}): Record<string, any> => state.userSignIn.data;

export const selectUserSignInStatus = (state: {
  userSignIn: InitialStateType;
}): InitialStateType => ({
  status: state.userSignIn.status,
  error: state.userSignIn.error,
  data: state.userSignIn.data,
});
