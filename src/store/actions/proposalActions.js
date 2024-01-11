import axios from 'axios';
import { serialize } from 'object-to-formdata';

import {
  SUBMIT_PROPOSAL_REQUEST,
  SUBMIT_PROPOSAL_SUCCESS,
  SUBMIT_PROPOSAL_ERROR,
} from '@/constants/proposalConstants';
import { USER_TYPE } from '@/constants/userConstants';
import gtag from 'ga-gtag';
import Mixpanel from '@/mixpanel';

export const submitProposal =
  (proposalDetails, callback) => async (dispatch) => {
    try {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));

      if (userInfo === null) {
        throw new Error('Please login first to submit proposal');
      }

      if (userInfo.role !== USER_TYPE.ARTIST) {
        throw new Error('Only artists are allowed to submit proposals');
      }

      Mixpanel.track('proposal');
      Mixpanel.identify(proposalDetails.listing_id);

      dispatch({
        type: SUBMIT_PROPOSAL_REQUEST,
      });

      const { proposal_image, ...proposalDetailValues } = proposalDetails;
      const formData = serialize(
        {
          ...proposalDetailValues,
        },
        { indices: false, allowEmptyArrays: true, nullsAsUndefineds: true }
      );
      for (let i = 0; i < proposal_image.length; i++) {
        formData.append('proposal_image', proposal_image[i]);
      }

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          authorization:
            'Bearer ' + JSON.parse(localStorage.getItem('userInfo'))?.token,
        },
      };

      const { data } = await axios.post(`/api/proposals`, formData, config);

      dispatch({
        type: SUBMIT_PROPOSAL_SUCCESS,
        payload: data,
      });
      gtag('event', 'proposal_submissions_per_visit', {
        page_location: window.location.href,
        page_title: document.title,
      });
      callback(true);
    } catch (error) {
      dispatch({
        type: SUBMIT_PROPOSAL_ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      gtag('event', 'proposal_abondonment_per_visit', {
        page_location: window.location.href,
        page_title: document.title,
      });
      callback(false);
    }
  };
