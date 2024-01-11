import { BEGIN_REQUEST } from '@/constants/commonConstants';
import {
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNOUT,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_RESET_PASSWORD_SUCCESS,
  USER_RESET_PASSWORD_FAIL,
  GET_USER_DETAILS_SUCCESS,
  GET_USER_DETAILS_FAIL,
} from '@/constants/userConstants';
import axios from 'axios';
import gtag from 'ga-gtag';
import Mixpanel from '@/mixpanel';
import { Dispatch } from 'redux';
import { AppDispatch, AppThunk } from '..';

export const getUserDetails =
  (callback: (status: boolean, data: any) => void): any =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: BEGIN_REQUEST });
      const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
      const config = {
        headers: {
          'Content-Type': 'application/json',
          authorization:
            'Bearer ' + (userInfo && userInfo.token ? userInfo.token : ''),
        },
      };

      const { data } = await axios.get(`/api/users/profile`, config);
      dispatch({
        type: GET_USER_DETAILS_SUCCESS,
        payload: data,
      });
      if (callback) {
        callback(true, data);
      }
    } catch (error: any) {
      console.log({ error });
      dispatch({
        type: GET_USER_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const signIn =
  (email: string, password: string, callback: (status: boolean) => void): any =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: BEGIN_REQUEST,
      });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        `/api/users/login`,
        { email, password },
        config
      );

      dispatch({
        type: USER_SIGNIN_SUCCESS,
        payload: data,
      });

      Mixpanel.track('login');
      Mixpanel.people.set({
        $email: data.email,
        $name: data.name,
        $role: data.role,
      });
      Mixpanel.identify(data.id);

      localStorage.setItem('userInfo', JSON.stringify(data));
      gtag('event', 'signin_success', {
        page_location: window.location.href,
        page_title: document.title,
      });
      callback(true);
    } catch (error: any) {
      Mixpanel.track('fail to sign in');
      dispatch({
        type: USER_SIGNIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      gtag('event', 'signin_failed', {
        page_location: window.location.href,
        page_title: document.title,
      });
      callback(false);
    }
  };

export const signOut = (): any => (dispatch: AppDispatch) => {
  localStorage.removeItem('userInfo');
  localStorage.removeItem('listingDetails');
  Mixpanel.track('logout');
  dispatch({ type: USER_SIGNOUT });
  dispatch({ type: 'RESET_STATE' });
};

export const signUp =
  (
    name: string,
    email: string,
    password: string,
    role: string,
    callback: (status: boolean) => void
  ): any =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: BEGIN_REQUEST,
      });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      name = name.toLowerCase();
      const { data } = await axios.post(
        `/api/users`,
        { name, email, password, role },
        config
      );

      Mixpanel.track('sign up with new user');
      Mixpanel.people.set({
        $email: data.email,
        $name: data.name,
        $role: data.role,
      });
      Mixpanel.identify(data.id);

      dispatch({
        type: USER_SIGNUP_SUCCESS,
        payload: data,
      });

      localStorage.setItem('userInfo', JSON.stringify(data));
      if (role == 'wxllowner') {
        gtag('event', 'wxllowner_signup_success', {
          page_location: window.location.href,
          page_title: document.title,
        });
      } else {
        gtag('event', 'artist_signup_success', {
          page_location: window.location.href,
          page_title: document.title,
        });
      }
      callback(true);
    } catch (error: any) {
      Mixpanel.track('fail to sign up process');
      dispatch({
        type: USER_SIGNUP_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      if (role == 'wxllowner') {
        gtag('event', 'wxllowner_signup_failed', {
          page_location: window.location.href,
          page_title: document.title,
        });
      } else {
        gtag('event', 'artist_signup_failed', {
          page_location: window.location.href,
          page_title: document.title,
        });
      }
      callback(false);
    }
  };

export const forgotPassword = (
  email: string,
  callback: (status: boolean) => void
): any => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: BEGIN_REQUEST,
      });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        `/api/users/forgot-password`,
        { email },
        config
      );

      dispatch({
        type: USER_RESET_PASSWORD_SUCCESS,
        payload: data,
      });
      callback(true);
    } catch (error: any) {
      dispatch({
        type: USER_RESET_PASSWORD_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      callback(false);
    }
  };
};

export const resetPassword =
  (password: string, token: string, callback: (status: boolean) => void): any =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: BEGIN_REQUEST,
      });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.post(
        `/api/users/reset-password/${token}`,
        { password },
        config
      );

      dispatch({
        type: USER_RESET_PASSWORD_SUCCESS,
        payload: data,
      });

      callback(true);
    } catch (error: any) {
      dispatch({
        type: USER_RESET_PASSWORD_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      callback(false);
    }
  };
