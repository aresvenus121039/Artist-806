import { BEGIN_REQUEST } from '@/constants/commonConstants';
import {
  ARTIST_GET_LIMIT,
  ARTIST_GET_SEARCH_FAIL,
  ARTIST_GET_SEARCH_SUCCESS,
  ARTIST_GET_SKIP,
} from '@/constants/artistSearchConstants';
import axios from 'axios';
import Mixpanel from '@/mixpanel';

export const artistSearchResults = () => async (dispatch) => {
  try {
    dispatch({
      type: BEGIN_REQUEST,
    });

    const { data } = await axios.get(`/api/artistsearch`);
    Mixpanel.track('Marketplace Search');
    dispatch({
      type: ARTIST_GET_SEARCH_SUCCESS,
      payload: {
        artist: data?.artist || [],
        name: '',
        style: '',
        state: '',
        limit: ARTIST_GET_LIMIT,
        skip: ARTIST_GET_SKIP,
        total: data?.total || 0,
        loading: false,
        error: false,
        initialLoad: false,
      },
    });
  } catch (error) {
    Mixpanel.track('Marketplace Search Failed');
    dispatch({
      type: ARTIST_GET_SEARCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
