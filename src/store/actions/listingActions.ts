import axios from 'axios';
import _ from 'lodash';
import { serialize } from 'object-to-formdata';
import { isObject } from 'lodash';

import {
  SUBMIT_LISTING_REQUEST,
  SUBMIT_LISTING_SUCCESS,
  SUBMIT_LISTING_ERROR,
  WALL_GET_DETAILS_FAIL,
  WALL_GET_DETAILS_SUCCESS,
  WALL_GET_DETAILS_LOADING,
} from '@/constants/listingConstants';
import { getFullAddress } from '@/utility';
import { AppDispatch } from '..';

interface Address {
  street_address: string;
  city: string;
  zipcode: string;
  state: string;
  country: string;
}

interface ListingDetails {
  address: string;
  images: any[];
  // Add other properties of listingDetails here
}

interface WallLocation {
  features: any[];
}

interface SerializedData {
  type: string;
  coordinates: any[];
}

const geocodeLocation = async (address: string | Address) => {
  const fullAddress = isObject(address)
    ? encodeURIComponent(getFullAddress(address as Address))
    : encodeURIComponent(address as string);

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      access_token: process.env.NEXT_PUBLIC_REACT_APP_MAPBOX_ACCESS_TOKEN,
    },
  };

  const { data } = await axios.get<WallLocation>(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${fullAddress}.json`,
    config
  );
  return data;
};

export const getListing =
  (slug: string): any =>
  async (dispatch: any) => {
    try {
      dispatch({
        type: WALL_GET_DETAILS_LOADING,
      });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.get(`/api/listings/${slug}`, config);

      localStorage.setItem('listingDetails', JSON.stringify(data));

      dispatch({
        type: WALL_GET_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: WALL_GET_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const submitListing =
  (
    listingDetails: ListingDetails,
    callback: (success: boolean, slug?: string) => void
  ): any =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: SUBMIT_LISTING_REQUEST,
      });

      const api_address = listingDetails.address;
      const address = listingDetails.address.split(',');
      const wallLocation = await geocodeLocation(listingDetails.address);
      const geocodingAddress = _.get(
        wallLocation,
        'features[0].context'
      ).reduce((total: any, current: { id: string; text: any }) => {
        return {
          ...total,
          [current.id.split('.')[0]]: current.text,
        };
      }, {});
      const { images, ...restDetails } = listingDetails; // This line is updated
      const formData = serialize(
        {
          ...restDetails,
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
            coordinates: _.get(wallLocation, 'features[0].center'),
          },
        } as unknown as SerializedData,
        { indices: false, allowEmptyArrays: true }
      );

      for (let i = 0; i < images.length; i++) {
        formData.append('images', images[i]);
      }

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          authorization:
            'Bearer ' +
            JSON.parse(localStorage.getItem('userInfo') || '{}')?.token,
        },
      };

      const { data } = await axios.post(`/api/listings`, formData, config);

      dispatch({
        type: SUBMIT_LISTING_SUCCESS,
        payload: data,
      });

      callback(true, data.slug);
    } catch (error: any) {
      dispatch({
        type: SUBMIT_LISTING_ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      callback(false);
    }
  };
