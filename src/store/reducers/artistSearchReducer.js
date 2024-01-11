import { BEGIN_REQUEST } from '@/constants/commonConstants';
import {
  ARTIST_GET_SEARCH_FAIL,
  ARTIST_GET_SEARCH_SUCCESS,
} from '@/constants/artistSearchConstants';

export const artistSearchReducer = (
  state = {
    results: {},
  },
  action
) => {
  switch (action.type) {
    case BEGIN_REQUEST:
      return { loading: true, results: {} };
    case ARTIST_GET_SEARCH_SUCCESS:
      return {
        loading: false,
        results: action.payload,
      };
    case ARTIST_GET_SEARCH_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
