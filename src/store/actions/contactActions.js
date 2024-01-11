import axios from 'axios';

import {
  SUBMIT_CONTACT_US_REQUEST,
  SUBMIT_CONTACT_US_SUCCESS,
  SUBMIT_CONTACT_US_ERROR,
} from '@/constants/contactConstants';

export const submitContactUs =
  (contactUsDetails, callback) => async (dispatch) => {
    try {
      dispatch({
        type: SUBMIT_CONTACT_US_REQUEST,
      });

      const { name, email, message } = contactUsDetails;
      const nameArray = name.split(' ');

      const config = {
        headers: {
          'Content-Type': 'application/json',
          authorization:
            'Bearer ' + JSON.parse(localStorage.getItem('userInfo'))?.token,
        },
      };

      const { data } = await axios.post(
        `/api/contact`,
        {
          first_name: nameArray[0],
          last_name: nameArray[1],
          email,
          message,
        },
        config
      );

      dispatch({
        type: SUBMIT_CONTACT_US_SUCCESS,
        payload: data,
      });

      callback(true);
    } catch (error) {
      dispatch({
        type: SUBMIT_CONTACT_US_ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      callback(false);
    }
  };
