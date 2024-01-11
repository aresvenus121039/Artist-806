import axios from 'axios';
import { Dispatch } from 'redux';

import {
  SUBMIT_SUBSCRIPTION_REQUEST,
  SUBMIT_SUBSCRIPTION_SUCCESS,
  SUBMIT_SUBSCRIPTION_ERROR,
} from '@/constants/subscriptionConstants';

interface SubscriptionDetails {
  name: string;
  email: string;
}

export const submitSubscription =
  (subscriptionDetails: SubscriptionDetails): any =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: SUBMIT_SUBSCRIPTION_REQUEST,
      });

      const { name, email } = subscriptionDetails;
      const nameArray = name.split(' ');

      const config = {
        headers: {
          'Content-Type': 'application/json',
          authorization:
            'Bearer ' +
            JSON.parse(localStorage.getItem('userInfo') || '{}')?.token,
        },
      };

      const { data } = await axios.post(
        `/api/subscription`,
        {
          first_name: nameArray[0],
          last_name: nameArray[1],
          email,
        },
        config
      );

      dispatch({
        type: SUBMIT_SUBSCRIPTION_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: SUBMIT_SUBSCRIPTION_ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
