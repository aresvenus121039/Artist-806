import _ from 'lodash';
import {
  MARKETPLACE_GET_LIST_IDLE,
  MARKETPLACE_GET_LIST_FAIL,
  MARKETPLACE_GET_LIST_LOADING,
  MARKETPLACE_GET_LIST_SUCCESS,
  MARKETPLACE_GET_LIST_FOR_MAP_IDLE,
  MARKETPLACE_GET_LIST_FOR_MAP_FAIL,
  MARKETPLACE_GET_LIST_FOR_MAP_LOADING,
  MARKETPLACE_GET_LIST_FOR_MAP_SUCCESS,
  MARKETPLACE_GET_MARKER_DETAILS_FAIL,
  MARKETPLACE_GET_MARKER_DETAILS_LOADING,
  MARKETPLACE_GET_MARKER_DETAILS_SUCCESS,
  MARKETPLACE_ARTIST_UPDATE_FILTER_AVAILABILITY,
  MARKETPLACE_ARTIST_UPDATE_FILTER_VERIFICATION_STATUS,
  MARKETPLACE_ARTIST_UPDATE_FILTER_RISING_TALENT_STATUS,
  MARKETPLACE_WALL_UPDATE_FILTER_CONDITION,
  MARKETPLACE_WALL_UPDATE_FILTER_CONSTRUCTION,
  MARKETPLACE_GET_REGISTERED_STATES_LOADING,
  MARKETPLACE_GET_REGISTERED_STATES_SUCCESS,
  MARKETPLACE_GET_REGISTERED_STATES_IDLE,
  MARKETPLACE_GET_REGISTERED_STATES_FAIL,
  MARKETPLACE_GET_ARTIST_CARD_DETAILS_IDLE,
  MARKETPLACE_GET_ARTIST_CARD_DETAILS_LOADING,
  MARKETPLACE_GET_ARTIST_CARD_DETAILS_SUCCESS,
} from '@/constants/marketplaceConstants';
import { USAState } from '@/utility/usaStateAbbr';

export const REQUEST_STATUS = {
  IDLE: 'IDLE',
  LOADING: 'LOADING',
  SUCCEEDED: 'SUCCEEDED',
  FAILED: 'FAILED',
};

interface MarketplaceState {
  status: string;
  error: any;
  data: {
    artists: any[];
    wxlls: any[];
    states: any[];
    coordinates: any[];
  };
  map: {
    artists: any[];
    wxlls: any[];
    coordinates: {
      artists: any[];
      walls: any[];
    };
  };
  filters: {
    artist: {
      is_ready: number;
      is_verified: number;
      is_rising_talent: number;
    };
    wall: {
      condition: number;
      construction: number;
    };
    states: USAState[];
  };
  artistCard: {
    status: string;
    type: any;
    data: any[];
    featured: boolean;
  };
}

interface MarketplaceAction {
  type: string;
  payload?: any;
}

