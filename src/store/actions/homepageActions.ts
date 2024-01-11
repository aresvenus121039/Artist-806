import { Dispatch } from 'redux';
import { BEGIN_REQUEST } from '@/constants/commonConstants';
import {
  HOMEPAGE_LIST_SUCCESS,
  HOMEPAGE_LIST_FAIL,
} from '@/constants/homepageConstants';
import axios from 'axios';
import Mixpanel from '@/mixpanel';

export const homepageResults = () => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: BEGIN_REQUEST,
    });

    const { data } = await axios.get(`/api/homepage`);
    Mixpanel.track('/');
    dispatch({
      type: HOMEPAGE_LIST_SUCCESS,
      payload: data, // Define the structure of `data` for full TypeScript conversion
    });
  } catch (error: any) {
    dispatch({
      type: HOMEPAGE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
