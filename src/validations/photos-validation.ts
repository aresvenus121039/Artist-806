import * as Yup from 'yup';
import { AddressTest } from './validate-address';

function photoBoolean(arr: Array<Object | File>) {
  return (
    Array.isArray(arr) &&
    arr[0] != undefined &&
    arr.length === 1 &&
    (Object.keys(arr[0]).length > 0 || arr[0] instanceof File)
  );
}

export const validationObject = {
  photo: Yup.mixed()
    .nullable()
    .test('required-values', 'Title or Address is missing', function (value) {
      const { title, address } = this.parent;
      const valueHelper = Array.isArray(value) ? value : [value];

      if (photoBoolean(valueHelper)) {
        if (!title && !address) {
          return this.createError({
            message: 'Title and Address are missing',
          });
        }
        if (!title) {
          return this.createError({ message: 'Title is missing' });
        }
        if (!address) {
          return this.createError({ message: 'Address is missing' });
        }
      }

      return true;
    }),
  title: Yup.string()
    .nullable()
    .test('required-values', 'Photo and Address are missing', function (value) {
      const { photo, address } = this.parent;
      const valueHelper = Array.isArray(photo) ? photo : [photo];

      if (value) {
        if (!photoBoolean(valueHelper) && !address) {
          return this.createError({ message: 'Photo and Address are missing' });
        }
        if (!photoBoolean(valueHelper)) {
          return this.createError({ message: 'Photo is missing' });
        }
        if (!address) {
          return this.createError({ message: 'Address is missing' });
        }
      }

      return true;
    }),
  address: Yup.string()
    .nullable()
    .test('is-valid-address', 'Invalid address format.', AddressTest)
    .test('required-values', 'Photo and Title are missing', function (value) {
      const { title, photo } = this.parent;
      const valueHelper = Array.isArray(photo) ? photo : [photo];

      if (value) {
        if (!photoBoolean(valueHelper) && !title) {
          return this.createError({ message: 'Photo and Title are missing' });
        }
        if (!photoBoolean(valueHelper)) {
          return this.createError({ message: 'Photo is missing' });
        }
        if (!title) {
          return this.createError({ message: 'Title is missing' });
        }
      }

      return true;
    }),
};