const initialState: MarketplaceState = {
  status: MARKETPLACE_GET_LIST_IDLE,
  error: null,
  data: {
    artists: [],
    wxlls: [],
    states: [],
    coordinates: [],
  },
  map: {
    artists: [],
    wxlls: [],
    coordinates: {
      artists: [],
      walls: [],
    },
  },
  filters: {
    artist: {
      is_ready: 0,
      is_verified: 0,
      is_rising_talent: 0,
    },
    wall: {
      condition: 0,
      construction: 0,
      // budget: 0,
    },
    states: [],
  },
  artistCard: {
    status: MARKETPLACE_GET_ARTIST_CARD_DETAILS_IDLE,
    type: null,
    data: [],
    featured: false,
  },
};
export const marketplaceReducer = (
  state = initialState,
  action: MarketplaceAction
) => {
  switch (action.type) {
    case MARKETPLACE_GET_LIST_LOADING:
      return {
        ...state,
        status: MARKETPLACE_GET_LIST_LOADING,
      };

    case MARKETPLACE_GET_LIST_SUCCESS:
      return {
        ...state,
        status: MARKETPLACE_GET_LIST_SUCCESS,
        data: { ...state.data, ...action.payload },
      };

    case MARKETPLACE_GET_LIST_IDLE:
      return {
        ...state,
        status: MARKETPLACE_GET_LIST_IDLE,
      };

    case MARKETPLACE_GET_LIST_FAIL:
      return {
        ...state,
        status: MARKETPLACE_GET_LIST_FAIL,
        error: action.payload,
      };

    case MARKETPLACE_GET_LIST_FOR_MAP_LOADING:
      return {
        ...state,
        status: MARKETPLACE_GET_LIST_FOR_MAP_LOADING,
      };

    case MARKETPLACE_GET_LIST_FOR_MAP_SUCCESS:
      return {
        ...state,
        status: MARKETPLACE_GET_LIST_FOR_MAP_SUCCESS,
        ...{
          map: _.merge(state.map, {
            artists: action.payload.artists,
            wxlls: action.payload.wxlls,
            coordinates: [],
          }),
        },
      };

    case MARKETPLACE_GET_LIST_FOR_MAP_IDLE:
      return {
        ...state,
        status: MARKETPLACE_GET_LIST_FOR_MAP_IDLE,
      };

    case MARKETPLACE_GET_LIST_FOR_MAP_FAIL:
      return {
        ...state,
        status: MARKETPLACE_GET_LIST_FOR_MAP_FAIL,
        error: action.payload,
      };

    case MARKETPLACE_GET_MARKER_DETAILS_LOADING:
      return {
        ...state,
        status: MARKETPLACE_GET_MARKER_DETAILS_LOADING,
      };

    case MARKETPLACE_GET_MARKER_DETAILS_SUCCESS:
      return {
        ...state,
        status: MARKETPLACE_GET_MARKER_DETAILS_SUCCESS,
        map: {
          ...state.map,
          coordinates: {
            artists: action.payload.artists,
            walls: action.payload.walls,
          },
        },
      };

    case MARKETPLACE_GET_MARKER_DETAILS_FAIL:
      return {
        ...state,
        status: MARKETPLACE_GET_MARKER_DETAILS_FAIL,
        error: action.payload,
      };

    case MARKETPLACE_GET_REGISTERED_STATES_LOADING:
      return {
        ...state,
        status: MARKETPLACE_GET_REGISTERED_STATES_LOADING,
      };

    case MARKETPLACE_GET_REGISTERED_STATES_SUCCESS:
      return {
        ...state,
        status: MARKETPLACE_GET_REGISTERED_STATES_SUCCESS,
        filters: {
          ...state.filters,
          states: action.payload,
        },
      };

    case MARKETPLACE_GET_REGISTERED_STATES_IDLE:
      return {
        ...state,
        status: MARKETPLACE_GET_REGISTERED_STATES_IDLE,
      };

    case MARKETPLACE_GET_REGISTERED_STATES_FAIL:
      return {
        ...state,
        status: MARKETPLACE_GET_REGISTERED_STATES_FAIL,
        error: action.payload,
      };

    case MARKETPLACE_ARTIST_UPDATE_FILTER_AVAILABILITY:
      return {
        ...state,
        status: MARKETPLACE_GET_LIST_IDLE,
        ...{
          filters: _.merge(state.filters, {
            artist: {
              is_ready: action.payload,
            },
          }),
        },
      };

    case MARKETPLACE_ARTIST_UPDATE_FILTER_VERIFICATION_STATUS:
      return {
        ...state,
        status: MARKETPLACE_GET_LIST_IDLE,
        ...{
          filters: _.merge(state.filters, {
            artist: {
              is_verified: action.payload,
            },
          }),
        },
      };

    case MARKETPLACE_ARTIST_UPDATE_FILTER_RISING_TALENT_STATUS:
      return {
        ...state,
        status: MARKETPLACE_GET_LIST_IDLE,
        ...{
          filters: _.merge(state.filters, {
            artist: {
              is_rising_talent: action.payload,
            },
          }),
        },
      };

    case MARKETPLACE_WALL_UPDATE_FILTER_CONDITION:
      return {
        ...state,
        status: MARKETPLACE_GET_LIST_IDLE,
        ...{
          filters: _.merge(state.filters, {
            wall: {
              condition: action.payload,
            },
          }),
        },
      };

    case MARKETPLACE_WALL_UPDATE_FILTER_CONSTRUCTION:
      return {
        ...state,
        status: MARKETPLACE_GET_LIST_IDLE,
        ...{
          filters: _.merge(state.filters, {
            wall: {
              construction: action.payload,
            },
          }),
        },
      };

    case MARKETPLACE_GET_ARTIST_CARD_DETAILS_IDLE:
      return {
        ...state,
        artistCard: {
          ...state.artistCard,
          status: MARKETPLACE_GET_ARTIST_CARD_DETAILS_IDLE,
          type: action.payload.type,
        },
        filters: {
          ...state.filters,
        },
      };

    case MARKETPLACE_GET_ARTIST_CARD_DETAILS_LOADING:
      return {
        ...state,
        artistCard: {
          ...state.artistCard,
          status: MARKETPLACE_GET_ARTIST_CARD_DETAILS_LOADING,
        },
      };

    case MARKETPLACE_GET_ARTIST_CARD_DETAILS_SUCCESS:
      return {
        ...state,
        artistCard: {
          ...state.artistCard,
          status: MARKETPLACE_GET_ARTIST_CARD_DETAILS_SUCCESS,
          data: action.payload.data,
          featured: action.payload.featured,
        },
      };

    default:
      return state;
  }
};

export const selectArtists = (state: any): any[] => {
  return state.marketplace.data.artists;
};

export const selectMarkerCoordinates = (state: any): any[] => {
  return state.marketplace.map.coordinates;
};

export const selectArtistMarkers = (state: any): any[] => {
  return state.marketplace.map.coordinates.artists;
};

export const selectWxllMarkers = (state: any): any[] => {
  return state.marketplace.map.coordinates.walls;
};

export const selectArtistFilters = (state: any): any => {
  return state.marketplace.filters.artist;
};

export const selectWallFilters = (state: any): any[] => {
  return state.marketplace.filters.wall;
};

export const selectCitiesFilters = (state: any): any[] => {
  return state.marketplace.filters.states;
};

export const selectWxlls = (state: any): any[] => {
  return state.marketplace.data.wxlls;
};

export const requestStatus = (state: any): any[] => {
  return state.marketplace.status;
};

export const selectStatesFilters = (state: any): USAState[] => {
  return state.marketplace.filters.states;
};

export const getArtistsCards = (state: any): any[] => {
  return state.marketplace.artistCard.data;
};

export const getFeaturedCards = (state: any): any[] => {
  return state.marketplace.artistCard.featured;
};

export const getMarketplaceArtistCardStatus = (state: any): string => {
  return state.marketplace.artistCard.status;
};

export const getIsFeatured = (state: any): any[] => {
  return state.marketplace.artistCard.featured;
};
