import axios, { AxiosResponse } from 'axios';
import { get, isObject, isString } from 'lodash';
import { serialize } from 'object-to-formdata';
import { getFullAddress } from '@/utility';
import {
  ARTIST_GET_DETAILS_FAIL,
  ARTIST_GET_DETAILS_SUCCESS,
  ARTIST_GET_DETAILS_LOADING,
  ARTIST_SUBMIT_INFO_FAIL,
  ARTIST_SUBMIT_INFO_LOADING,
  ARTIST_SUBMIT_INFO_SUCCESS,
  ARTIST_GET_OTHERS_SUCCESS,
} from '@/constants/artistConstants';

interface Address {
  street_address: string;
  city: string;
  zipcode: string;
  state: string;
  country: string;
}

interface ArtistInfo {
  address: string;
  [key: string]: any;
}

interface GeocodeData {
  features: {
    center: any;
    context: any;
  }[];
}

interface ArtistDetails {
  type: string;
  payload: any;
}

export const geocodeArtistLocation = async (
  address: Address | string
): Promise<GeocodeData> => {
  const fullAddress = isObject(address)
    ? encodeURIComponent(getFullAddress(address))
    : encodeURIComponent(address);

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      access_token: process.env.NEXT_PUBLIC_REACT_APP_MAPBOX_ACCESS_TOKEN,
    },
  };

  const { data } = await axios.get<GeocodeData>(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${fullAddress}.json`,
    config
  );

  return data;
};

export const getArtistDetails =
  (name: string): any =>
  async (dispatch: (action: ArtistDetails) => void) => {
    try {
      dispatch({
        type: ARTIST_GET_DETAILS_LOADING,
        payload: name,
      });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.get<{ data: any }>(
        `/api/artists/${name}`,
        config
      );

      console.log({ data });

      const res = await geocodeArtistLocation(data.data.address);

      console.log({ res });

      const payload = {
        ...data.data,
        ...{
          address: {
            ...data.data.address,
            ...{ longAndLat: get(res, 'features[0].center') },
          },
        },
      };

      dispatch({
        type: ARTIST_GET_DETAILS_SUCCESS,
        payload,
      });
    } catch (error: any) {
      console.log({ error }, 'artist failed');
      dispatch({
        type: ARTIST_GET_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getArtists =
  (type: string): any =>
  async (dispatch: (action: ArtistDetails) => void) => {
    try {
      const { data } = await axios.get<{ data: any; users: any }>(
        `/api/users/artists?art_type=${type}`
      );

      const payload = data.users;

      dispatch({
        type: ARTIST_GET_OTHERS_SUCCESS,
        payload,
      });
    } catch (error: any) {
      console.log({ error }, 'artist failed');
      dispatch({
        type: ARTIST_GET_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const submitArtistInfo =
  (
    artistInfo: ArtistInfo,
    callback?: (success: boolean, data: any) => void
  ): any =>
  async (dispatch: (action: ArtistDetails) => void) => {
    try {
      dispatch({
        type: ARTIST_SUBMIT_INFO_LOADING,
        payload: undefined,
      });

      const api_address = artistInfo.address;
      const address = artistInfo.address.split(',');
      const artistLocation = await geocodeArtistLocation(artistInfo.address);
      const geocodingAddress = get(
        artistLocation,
        'features[0].context'
      ).reduce((total: any, current: any) => {
        return {
          ...total,
          [current.id.split('.')[0]]: current.text,
        };
      }, {});
      const formData = serialize(
        {
          ...artistInfo,
          address: {
            street_address: address[0].trim(),
            city: geocodingAddress.place,
            zipcode: geocodingAddress.postcode,
            state: geocodingAddress.region,
            country: 'United States',
            api_address,
          },
          location: {
            type: 'Point',
            coordinates: get(artistLocation, 'features[0].center'),
          },
        },
        { indices: false, allowEmptyArrays: true }
      );

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          authorization:
            'Bearer ' +
            JSON.parse(localStorage.getItem('userInfo') || '{}')?.token,
        },
      };

      const { data } = await axios.put(`/api/users/profile`, formData, config);

      dispatch({
        type: ARTIST_SUBMIT_INFO_SUCCESS,
        payload: data,
      });

      if (callback) {
        callback(true, data);
      }

      // Update user info on local storage
      const userInfo = localStorage.getItem('userInfo');
      if (userInfo && isString(userInfo)) {
        const userInfoJson = JSON.parse(userInfo);
        const userInfoMerge = { ...userInfoJson, ...data };
        localStorage.setItem('userInfo', JSON.stringify(userInfoMerge));
      } else {
        localStorage.setItem('userInfo', JSON.stringify(data));
      }
    } catch (error: any) {
      dispatch({
        type: ARTIST_SUBMIT_INFO_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
