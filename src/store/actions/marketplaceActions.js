import axios from 'axios';
import USAStates from '@/utility/usa-states.json';
import {
  MARKETPLACE_GET_MARKER_DETAILS_LOADING,
  MARKETPLACE_GET_MARKER_DETAILS_SUCCESS,
  MARKETPLACE_GET_MARKER_DETAILS_FAIL,
  MARKETPLACE_ARTIST_UPDATE_FILTER_AVAILABILITY,
  MARKETPLACE_ARTIST_UPDATE_FILTER_VERIFICATION_STATUS,
  MARKETPLACE_ARTIST_UPDATE_FILTER_RISING_TALENT_STATUS,
  MARKETPLACE_GET_REGISTERED_STATES_LOADING,
  MARKETPLACE_GET_REGISTERED_STATES_SUCCESS,
  MARKETPLACE_GET_REGISTERED_STATES_FAIL,
  MARKETPLACE_WALL_UPDATE_FILTER_CONDITION,
  MARKETPLACE_WALL_UPDATE_FILTER_CONSTRUCTION,
  MARKETPLACE_GET_ARTIST_CARD_DETAILS_LOADING,
  MARKETPLACE_GET_ARTIST_CARD_DETAILS_SUCCESS,
  MARKETPLACE_GET_ARTIST_CARD_DETAILS_FAIL,
} from '@/constants/marketplaceConstants';

export const getFeatured = (type) => async (dispatch) => {
  try {
    dispatch({ type: MARKETPLACE_GET_ARTIST_CARD_DETAILS_LOADING });
    const config = { headers: { 'Content-Type': 'application/json' } };
    const { data } = await axios.get(
      `/api/marketplaces/featured/${type}`,
      config
    );
    dispatch({
      type: MARKETPLACE_GET_ARTIST_CARD_DETAILS_SUCCESS,
      payload: {
        type,
        data: [...data],
        featured: true,
      },
    });
  } catch (error) {
    dispatch({
      type: MARKETPLACE_GET_ARTIST_CARD_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getMarkersDetail = () => async (dispatch) => {
  try {
    dispatch({
      type: MARKETPLACE_GET_MARKER_DETAILS_LOADING,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(`/api/marketplaces/markers`, config);

    const payload = { ...data };

    dispatch({
      type: MARKETPLACE_GET_MARKER_DETAILS_SUCCESS,
      payload,
    });
  } catch (error) {
    dispatch({
      type: MARKETPLACE_GET_MARKER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getRegisteredStates = () => async (dispatch) => {
  try {
    dispatch({
      type: MARKETPLACE_GET_REGISTERED_STATES_LOADING,
    });

    const data = USAStates.map((state) => state.name);
    const payload = data;

    dispatch({
      type: MARKETPLACE_GET_REGISTERED_STATES_SUCCESS,
      payload,
    });

    return payload;
  } catch (error) {
    dispatch({
      type: MARKETPLACE_GET_REGISTERED_STATES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getArtistCardsDetails =
  ({ ids, type, filters }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: MARKETPLACE_GET_ARTIST_CARD_DETAILS_LOADING,
      });

      let query = '';
      if (filters) {
        const filterKeys = Object.keys(filters);
        query = filterKeys.reduce((q, current) => {
          return q + current + '=' + filters[current] + '&';
        }, '');
      }

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.get(
        `/api/marketplaces/listings/${type}/${ids}?${query}`,
        config
      );

      dispatch({
        type: MARKETPLACE_GET_ARTIST_CARD_DETAILS_SUCCESS,
        payload: {
          ...data,
          featured: false,
        },
      });
    } catch (error) {
      dispatch({
        type: MARKETPLACE_GET_ARTIST_CARD_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const updateArtistAvailabilityFilter = (status, callback) => {
  callback();
  return {
    type: MARKETPLACE_ARTIST_UPDATE_FILTER_AVAILABILITY,
    payload: status,
  };
};

export const updateArtistVerificationStatusFilter = (status, callback) => {
  if (callback) {
    callback();
  }

  return {
    type: MARKETPLACE_ARTIST_UPDATE_FILTER_VERIFICATION_STATUS,
    payload: status,
  };
};

export const updateArtistRisingTalentFilter = (status, callback) => {
  if (callback) {
    callback();
  }

  return {
    type: MARKETPLACE_ARTIST_UPDATE_FILTER_RISING_TALENT_STATUS,
    payload: status,
  };
};

export const updateWallConditionFilter = (status, callback) => {
  if (callback) {
    callback();
  }

  return {
    type: MARKETPLACE_WALL_UPDATE_FILTER_CONDITION,
    payload: status,
  };
};

export const updateWallConstructionFilter = (status, callback) => {
  if (callback) {
    callback();
  }

  return {
    type: MARKETPLACE_WALL_UPDATE_FILTER_CONSTRUCTION,
    payload: status,
  };
};
