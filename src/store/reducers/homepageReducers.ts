import { BEGIN_REQUEST } from '@/constants/commonConstants';
import {
  HOMEPAGE_LIST_SUCCESS,
  HOMEPAGE_LIST_FAIL,
} from '@/constants/homepageConstants';

interface State {
  results: {
    artists: any[];
    cities: any[];
    wxlls: any[];
    posts: any[];
  };
  loading?: boolean;
  error?: any;
}

interface Action {
  type: string;
  payload: any;
}

export const homepageReducer = (
  state: State = {
    results: {
      artists: [],
      cities: [],
      wxlls: [],
      posts: [],
    },
  },
  action: Action
): State => {
  switch (action.type) {
    case BEGIN_REQUEST:
      return { ...state, ...{ loading: true } };
    case HOMEPAGE_LIST_SUCCESS:
      return {
        ...state,
        ...{ loading: false, results: action.payload },
      };
    case HOMEPAGE_LIST_FAIL:
      return {
        results: {
          artists: [],
          cities: [],
          wxlls: [],
          posts: [],
        },
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
